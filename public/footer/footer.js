// Cargar footer en todas las páginas
function loadFooter() {
    console.log('Cargando footer...');
    fetch('/footer/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            console.log('HTML del footer cargado:', html.substring(0, 100));
            // Crear contenedor del footer
            const footerContainer = document.createElement('div');
            footerContainer.id = 'footer-container';
            footerContainer.innerHTML = html;
            
            // Agregar al final del body
            document.body.appendChild(footerContainer);
            console.log('Footer agregado al DOM');
            
            // Cargar CSS del footer
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/footer/footer.css?v=8';
            document.head.appendChild(link);
            console.log('CSS del footer cargado');
        })
        .catch(error => {
            console.error('Error al cargar footer:', error);
        });
}

// Cargar footer cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando carga del footer');
    loadFooter();
});

// También intentar cargar inmediatamente si el DOM ya está listo
if (document.readyState === 'loading') {
    console.log('DOM aún cargando, esperando...');
} else {
    console.log('DOM ya listo, cargando footer inmediatamente');
    loadFooter();
}