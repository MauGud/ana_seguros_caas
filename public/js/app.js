// Aplicación principal del Centro de Ayuda
class CentroAyuda {
    constructor() {
        this.temas = [];
        this.init();
    }

    async init() {
        await this.cargarTemas();
        this.renderizarTemas();
        this.configurarEventos();
    }

    async cargarTemas() {
        try {
            const response = await fetch('/api/temas');
            this.temas = await response.json();
        } catch (error) {
            console.error('Error al cargar temas:', error);
            this.mostrarError('Error al cargar los temas. Por favor, recarga la página.');
        }
    }

    renderizarTemas() {
        const grid = document.getElementById('temasGrid');
        if (!grid) return;

        grid.innerHTML = '';

        // Separar temas por categoría
        const temasProceso = this.temas.filter(tema => !tema.categoria || tema.categoria !== 'status-pago');
        const temasStatus = this.temas.filter(tema => tema.categoria === 'status-pago');

        // Renderizar sección de proceso principal
        this.renderizarSeccion('Proceso Principal', temasProceso, grid);

        // Renderizar sección de status de pago
        this.renderizarSeccion('Status de tu Pago', temasStatus, grid);
    }

    renderizarSeccion(titulo, temas, container) {
        // Crear contenedor de sección
        const seccion = document.createElement('div');
        seccion.className = 'seccion-temas';

        // Título de la sección
        const tituloSeccion = document.createElement('h2');
        tituloSeccion.className = 'titulo-seccion';
        tituloSeccion.textContent = titulo;
        seccion.appendChild(tituloSeccion);

        // Grid de temas para esta sección
        const gridSeccion = document.createElement('div');
        gridSeccion.className = 'temas-grid-seccion';

        temas.forEach(tema => {
            const card = this.crearCardTema(tema);
            gridSeccion.appendChild(card);
        });

        seccion.appendChild(gridSeccion);
        container.appendChild(seccion);
    }

    crearCardTema(tema) {
        const card = document.createElement('div');
        card.className = 'tema-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver tema: ${tema.titulo}`);
        
        // Manejo de eventos táctiles y de teclado
        card.addEventListener('click', () => this.navegarATema(tema.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.navegarATema(tema.id);
            }
        });

        // Iconos específicos para cada tema
        const iconos = {
            'prepara-documentos': '📁',
            'acepta-terminos': '📋',
            'sube-factura': '📄',
            'sube-id': '🆔',
            'sube-curp': '📋',
            'sube-volante': '💰',
            'sube-csf': '📊',
            'sube-domicilio-caratula': '🏠',
            'acta-constitutiva': '📜',
            'siniestro-cancelado': '❌',
            'siniestro-devuelto': '↩️',
            'siniestro-aprobado': '✅',
            'como-cobrar-pago': '💳'
        };

        const icono = iconos[tema.id] || '📝';

        card.innerHTML = `
            <div class="card-content">
                <div class="icono" aria-hidden="true">${icono}</div>
                <h3>${tema.titulo}</h3>
                <p>Haz clic para ver el video tutorial y preguntas frecuentes</p>
            </div>
        `;

        return card;
    }

    navegarATema(temaId) {
        window.location.href = `/tema/${temaId}`;
    }

    configurarEventos() {
        // Eventos adicionales si son necesarios
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Funcionalidad adicional si se necesita
            }
        });
    }

    mostrarError(mensaje) {
        const grid = document.getElementById('temasGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="tema-card" style="grid-column: 1 / -1; text-align: center;">
                    <div class="icono">⚠️</div>
                    <h3>Error</h3>
                    <p>${mensaje}</p>
                </div>
            `;
        }
    }
}

// Detectar dispositivo y aplicar optimizaciones específicas
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);

if (isIOS) {
    document.body.classList.add('ios-device');
    
    // Mejorar scroll en iOS
    document.addEventListener('touchmove', function(e) {
        if (e.target.closest('.temas-grid')) {
            e.stopPropagation();
        }
    }, { passive: true });
}

if (isAndroid) {
    document.body.classList.add('android-device');
    
    // Mejorar rendimiento en Android
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.transform = 'translateZ(0)';
    });
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CentroAyuda();
});
