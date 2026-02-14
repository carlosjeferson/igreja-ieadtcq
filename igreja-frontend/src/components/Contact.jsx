import React from 'react';

function Contact() {
  return (
    <section id="contato" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-950 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 overflow-hidden grid lg:grid-cols-5">
          
          {/* COLUNA 1: INFORMAÇÕES DE CONTATO (2/5 da largura) */}
          <div className="lg:col-span-2 bg-blue-700 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-6 tracking-tighter">
                Fale Conosco
              </h2>
              <p className="text-blue-100 mb-12 font-light">
                Tem alguma dúvida ou deseja uma visita? Nossa equipe está pronta para te atender e orar por você.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-bold text-blue-200 uppercase text-xs tracking-widest mb-1">Localização</h4>
                    <p className="text-sm">R. Vereador José Franco, 70<br />Quixeramobim - CE, 63800-000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-blue-200 uppercase text-xs tracking-widest mb-1">WhatsApp</h4>
                    <p className="text-sm">(88) 9 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="font-bold text-blue-200 uppercase text-xs tracking-widest mb-1">Secretaria</h4>
                    <p className="text-sm">Seg - Sex: 08:00 às 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais no Contato */}
            <div className="mt-12 flex gap-4">
                <a href="https://www.instagram.com/adtcquixeramobim/" target='blank' className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.youtube.com/@IEADTCQ" target='blank' className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="https://www.facebook.com/adtcquixeramobim" target='blank' className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
            </div>
          </div>

          {/* COLUNA 2: FORMULÁRIO (3/5 da largura) */}
          <div className="lg:col-span-3 p-8 md:p-12 bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Jeferson"
                    className="w-full bg-slate-50 border text-slate-800 border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-slate-50 border text-slate-800 border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Assunto</label>
                <select className="w-full bg-slate-50 text-slate-800 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-all outline-none appearance-none">
                  <option>Dúvida Geral</option>
                  <option>Pedido de Oração</option>
                  <option>Visita Pastoral</option>
                  <option>Ministérios</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mensagem</label>
                <textarea
                  placeholder="Como podemos te ajudar?"
                  className="w-full bg-slate-50 border text-slate-800 border-slate-200 p-4 rounded-xl h-40 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black tracking-widest uppercase shadow-xl shadow-blue-600/20 transition-all active:scale-95">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;