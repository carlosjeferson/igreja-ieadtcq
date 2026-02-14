import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Por favor, preencha as credenciais.', {
        style: { borderRadius: '12px', background: '#333', color: '#fff' }
      });
      return;
    }

    setLoading(true);
    try {
      await signIn({ email, password });
      toast.success('Login realizado com sucesso!');
      navigate('/painelAdministrativo');
    } catch (err) {
      // Tratamento de erro profissional
      const status = err.response?.status;
      if (status === 401) {
        toast.error('E-mail ou senha inválidos.');
      } else if (status === 404) {
        toast.error('Usuário não encontrado.');
      } else {
        toast.error('Erro de conexão com o servidor.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1d] p-6 relative overflow-hidden font-sans">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Orbes decorativos de fundo para profundidade */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]"></div>

      <div className="bg-white/95 backdrop-blur-sm p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-md relative z-10 border border-slate-200">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
              AD
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            ADTC <span className="text-blue-600">Admin</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Gestão Templo Central - Quixeramobim</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo E-mail */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="exemplo@gmail.com" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Senha</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Botão de Login */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                VERIFICANDO...
              </>
            ) : (
              <>
                ENTRAR NO SISTEMA
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <footer className="mt-10 pt-6 border-t border-slate-100">
           <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-tighter">
             Suporte Técnico: <span className="text-blue-500 cursor-pointer hover:underline"> Fale com a Secretaria ADTC</span>
           </p>
        </footer>
      </div>
    </div>
  );
}