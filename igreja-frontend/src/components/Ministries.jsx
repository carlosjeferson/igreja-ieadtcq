import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Ministries() {
  const [ministerios, setMinisterios] = useState([]);
  const [loading, setLoading] = useState(true);

  const getIcon = (nome) => {
  const n = nome.toLowerCase();

  if (n.includes('oração') || n.includes('intercessão')) return "🙏";
  if (n.includes('ebd') || n.includes('ensino') || n.includes('doutrina')) return "📖";
  if (n.includes('louvor') || n.includes('ensaio') || n.includes('música')) return "🎸";
  if (n.includes('jovens') || n.includes('juventude') || n.includes('umadeq')) return "🔥";
  if (n.includes('infantil') || n.includes('crianças') || n.includes('juniores')) return "🎨";
  if (n.includes('senhoras') || n.includes('círculo de oração')) return "🌹";
  if (n.includes('família') || n.includes('casais')) return "💍";
  if (n.includes('recepção') || n.includes('portaria') || n.includes('boas-vindas')) return "🤝";
  if (n.includes('mídia') || n.includes('som') || n.includes('transmissão')) return "💻";
  if (n.includes('missões') || n.includes('evangelismo')) return "🌍";
  return "⛪";
};

  useEffect(() => {
    api.get('/ministerios')
      .then(response => {
        setMinisterios(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar ministérios", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="ministérios" className="relative py-24 bg-blue-950 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-black tracking-widest text-sm uppercase mb-4">
            Serviço e Comunhão
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Ministérios</span>
          </h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center text-blue-200/50">Carregando ministérios...</div>
          ) : (
            ministerios.map((m) => (
              <div
                key={m.id}
                className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 inline-block">
                    {getIcon(m.nome)}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {m.nome}
                  </h4>
                  
                  <p className="text-blue-100/60 leading-relaxed mb-6">
                    {m.descricao}
                  </p>

                  {m.lider && (
                    <p className="text-xs font-bold text-blue-400/80 mb-4">
                      LÍDER: {m.lider.toUpperCase()}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-20 p-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent">
          <div className="bg-blue-950 py-8 text-center">
            <p className="text-blue-200/80 italic text-lg">
              "Servi uns aos outros conforme o dom que cada um recebeu." — 1 Pedro 4:10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ministries;