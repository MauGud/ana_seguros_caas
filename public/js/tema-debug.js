// Versión de debug del JavaScript de tema
console.log('Script tema-debug.js cargado');

// Función simple para cargar y mostrar tema
async function cargarTema() {
    console.log('Iniciando carga de tema...');
    
    // Obtener ID del tema de la URL
    const path = window.location.pathname;
    const match = path.match(/\/tema\/(.+)/);
    const temaId = match ? match[1] : null;
    
    console.log('ID del tema:', temaId);
    
    if (!temaId) {
        console.error('No se encontró ID del tema en la URL');
        return;
    }
    
    try {
        // Cargar datos del tema
        console.log('Cargando datos del tema...');
        const response = await fetch(`/api/tema/${temaId}`);
        console.log('Respuesta:', response.status);
        
        if (!response.ok) {
            throw new Error('Error al cargar tema');
        }
        
        const tema = await response.json();
        console.log('Tema cargado:', tema);
        
        // Actualizar título
        const temaTitulo = document.getElementById('temaTitulo');
        if (temaTitulo) {
            temaTitulo.textContent = tema.titulo;
            console.log('Título actualizado:', tema.titulo);
        }
        
        // Configurar video
        const videoFrame = document.getElementById('videoFrame');
        if (videoFrame && tema.video_url) {
            videoFrame.src = tema.video_url;
            videoFrame.style.display = 'block';
            console.log('Video configurado:', tema.video_url);
        }
        
        // Renderizar FAQs
        const faqsContainer = document.getElementById('faqsContainer');
        if (faqsContainer) {
            console.log('Renderizando FAQs...');
            faqsContainer.innerHTML = '';
            
            if (tema.faqs && tema.faqs.length > 0) {
                tema.faqs.forEach((faq, index) => {
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
                    faqsContainer.appendChild(faqItem);
                });
                console.log('FAQs renderizadas:', tema.faqs.length);
            } else {
                faqsContainer.innerHTML = '<p style="text-align: center; color: #666;">No hay preguntas frecuentes disponibles.</p>';
                console.log('No hay FAQs disponibles');
            }
        }
        
        console.log('Tema cargado y renderizado correctamente');
        
    } catch (error) {
        console.error('Error al cargar tema:', error);
        
        // Mostrar error en la página
        const temaContent = document.querySelector('.tema-content');
        if (temaContent) {
            temaContent.innerHTML = `
                <div style="text-align: center; padding: 2rem; background: white; border-radius: 12px;">
                    <h3 style="color: #C2002F;">Error al cargar el tema</h3>
                    <p>No se pudo cargar la información del tema. Por favor, verifica la URL.</p>
                    <a href="/" style="background: #C2002F; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Volver al inicio</a>
                </div>
            `;
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarTema);
} else {
    cargarTema();
}

// También configurar eventos para FAQs
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('faq-pregunta')) {
        const index = e.target.getAttribute('data-index');
        const respuesta = document.querySelector(`.faq-respuesta[data-index="${index}"]`);
        
        if (respuesta) {
            // Cerrar todas las FAQs
            document.querySelectorAll('.faq-respuesta').forEach(r => r.classList.remove('active'));
            document.querySelectorAll('.faq-pregunta').forEach(p => p.classList.remove('active'));
            
            // Abrir la seleccionada
            respuesta.classList.add('active');
            e.target.classList.add('active');
        }
    }
});
