import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, Music, Users, Landmark, History as HistoryIcon } from 'lucide-react';

// Imports de imagens
import pastorSalviano from '../assets/pastor-salviano.png'; 
import pastorEvandro from '../assets/pastor-evandro.png';
import irmao from '../assets/irmao.png';
import Footer from '../components/Footer';

const Historia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans selection:bg-blue-100">
      
      {/* Navbar Suave com Blur */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Link>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400">Memorial de Fé</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* Cabeçalho Principal */}
        <header className="pt-16 pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-blue-950 uppercase tracking-tight mb-6">
            Nossa História
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Versículo em Destaque */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200/50 text-center relative">
            <Quote className="absolute top-6 left-6 text-slate-100" size={60} />
            <p className="relative z-10 text-xl md:text-2xl italic font-serif text-slate-600 leading-relaxed">
              “Pois quem despreza o dia dos humildes começos, esse alegrar-se-á...”
            </p>
            <p className="text-blue-600 font-bold mt-4 text-sm uppercase tracking-widest">(Zacarias 4:10)</p>
          </div>
        </section>

        {/* Bloco 1: Introdução */}
        <article className="prose prose-slate max-w-none mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <p className="text-lg text-justify leading-relaxed text-slate-600 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:mr-3 first-letter:float-left">
                A história da Assembleia de Deus em Quixeramobim é um testemunho vivo de fé, perseverança e obediência ao chamado divino. São sete décadas de uma jornada marcada por desafios, milagres, crescimento e transformação espiritual. Cada capítulo dessa trajetória revela como Deus escolheu pessoas improváveis para realizar uma obra extraordinária no coração do Ceará.
              </p>
            </div>
            <div className="md:col-span-2">
              <img src={pastorSalviano} alt="Pastor Salviano" className="rounded-2xl shadow-md border-4 border-white rotate-1 w-full h-48 object-cover" />
            </div>
          </div>
        </article>

        {/* Bloco 2: Os Humildes Começos */}
        <section className="mb-20 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 flex items-center gap-3">
            <HistoryIcon className="text-blue-600" /> Os Humildes Começos
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
            <p>
              Na década de 1950, Quixeramobim vivia uma profunda carência espiritual. Deus, que sonda os corações, voltou seu olhar para essa terra e levantou pioneiros como Manoel Bento, Francisco Alves e João Vicente. Eles iniciaram a obra na comunidade Boa Esperança, enfrentando tempos difíceis, escassez de recursos e resistência espiritual. Mesmo diante da hostilidade, não se intimidaram. Plantaram e regaram com fé, enquanto Deus concedia o crescimento.
            </p>
            
            <div className="py-6 flex flex-col items-center">
              <img src={pastorEvandro} alt="Registro Histórico" className="max-w-md w-full rounded-xl shadow-lg border border-slate-200" />
              <span className="text-xs text-slate-400 mt-3 italic">Pioneirismo e fé no sertão central</span>
            </div>

            <p>
              Em 1955, o pastor Francisco Henrique dos Santos foi enviado por seu líder, o saudoso pastor José Alencar de Macedo, para consolidar a obra na sede do município. Com coragem e zelo, enfrentou perseguições religiosas e limitações materiais, mas decidiu honrar seu chamado. Evangelizou bairros e zonas rurais, realizou viagens missionárias e viu milagres acontecerem. Em 13 de janeiro de 1969, foi oficialmente empossado como pastor da igreja, marcando o início de uma nova era.
            </p>
          </div>
        </section>

        {/* Bloco 3: Expansão e Consolidação */}
        <section className="mb-20 p-8 md:p-12 bg-blue-950 rounded-[2rem] text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <Landmark className="text-blue-400" /> Expansão e Consolidação
          </h2>
          <div className="space-y-6 opacity-90 leading-relaxed text-justify">
            <p>
              Quando assumiu, havia apenas 8 membros na sede e 45 no total entre Quixeramobim e Solonópole. Com dedicação incansável, o pastor Francisco Henrique liderou a igreja por 32 anos, abrindo 22 congregações no campo e uma na sede, e alcançando 2.565 membros até sua jubilação em 2001.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <Music className="mb-3 text-blue-300" />
                <p className="text-sm">O primeiro templo foi construído em 1973, na Rua 13 de Junho. Ali também nasceu o departamento de música, iniciado por três irmãos cegos: Francisco Gordim (banjo), Expedito Gordim (violino) e Raimundo Vera (violão), que louvaram com excelência e inspiração.</p>
              </div>
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <Users className="mb-3 text-blue-300" />
                <p className="text-sm">Durante sua gestão, o pastor Francisco consagrou cinco pastores: José Miguel, Salviano, José Augusto, Louro e Francisco Alves — este último, o primeiro pastor consagrado em Quixeramobim.</p>
              </div>
            </div>

            <p>
              Também contou com obreiros valorosos como Francisco Ferreira, Raimundinho, José Paulino, Francisco Dêca e Manoel Barros.
            </p>
          </div>
        </section>

        {/* Bloco 4: Lideranças */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8 text-center">Lideranças que Marcaram Época</h2>
          <p className="text-center text-slate-500 mb-10">Após a jubilação do pastor Francisco Henrique, a igreja foi conduzida por líderes que deram continuidade à obra com zelo e sabedoria:</p>
          
          <div className="grid gap-4">
            {[
              { nome: "Pr. Evandro Figueiredo de Aquino", desc: "Natural de Quixadá e filho na fé, liderou por cinco anos promovendo unidade e crescimento. Retornou posteriormente para mais dez anos de gestão, consolidando a saúde espiritual da igreja." },
              { nome: "Pr. Custódio", desc: "Liderou por um ano e oito meses, com forte ímpeto evangelístico e marcas positivas no campo." },
              { nome: "Pr. Audízio Furtado", desc: "Dirigiu por quatro anos, pacificando conflitos e ensinando com profundidade bíblica." },
              { nome: "Pr. Raimundo Salviano Leandro Batista", desc: "Atual pastor, retornou a Quixeramobim após 40 anos, conduzindo a igreja com zelo, graça e dependência de Deus. Em apenas três anos, já demonstrou profundo compromisso com o crescimento e a saúde espiritual da igreja." }
            ].map((lider, i) => (
              <div key={i} className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 transition-all shadow-sm">
                <h4 className="font-bold text-blue-900 mb-2">{lider.nome}</h4>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">{lider.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <img src={irmao} alt="Igreja" className="w-full h-64 object-cover rounded-3xl shadow-md border-4 border-white" />
          </div>
        </section>

        {/* Bloco 5: Legado Final */}
        <footer className="bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6 uppercase tracking-tight">Um Legado que Permanece</h3>
          <div className="space-y-6 text-slate-600 leading-relaxed max-w-3xl mx-auto text-justify md:text-center">
            <p>
              Celebrar o Jubileu de Platina é reconhecer que somos herdeiros de uma história de fé e bravura. Honramos os pioneiros e obreiros que resistiram em dias difíceis, que serviram com paixão pelas almas e zelo pela casa de Deus. Muitos atuaram na linha de frente, outros nos bastidores, mas todos foram essenciais para que a luz do Evangelho brilhasse em Quixeramobim.
            </p>
            <p className="font-bold text-blue-900 text-lg">
              Nossa história não termina aqui. Estamos apenas iniciando um novo capítulo. Que este candelabro aceso há sete décadas continue iluminando vidas até a volta do Rei dos Reis.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
             <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </footer>

      </main>

    </div>
  );
};

export default Historia;