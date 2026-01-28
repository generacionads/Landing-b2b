'use client';
import React, { useState } from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center transition-colors duration-700 ease-in-out ${
        isHovered ? 'bg-brand-700' : 'bg-slate-50'
      }`}
    >
      {/* Background Decor Elements - Fade out on hover to focus attention */}
      <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-brand-200 rounded-full blur-2xl lg:blur-[100px] translate-x-1/2 -translate-y-1/2 transform-gpu transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-30'}`}></div>
      <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-200 rounded-full blur-2xl lg:blur-[100px] -translate-x-1/2 translate-y-1/2 transform-gpu transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-30'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center lg:text-left max-w-6xl mx-auto lg:mx-0">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-100 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-fade-in-up">
            <TrendingUp size={16} className="text-brand-600" />
            <span className="text-sm font-normal text-gray-700">Exclusivo para Empresas B2B</span>
          </div>

          {/* Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8 lg:mb-10 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
            Creamos sistemas de captación predecibles para <span className={`transition-colors duration-500 ${isHovered ? 'text-brand-200' : 'text-brand-600'}`}>empresas B2B.</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light transition-colors duration-500 ${isHovered ? 'text-brand-100' : 'text-gray-600'}`}>
            Ayudamos a directores comerciales a llenar su pipeline mediante 
            <span className={`font-normal transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-900'}`}> LinkedIn & Google Ads</span>, 
            <span className={`font-normal transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-900'}`}> Embudos de Venta</span> y 
            <span className={`font-normal transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-900'}`}> Estrategia de Contenidos</span>. 
            Calidad sobre cantidad.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="min-w-[200px]"
              >
                Quiero más clientes
              </Button>
            </div>
            <p className={`text-sm sm:hidden font-light transition-colors duration-500 ${isHovered ? 'text-brand-200' : 'text-gray-500'}`}>
              Auditoría inicial gratuita
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center lg:absolute lg:bottom-0 lg:right-8 lg:items-end">
          <div className="flex text-accent gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={20} fill="currentColor" />)}
          </div>
          <p className={`text-base font-light text-center lg:text-right transition-colors duration-500 ${isHovered ? 'text-brand-100' : 'text-gray-600'}`}>
            Más de <span className={`font-normal transition-colors duration-500 ${isHovered ? 'text-white' : 'text-brand-700'}`}>50M€ generados</span> en pipeline
          </p>
        </div>
      </div>
    </section>
  );
};