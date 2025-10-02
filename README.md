# Centro de Ayuda - Ana Seguros

## 📋 Descripción del Proyecto

Centro de Ayuda web para Ana Seguros, diseñado como un micrositio accesible desde `ayuda.anaseguros.nexcar`. El sistema replica exactamente la experiencia visual del sistema actual de Ana Seguros, proporcionando una guía paso a paso para los usuarios en su proceso de seguro.

## 🎨 Identidad Visual

### Colores Institucionales
- **Color primario**: `#C2002F` (rojo institucional Ana Seguros)
- **Colores secundarios**: 
  - Gris claro: `#F5F5F5` (fondos)
  - Gris medio: `#EDEDED` (separadores)
  - Gris borde: `#D3D3D3` (bordes)

### Tipografía
- **Fuente principal**: Roboto, Helvetica Neue, Arial (sans-serif)
- **Estilo**: Limpia, moderna, texto en mayúsculas suaves
- **Pesos**: 300, 400, 500, 600, 700

### Elementos de Diseño
- **Botones**: Redondeados, color plano, sin sombras
- **Cards**: Caja blanca, bordes redondeados, borde punteado gris
- **Inputs**: Bordes suaves, texto centrado/justificado
- **Validación**: Check verde (✔) para confirmaciones

## 🏗️ Estructura del Proyecto

```
caas/
├── package.json          # Dependencias del proyecto
├── server.js             # Servidor Express (backend)
├── public/               # Archivos estáticos (frontend)
│   ├── index.html        # Página principal
│   ├── tema.html         # Página individual de tema
│   ├── css/
│   │   └── styles.css    # Estilos principales
│   └── js/
│       ├── app.js        # Lógica de la página principal
│       └── tema.js       # Lógica de páginas de tema
└── README.md             # Documentación
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en producción
npm start
```

### Acceso
- **URL local**: http://localhost:3000
- **URL de producción**: Configurar según el hosting

## 📱 Funcionalidades

### Página Principal (Landing)
- **Título**: "Centro de Ayuda - Ana Seguros"
- **Layout**: Grid responsivo de 2 columnas (desktop) / 1 columna (mobile)
- **10 secciones visuales** con iconos contextuales:
  1. Acepta términos y condiciones
  2. Sube tu factura o tarjeta de circulación
  3. Sube tu ID y tu CURP
  4. Sube volante de pago
  5. Sube CSF / domicilio / carátula de cuenta
  6. Video de siniestro cancelado
  7. Video siniestro devuelto
  8. Video siniestro rechazado
  9. Video siniestro aprobado
  10. Cómo cobrar tu pago de daños

### Páginas de Tema Individual
- **Header**: Título del tema en color institucional
- **Video**: Reproductor embebido (YouTube/Vimeo)
- **FAQs**: Sección de preguntas frecuentes con acordeón
- **Navegación**: Botón "Volver al inicio"

### Características Técnicas
- **100% Responsivo**: Adaptable a todos los dispositivos
- **SPA**: Navegación sin recarga completa
- **Rutas**: `/tema/nombre-del-tema`
- **API REST**: Backend con endpoints JSON
- **Accesibilidad**: Navegación por teclado, ARIA labels

## 🔧 API Endpoints

### GET /api/temas
Obtiene la lista completa de temas disponibles.

**Respuesta:**
```json
[
  {
    "id": "sube-factura",
    "titulo": "Sube tu factura o tarjeta de circulación",
    "video_url": "https://www.youtube.com/embed/...",
    "faqs": [...]
  }
]
```

### GET /api/tema/:id
Obtiene un tema específico por su ID.

**Respuesta:**
```json
{
  "id": "sube-factura",
  "titulo": "Sube tu factura o tarjeta de circulación",
  "video_url": "https://www.youtube.com/embed/...",
  "faqs": [
    {
      "pregunta": "¿Qué formato de archivo se acepta?",
      "respuesta": "Aceptamos archivos JPG, PNG y PDF con un tamaño máximo de 5MB."
    }
  ]
}
```

## 📊 Estructura de Datos

### Tema
```json
{
  "id": "string",           // Identificador único
  "titulo": "string",        // Título del tema
  "video_url": "string",     // URL del video (YouTube/Vimeo)
  "faqs": [                  // Array de preguntas frecuentes
    {
      "pregunta": "string",
      "respuesta": "string"
    }
  ]
}
```

## 🎯 Flujo de Usuario

1. **Acceso**: Usuario visita la URL del centro de ayuda
2. **Exploración**: Ve la lista de 10 temas en grid responsivo
3. **Selección**: Hace clic en un tema de interés
4. **Visualización**: Ve el video tutorial y FAQs del tema
5. **Navegación**: Puede volver al inicio o explorar otros temas

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px (Grid de 2 columnas)
- **Tablet**: 768px (Grid de 1 columna)
- **Mobile**: < 480px (Layout optimizado)

### Adaptaciones
- Grid de temas se convierte en lista vertical
- Videos se ajustan a la pantalla
- Texto y botones se escalan apropiadamente
- Navegación táctil optimizada

## 🔒 Consideraciones de Seguridad

- Validación de entrada en el backend
- Sanitización de URLs de video
- Headers de seguridad básicos
- CORS configurado apropiadamente

## 🚀 Despliegue

### Preparación para Producción
1. Configurar variables de entorno
2. Optimizar archivos estáticos
3. Configurar dominio `ayuda.anaseguros.nexcar`
4. Implementar HTTPS
5. Configurar CDN si es necesario

### Hosting Recomendado
- **Vercel**: Para despliegue fácil y rápido
- **Netlify**: Para sitios estáticos
- **Heroku**: Para aplicaciones con backend
- **AWS S3 + CloudFront**: Para soluciones empresariales

## 📈 Próximas Mejoras

- [ ] Sistema de búsqueda de temas
- [ ] Analytics y métricas de uso
- [ ] Sistema de administración de contenido
- [ ] Integración con CRM de Ana Seguros
- [ ] Soporte para múltiples idiomas
- [ ] Chat en vivo integrado

## 👥 Soporte

Para soporte técnico o modificaciones, contactar al equipo de desarrollo de Ana Seguros.

---

**Desarrollado para Ana Seguros**  
*Centro de Ayuda - Versión 1.0*
