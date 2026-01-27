import { Home, Grid, Zap, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { prefetchRoute } from '../../utils/prefetchRoutes';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BottomNav = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { icon: Home, label: t('nav.hub'), path: '/' },
    { icon: Grid, label: t('nav.catalogo'), path: '/catalogo' },
    { icon: Zap, label: t('nav.hub_servicios', 'Servicios'), path: '/servicios' },
    { icon: Mail, label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link 
              key={item.path} 
              to={item.path} 
              onMouseEnter={() => prefetchRoute(item.path)}
              className="relative group flex flex-col items-center"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-xl transition-colors ${
                  isActive ? 'text-amber-500' : 'text-slate-400 group-hover:text-white'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute -bottom-1 w-1 h-1 bg-amber-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
