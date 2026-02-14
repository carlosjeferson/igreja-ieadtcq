import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AgendaManager from '../components/admin/AgendaManager';
import MinisterioManager from '../components/admin/MinisterioManager';
import SermonManager from '../components/admin/SermonManager'; // Certifique-se de importar o gerente de sermão
import toast, { Toaster } from 'react-hot-toast';
import { Calendar, Users, Video, LogOut, UserCircle, Menu, X, LayoutDashboard } from 'lucide-react';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('agenda');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (user?.name) {
      toast.success(`Bem-vindo, ${user.name.split(' ')[0]}!`, {
        icon: '👋',
        style: { 
          borderRadius: '12px', 
          background: '#1e293b', 
          color: '#fff',
          fontWeight: '600'
        }
      });
    }
  }, []);

  const menuItems = [
    { id: 'agenda', label: 'Agenda Semanal', icon: <Calendar size={20} /> },
    { id: 'ministerios', label: 'Ministérios', icon: <Users size={20} /> },
    { id: 'sermao', label: 'Vídeo em Destaque', icon: <Video size={20} /> },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans overflow-hidden">
      <Toaster position="top-right" />

      {/* OVERLAY MOBILE */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:shadow-none
      `}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">
                AD
              </div>
              <h1 className="text-xl font-black text-slate-800 tracking-tight">Templo Central</h1>
            </div>
            <button className="lg:hidden p-2 text-slate-400 hover:text-slate-600" onClick={() => setIsSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-4 ml-2 italic">Administração</p>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all duration-200 ${
                  activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="mt-auto p-8 border-t border-slate-100">
          <button 
            onClick={signOut}
            className="w-full flex items-center gap-3 p-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all group"
          >
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* HEADER */}
        <header className="h-20 shrink-0 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 md:px-10 flex items-center justify-between z-30">
          <div className="flex items-center gap-4">
            <button 
              className="p-2.5 bg-slate-100 rounded-xl lg:hidden text-slate-600 active:scale-95 transition-transform"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            <div className="hidden sm:block">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">Página Ativa</h2>
              <p className="text-lg font-black text-slate-800 capitalize leading-none">{activeTab}</p>
            </div>
          </div>

          {/* USER INFO */}
          <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center shadow-md">
              <UserCircle size={24} />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-black text-slate-900 leading-tight">{user?.name}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{user?.role}</p>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin scrollbar-thumb-slate-200">
          <section>
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
              Olá, <span className="text-blue-600">{user?.name?.split(' ')[0]}</span>
            </h3>
            <p className="text-sm md:text-base text-slate-500 mt-2 font-medium">
              Bem-vindo ao centro de comando da AD Templo Central Quixeramobim.
            </p>
          </section>

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-12 border border-slate-100 min-h-[500px]">
            {activeTab === 'agenda' && <AgendaManager />}
            {activeTab === 'ministerios' && <MinisterioManager />}
            {activeTab === 'sermao' && <SermonManager />}
          </div>
        </div>
      </main>
    </div>
  );
}