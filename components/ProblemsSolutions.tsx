import React from 'react';
import { XCircle, CheckCircle, TrendingDown, Layout, Users } from 'lucide-react';

export const ProblemsSolutions: React.FC = () => {
  const problems = [
    {
      icon: <Layout size={32} />,
      pain: "Webs corporativas florero",
      desc: "Sitios institucionales muy bonitos que no explican qué haces ni captan leads. Solo sirven de tarjeta de visita cara.",
      solution: "Landing pages orientadas a conversión y generación de demanda."
    },
    {
      icon: <TrendingDown size={32} />,
      pain: "Leads de baja calidad",
      desc: "Tu equipo comercial pierde tiempo filtrando contactos que no tienen presupuesto o no son decisores de compra.",
      solution: "Cualificación automática y segmentación precisa (Account Based Marketing)."
    },
    {
      icon: <Users size={32} />,
      pain: "Dependencia del boca a boca",
      desc: "Si tus referidos se detienen, tu facturación se detiene. No tienes control sobre tu crecimiento futuro.",
      solution: "Un sistema de captación predecible y escalable mes a mes."
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-normal tracking-wider uppercase text-sm">Realidad vs Solución</span>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mt-2">
            ¿Tu equipo de ventas sufre estos <span className="text-accent">bloqueos</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-light">
            El mercado B2B ha cambiado. Las estrategias antiguas de "puerta fría" ya no funcionan igual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 mb-6 group-hover:text-brand-600 group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              
              {/* The Problem */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-accent">
                    <XCircle size={20} />
                    <h3 className="font-normal text-lg text-gray-900">{item.pain}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm font-light">
                  {item.desc}
                </p>
              </div>

              {/* The Solution */}
              <div>
                <div className="flex items-start gap-2 text-brand-700">
                    <CheckCircle size={20} className="mt-1 shrink-0" />
                    <p className="font-normal text-gray-800 leading-snug">
                        {item.solution}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};