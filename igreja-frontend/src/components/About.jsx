import React, { useState, useEffect } from 'react';
import imagemPastor from '../assets/pastor2.png';
import pastorSalviano from '../assets/pastor-salviano.png';
import pastorEvandro from '../assets/pastor-evandro.png';
import irmao from '../assets/irmao.png';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <section id="sobre" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 skew-x-12 translate-x-20 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO DA IMAGEM COM MOLDURA ESTILIZADA */}
          <div className="relative group">
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={imagemPastor} 
                alt="Interior do Templo" 
                className="w-full h-[550px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>

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
              <p className='text-justify'>
                A <span className="font-bold text-slate-800">Assembleia de Deus Templo Central em Quixeramobim</span> é mais do que uma instituição; é um refúgio de fé e amor no coração do Ceará. Fundada sobre os pilares da sã doutrina e da adoração genuína.
              </p>
              <p className='text-justify'>
                Nossa missão é proclamar o Evangelho de Cristo, promovendo a restauração de famílias e o crescimento espiritual de cada indivíduo.
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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-blue-600 font-bold flex items-center gap-2 group cursor-pointer outline-none"
              >
                Conheça nossa história completa
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DA HISTÓRIA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay com desfoque */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Conteúdo do Modal */}
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in duration-300">
            
            {/* Header */}
            <div className="px-8 py-6 border-b flex justify-between items-center bg-slate-50">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Nossa História</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Texto com Scroll */}
            <div className="p-8 overflow-y-auto">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                  <p className="text-xl italic text-blue-600 font-serif">
                    “Pois quem despreza o dia dos humildes começos, esse alegrar-se-á...”
                  </p>
                  <p className="text-sm font-bold text-slate-400">(Zacarias 4:10)</p>
                  <img src={pastorSalviano} alt="Igreja de Quixeramobim" className="w-full max-w-md mx-auto rounded-lg shadow-md mt-4" />
                </div>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className='text-justify'>
                    A história da <strong>Assembleia de Deus em Quixeramobim</strong> é um testemunho vivo de fé,
                    perseverança e obediência ao chamado divino. São sete décadas de uma jornada
                    marcada por desafios, milagres, crescimento e transformação espiritual. Cada capítulo
                    dessa trajetória revela como Deus escolheu pessoas improváveis para realizar uma obra
                    extraordinária no coração do Ceará.
                  </p>

                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Os Humildes Começos</h3>
                    <p className="text-justify">
                        Na década de 1950, Quixeramobim vivia uma profunda carência espiritual. Deus, que
                        sonda os corações, voltou seu olhar para essa terra e levantou pioneiros como Manoel
                        Bento, Francisco Alves e João Vicente. Eles iniciaram a obra na comunidade Boa
                        Esperança, enfrentando tempos difíceis, escassez de recursos e resistência espiritual.
                        Mesmo diante da hostilidade, não se intimidaram. Plantaram e regaram com fé, enquanto
                        Deus concedia o crescimento.                    </p>
                    <p className="mt-4 text-justify">
                        Em 1955, o pastor Francisco Henrique dos Santos foi enviado por seu líder, o saudoso
                        pastor José Alencar de Macedo, para consolidar a obra na sede do município. Com
                        coragem e zelo, enfrentou perseguições religiosas e limitações materiais, mas decidiu
                        honrar seu chamado. Evangelizou bairros e zonas rurais, realizou viagens missionárias e
                        viu milagres acontecerem. Em 13 de janeiro de 1969, foi oficialmente empossado como
                        pastor da igreja, marcando o início de uma nova era.      
                    </p>
                    <img src={pastorEvandro} alt="Igreja de Quixeramobim" className="w-full max-w-md mx-auto rounded-lg shadow-md mt-4" />

                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Expansão e Consolidação</h3>
                    <p className='text-justify'>
                        Quando assumiu, havia apenas 8 membros na sede e 45 no total entre Quixeramobim e
                        Solonópole. Com dedicação incansável, o pastor Francisco Henrique liderou a igreja por
                        32 anos, abrindo 22 congregações no campo e uma na sede, e alcançando 2.565
                        membros até sua jubilação em 2001.
                    </p>
                    <p className='mt-4 text-justify'>
                        O primeiro templo foi construído em 1973, na Rua 13 de Junho. Ali também nasceu o
                        departamento de música, iniciado por três irmãos cegos: Francisco Gordim (banjo),
                        Expedito Gordim (violino) e Raimundo Vera (violão), que louvaram com excelência e
                        inspiração.
                    </p>
                    <p className='mt-4 text-justify'>
                        Durante sua gestão, o pastor Francisco consagrou cinco pastores: José Miguel,
                        Salviano, José Augusto, Louro e Francisco Alves — este último, o primeiro pastor
                        consagrado em Quixeramobim. Também contou com obreiros valorosos como Francisco
                        Ferreira, Raimundinho, José Paulino, Francisco Dêca e Manoel Barros.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Lideranças que Marcaram Época</h3>
                    <p className='text-justify'>
                        Após a jubilação do pastor Francisco Henrique, a igreja foi conduzida por líderes que
                        deram continuidade à obra com zelo e sabedoria:
                    </p>
                    <ul className="space-y-4 mt-4">
                      <li className='text-justify'><strong>Pr. Evandro Figueiredo de Aquino</strong> – natural de Quixadá e filho na fé, liderou por
                      cinco anos promovendo unidade e crescimento. Retornou posteriormente para
                      mais dez anos de gestão, consolidando a saúde espiritual da igreja.
                      </li>
                      <li className='text-justify'><strong>Pr. Custódio</strong> – liderou por um ano e oito meses, com forte ímpeto evangelístico e
                      marcas positivas no campo.
                      </li>
                      <li className='text-justify'><strong>Pr. Audízio Furtado</strong> – dirigiu por quatro anos, pacificando conflitos e ensinando
                      com profundidade bíblica.
                      </li>
                      <li className='text-justify'><strong>Pr. Raimundo Salviano Leandro Batista</strong> – atual pastor, retornou a Quixeramobim
                      após 40 anos, conduzindo a igreja com zelo, graça e dependência de Deus. Em
                      apenas três anos, já demonstrou profundo compromisso com o crescimento e a
                      saúde espiritual da igreja.
                      </li>
                    </ul>
                    <img src={irmao} alt="Igreja de Quixeramobim" className="w-full max-w-md mx-auto rounded-lg shadow-md mt-4" />
                  </section>

                  <div className="bg-blue-600 p-8 rounded-2xl text-white text-center shadow-xl">
                    <h4 className="text-xl font-bold mb-2">Um Legado que Permanece</h4>
                    <p className="opacity-90">
                      Celebrar o Jubileu de Platina é reconhecer que somos herdeiros de uma história de fé e
                      bravura. Honramos os pioneiros e obreiros que resistiram em dias difíceis, que serviram
                      com paixão pelas almas e zelo pela casa de Deus. Muitos atuaram na linha de frente,
                      outros nos bastidores, mas todos foram essenciais para que a luz do Evangelho brilhasse
                      em Quixeramobim.
                    </p>
                    <p className='mt-4'>
                      Nossa história não termina aqui. Estamos apenas iniciando um novo capítulo. Que este
                      candelabro aceso há sete décadas continue iluminando vidas até a volta do Rei dos Reis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t bg-slate-50 flex justify-center">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Voltar para o Site
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;