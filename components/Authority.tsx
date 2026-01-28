import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const cases = [
  {
    clinic: "TechSolutions SL",
    image: "https://i.ibb.co/m57J15XF/Captura-de-pantalla-2026-01-27-a-las-11-48-56.png",
    quote: "Antes dependíamos 100% de la red de contactos de nuestros socios. Ahora tenemos un flujo constante de empresas solicitando demos de nuestro software cada semana.",
    author: "Pablo Menéndez",
    role: "CEO & Co-Founder",
    highlight: "Escalado de ventas B2B SaaS"
  },
  {
    clinic: "Consulting Group",
    image: "https://i.ibb.co/Df1TZwjQ/2025-12-31.webp",
    quote: "Entienden perfectamente la diferencia entre un 'lead' y una 'oportunidad real'. Han optimizado nuestra inversión para reducir el coste de adquisición de cliente drasticamente.",
    author: "Alberto Morales",
    role: "Director Comercial",
    stats: [
      { value: "45", label: "Reuniones/mes" },
      { value: "x3", label: "ROI en Ads" }
    ]
  },
  {
    clinic: "Servicios Industriales BCN",
    image: "https://i.ibb.co/N6GMF7yv/Logo-vidre.webp",
    quote: "Nuestro sector es muy tradicional y difícil. Generación Ads supo encontrar a los jefes de compras en LinkedIn y Google. Estamos cerrando presupuestos que antes ni olíamos.",
    author: "Janeira Álvarez",
    role: "Gerente",
    stats: [
      { value: "12", label: "Proyectos cerrados" },
      { value: "250%", label: "Aumento facturación" }
    ]
  }
];

export const Authority: React.FC = () => {
  return (
    <section id="resultados" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
            Hablamos el idioma de los <span className="text-brand-600">negocios</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-light">
            Resultados medibles en facturación, no en "likes". Trabajamos como un brazo extendido de tu departamento comercial.
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              
              {/* Image Header */}
              <div className="relative h-56 shrink-0 bg-brand-100/50">
                <Image 
                  src={item.image} 
                  alt={item.clinic}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  quality={60}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mb-2 inline-block">Caso de Éxito</span>
                  <p className="text-xl font-normal">{item.clinic}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <Quote className="text-brand-200 mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic font-light leading-relaxed flex-grow">
                  "{item.quote}"
                </p>
                
                <div className="mb-6">
                  <p className="font-normal text-gray-900">{item.author}</p>
                  <p className="text-gray-500 text-sm font-light">{item.role}</p>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  {item.highlight ? (
                    <div className="flex items-center justify-center h-full min-h-[3.5rem]">
                      <p className="text-lg font-normal text-brand-600 text-center leading-snug">
                        {item.highlight}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {item.stats?.map((stat, i) => (
                        <div key={i}>
                          <p className="text-2xl font-normal text-brand-600">{stat.value}</p>
                          <p className="text-xs text-gray-600 font-light">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};