import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vertice from './pages/empreendimentos/Vertice'
import Evolution from './pages/empreendimentos/Evolution'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empreendimentos/vertice" element={<Vertice />} />
        <Route path="/empreendimentos/evolution" element={<Evolution />} />
      </Routes>
    </BrowserRouter>
  )
}
