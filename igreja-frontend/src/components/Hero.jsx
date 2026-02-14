import React from 'react';
import fundoPrincipal from '../assets/fundo-principal.jpg';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950">
      {/* BACKGROUND COM IMAGEM E OVERLAY (Substitua a URL pela foto da sua igreja) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 hover:scale-100"
        style={{ 
          backgroundImage: `url(${fundoPrincipal})`,
        }}
      >
        {/* Overlay degradê para garantir leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/70 to-blue-950/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* BADGE DESTAQUE */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm">
          <span className="text-blue-300 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            Um lugar de recomeço
          </span>
        </div>

        {/* TÍTULO PRINCIPAL COM DESIGN REFINADO */}
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
          AMAR A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">DEUS</span>, <br />
          CUIDAR DE PESSOAS.
        </h2>

        {/* SUBTÍTULO */}
        <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Seja bem-vindo à <span className="font-semibold text-white">Assembleia de Deus Templo Central</span>. 
          Estamos em Quixeramobim vivendo o amor de Cristo e transformando vidas através da Palavra.
        </p>

        {/* GRUPO DE BOTÕES (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.youtube.com/@IEADTCQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 w-full sm:w-auto"
          >
            <span className="relative z-10">ASSISTIR AO VIVO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a 
            href="#agenda" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all w-full sm:w-auto"
          >
            CONFIRA A AGENDA
          </a>
        </div>

        {/* INDICADOR DE SCROLL */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full mx-auto opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;