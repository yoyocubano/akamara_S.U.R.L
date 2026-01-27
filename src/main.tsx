// Build Trigger: 2026-01-09 18:14
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.tsx'
import { registerSW } from 'virtual:pwa-register'

// Add Service Worker registration with custom logic if needed
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Nuevo contenido disponible. ¿Actualizar ahora?')) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('App lista para trabajar offline')
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
)

