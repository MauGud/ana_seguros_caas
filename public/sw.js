// Service Worker para Centro de Ayuda ANA Seguros
const CACHE_NAME = 'ana-centro-ayuda-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/app.js',
  '/images/logopng.png',
  '/images/helper-VP.png',
  '/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - devolver respuesta desde cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
