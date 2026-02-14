import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Trash2, Users, PlusCircle, UserCircle, Edit3, XCircle, Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function MinisterioManager() {
  const [minis, setMinis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null); // Estado para saber qual ministério está sendo editado
  const [formData, setFormData] = useState({ nome: '', descricao: '', lider: '' });

  useEffect(() => { loadMinis(); }, []);

  async function loadMinis() {
    try {
      const response = await api.get('/ministerios');
      setMinis(response.data);
    } catch (err) { 
      toast.error('Erro ao carregar ministérios'); 
    }
  }

  // Preenche o formulário com os dados para editar
  function handleEditClick(ministerio) {
    setEditingId(ministerio.id);
    setFormData({
      nome: ministerio.nome,
      descricao: ministerio.descricao,
      lider: ministerio.lider || ''
    });
    // Rola para o topo para facilitar a visualização do formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Limpa o formulário e cancela edição
  function resetForm() {
    setEditingId(null);
    setFormData({ nome: '', descricao: '', lider: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        // Lógica de ATUALIZAR (PUT)
        await api.put(`/ministerios/${editingId}`, formData);
        toast.success('Ministério atualizado!');
      } else {
        // Lógica de CRIAR (POST)
        await api.post('/ministerios', formData);
        toast.success('Ministério criado!');
      }
      resetForm();
      loadMinis();
    } catch (err) { 
      toast.error(editingId ? 'Erro ao atualizar' : 'Erro ao salvar'); 
    } finally { 
      setLoading(false); 
    }
  }

  async function handleDelete(id) {
    toast((t) => (
      <span className="flex flex-col gap-3">
        <b className="text-slate-800">Deseja excluir este ministério?</b>
        <div className="flex gap-2">
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-black shadow-lg shadow-red-200"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await api.delete(`/ministerios/${id}`);
                toast.success('Ministério removido!');
                loadMinis();
              } catch { 
                toast.error('Erro ao excluir'); 
              }
            }}
          > SIM, EXCLUIR </button>
          <button 
            className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-black" 
            onClick={() => toast.dismiss(t.id)}
          > CANCELAR </button>
        </div>
      </span>
    ), { duration: 6000, position: 'top-center' });
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      {/* Formulário Duplo: Criação e Edição */}
      <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-8 rounded-[2rem] border transition-all duration-500 ${editingId ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50/50 border-slate-100'} mb-10`}>
        <div className="md:col-span-2 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {editingId ? <Edit3 size={20} className="text-amber-600" /> : <PlusCircle size={20} className="text-blue-600" />}
            <h4 className="text-lg font-black text-slate-800">
              {editingId ? 'Editando Ministério' : 'Novo Ministério'}
            </h4>
          </div>
          {editingId && (
            <button type="button" onClick={resetForm} className="text-amber-600 flex items-center gap-1 text-xs font-bold hover:underline">
              <XCircle size={16} /> CANCELAR EDIÇÃO
            </button>
          )}
        </div>
        
        <input 
          placeholder="Nome (ex: Ministério de Louvor)" 
          className="p-4 rounded-2xl border-none shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 bg-white" 
          value={formData.nome} 
          onChange={e => setFormData({...formData, nome: e.target.value})} 
          required 
        />
        <input 
          placeholder="Líder (ex: Pr. Carlos)" 
          className="p-4 rounded-2xl border-none shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 bg-white" 
          value={formData.lider} 
          onChange={e => setFormData({...formData, lider: e.target.value})} 
        />
        <textarea 
          placeholder="Fale um pouco sobre o ministério..." 
          className="p-4 rounded-2xl border-none shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none md:col-span-2 text-slate-900 h-32 resize-none bg-white" 
          value={formData.descricao} 
          onChange={e => setFormData({...formData, descricao: e.target.value})} 
          required 
        />
        
        <button 
          disabled={loading} 
          className={`md:col-span-2 text-white p-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-50 ${editingId ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-100' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'}`}
        >
          {editingId ? <Save size={20} /> : <Users size={20} />}
          {loading ? 'PROCESSANDO...' : (editingId ? 'SALVAR ALTERAÇÕES' : 'CADASTRAR MINISTÉRIO')}
        </button>
      </form>

      {/* Listagem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {minis.map(m => (
          <div key={m.id} className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            {/* Indicador de "Editando" no Card */}
            {editingId === m.id && <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 animate-pulse"></div>}
            
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-colors ${editingId === m.id ? 'bg-amber-500' : 'bg-blue-600 shadow-blue-100'}`}>
                  <Users size={24} />
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEditClick(m)} 
                    className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl inline-flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all group-hover:text-slate-600"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(m.id)} 
                    className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl inline-flex items-center justify-center hover:bg-red-500 hover:text-white transition-all group-hover:text-slate-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <h4 className="font-black text-slate-900 text-xl mb-2">{m.nome}</h4>
              <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3 font-medium">{m.descricao}</p>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
              <UserCircle size={20} className="text-blue-600" />
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                Líder Responsável
                <p className="text-xs text-slate-800 normal-case tracking-normal">{m.lider || 'A definir'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}