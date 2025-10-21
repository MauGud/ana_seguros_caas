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
    "video_url": "<div style=\"position: relative; padding-bottom: 49.375%; height: 0;\"><iframe src=\"https://www.loom.com/embed/8297cbd961674466814cb014fd22fb7e?sid=87f7a5cd-f111-424a-b66f-1510712ca6c4\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>",
    "faqs": [
      {
        "pregunta": "¿Qué son los Términos y Condiciones de ANA Seguros?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué operaciones puedo realizar en este portal?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro"
      },
      {
        "pregunta": "¿Cómo me identifico como usuario?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué compromisos tengo como usuario?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué tipo de comprobantes recibo después de hacer una operación?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué pasa si un usuario intenta dañar el sistema?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué son las cookies y para qué sirven?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Cómo protege ANA Seguros mis datos personales?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      },
      {
        "pregunta": "¿Qué leyes aplican a estos Términos y Condiciones?",
        "respuesta": "Realizar el proceso de pronto pago a partir de un siniestro."
      }
    ]
  },
  "prepara-documentos": {
    "id": "prepara-documentos",
    "titulo": "Prepara tus documentos",
    "video_url": "<div style=\"position: relative; padding-bottom: 49.375%; height: 0;\"><iframe src=\"https://www.loom.com/embed/c504214c6e9346f68a5e91b13608fac7?sid=771bacca-6295-47c8-94bc-f925010d27a6\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>",
    "faqs": [
      {
        "pregunta": "¿Qué documentos necesito?",
        "respuesta": "Debes tener listos:\n\n• Identificación oficial (INE por ambos lados, pasaporte o cédula profesional).\n• Comprobante de domicilio reciente no mayor a tres meses (recibo de luz, agua, etc.).\n• Carátula de estado de cuenta bancario reciente no mayor a tres meses.\n• Documentos vehiculares (Factura, refacturas, endosos y/o frente de la Tarjeta de Circulación).\n• Volante de pronto pago entregado por el ajustador.\n• Acta constitutiva o poder notarial (solo para personas morales)."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Puedo subir una foto del documento?",
        "respuesta": "Sí. Puedes tomar una foto directa o escanear el documento y subirlo en PDF.\nEntre mejor sea la calidad, más rápido podremos darte respuesta sobre tu pago."
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
        "respuesta": "Puedes subir los que ya tengas mientras reúnes el resto, tu proceso se guardará automáticamente. Tu progreso se guarda con tu número de atención."
      },
      {
        "pregunta": "¿Qué tipo de documentos acepta la plataforma?",
        "respuesta": "Puedes subirlos en formato de imagen (JPG, JPEG, PNG) o en PDF."
      },
      {
        "pregunta": "¿Puedo enviar mis documentos de otra manera?",
        "respuesta": "No, este proceso nos ayuda a darte una atención más rápida. Si necesitas ayuda, puedes escribirnos gloriagr@anaseguros.com.mx"
      },
      {
        "pregunta": "¿Por qué se tarda tanto en cargar mis documentos o marca error?",
        "respuesta": "Hay algunos factores que pueden afectar tu experencia. Si un documento no termina de cargarse estas son unas recomendaciones:\n\n• Verifica la conexión de tu internet\n• Asegúrate que tu archivo no pese más que 10MB\n• Refresca la página y vuelve a cargar\n• Si no puedes continuar, contáctanos en gloriagr@anaseguros.com.mx"
      },
      {
        "pregunta": "No me llegó ningún correo con el número de atención ¿Qué puedo hacer?",
        "respuesta": "Revisa tu volante de pago y localiza tu número de atención. <a href='/tema/sube-volante' target='_blank'>Entra a anaseguros.nexcar.com.mx</a>, e ingresa tu número de atención de tu volante de pagos para iniciar el proceso. Si tienes algún problema, escribenos un correo a gloriagr@anaseguros.com.mx con tu número de atención y siniestro para revisar tu caso."
      }
    ]
  },
  "sube-factura": {
    "id": "sube-factura",
    "titulo": "Sube tus documentos vehiculares",
    "video_url": "<div style=\"position: relative; padding-bottom: 49.375%; height: 0;\"><iframe src=\"https://www.loom.com/embed/a34df84accb948b5acf6e13090e6c2d5?sid=edf6c6f9-0b6a-4fec-83f0-bdff440c8443\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>",
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
        "pregunta": "¿Se aceptan tarjetas de circulación vencidas?",
        "respuesta": "No. La tarjeta de circulación debe estar vigente. Si está vencida, deberás renovarla antes de continuar."
      },
      {
        "pregunta": "¿Tengo que subir ambos lados de la tarjeta de circulación?",
        "respuesta": "No. Solo es obligatorio el frente de la tarjeta de circulación.\nSi lo prefieres, también puedes subir un archivo con ambas caras."
      },
      {
        "pregunta": "¿Qué pasa si tengo una reimpresión o reposición?",
        "respuesta": "Son válidas siempre y cuando estén vigentes, y hayan sido emitidas por la autoridad de tu estado.\nAsegúrate de que el holograma o código QR se vea claramente."
      },
      {
        "pregunta": "¿En qué formato debo subir la tarjeta de circulación?",
        "respuesta": "Puedes usar PDF, JPG o PNG.\nEl archivo debe ser de buena calidad, mostrando todos los bordes completos y sin cortes."
      },
      {
        "pregunta": "¿Qué hago si el sistema me rechaza la tarjeta de circulación pero está vigente?",
        "respuesta": "Puede ser un problema de lectura. Nuestro equipo revisará el documento manualmente para confirmar que sea válido."
      },
      {
        "pregunta": "¿Qué pasa si la factura o refactura no está a mi nombre y no cuento con endoso?",
        "respuesta": "Si no cuentas con el endoso de la factura puedes subir una TDC a tu nombre y vigente. Si tampoco cuentas con ella, pide que el titular de la factura te proporcione el endoso correspondiente"
      },
      {
        "pregunta": "¿Qué pasa si solo cuento con el endoso?",
        "respuesta": "Si no cuentas con el endoso de la factura puedes subir una TDC a tu nombre y vigente. Si tampoco cuentas con ella, deberás pedir una reimpresión de la factura o refactura en la agencia que fue expedida para completar la trazabilidad de tu vehiculo."
      },
      {
        "pregunta": "Si no soy único dueño, ¿cómo debo de subir mi factura?",
        "respuesta": "Tienes que subir la factura original con endosos o la refactura de tu vehículo en un documento PDF."
      }
    ]
  },
  "sube-id": {
    "id": "sube-id",
    "titulo": "Sube tu ID",
    "video_url": "<div style=\"position: relative; padding-bottom: 49.375%; height: 0;\"><iframe src=\"https://www.loom.com/embed/f2a6d48d2743463aa915cc7b4030aae1?sid=fd61122e-ba9f-4aff-9b07-29b550949301\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>",
    "faqs": [
      {
        "pregunta": "¿Qué pasa si el documento está borroso o poco legible?",
        "respuesta": "La calidad afecta la velocidad de respuesta.\nSi vas a subir una foto, asegúrate de que sea clara y nítida. Fotos movidas o poco legibles pueden hacer que tu expediente sea devuelto hasta que la imagen permita una correcta revisión."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Puedo subir una foto tomada con mi celular?",
        "respuesta": "Sí, siempre que sea clara, sin reflejos y con buena resolución, sin cortes, ni tachaduras. También puedes escanearla y guardarla en PDF."
      },
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
        "respuesta": "Para evitar retrasos, asegúrate de que tu identificación tenga exactamente el mismo nombre en la tarjeta de circulación o factura."
      }
    ]
  },
  "sube-volante": {
    "id": "sube-volante",
    "titulo": "Sube tu volante de pronto pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué pasa si el documento está borroso o poco legible?",
        "respuesta": "La calidad afecta la velocidad de respuesta.\nSi vas a subir una foto, asegúrate de que sea clara y nítida. Fotos movidas o poco legibles pueden hacer que tu expediente sea devuelto hasta que la imagen permita una correcta revisión."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Puedo subir una foto del documento?",
        "respuesta": "Sí. Puedes tomar una foto directa o escanear el documento y subirlo en PDF.\nEntre mejor sea la calidad, más rápido podremos darte respuesta sobre tu pago."
      },
      {
        "pregunta": "¿En dónde encuentro mi Número de atención?",
        "respuesta": "Tu número de atención fue enviado por correo electrónico, también puedes obtenerlo del volante que te entregó tu ajustador.\n\nEste volante debe de estar firmado por ti y tu ajustador.\n\n<img src='/images/helper-VP.png' alt='Ayuda para encontrar número de atención' style='max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);'>"
      },
      {
        "pregunta": "¿Dónde obtengo este documento?",
        "respuesta": "Este documento es entregado por tu ajustador y enviado a tu correo electrónico. Este documento es indispensable para poder continuar con el pago de tu siniestro."
      },
      {
        "pregunta": "¿Qué pasa si no me lo dieron o se me perdió?",
        "respuesta": "Comunicate al correo: gloriagr@anaseguros.com.mx"
      }
    ]
  },
  "sube-estado-cuenta": {
    "id": "sube-estado-cuenta",
    "titulo": "Sube tu estado de cuenta bancario y comprobante de domicilio",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Qué pasa si el documento está borroso o poco legible?",
        "respuesta": "La calidad afecta la velocidad de respuesta.\nSi vas a subir una foto, asegúrate de que sea clara y nítida. Fotos movidas o poco legibles pueden hacer que tu expediente sea devuelto hasta que la imagen permita una correcta revisión."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Puedo subir una foto del documento?",
        "respuesta": "Sí. Puedes tomar una foto directa o escanear el documento y subirlo en PDF.\nEntre mejor sea la calidad, más rápido podremos darte respuesta sobre tu pago."
      },
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
        "pregunta": "¿Qué pasa si el documento está borroso o poco legible?",
        "respuesta": "La calidad afecta la velocidad de respuesta.\nSi vas a subir una foto, asegúrate de que sea clara y nítida. Fotos movidas o poco legibles pueden hacer que tu expediente sea devuelto hasta que la imagen permita una correcta revisión."
      },
      {
        "pregunta": "El sistema me dice que mi documento no coincide, pero estoy seguro de que es correcto. ¿Qué hago?",
        "respuesta": "Puede tratarse de un error de lectura automática. Nuestro equipo validará tu documento de forma manual para que el proceso no se detenga."
      },
      {
        "pregunta": "¿Puedo subir una foto del documento?",
        "respuesta": "Sí. Puedes tomar una foto directa o escanear el documento y subirlo en PDF.\nEntre mejor sea la calidad, más rápido podremos darte respuesta sobre tu pago."
      },
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
        "respuesta": "Significa que decidiste cancelar tu siniestro y enviamos esta notificación automática para documentar los cambios del proceso."
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
    "titulo": "Siniestro validado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuánto tiempo tarda el proceso de validación?",
        "respuesta": "El proceso de validación puede tardar entre 5 a 10 días hábiles."
      },
      {
        "pregunta": "¿Qué sigue después de la validación?",
        "respuesta": "Una vez validado, se procederá con el pago según el método que hayas elegido."
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
        "respuesta": "Significa que decidiste cancelar tu siniestro y enviamos esta notificación automática para documentar los cambios del proceso."
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
        "pregunta": "¿Por qué se devuelve mi número de atención?",
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
    "titulo": "Siniestro validado",
    "categoria": "status-pago",
    "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "faqs": [
      {
        "pregunta": "¿Cuánto tiempo tarda mi proceso de validación?",
        "respuesta": "Tu proceso de validación puede tardar entre 5 a 10 días hábiles."
      },
      {
        "pregunta": "¿Qué sigue después de que me validen mi siniestro?",
        "respuesta": "Una vez que te validen tu siniestro, procederemos con el pago según el método que hayas elegido."
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
        "respuesta": "Puedes elegir entre transferencia bancaria o cheque. El monto se reflejará en tu cuenta en un plazo de 24 horas si se procesa antes de las 3:00 p.m.; de lo contrario, podría tardar hasta 48 horas."
      },
      {
        "pregunta": "¿Cuánto tiempo tarda mi pago?",
        "respuesta": "Una vez que te aprueben tu siniestro, tu pago se procesa en 24-48 horas hábiles."
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
    'sube-estado-cuenta',
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`También accesible desde otros dispositivos en: http://192.168.0.22:${PORT}`);
});
