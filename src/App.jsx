import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home      = lazy(() => import('./pages/Home'))
const Vertice   = lazy(() => import('./pages/empreendimentos/Vertice'))
const Evolution = lazy(() => import('./pages/empreendimentos/Evolution'))

function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#330218' }}>
      <div style={{ width: '40px', height: '40px', border: '3px solid rgba(91,10,40,0.2)', borderTop: '3px solid #5b0a28', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empreendimentos/vertice" element={<Vertice />} />
          <Route path="/empreendimentos/evolution" element={<Evolution />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
