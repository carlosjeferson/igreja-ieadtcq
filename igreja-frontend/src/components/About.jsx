import React from 'react';
import imagemPastor from '../assets/pastor2.png';

function About() {
  return (
    <section id="sobre" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 skew-x-12 translate-x-20 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO DA IMAGEM COM MOLDURA ESTILIZADA */}
          <div className="relative group">
            {/* Quadrado de fundo decorativo */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={imagemPastor} 
                alt="Interior do Templo" 
                className="w-full h-[550px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay suave na imagem */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Card flutuante com estatística ou frase */}
            <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-blue-600">
              <p className="text-3xl font-black text-blue-900 leading-none">70+</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-tighter">Anos de História</p>
            </div>
          </div>

          {/* LADO DO TEXTO */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Uma Família para <br />
                <span className="text-blue-600">Pertencer.</span>
              </h2>
            </div>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                A <span className="font-bold text-slate-800">Assembleia de Deus Templo Central em Quixeramobim</span> é mais do que uma instituição; é um refúgio de fé e amor no coração do Ceará. Fundada sobre os pilares da sã doutrina e da adoração genuína.
              </p>
              
              <p>
                Nossa missão é proclamar o Evangelho de Cristo, promovendo a restauração de famílias e o crescimento espiritual de cada indivíduo. Acreditamos em uma igreja viva, atuante e comprometida com o serviço ao próximo.
              </p>
            </div>

            {/* ÍCONES DE VALORES */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                  📖
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Palavra</h4>
                  <p className="text-sm text-slate-500">Fundamento bíblico inegociável.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                  🤝
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Comunhão</h4>
                  <p className="text-sm text-slate-500">União que fortalece a caminhada.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="text-blue-600 font-bold flex items-center gap-2 group">
                Conheça nossa história completa
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;