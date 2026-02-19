import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Calendar, MapPin, User, Info, Filter, GraduationCap } from 'lucide-react';

const AgendaCongregacao = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCongregacao, setSelectedCongregacao] = useState('Todas');

  const listaCongregacoes = [
    "Todas",
    "Cipó",
    "Conjunto Esperança",
    "Depósito",
    "Mearim",
    "Quinin",
    "Sabonete",
    "Sede",
    "Uruquê"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const hoje = new Date();
    const dataInicio = new Date(hoje);
    
    const dataFim = new Date(hoje);
    dataFim.setMonth(hoje.getMonth() + 1);
    dataFim.setDate(dataFim.getDate() + 7);

    const start = dataInicio.toISOString().split('T')[0];
    const end = dataFim.toISOString().split('T')[0];

    axios.get(`https://api-agenda.up.railway.app/calendario?start=${start}&end=${end}`)
      .then((response) => {
        const sorted = response.data.sort((a, b) => new Date(a.start) - new Date(b.start));
        setEvents(sorted);
        setFilteredEvents(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar agenda:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCongregacao === 'Todas') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(e => e.extendedProps.congregacao === selectedCongregacao));
    }
  }, [selectedCongregacao, events]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans pb-20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Link>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-blue-600/70">Agenda Geral</span>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-blue-950 uppercase tracking-tight mb-4">
          Agenda das <span className="text-blue-600">Congregações</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
          Programação completa de todos os campos de Quixeramobim.
        </p>
      </header>

      {/* Filtros com a lista personalizada */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-slate-500 border-b border-slate-100 pb-2">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Selecione o Campo:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {listaCongregacoes.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCongregacao(c)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
                  selectedCongregacao === c 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100 border border-slate-200/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center py-20 gap-4 text-slate-400">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="font-medium animate-pulse">Sincronizando...</p>
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                <div className="flex flex-col md:flex-row">
                  
                  {/* Sidebar Data/Hora */}
                  <div className="md:w-48 bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-200 p-6 flex md:flex-col justify-between items-center text-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-blue-600 tracking-[0.2em] mb-1">Início</span>
                      <span className="text-2xl font-black text-slate-800">{event.extendedProps.horario.substring(0, 5)}h</span>
                    </div>
                    <div className="h-px w-8 bg-slate-200 hidden md:block my-4"></div>
                    <div className="text-right md:text-center">
                      <span className="block text-xs font-bold text-slate-400 capitalize">
                        {formatDate(event.extendedProps.data)}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-grow p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full border ${
                        event.extendedProps.tipo === 'EBD' 
                        ? 'bg-amber-50 text-amber-700 border-amber-100' 
                        : 'bg-blue-50 text-blue-700 border-blue-100'
                      }`}>
                        {event.extendedProps.tipo}
                      </span>

                      {event.extendedProps.subtipo && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded-full border border-slate-200">
                          {event.extendedProps.subtipo}
                        </span>
                      )}

                      {event.extendedProps.turma_ebd && (
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase rounded-full border border-emerald-100 flex items-center gap-1">
                          <GraduationCap size={12} />
                          Turma: {event.extendedProps.turma_ebd}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {event.title.split('|')[0]}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3 text-slate-600">
                            <MapPin size={16} className="text-blue-500" />
                            <span className="font-semibold">{event.extendedProps.congregacao}</span>
                        </div>

                        <div className="flex items-start gap-3 text-slate-500 italic">
                            <User size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>
                            <strong>{event.extendedProps.tipo === 'EBD' ? 'Professor(a): ' : 'Dirigente: '}</strong>
                            {event.extendedProps.dirigente1}
                            {event.extendedProps.dirigente2 && `, ${event.extendedProps.dirigente2}`}
                            {event.extendedProps.dirigente3 && `, ${event.extendedProps.dirigente3}`}
                            </span>
                        </div>
                    </div>

                    {event.extendedProps.observacoes && (
                      <div className="mt-5 p-4 bg-slate-50/50 rounded-2xl border border-slate-200/50 flex items-start gap-3">
                        <Info size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-slate-500 leading-relaxed">
                          <strong className="text-blue-900 uppercase tracking-tighter mr-1 font-black">Nota:</strong> 
                          {event.extendedProps.observacoes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-100">
            <Calendar className="mx-auto text-slate-100 mb-6" size={64} />
            <p className="text-slate-400 font-bold text-lg">Nenhuma programação encontrada</p>
            <p className="text-slate-300 text-sm mt-1">Tente selecionar outro campo ou aguarde novas atualizações.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AgendaCongregacao;