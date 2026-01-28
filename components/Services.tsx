import React from 'react';
import { Target, MonitorSmartphone, BarChart3 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-normal mb-6 leading-tight">
              Estrategia 360º para <br/>
              <span className="text-brand-400">Cerrar Grandes Cuentas</span>
            </h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed font-light">
              No somos generalistas. Entendemos los ciclos de venta largos, la necesidad de educar al cliente y la importancia de llegar a quien toma las decisiones.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-800 flex items-center justify-center shrink-0 text-brand-300">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2 text-white">Paid Media B2B (Ads)</h3>
                  <p className="text-brand-200 font-light">
                    Campañas en LinkedIn Ads y Google Ads dirigidas exclusivamente a tu perfil de cliente ideal (ICP). Filtramos por cargo, sector y tamaño de empresa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-800 flex items-center justify-center shrink-0 text-brand-300">
                  <MonitorSmartphone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2 text-white">Webs de Alta Conversión</h3>
                  <p className="text-brand-200 font-light">
                    Desarrollamos webs y landing pages que explican tu propuesta de valor compleja de forma simple, fomentando la solicitud de demo o presupuesto.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-800 flex items-center justify-center shrink-0 text-brand-300">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2 text-white">Automatización & CRM</h3>
                  <p className="text-brand-200 font-light">
                    Integramos los leads directamente en tu CRM (HubSpot, Salesforce) y configuramos secuencias de nutrición para madurar a los prospectos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl blur-3xl opacity-20 transform rotate-3"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              {/* Mockup of a Dashboard */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <span className="font-normal text-sm text-slate-400">Pipeline de Ventas</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 text-sm font-light">Leads Cualificados (MQLs)</p>
                    <p className="text-3xl font-normal text-white">85</p>
                  </div>
                  <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs font-normal">+34% vs Q anterior</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 text-sm font-light">Coste por Lead (CPL)</p>
                    <p className="text-3xl font-normal text-white">45,00€</p>
                  </div>
                  <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs font-normal">Optimizado sector IT</span>
                </div>
                
                {/* Visual Graph Bars */}
                <div className="mt-6 flex items-end justify-between h-32 gap-2">
                   {[30, 45, 40, 60, 75, 50, 85].map((h, i) => (
                     <div key={i} className="w-full bg-brand-600/30 rounded-t-sm relative group">
                        <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm transition-all duration-500 group-hover:bg-brand-400"></div>
                     </div>
                   ))}
                </div>
                <p className="text-center text-xs text-slate-500 mt-2 font-light">Crecimiento de oportunidades comerciales</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};