import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Trash2, PlusCircle, Calendar as CalendarIcon, Clock, Edit3, XCircle, Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AgendaManager() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ dia: '', titulo: '', horario: '', descricao: '' });

  useEffect(() => { loadEvents(); }, []);

  async function loadEvents() {
    try {
      const response = await api.get('/agenda');
      setEvents(response.data);
    } catch (err) {
      toast.error('Erro ao carregar agenda');
    }
  }

  function handleEditClick(event) {
    setEditingId(event.id);
    setFormData({
      dia: event.dia,
      titulo: event.titulo,
      horario: event.horario,
      descricao: event.descricao || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetForm() {
    setEditingId(null);
    setFormData({ dia: '', titulo: '', horario: '', descricao: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await api.put(`/agenda/${editingId}`, formData);
        toast.success('Evento atualizado com sucesso!');
      } else {
        await api.post('/agenda', formData);
        toast.success('Evento adicionado à agenda!');
      }
      resetForm();
      loadEvents();
    } catch (err) {
      toast.error(editingId ? 'Erro ao atualizar evento' : 'Erro ao salvar evento');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    toast((t) => (
      <span className="flex flex-col gap-3">
        <b className="text-slate-800">Deseja excluir este evento?</b>
        <div className="flex gap-2">
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-black shadow-lg shadow-red-200"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await api.delete(`/agenda/${id}`);
                toast.success('Excluído!');
                loadEvents();
              } catch { toast.error('Erro ao excluir'); }
            }}
          > SIM, EXCLUIR </button>
          <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-black" onClick={() => toast.dismiss(t.id)}> CANCELAR </button>
        </div>
      </span>
    ), { duration: 5000, position: 'top-center' });
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Formulário Dinâmico */}
      <form 
        onSubmit={handleSubmit} 
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-8 rounded-[2rem] border transition-all duration-500 ${
          editingId ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50/50 border-slate-100'
        } mb-10`}
      >
        <div className="md:col-span-3 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {editingId ? <Edit3 size={20} className="text-amber-600" /> : <PlusCircle size={20} className="text-blue-600" />}
            <h4 className="text-lg font-black text-slate-800">
              {editingId ? 'Editando Evento' : 'Novo Evento na Agenda'}
            </h4>
          </div>
          {editingId && (
            <button type="button" onClick={resetForm} className="text-amber-600 flex items-center gap-1 text-xs font-bold hover:underline">
              <XCircle size={16} /> CANCELAR EDIÇÃO
            </button>
          )}
        </div>

        <input placeholder="Dia (ex: Domingo)" className="p-4 rounded-2xl border-none bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900" value={formData.dia} onChange={e => setFormData({...formData, dia: e.target.value})} required />
        <input placeholder="Título" className="p-4 rounded-2xl border-none bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900" value={formData.titulo} onChange={e => setFormData({...formData, titulo: e.target.value})} required />
        <input placeholder="Horário (ex: 19:00)" className="p-4 rounded-2xl border-none bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900" value={formData.horario} onChange={e => setFormData({...formData, horario: e.target.value})} required />
        
        <textarea
          placeholder="Descrição detalhada do evento (opcional)"
          className="md:col-span-3 p-4 rounded-2xl border-none bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 resize-none"
          rows={3}
          value={formData.descricao}
          onChange={e => setFormData({...formData, descricao: e.target.value})}
        />

        <button 
          disabled={loading} 
          className={`md:col-span-3 text-white p-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 ${
            editingId ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-100' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'
          } disabled:opacity-50`}
        >
          {editingId ? <Save size={20} /> : <PlusCircle size={20} />}
          {loading ? 'PROCESSANDO...' : (editingId ? 'SALVAR ALTERAÇÕES' : 'ADICIONAR À AGENDA')}
        </button>
      </form>

      {/* Tabela de Eventos com Descrição */}
      <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Programação Semanal</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {events.map(ev => (
              <tr key={ev.id} className={`transition-colors ${editingId === ev.id ? 'bg-amber-50/30' : 'hover:bg-slate-50/30'}`}>
                <td className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center shadow-sm mt-1 ${editingId === ev.id ? 'bg-amber-100 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                      <CalendarIcon size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-black text-slate-900 text-lg leading-tight">{ev.titulo}</p>
                      
                      {/* EXIBIÇÃO DA DESCRIÇÃO */}
                      {ev.descricao && (
                        <p className="text-sm text-slate-500 font-medium italic line-clamp-2 mt-0.5">
                          "{ev.descricao}"
                        </p>
                      )}

                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tighter">
                        <span className="flex items-center gap-1"><Clock size={12}/> {ev.horario}h</span>
                        <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                        <span>{ev.dia}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => handleEditClick(ev)}
                      className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl inline-flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                      title="Editar"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(ev.id)} 
                      className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl inline-flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="2" className="p-10 text-center text-slate-400 italic">Nenhum evento agendado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}