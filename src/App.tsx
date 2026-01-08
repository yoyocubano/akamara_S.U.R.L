import { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Sun, Orbit, ArrowRight, Star } from 'lucide-react';
import { DIVISIONS, LEGAL_INFO } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <span className="text-white font-black text-2xl">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-amber-500 transition-colors">Akamara</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-bold">Inicio de la creación</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {[
              { name: 'Génesis', path: '/' },
              { name: 'Divisiones', path: '/servicios' },
              { name: 'Legado', path: '/legal' },
              { name: 'Contacto', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.25em] font-black transition-all relative group ${location.pathname === link.path ? 'text-amber-500' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-void">
    {/* Primal Energy Background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
      <img
        src="https://images.unsplash.com/photo-1464802686167-b939a67e06a1?auto=format&fit=crop&q=80&w=2000"
        className="w-full h-full object-cover opacity-20 mix-blend-screen"
        alt="Cosmic Energy"
      />
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-300">Antes del tiempo, Akamara</span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
        El Destello de la <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-white to-amber-700 energy-pulse">
          Creación
        </span>
      </h1>

      <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light italic">
        "En el principio hubo energía. Luego hubo forma. Akamara nace del mismo principio del planeta para edificar el futuro de Cuba."
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link to="/servicios" className="group relative px-12 py-5 bg-amber-500 text-slate-950 font-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
          <span className="relative z-10 flex items-center space-x-2">
            <span>Iniciar Exploración</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 shimmer opacity-50"></div>
        </Link>
        <button className="px-12 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all">
          Ver Nuestro Legado
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
      <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      <span className="text-[8px] uppercase tracking-[0.5em] text-amber-500 font-black">Descender</span>
    </div>
  </section>
);

const CreationElements = () => (
  <section className="py-32 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.5em] mb-6 flex items-center">
            <Orbit className="mr-2 w-4 h-4 animate-spin-slow" />
            La Alquimia del Negocio
          </h2>
          <h3 className="text-5xl font-black text-white mb-8 leading-tight">
            Materializando el <span className="text-amber-500">Orden</span> desde el <span className="text-slate-700">Vacío</span>.
          </h3>
          <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
            Akamara no es solo un hub empresarial; es el agente de cambio que ordena la materia y la energía para crear valor. Cada división es un elemento fundamental en la creación de la infraestructura moderna en la isla.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all group">
              <Sun className="text-amber-500 mb-4 group-hover:rotate-45 transition-transform" />
              <h4 className="text-white font-bold mb-2">Luz Constante</h4>
              <p className="text-xs text-slate-500">Servicios que nunca se detienen, iluminando el camino comercial.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all group">
              <Star className="text-amber-500 mb-4 group-hover:scale-125 transition-transform" />
              <h4 className="text-white font-bold mb-2">Excelencia Estelar</h4>
              <p className="text-xs text-slate-500">Calidad que brilla por su precisión y acabados de lujo.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {DIVISIONS.slice(0, 4).map((div, i) => (
            <div key={div.id} className={`relative rounded-[2rem] overflow-hidden group h-64 ${i % 2 !== 0 ? 'mt-8' : ''}`}>
              <img src={div.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={div.title} />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-amber-900/40 transition-all"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[8px] uppercase tracking-widest text-amber-500 font-black mb-1">{div.subtitle}</span>
                <h4 className="text-white font-black text-lg leading-none">{div.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DivisionExplorer = () => (
  <section className="py-32 bg-void">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.6em] mb-4">Los Elementos</h2>
        <h3 className="text-6xl font-black text-white">Divisiones del <span className="energy-pulse text-amber-500">Hub</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {DIVISIONS.map((div) => (
          <div key={div.id} className="group bg-white/5 border border-white/10 p-1 rounded-[3rem] hover:border-amber-500 transition-all duration-500 cosmic-glow">
            <div className="bg-slate-950 rounded-[2.8rem] p-8 h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-800 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                {div.icon}
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-black mb-2">{div.subtitle}</h4>
              <h3 className="text-3xl font-black text-white mb-4">{div.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light italic">"{div.desc}"</p>
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-500 transition-colors">Activar División</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-amber-500 rounded-2xl mb-8 flex items-center justify-center font-black text-slate-950 text-3xl shadow-[0_0_30px_rgba(245,158,11,0.3)]">
          A
        </div>
        <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Akamara S.U.R.L.</h3>
        <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12">Inicio de la Creación</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mb-20">
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Génesis</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">Nuestra Energía</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">Historia del Tiempo</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Divisiones</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">La Forma (DUJO)</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">La Tierra</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Legalidad</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">NIT: {LEGAL_INFO.nit}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">Registro Mercantil</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Flujo</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">Contacto Vital</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest hover:text-amber-500 cursor-pointer transition-colors">Sede La Habana</p>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black text-slate-600 tracking-[0.3em]">
          <p>© 2024 AKAMARA S.U.R.L. - EL DESPERTAR DEL NEGOCIO</p>
          <div className="flex space-x-6">
            <span className="hover:text-amber-500 cursor-pointer">PRIVACIDAD</span>
            <span className="hover:text-amber-500 cursor-pointer">TÉRMINOS</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-void">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CreationElements />
                <DivisionExplorer />
              </>
            } />
            <Route path="/servicios" element={<DivisionExplorer />} />
            <Route path="/legal" element={<CreationElements />} />
            <Route path="/contact" element={<div className="pt-40 pb-20 text-center"><h1 className="text-4xl font-black text-white">Canalización de Energía (Contacto)</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
