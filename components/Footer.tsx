'use client';
import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/hola@generacionads.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formState.name,
          Teléfono: formState.phone,
          Email: formState.email,
          Web: formState.website,
          _subject: "Nuevo Lead B2B - Generación Ads",
          _cc: "mzornoza@generacionads.com",
          _template: "table",
          _captcha: "false" // Disables recaptcha for smoother UX (optional)
        })
      });

      if (response.ok) {
        // Track Facebook Pixel Lead Event manually
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Formulario B2B Footer',
            content_category: 'Form Submission',
            status: 'success'
          });
        }

        setStatus('success');
        setFormState({ name: '', phone: '', email: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer id="contacto" className="bg-white border-t border-gray-100">
      {/* CTA Section */}
      <div className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row gap-12 border border-brand-100">
            
            {/* Text Side */}
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-normal uppercase tracking-wide mb-4">
                Consultoría Estratégica
              </span>
              <h2 className="text-3xl md:text-5xl font-normal text-gray-900 mb-6">
                Escala tu facturación B2B <span className="text-brand-600">este trimestre</span>.
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-light">
                Solicita una auditoría de crecimiento sin compromiso. Analizamos tu proceso de ventas actual y diseñamos una hoja de ruta para conseguir más clientes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 font-light">
                  <Phone className="text-brand-600" size={20} />
                  <a href="tel:+34611681539" className="hover:text-brand-600 transition-colors">
                    +34 611 68 15 39
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-light">
                  <Mail className="text-brand-600" size={20} />
                  <a href="mailto:hola@generacionads.com" className="hover:text-brand-600 transition-colors">
                    hola@generacionads.com
                  </a>
                </div>
                 <div className="flex items-center gap-3 text-gray-600 font-light">
                  <MapPin className="text-brand-600" size={20} />
                  <span>Calle de la Diligencia 9, Oficina 007</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-light disabled:bg-gray-100 disabled:text-gray-400"
                    placeholder="Juan Pérez"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-1">Teléfono Móvil</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-light disabled:bg-gray-100 disabled:text-gray-400"
                    placeholder="600 000 000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-1">Correo Profesional</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-light disabled:bg-gray-100 disabled:text-gray-400"
                    placeholder="juan@empresa.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-light text-gray-700 mb-1">Web de la Empresa</label>
                  <input 
                    type="text" 
                    id="website"
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-light disabled:bg-gray-100 disabled:text-gray-400"
                    placeholder="www.tuempresa.com"
                    value={formState.website}
                    onChange={(e) => setFormState({...formState, website: e.target.value})}
                  />
                </div>
                
                <Button 
                  fullWidth 
                  size="lg" 
                  type="submit" 
                  disabled={status === 'submitting' || status === 'success'}
                  className="mt-4 flex items-center gap-2 justify-center disabled:opacity-70 disabled:cursor-not-allowed !text-sm sm:!text-lg"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={18} /> ¡Solicitud Enviada!
                    </>
                  ) : (
                    <>
                      Solicitar Auditoría Gratuita <Send size={18} className="hidden sm:inline" />
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-light text-center animate-fade-in-up">
                    Gracias. Un consultor analizará tu web y te contactará en breve.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-light text-center flex items-center justify-center gap-2 animate-fade-in-up">
                    <AlertCircle size={16} /> Hubo un error. Por favor, llámanos o escríbenos por WhatsApp.
                  </div>
                )}

                <p className="text-xs text-center text-gray-500 mt-3 font-light">
                  Tus datos están seguros. Política de privacidad aceptada al enviar.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Generación Ads. Expertos en Marketing B2B.</p>
        </div>
      </div>
    </footer>
  );
};