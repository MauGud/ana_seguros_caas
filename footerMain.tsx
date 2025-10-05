'use client'
import React from 'react';

export default function InsuranceProcess() {
  const steps = [
    {
      image: '/footer/siniestro.webp',
      title: 'SINIESTRO'
    },
    {
      image: '/footer/valuacion.webp',
      title: 'VALUACIÓN',
      subtitle: 'DE DAÑOS'
    },
    {
      image: '/footer/volante.webp',
      title: 'VOLANTE',
      subtitle: 'DE PAGO'
    },
    {
      image: '/footer/verificacion.webp',
      title: 'VERIFICACIÓN',
      subtitle: 'DE DOCUMENTOS'
    },
    {
      image: '/footer/pago.webp',
      title: 'PAGO'
    }
  ];

  return (
    <div className="w-full mt-6 font-bebas">
        <div className="flex items-center justify-center p-4" style={{ backgroundColor: '#cfd1d2' }}>
        <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 w-32 h-32 flex items-center justify-center">
                    <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    {step.title}
                </h3>
                {step.subtitle && (
                    <p className="text-xl font-bold text-gray-800 leading-tight">
                    {step.subtitle}
                    </p>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  );
}