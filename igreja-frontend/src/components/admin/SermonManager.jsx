import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Video, Save, ExternalLink, Youtube, Info, Loader2 } from 'lucide-react'; // Loader2 adicionado aqui
import toast from 'react-hot-toast';

export default function SermonManager() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // 1. Busca o vídeo atual cadastrado no banco ao carregar a página
  useEffect(() => {
    async function loadSermon() {
      try {
        const response = await api.get('/sermon');
        if (response.data && response.data.videoUrl) {
          setVideoUrl(response.data.videoUrl);
        }
      } catch (err) {
        console.error('Nenhum vídeo encontrado ou erro na API');
      } finally {
        setFetching(false);
      }
    }
    loadSermon();
  }, []);

  // Função para transformar links normais (watch?v=) em links de EMBED
  const formatYoutubeUrl = (url) => {
    if (!url) return '';
    // Regex para capturar o ID do vídeo em diversos formatos de link do YouTube
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  // 2. Função para salvar a nova URL no banco
  async function handleUpdate(e) {
    e.preventDefault();

    // Validação básica de segurança
    if (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
      toast.error('Por favor, insira um link válido do YouTube.');
      return;
    }

    const cleanUrl = formatYoutubeUrl(videoUrl);

    setLoading(true);
    try {
      // Faz a chamada para a sua rota PUT /sermon
      await api.put('/sermon', { videoUrl: cleanUrl });
      
      toast.success('Vídeo da Home atualizado!', {
        icon: '🎬',
        style: { 
          borderRadius: '12px', 
          background: '#1e293b', 
          color: '#fff' 
        }
      });
      
      setVideoUrl(cleanUrl); // Atualiza o input com a URL formatada
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erro ao conectar com o servidor.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-3xl">
        <header className="mb-8">
          <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
            <div className="p-2 bg-red-100 text-red-600 rounded-lg shadow-sm">
              <Youtube size={24} />
            </div>
            Gestão do Último Sermão
          </h3>
          <p className="text-slate-500 mt-2 font-medium leading-relaxed">
            Configure o link da última live ou vídeo de pregação. O vídeo aparecerá na seção de sermões da página principal.
          </p>
        </header>

        <form onSubmit={handleUpdate} className="space-y-6 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">URL do Vídeo (YouTube)</label>
            <div className="relative group">
              <Video className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="https://www.youtube.com/watch?v=..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-900 shadow-sm font-medium"
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-3 items-center">
            <Info className="text-blue-600 shrink-0" size={18} />
            <p className="text-xs text-blue-700 leading-relaxed font-bold">
              Dica: Você pode copiar o link direto da barra de endereços do vídeo no YouTube.
            </p>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Save size={20} /> SALVAR ALTERAÇÃO
              </>
            )}
          </button>
        </form>

        {/* ÁREA DE PREVIEW */}
        {videoUrl && (
          <div className="mt-12 animate-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between mb-4 px-1">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <ExternalLink size={14} /> Pré-visualização do Player
              </h4>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold uppercase tracking-tighter">Link Processado</span>
            </div>
            
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200">
              <iframe
                className="w-full h-full bg-slate-900"
                src={formatYoutubeUrl(videoUrl)}
                title="Sermão Preview"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}