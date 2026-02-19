import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* COLUNA 1: IDENTIDADE */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-black tracking-tighter text-blue-400">
              AD TEMPLO CENTRAL
            </h3>
            <p className="text-sm text-blue-100/60 leading-relaxed text-justify">
              Uma igreja comprometida com a Palavra de Deus e o amor ao próximo em Quixeramobim. Venha fazer parte da nossa família.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Ícones de Redes Sociais */}
              {/* Instagram */}
                <a 
                    href="https://www.instagram.com/adtcquixeramobim/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 transition-all duration-300 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>

                {/* Youtube */}
                <a 
                    href="https://www.youtube.com/@IEADTCQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>

                {/* Facebook */}
                <a 
                    href="https://www.facebook.com/adtcquixeramobim?locale=pt_BR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-3 text-sm text-blue-100/60">
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Nossa História</a></li>
              <li><a href="#ministérios" className="hover:text-blue-400 transition-colors">Ministérios</a></li>
              <li><a href="#sermões" className="hover:text-blue-400 transition-colors">Sermões</a></li>
              <li><a href="#agenda" className="hover:text-blue-400 transition-colors">Agenda Semanal</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-3 text-sm text-blue-100/60">
              <li className="flex items-center gap-3">
                <span>📍</span> R. Vereador José Franco, 70
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span> (88) 0000-0000
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span> contato@adtcquixeramobim.com
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA FINAL: COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-blue-100/40 font-medium uppercase tracking-widest">
          <p>© {currentYear} Assembleia de Deus Templo Central Quixeramobim</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>Desenvolvido por Carlos Jeferson</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;