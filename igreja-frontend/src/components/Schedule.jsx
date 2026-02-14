import React, { useEffect, useState } from 'react';
import api from '../services/api'; 

function Schedule() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/agenda')
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar agenda:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="agenda" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black tracking-widest text-sm uppercase mb-2 block">
              Programe-se
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Nossa <span className="text-blue-600">Agenda</span> Semanal
            </h2>
          </div>
          <p className="text-slate-500 font-medium md:max-w-xs border-l-4 border-blue-600 pl-4">
            Venha estar conosco em um de nossos encontros presenciais.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-4">
          {/* 3. Renderização condicional para loading */}
          {loading ? (
            <p className="text-center text-slate-400">Carregando programação...</p>
          ) : events.length > 0 ? (
            events.map((event) => (
              <div 
                key={event.id}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-[10px] uppercase font-bold opacity-60">Dia</span>
                    <span className="text-lg font-black">
                      {/* Pegando as 3 primeiras letras do dia da semana */}
                      {event.dia.substring(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                      {event.titulo}
                    </h4>
                    {/* Exibindo a descrição que vem do banco */}
                    <p className="text-slate-500 text-sm">{event.descricao || "Sem descrição disponível."}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8">
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Início</span>
                    <span className="text-2xl font-black text-slate-900">{event.horario}h</span>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=Rua+Vereador+Jose+Franco+70+Quixeramobim" 
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-blue-100 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"
                  >
                    📍
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400">Nenhum evento agendado para esta semana.</p>
          )}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm font-medium">
          * Horários sujeitos a alterações em datas comemorativas ou feriados.
        </div>
      </div>
    </section>
  );
}

export default Schedule;