import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Sermons() {
  // Começamos com um link padrão (fallback) caso o banco esteja vazio
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/GtWyCUKz-bI");
  const [loading, setLoading] = useState(true);

  // Função para converter links normais do YouTube em links de EMBED
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes('embed')) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  useEffect(() => {
    async function fetchSermon() {
      try {
        const response = await api.get('/sermon');
        if (response.data && response.data.videoUrl) {
          setVideoUrl(getEmbedUrl(response.data.videoUrl));
        }
      } catch (err) {
        console.error("Erro ao buscar sermão do backend:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSermon();
  }, []);

  return (
    <section id="sermões" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-950 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-black tracking-widest text-sm uppercase mb-4 animate-in fade-in slide-in-from-bottom-2">
            Mensagens que Edificam
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Último <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Sermão</span>
          </h3>
          <p className="text-blue-100/60 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Acompanhe a última ministração da Palavra de Deus em nossa igreja. 
            A fé vem pelo ouvir, e o ouvir pela Palavra de Cristo.
          </p>
        </div>

        {/* PLAYER DE VÍDEO PROFISSIONAL */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Efeito de brilho atrás do vídeo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="aspect-video">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-blue-400">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Sermão AD Templo Central"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* ETIQUETA FLUTUANTE */}
          <div className="absolute -bottom-6 -right-4 md:right-10 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20 border border-blue-400/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-tighter">
              Destaque da Semana
            </span>
          </div>
        </div>

        {/* BOTÃO PARA MAIS VÍDEOS */}
        <div className="mt-20 text-center">
          <a 
            href="https://www.youtube.com/@IEADTCQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-blue-900 font-black rounded-2xl shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300 border border-slate-200 active:scale-95"
          >
            <span className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">▶</span>
            VER TODOS NO YOUTUBE
          </a>
        </div>

      </div>
    </section>
  );
}

export default Sermons;