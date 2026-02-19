import { useState, useEffect } from "react"
import logoIgreja from "../assets/logo-igreja.jpg"

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-blue-950/70 backdrop-blur-md py-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-blue-950 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* GRUPO DA LOGO COM EFEITO DE BRILHO */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={logoIgreja} 
              alt="Logo AD Templo Central" 
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20 shadow-inner" 
            />
          </div>
          
          <div className="ml-4 flex flex-col">
            <h1 className="text-base md:text-xl font-black text-white tracking-tighter leading-none">
              ASSEMBLEIA DE DEUS
            </h1>
            <span className="text-[10px] md:text-xs font-light text-blue-300 tracking-[0.2em] uppercase">
              Templo Central • Quixeramobim
            </span>
          </div>
        </div>

        {/* NAVEGAÇÃO DESKTOP COM HOVER ANIMADO */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Sobre', 'Ministérios', 'Sermões', 'Agenda'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95"
          >
            CONTATO
          </a>
        </nav>

        {/* BOTÃO MOBILE ESTILIZADO */}
        <button
          className="lg:hidden p-2 text-blue-300 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? 'w-6 translate-y-2.5 -rotate-45' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${open ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* MENU MOBILE COM OVERLAY */}
      <div className={`lg:hidden absolute w-full top-16 bg-blue-950/98 ${
        scrolled 
          ? "bg-blue-950/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-blue-950"
      }  transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[400px] border-b border-white/10' : 'max-h-0'}`}>
        <div className="px-8 py-8 flex flex-col space-y-6">
          {['Sobre', 'Ministérios', 'Sermões', 'Agenda', 'Contato'].map((item) => (
            <a 
              key={item}
              onClick={() => setOpen(false)} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-light tracking-widest hover:text-blue-400 transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header