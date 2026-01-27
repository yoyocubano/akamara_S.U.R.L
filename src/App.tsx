import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { ConfigProvider } from './contexts/ConfigContext';
import { onFCP, onLCP, onCLS, type Metric } from 'web-vitals';

// --- LAZY COMPONENTS ---
const Login = lazy(() => import('./pages/Login'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const StatusDashboard = lazy(() => import('./pages/admin/StatusDashboard'));
const Policies = lazy(() => import('./pages/Policies'));
const MobiliarioManager = lazy(() => import('./pages/admin/MobiliarioManager'));
const MessagesManager = lazy(() => import('./pages/admin/MessagesManager'));
const NovedadesManager = lazy(() => import('./pages/admin/NovedadesManager'));
const SettingsManager = lazy(() => import('./pages/admin/SettingsManager'));
const DivisionDetail = lazy(() => import('./pages/divisions/DivisionDetail'));

// Public Pages
const Home = lazy(() => import('./pages/public/Home').then(m => ({ default: m.Home })));
const Contact = lazy(() => import('./pages/public/Contact').then(m => ({ default: m.Contact })));
const Catalog = lazy(() => import('./pages/public/Catalog').then(m => ({ default: m.Catalog })));

// Components
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { Footer } from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { WhatsAppButton } from './components/WhatsAppButton';
import OriChatBot from './components/OriChatBot';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { SEO } from './components/SEO';
import { StructuredData } from './components/common/StructuredData';
import { AnaliticaDeClientes } from './utils/AnaliticaDeClientes';
import CookieBanner from './components/CookieBanner';

import './i18n';

import { AnimatePresence, motion } from 'framer-motion';

// --- MAIN LAYOUT (Wrapper) ---
const PublicLayout = () => (
  <div className="min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 bg-void">
    <Navbar />
    <main className="flex-grow">
      <AnimatePresence mode="wait">
        <motion.div
          key={useLocation().pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </main>
    <BottomNav />
    <OriChatBot />
    <WhatsAppButton />
    <LanguageSwitcher />
    <CookieBanner />
    <Footer />
  </div>
);

const PageLoader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-void">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
      <div className="absolute inset-0 blur-xl bg-amber-500/20 animate-pulse text-center" />
    </div>
  </div>
);

const App = () => {
  const location = useLocation();

  // --- ANALYTICS & MAGIC LOGIN LISTENER ---
  useEffect(() => {
    // 1. Rastrear visita
    AnaliticaDeClientes.trackVisit(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    // 2. Instrumentación de Web Vitals (Log baseline)
    const logMetric = (metric: Metric) => {
      console.log(`📊 PERF: ${metric.name} = ${Math.round(metric.value * 100) / 100}`, {
        rating: metric.rating,
        id: metric.id
      });
    };

    onFCP(logMetric);
    onLCP(logMetric);
    onCLS(logMetric);
  }, []);

  useEffect(() => {
    // 2. Escuchar Combo de Teclas Admin (Ctrl/Meta + L) - Backdoor Desktop
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        sessionStorage.setItem('magic_access', 'true');
        window.location.hash = '/admin';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ConfigProvider>
      <StructuredData />
      <SEO />
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Home />} />
            <Route path="/politicas" element={<Policies />} />
            <Route path="/servicios" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/division/:id" element={<DivisionDetail />} />
          </Route>

          {/* Auth Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<StatusDashboard />} />
              <Route path="novedades" element={<NovedadesManager />} />
              <Route path="mobiliario" element={<MobiliarioManager />} />
              <Route path="mensajes" element={<MessagesManager />} />
              <Route path="config" element={<SettingsManager />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
