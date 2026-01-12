import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConfig } from '../../contexts/ConfigContext';

export const HeroSection = () => {
  const { t } = useTranslation();
  const { config } = useConfig();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span className="text-xs uppercase tracking-[0.3em] font-black text-slate-300">
              {t('hero.subtitle', 'SYSTEMS & ENGINEERING')}
            </span>
          </motion.div>

            {/* Title */}
          {/* Title - 3D Effect */}
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter"
          >
            {config.site_title || 'AKAMARA'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 bg-300% animate-gradient">
              {t('hero.creacion', 'S.A.R.L')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            "{t('hero.desc')}"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-10 w-full sm:w-auto"
          >
            <Link 
              to="/catalogo" 
              className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-full overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] border border-amber-400/50"
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span className="tracking-widest uppercase text-sm">{t('nav.catalogo')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="group w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full backdrop-blur-xl hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:border-white/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Shield size={20} className="text-slate-300 group-hover:text-white transition-colors" />
              <span className="tracking-widest uppercase text-sm">{t('nav.contact')}</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
