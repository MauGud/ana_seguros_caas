const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Datos de temas del centro de ayuda
const temas = {
  "acepta-terminos": {
    "id": "acepta-terminos",
    "titulo": "Acepta términos y condiciones",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué son los Términos y Condiciones de ANA Seguros?",
        "respuesta": "Son las reglas que establecen cómo puedes usar las aplicaciones, servicios y medios electrónicos (teléfono, internet, computadora o celular) de ANA Seguros para gestionar tus pólizas, pagos y servicios."
      },
      {
        "pregunta": "¿Qué operaciones puedo realizar en este portal?",
        "respuesta": "• Reportar y dar seguimiento a siniestros."
      },
      {
        "pregunta": "¿Cómo me identifico como usuario?",
        "respuesta": "Necesitas tu número de póliza y una contraseña personal. En algunos casos, se usan medidas adicionales como tokens o contraseñas dinámicas. Esto sustituye a tu firma autógrafa, es decir, tiene la misma validez legal."
      },
      {
        "pregunta": "¿Qué compromisos tengo como usuario?",
        "respuesta": "• Usar las aplicaciones de buena fe.\n• No modificar, copiar ni dañar los sistemas.\n• No introducir virus ni programas que afecten los servicios.\n• Proporcionar siempre datos verídicos."
      },
      {
        "pregunta": "¿Qué tipo de comprobantes recibo después de hacer una operación?",
        "respuesta": "ANA Seguros te enviará a tu correo electrónico o teléfono:\n• Carátula de póliza.\n• Recibos de pago.\n• Endosos o comprobantes de trámite."
      },
      {
        "pregunta": "¿Qué pasa si un usuario intenta dañar el sistema?",
        "respuesta": "ANA Seguros puede tomar acciones legales (civiles o penales) y negar el acceso a las aplicaciones."
      },
      {
        "pregunta": "¿Qué son las cookies y para qué sirven?",
        "respuesta": "Son archivos pequeños que permiten reconocer tu dispositivo y mejorar tu experiencia. No contienen virus ni programas. Puedes configurarlas en tu navegador."
      },
      {
        "pregunta": "¿Cómo protege ANA Seguros mis datos personales?",
        "respuesta": "Con medidas de seguridad como el candado SSL. La información es tratada de forma confidencial y bajo las disposiciones de la Ley de Protección de Datos Personales en México."
      },
      {
        "pregunta": "¿Qué leyes aplican a estos Términos y Condiciones?",
        "respuesta": "Se rigen por las leyes mexicanas. En caso de controversia, la jurisdicción es la Ciudad de México."
      }
    ]
  },
  "prepara-documentos": {
    "id": "prepara-documentos",
    "titulo": "Prepara tus documentos",
    "video_url": "https://www.loom.com/embed/143b209069d0483597bacb8e8dc854a3?sid=1ac291a0-6a9a-4f18-8728-702cc5ed3e72",
    "faqs": [
      {
        "pregunta": "¿Qué documentos necesito?",
        "respuesta": "Debes tener listos:\n\n• Identificación oficial (INE por ambos lados, pasaporte o cédula profesional).\n• CURP.\n• Constancia de Situación Fiscal (CSF).\n• Comprobante de domicilio reciente (recibo de luz, agua, etc.).\n• Carátula de estado de cuenta bancario reciente.\n• Documentos vehiculares (Factura, refacturas, endosos y/o frente de la Tarjeta de Circulación).\n• Volante de pronto pago entregado por el ajustador.\n• Acta constitutiva o poder notarial (solo para personas morales)."
      },
      {
        "pregunta": "¿Son obligatorios todos los documentos?",
        "respuesta": "Sí. Todos los documentos forman parte del proceso para que podamos procesar tu pago.\nSi tienes dudas sobre algún documento, tu ajustador puede apoyarte."
      },
      {
        "pregunta": "¿Qué hago si el sistema marca un documento como equivocado pero estoy seguro de que es correcto?",
        "respuesta": "En ocasiones la inteligencia artificial puede confundirse. No te preocupes: nuestro equipo validará tu solicitud de manera manual para que eso no frene el pago de tu siniestro."
      },
      {
        "pregunta": "¿Qué pasa si no tengo todos los documentos completos?",
        "respuesta": "Puedes subir los que ya tengas mientras reúnes el resto. Tu progreso se guarda con tu número de atención."
      },
      {
        "pregunta": "¿Qué tipo de documentos acepta la plataforma?",
        "respuesta": "Puedes subirlos en formato de imagen (JPG, JPEG, PNG) o en PDF."
      },
      {
        "pregunta": "¿Puedo enviar mis documentos de otra manera?",
        "respuesta": "No, este proceso nos ayuda a darte una atención más rápida. Si necesitas ayuda, puedes escribirnos soluciones@anaseguros.com.mx"
      },
      {
        "pregunta": "¿Por qué se tarda tanto en cargar mis documentos o marca error?",
        "respuesta": "Hay algunos factores que pueden afectar tu experencia. Si un documento no termina de cargarse estas son unas recomendaciones:\n\n• Verifica la conexión de tu internet\n• Asegúrate que tu archivo no pese más que 5MB\n• Refresca la página y vuelve a cargar\n• Si no puedes continuar, contáctanos en soluciones@anaseguros.com.mx"
      },
      {
        "pregunta": "No me llegó ningún correo con el número de atención ¿Qué puedo hacer?",
        "respuesta": "Escríbenos un correo a soluciones@anaseguros.com.mx con tu número de atención y siniestro para revisar tu caso."
      }
    ]
  },
  "sube-factura": {
    "id": "sube-factura",
    "titulo": "Sube tus documentos vehiculares",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué pasa si el documento está borroso o poco legible?",
        "respuesta": "La calidad afecta la velocidad de respuesta.\nSi vas a subir una foto, asegúrate de que sea clara y nítida. Fotos movidas o poco legibles pueden hacer que tu expediente sea devuelto hasta que la imagen permita una correcta revisión."
      },
      {
        "pregunta": "¿Puedo subir una foto del documento?",
        "respuesta": "Sí. Puedes tomar una foto directa o escanear el documento y subirlo en PDF.\nEntre mejor sea la calidad, más rápido podremos darte respuesta sobre tu pago."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Qué pasa si no tengo todos los documentos listos para subir?",
        "respuesta": "Puedes guardar tu avance y continuar más tarde.\nEl sistema no procesará tu caso hasta que cargues todos los documentos necesarios."
      },
      {
        "pregunta": "¿Se aceptan tarjetas vencidas?",
        "respuesta": "No. La tarjeta debe estar vigente. Si está vencida, deberás renovarla antes de continuar."
      },
      {
        "pregunta": "¿Tengo que subir ambos lados de la tarjeta?",
        "respuesta": "No. Solo es obligatorio el frente de la tarjeta.\nSi lo prefieres, también puedes subir un archivo con ambas caras."
      },
      {
        "pregunta": "¿Qué pasa si tengo una reimpresión o reposición?",
        "respuesta": "Son válidas siempre y cuando hayan sido emitidas por la autoridad de tu estado.\nAsegúrate de que el holograma o código QR se vea claramente."
      },
      {
        "pregunta": "¿En qué formato debo subir la tarjeta?",
        "respuesta": "Puedes usar PDF, JPG o PNG.\nEl archivo debe ser de buena calidad, mostrando todos los bordes completos y sin cortes."
      },
      {
        "pregunta": "¿Qué hago si el sistema me rechaza la tarjeta pero está vigente?",
        "respuesta": "Puede ser un problema de lectura. Nuestro equipo revisará el documento manualmente para confirmar que sea válido."
      }
    ]
  },
  "sube-id": {
    "id": "sube-id",
    "titulo": "Sube tu ID",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué tipo de identificación puedo subir?",
        "respuesta": "Puedes usar cualquiera de estas:\n\n• INE (ambos lados).\n• Pasaporte.\n• Cédula profesional."
      },
      {
        "pregunta": "¿Tengo que subir ambos lados de mi INE?",
        "respuesta": "Sí. Es necesario subir frente y reverso para validar que sea auténtica."
      },
      {
        "pregunta": "¿Qué pasa si mi identificación está vencida?",
        "respuesta": "No se aceptan identificaciones vencidas. Debes renovarla antes de continuar con el proceso."
      },
      {
        "pregunta": "¿Puedo subir una foto tomada con mi celular?",
        "respuesta": "Sí, siempre que sea clara, sin reflejos y con buena resolución. También puedes escanearla y guardarla en PDF."
      },
      {
        "pregunta": "¿Qué hago si el sistema me rechaza la identificación pero está vigente?",
        "respuesta": "Puede ser un error de lectura automática. Nuestro equipo revisará tu documento de manera manual para confirmar que sea válido."
      },
      {
        "pregunta": "¿Qué formatos de archivo acepta el sistema?",
        "respuesta": "Puedes subir tu identificación en:\n\n• JPG\n• JPEG\n• PNG\n• PDF"
      },
      {
        "pregunta": "¿Qué pasa si los datos de mi identificación no coinciden con mis otros documentos?",
        "respuesta": "Para evitar retrasos, asegúrate de que tu ID tenga exactamente el mismo nombre y CURP que tu Constancia de Situación Fiscal y demás documentos. Si hay una diferencia, deberás corregirla antes de continuar."
      }
    ]
  },
  "sube-curp": {
    "id": "sube-curp",
    "titulo": "Sube tu CURP",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Dónde encuentro mi CURP?",
        "respuesta": "En el espacio para subir tu CURP encontrarás un enlace directo al sitio oficial: https://www.gob.mx/curp/\n\nAhí podrás consultar y descargar tu CURP de manera gratuita."
      },
      {
        "pregunta": "¿Qué formato debe tener mi CURP?",
        "respuesta": "Puedes subirlo en:\n\n• Foto clara y legible.\n• Archivo PDF descargado directamente de la plataforma oficial."
      }
    ]
  },
  "sube-volante": {
    "id": "sube-volante",
    "titulo": "Sube tu volante de pronto pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿En dónde encuentro mi Número de atención?",
        "respuesta": "<img src='/images/helper-VP.png' alt='Ayuda para encontrar número de atención' style='max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);'>"
      },
      {
        "pregunta": "¿Dónde obtengo este documento?",
        "respuesta": "Este documento es entregado por tu ajustador y enviado a tu correo electrónico. Este documento es indispensable para poder continuar con el pago de tu siniestro."
      },
      {
        "pregunta": "¿Qué pasa si no me lo dieron o se me perdió?",
        "respuesta": "Comunicate al correo: soluciones@anaseguros.com.mx"
      }
    ]
  },
  "sube-csf-domicilio": {
    "id": "sube-csf-domicilio",
    "titulo": "Sube tu Constancia de Situación Fiscal",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué es el CSF?",
        "respuesta": "El CSF (Comprobante de Situación Fiscal) es un documento que emite el SAT."
      },
      {
        "pregunta": "¿Cómo descargo mi CSF?",
        "respuesta": "En el espacio determinado para subir ese documento encontrarás el link que te llevará directo al portal donde puedes descargarla."
      },
      {
        "pregunta": "¿Qué comprobante de domicilio es válido?",
        "respuesta": "Aceptamos recibos de luz, agua, teléfono, predial o estados de cuenta bancarios no mayores a 3 meses."
      },
      {
        "pregunta": "¿Cómo tengo la carátula del estado de cuenta bancario?",
        "respuesta": "Ingresa a la app de tu banco, busca tu estado de cuenta, descárgalo o toma una captura de pantalla a la primera hoja y súbela al portal de ANA Pronto Pago."
      }
    ]
  },
  "sube-estado-cuenta": {
    "id": "sube-estado-cuenta",
    "titulo": "Sube tu estado de cuenta bancario y comprobante de domicilio",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué comprobante de domicilio puedo usar?",
        "respuesta": "Puedes usar recibos de luz, agua, teléfono, predial o estados de cuenta bancarios que no sean mayores a 3 meses."
      },
      {
        "pregunta": "¿Cómo puedo obtener la carátula de mi estado de cuenta bancario?",
        "respuesta": "Ingresa a la app de tu banco, busca tu estado de cuenta, descárgalo o toma una captura de pantalla de la primera hoja y súbela al portal de ANA Pronto Pago."
      }
    ]
  },
  "acta-constitutiva": {
    "id": "acta-constitutiva",
    "titulo": "Sube el acta constitutiva y/o poder notarial (solo personas morales)",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué es un acta constitutiva?",
        "respuesta": "Es el documento que establece la constitución de una empresa o sociedad mercantil, donde se definen sus objetivos, estructura y funcionamiento."
      },
      {
        "pregunta": "¿Qué es un poder notarial?",
        "respuesta": "Es un documento legal que autoriza a una persona a actuar en nombre de otra en asuntos específicos relacionados con el seguro."
      },
      {
        "pregunta": "¿Cuándo necesito estos documentos?",
        "respuesta": "Solo son requeridos para personas morales (empresas, sociedades, etc.) que contraten seguros a nombre de la empresa."
      },
      {
        "pregunta": "¿Qué formato debo subir?",
        "respuesta": "Puedes subir estos documentos en formato PDF, JPG o PNG. Asegúrate de que sean legibles y estén completos."
      }
    ]
  },
  "siniestro-cancelado": {
    "id": "siniestro-cancelado",
    "titulo": "Siniestro cancelado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué significa que un siniestro esté cancelado?",
        "respuesta": "Significa que el siniestro fue cancelado por alguna razón específica que se explica en el video."
      },
      {
        "pregunta": "¿Puedo reactivar un siniestro cancelado?",
        "respuesta": "Depende del motivo de la cancelación. Contacta a nuestro centro de atención para más información."
      }
    ]
  },
  "siniestro-devuelto": {
    "id": "siniestro-devuelto",
    "titulo": "Siniestro devuelto",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Por qué se devuelve un siniestro?",
        "respuesta": "Un siniestro se devuelve cuando falta información o documentos requeridos."
      },
      {
        "pregunta": "¿Qué debo hacer si mi siniestro fue devuelto?",
        "respuesta": "Revisa la información solicitada y vuelve a enviar los documentos faltantes."
      }
    ]
  },
  "siniestro-aprobado": {
    "id": "siniestro-aprobado",
    "titulo": "Siniestro aprobado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuánto tiempo tarda el proceso de aprobación?",
        "respuesta": "El proceso de aprobación puede tardar entre 5 a 10 días hábiles."
      },
      {
        "pregunta": "¿Qué sigue después de la aprobación?",
        "respuesta": "Una vez aprobado, se procederá con el pago según el método que hayas elegido."
      }
    ]
  },
  "como-cobrar-pago": {
    "id": "como-cobrar-pago",
    "titulo": "Cómo cobrar tu pago de daños",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuáles son los métodos de pago disponibles?",
        "respuesta": "Ofrecemos transferencia bancaria, cheque o depósito directo a tu cuenta."
      },
      {
        "pregunta": "¿Cuánto tiempo tarda el pago?",
        "respuesta": "Una vez aprobado, el pago se procesa en 24-48 horas hábiles."
      },
      {
        "pregunta": "¿Necesito presentar documentos adicionales para el cobro?",
        "respuesta": "Solo necesitas presentar una identificación oficial y comprobante de cuenta bancaria."
      }
    ]
  },
  "siniestro-cancelado": {
    "id": "siniestro-cancelado",
    "titulo": "Siniestro cancelado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué significa que mi siniestro esté cancelado?",
        "respuesta": "Significa que tu siniestro fue cancelado por alguna razón específica que se explica en el video."
      },
      {
        "pregunta": "¿Puedo reactivar mi siniestro cancelado?",
        "respuesta": "Depende del motivo de la cancelación. Contáctanos para más información."
      }
    ]
  },
  "siniestro-devuelto": {
    "id": "siniestro-devuelto",
    "titulo": "Siniestro devuelto",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Por qué se devuelve mi siniestro?",
        "respuesta": "Tu siniestro se devuelve cuando falta información o documentos requeridos."
      },
      {
        "pregunta": "¿Qué hago si mi siniestro fue devuelto?",
        "respuesta": "Revisa la información que te solicitamos y vuelve a enviar los documentos que faltan."
      }
    ]
  },
  "siniestro-aprobado": {
    "id": "siniestro-aprobado",
    "titulo": "Siniestro aprobado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuánto tiempo tarda mi proceso de aprobación?",
        "respuesta": "Tu proceso de aprobación puede tardar entre 5 a 10 días hábiles."
      },
      {
        "pregunta": "¿Qué sigue después de que me aprueben mi siniestro?",
        "respuesta": "Una vez que te aprueben tu siniestro, procederemos con el pago según el método que hayas elegido."
      }
    ]
  },
  "pago-autorizado": {
    "id": "pago-autorizado",
    "titulo": "Pago Autorizado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué significa que mi pago esté autorizado?",
        "respuesta": "Significa que tu pago ha sido aprobado y está listo para ser procesado. El dinero se transferirá según el método que hayas elegido."
      },
      {
        "pregunta": "¿Cuánto tiempo tarda en llegar mi pago?",
        "respuesta": "Una vez autorizado, tu pago se procesa en 24-48 horas hábiles y debería llegar a tu cuenta o método de pago elegido."
      },
      {
        "pregunta": "¿Qué hago si no recibo mi pago en el tiempo esperado?",
        "respuesta": "Si no recibes tu pago en el tiempo indicado, contáctanos inmediatamente para revisar el estado de tu transferencia."
      }
    ]
  },
  "como-cobrar-pago": {
    "id": "como-cobrar-pago",
    "titulo": "Cómo cobrar tu pago de daños",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuáles son los métodos de pago que puedo usar?",
        "respuesta": "Puedes elegir entre transferencia bancaria, cheque o depósito directo a tu cuenta."
      },
      {
        "pregunta": "¿Cuánto tiempo tarda mi pago?",
        "respuesta": "Una vez que te aprueben tu siniestro, tu pago se procesa en 24-48 horas hábiles."
      },
      {
        "pregunta": "¿Qué documentos necesito para cobrar mi pago?",
        "respuesta": "Solo necesitas presentar una identificación oficial y comprobante de cuenta bancaria."
      }
    ]
  }
};

// Rutas API
app.get('/api/temas', (req, res) => {
  // Separar temas por categoría
  const temasProceso = [
    'prepara-documentos',
    'acepta-terminos', 
    'sube-id',
    'sube-factura',
    'sube-volante',
    'sube-csf-domicilio',
    'sube-estado-cuenta',
    'sube-curp',
    'acta-constitutiva'
  ];
  
  const temasStatus = [
    'siniestro-cancelado',
    'siniestro-devuelto',
    'siniestro-aprobado',
    'pago-autorizado',
    'como-cobrar-pago'
  ];
  
  const todosLosTemas = [
    ...temasProceso.map(id => temas[id]).filter(tema => tema),
    ...temasStatus.map(id => temas[id]).filter(tema => tema)
  ];
  
  res.json(todosLosTemas);
});

app.get('/api/tema/:id', (req, res) => {
  const tema = temas[req.params.id];
  if (tema) {
    res.json(tema);
  } else {
    res.status(404).json({ error: 'Tema no encontrado' });
  }
});

// Ruta principal - servir la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para temas individuales
app.get('/tema/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tema.html'));
});

// Ruta para debug de temas
app.get('/debug-tema/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tema-debug.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
