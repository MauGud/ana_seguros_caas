// Página individual de tema
class TemaPage {
    constructor() {
        this.temaId = this.obtenerIdTema();
        this.tema = null;
        this.init();
    }

    obtenerIdTema() {
        const path = window.location.pathname;
        const match = path.match(/\/tema\/(.+)/);
        return match ? match[1] : null;
    }

    async init() {
        if (!this.temaId) {
            this.mostrarError('Tema no encontrado');
            return;
        }

        // Mostrar loading mientras se carga
        this.mostrarLoading();
        
        await this.cargarTema();
        this.renderizarTema();
        this.configurarEventos();
    }

    async cargarTema() {
        try {
            console.log('Cargando tema con ID:', this.temaId);
            const response = await fetch(`/api/tema/${this.temaId}`);
            console.log('Respuesta del servidor:', response.status);
            
            if (!response.ok) {
                throw new Error('Tema no encontrado');
            }
            this.tema = await response.json();
            console.log('Tema cargado:', this.tema);
        } catch (error) {
            console.error('Error al cargar tema:', error);
            this.mostrarError('Error al cargar el tema. Por favor, verifica la URL.');
        }
    }

    renderizarTema() {
        console.log('Renderizando tema:', this.tema);
        
        if (!this.tema) {
            console.error('No hay tema para renderizar');
            this.mostrarError('No se pudo cargar la información del tema');
            return;
        }

        // Actualizar título de la página
        const pageTitle = document.getElementById('pageTitle');
        const temaTitulo = document.getElementById('temaTitulo');
        const temaTituloPrincipal = document.getElementById('temaTituloPrincipal');
        
        console.log('Actualizando títulos...');
        console.log('Título del tema:', this.tema.titulo);
        
        if (pageTitle) {
            pageTitle.textContent = `${this.tema.titulo} - Ana Seguros`;
            console.log('Título de página actualizado');
        }
        if (temaTitulo) {
            temaTitulo.textContent = this.tema.titulo;
            console.log('Título del tema actualizado');
        }
        if (temaTituloPrincipal) {
            temaTituloPrincipal.textContent = this.tema.titulo;
            console.log('Título principal del tema actualizado:', this.tema.titulo);
        }

        // Configurar video
        const videoContainer = document.querySelector('.video-container');
        console.log('Configurando video:', this.tema.video_url);
        if (videoContainer && this.tema.video_url) {
            // Si el video_url contiene HTML completo (como Loom), reemplazar todo el contenido
            if (this.tema.video_url.includes('<div') || this.tema.video_url.includes('<iframe')) {
                videoContainer.innerHTML = this.tema.video_url;
                console.log('Video HTML configurado');
            } else {
                // Si es solo una URL, usar el iframe existente
                const videoFrame = document.getElementById('videoFrame');
                if (videoFrame) {
                    videoFrame.src = this.tema.video_url;
                    videoFrame.style.display = 'block';
                    console.log('Video URL configurado');
                }
            }
        } else if (videoContainer) {
            videoContainer.style.display = 'none';
            console.log('Video oculto - no hay URL');
        }

        // Renderizar FAQs
        console.log('Renderizando FAQs...');
        this.renderizarFAQs();
    }

    renderizarFAQs() {
        const container = document.getElementById('faqsContainer');
        console.log('Contenedor de FAQs:', container);
        
        if (!container) {
            console.error('No se encontró el contenedor de FAQs');
            return;
        }
        
        console.log('FAQs del tema:', this.tema.faqs);
        
        if (!this.tema.faqs || this.tema.faqs.length === 0) {
            console.log('No hay FAQs, mostrando mensaje');
            container.innerHTML = '<p style="text-align: center; color: #666;">No hay preguntas frecuentes disponibles para este tema.</p>';
            return;
        }

        console.log('Renderizando', this.tema.faqs.length, 'FAQs');
        container.innerHTML = '';

        this.tema.faqs.forEach((faq, index) => {
            console.log('Creando FAQ', index, ':', faq.pregunta);
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';

            faqItem.innerHTML = `
                <div class="faq-pregunta" data-index="${index}">
                    ${faq.pregunta}
                </div>
                <div class="faq-respuesta" data-index="${index}">
                    ${faq.respuesta}
                </div>
            `;

            container.appendChild(faqItem);
        });
        
        // Auto-abrir la primera pregunta si es el tema "sube-volante"
        if (this.temaId === 'sube-volante') {
            setTimeout(() => {
                const primeraPregunta = document.querySelector('.faq-pregunta[data-index="0"]');
                if (primeraPregunta) {
                    this.toggleFAQ(primeraPregunta);
                }
            }, 100);
        }
        
        console.log('FAQs renderizadas correctamente');
    }

    configurarEventos() {
        // Eventos para FAQs (acordeón)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('faq-pregunta')) {
                this.toggleFAQ(e.target);
            }
        });

        // Eventos de teclado para accesibilidad
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.target.classList.contains('faq-pregunta')) {
                    e.preventDefault();
                    this.toggleFAQ(e.target);
                }
            }
        });
    }

    toggleFAQ(preguntaElement) {
        const index = preguntaElement.getAttribute('data-index');
        const respuestaElement = document.querySelector(`.faq-respuesta[data-index="${index}"]`);
        
        if (!respuestaElement) return;

        const isActive = respuestaElement.classList.contains('active');

        // Cerrar todas las FAQs
        document.querySelectorAll('.faq-respuesta').forEach(respuesta => {
            respuesta.classList.remove('active');
        });
        document.querySelectorAll('.faq-pregunta').forEach(pregunta => {
            pregunta.classList.remove('active');
        });

        // Abrir la FAQ seleccionada si no estaba activa
        if (!isActive) {
            respuestaElement.classList.add('active');
            preguntaElement.classList.add('active');
        }
    }

    mostrarLoading() {
        const temaTituloPrincipal = document.getElementById('temaTituloPrincipal');
        if (temaTituloPrincipal) {
            temaTituloPrincipal.textContent = 'Cargando...';
        }
        
        const container = document.querySelector('.tema-content');
        if (container) {
            // Solo mostrar loading en el contenedor de FAQs, no reemplazar todo
            const faqsContainer = document.getElementById('faqsContainer');
            if (faqsContainer) {
                faqsContainer.innerHTML = `
                    <div class="loading">
                        <div class="icono">⏳</div>
                        <h3>Cargando preguntas frecuentes...</h3>
                        <p>Por favor espera mientras cargamos el contenido</p>
                    </div>
                `;
            }
        }
    }

    mostrarError(mensaje) {
        const container = document.querySelector('.tema-content');
        if (container) {
            container.innerHTML = `
                <div class="tema-card" style="text-align: center;">
                    <div class="icono">⚠️</div>
                    <h3>Error</h3>
                    <p>${mensaje}</p>
                    <a href="/" class="btn mt-2">Volver al inicio</a>
                </div>
            `;
        }
    }
}

// Inicializar la página de tema
function inicializarTema() {
    console.log('Inicializando TemaPage...');
    new TemaPage();
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarTema);
} else {
    // DOM ya está cargado
    inicializarTema();
}
