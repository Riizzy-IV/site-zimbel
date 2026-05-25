import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EvolucaoObra from '../../components/EvolucaoObra'

/* ─── assets ─── */
const heroBg = '/empreendimentos/vertice/hero-bg.avif'
const fachada = '/empreendimentos/vertice/fachada-portrait.avif'
const icoPin = '/empreendimentos/vertice/icon-pin.svg'
const icoBed = '/empreendimentos/vertice/icon-bed.svg'
const icoLazer = '/empreendimentos/vertice/icon-lazer.svg'
const icoWpp = '/empreendimentos/vertice/icon-wpp.svg'

/* ─── plantas assets ─── */
const plantasLabelIcon = '/empreendimentos/vertice/plantas-label-icon.svg'
const plantasTabIcon = '/empreendimentos/vertice/plantas-tab-icon.svg'
const plantasNavArrow = '/empreendimentos/vertice/plantas-nav-arrow.svg'
const plantasDownload = '/empreendimentos/vertice/plantas-download-icon.svg'
const plantasSpecBed = '/empreendimentos/vertice/plantas-spec-bed.svg'
const plantasSpecPe = '/empreendimentos/vertice/plantas-spec-pe-direito.svg'
const plantaFloor = '/empreendimentos/vertice/planta-unidade1.avif'

const PLANTAS = [
  /* ── Pavimento Térreo (pé direito duplo) ── */
  { id: 0, area: '32,58m²*', tipo: 'Unidade 1 Inf/Sup • Pavimento Térreo', dorms: 'Loft', pe: 'Pé direito duplo', floor: '/plantas/32,58m%C2%B2-inf.avif', floorSup: '/plantas/32,58m%C2%B2-sup.avif' },
  { id: 1, area: '26,71m²*', tipo: 'Unidade 2 Inf/Sup • Pavimento Térreo', dorms: 'Loft', pe: 'Pé direito duplo', floor: '/plantas/26,71m%C2%B2-inf.avif', floorSup: '/plantas/26,71m%C2%B2-sup.avif' },
  { id: 2, area: '29,46m²*', tipo: 'Unidade 3 Inf/Sup • Pavimento Térreo', dorms: 'Loft', pe: 'Pé direito duplo', floor: '/plantas/29,46m%C2%B2-inf.avif', floorSup: '/plantas/29,46m%C2%B2-sup.avif' },
  { id: 3, area: '39,05m²*', tipo: 'Unidade 4 Inf/Sup • Pavimento Térreo', dorms: 'Loft', pe: 'Pé direito duplo', floor: '/plantas/39,05m%C2%B2-inf.avif', floorSup: '/plantas/39,05m%C2%B2-sup.avif' },
  { id: 4, area: '36,33m²*', tipo: 'Unidade 5 Inf/Sup • Pavimento Térreo', dorms: 'Loft', pe: 'Pé direito duplo', floor: '/plantas/36,33m%C2%B2-inf.avif', floorSup: '/plantas/36,33m%C2%B2-sup.avif' },
  /* ── Pavimento Tipo 2 — 1º e 2º Pav. ── */
  { id: 5,  area: '24,17m²', tipo: 'Unidades 11 e 21 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/24,17m%C2%B2.avif' },
  { id: 6,  area: '24,20m²', tipo: 'Unidades 12 e 22 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/24,20m%C2%B2.avif' },
  { id: 7,  area: '24,91m²', tipo: 'Unidades 13 e 23 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/24,91m%C2%B2.avif' },
  { id: 8,  area: '30,35m²', tipo: 'Unidades 14 e 24 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/30,35m%C2%B2.avif' },
  { id: 9,  area: '29,31m²', tipo: 'Unidades 15 e 25 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/29,31m%C2%B2.avif' },
  { id: 10, area: '31,15m²', tipo: 'Unidades 16 e 26 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/31,15m%C2%B2.avif' },
  { id: 11, area: '29,10m²', tipo: 'Unidades 17 e 27 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/29,10m%C2%B2.avif' },
  { id: 12, area: '28,85m²', tipo: 'Unidades 18 e 28 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: plantaFloor },
  { id: 13, area: '27,50m²', tipo: 'Unidades 19 e 29 • 1º e 2º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/27,50m%C2%B2.avif' },
  /* ── Pavimento Tipo 3 — 3º Pav. (com área descoberta) ── */
  { id: 14, area: '33,37m²', tipo: 'Unidade 33 • 3º Pavimento', dorms: '1 dorm.', pe: 'Área descoberta', floor: plantaFloor },
  { id: 15, area: '33,52m²', tipo: 'Unidade 34 • 3º Pavimento', dorms: '1 dorm.', pe: 'Área descoberta', floor: plantaFloor },
  { id: 16, area: '54,42m²', tipo: 'Unidade 35 • 3º Pavimento', dorms: '1 dorm.', pe: 'Área descoberta', floor: '/plantas/54,42m%C2%B2.avif' },
  /* ── Pavimento Tipo 4 — 4º ao 12º Pav. ── */
  { id: 17, area: '35,57m²', tipo: 'Planta Final 1 • 4º ao 12º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/35,57m%C2%B2.avif' },
  { id: 18, area: '36,10m²', tipo: 'Planta Final 2 • 4º ao 12º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/36,10m%C2%B2.avif' },
  { id: 19, area: '24,72m²', tipo: 'Planta Final 3 • 4º ao 12º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/24,72m%C2%B2.avif' },
  { id: 20, area: '26,58m²', tipo: 'Planta Final 4 • 4º ao 12º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/26,58m%C2%B2.avif' },
  { id: 21, area: '28,14m²', tipo: 'Planta Final 5 • 4º ao 12º Pavimento', dorms: '1 dorm.', pe: 'Studio', floor: '/plantas/28,14m%C2%B2.avif' },
]

const gridPad = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))'

function useBreakpoint() {
  const get = () => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1440
    return { isMobile: w < 768, isTablet: w >= 768 && w < 1100 }
  }
  const [bp, setBp] = useState(get)
  useEffect(() => {
    const fn = () => setBp(get())
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return bp
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 1 — HERO
════════════════════════════════════════════════════════ */
function HeroVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '480px' : '624px' }}>

      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(12,26,54,0.88) 0%, rgba(12,26,54,0.6) 50%, rgba(12,26,54,0.1) 100%)' }} />
      </div>

      {/* Breadcrumb — topo (desktop only) */}
      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="hover:text-white cursor-pointer transition-colors">Empreendimentos</span>
          <span className="mx-1 opacity-40">›</span>
          <span className="hover:text-white cursor-pointer transition-colors">Lançamentos</span>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Vértice Anália Franco</span>
        </nav>
      )}

      {/* Conteúdo principal — parte inferior */}
      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        {/* Badge */}
        <div className="flex items-center justify-center gap-4 bg-[#31477b] rounded-sm" style={{ width: isMobile ? 'auto' : '336px', alignSelf: isMobile ? 'flex-start' : undefined, height: '36px', marginBottom: '16px', padding: isMobile ? '0 16px' : undefined }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide">Lançamento</span>
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide">Anália Franco</span>
        </div>

        {/* Título */}
        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Vértice Anália Franco
        </h1>

        {/* Endereço */}
        <div className="flex items-center gap-2 text-[#779dff] font-semibold uppercase" style={{ fontSize: isMobile ? '11px' : '13px', marginBottom: '14px' }}>
          <img src={icoPin} alt="" className="w-4 h-4 object-contain brightness-0 invert opacity-70 shrink-0" />
          <span>Rua Bruna, 340 - Chácara Mafalda, São Paulo - SP</span>
        </div>

        {/* Separador */}
        <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.3)', marginBottom: '14px' }} />

        {/* Specs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: isMobile ? '10px 20px' : '32px' }}>
          {[
            { icon: '/cards/cama.svg', label: 'Suítes e 1 dorm.' },
            { icon: '/cards/area.svg', label: '24 a 54m²' },
            ...(!isMobile ? [{ icon: '/cards/plantas.svg', label: 'Rooftop com vista livre' }] : []),
          ].map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={icon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span className="text-white font-semibold" style={{ fontSize: isMobile ? '12px' : '14px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 2 — CONCEITO
════════════════════════════════════════════════════════ */
function ConceitoVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section className="w-full bg-white" style={{ padding: isMobile ? '48px 0' : '72px 0' }}>
      <div
        style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '40px' : isTablet ? '32px' : '64px' }}
      >
        {/* Coluna esquerda */}
        <div style={{ flex: 1, maxWidth: isMobile ? '100%' : isTablet ? '480px' : '560px' }}>

          {/* Label */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <img src="/empreendimentos/vertice/icon-conceito.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#31447b' }}>Conceito</span>
              <span style={{ color: '#779dff', fontSize: '12px' }}>•</span>
              <span style={{ fontSize: '12px', fontWeight: 400, color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vértice Anália Franco</span>
            </div>
            <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
          </div>

          {/* Título */}
          <h2
            style={{ fontSize: 'clamp(26px, 2.2vw, 38px)', color: '#31447b', lineHeight: 1.35, marginBottom: '16px', fontWeight: 400, textTransform: 'uppercase' }}
          >
            O Futuro Agradece<br />Suas Escolhas
          </h2>

          {/* Subtítulo */}
          <p style={{ color: '#a7a7a7', fontSize: '20px', fontWeight: 400, lineHeight: 1.5, marginBottom: '20px' }}>
            Mais do que um investimento,<br />o Vértice é um estilo de vida.
          </p>

          {/* Corpo */}
          <div style={{ color: '#494c4f', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            <p style={{ marginBottom: '8px' }}>Moderno, funcional e cheio de facilidades. Cada detalhe foi pensado para simplificar o cotidiano e elevar o conforto, com uma infraestrutura completa e conectada.</p>
            <p>Nossa parceria com a Housi reforça esse propósito: Oferecer uma gama de serviços para os futuros moradores e gestão inteligente e sem burocracia para investidores. É viver no seu ritmo, com autonomia e conveniência.</p>
          </div>

          {/* Separador */}
          <div style={{ width: '80px', height: '1px', background: '#ddd', marginBottom: '24px' }} />

          {/* Specs 2×2 */}
          <div style={{ display: 'flex', gap: '48px', marginBottom: '28px' }}>
            {/* Coluna 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { icon: '/empreendimentos/vertice/spec-cama.svg', label: 'Dormitórios', value: 'Suítes e 1 dorm.' },
                { icon: '/empreendimentos/vertice/spec-housi.svg', label: 'Parceria com', value: 'Housi' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{
                    width: '32px', height: '32px', border: '1px solid #779dff',
                    borderRadius: '4px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <img src={icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#a7a7a7', marginBottom: '2px' }}>{label}</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#31447b' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Coluna 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { icon: '/empreendimentos/vertice/spec-plantas.svg', label: 'Plantas de', value: '24 a 54m²' },
                { icon: '/empreendimentos/vertice/spec-lazer.svg', label: 'Lazer com', value: 'Rooftop com vista livre' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{
                    width: '32px', height: '32px', border: '1px solid #779dff',
                    borderRadius: '4px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <img src={icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#a7a7a7', marginBottom: '2px' }}>{label}</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#31447b' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: '0', background: 'rgba(119,157,255,0.12)', borderRadius: '8px', overflow: 'hidden' }}>
            {/* Barra lateral esquerda */}
            <div style={{ width: '5px', background: '#31447b', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', padding: '16px', flex: 1 }}>
              {[
                { icon: '/empreendimentos/vertice/cta-book.svg', line1: 'Baixe o', line2: 'Book digital', href: '#' },
                { icon: '/empreendimentos/vertice/cta-house.svg', line1: 'Visite o', line2: 'Hotsite', href: '#' },
              ].map(({ icon, line1, line2, href }) => (
                <a
                  key={line2}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-110 transition-all"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#779dff', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', flex: isMobile ? undefined : '1 1 0' }}
                >
                  <img src={icon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  <img src="/empreendimentos/vertice/cta-arrow.svg" alt="" style={{ width: '8px', height: '14px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ fontSize: '12px', color: '#0c1a36', fontWeight: 400, lineHeight: 1 }}>{line1}</span>
                    <span style={{ fontSize: '16px', color: '#0c1a36', fontWeight: 600, whiteSpace: 'nowrap', lineHeight: 1 }}>{line2}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita — render fachada (tablet+) */}
        {!isMobile && <div className="flex-1 flex justify-end">
          <div className="relative" style={{ maxWidth: isTablet ? '380px' : '540px', width: '100%' }}>
            <img
              src={fachada}
              alt="Perspectiva ilustrada da fachada"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/5' }}
            />
            <div
              className="absolute top-4 right-4 w-8 h-8 rounded"
              style={{ background: '#31447b' }}
            />
            <p className="absolute bottom-4 right-4 text-white text-[11px] font-medium px-3 py-1 rounded-full"
              style={{ background: 'rgba(0,0,0,0.45)' }}>
              Perspectiva ilustrada da fachada
            </p>
          </div>
        </div>}
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 3 — GALERIA
════════════════════════════════════════════════════════ */
const tabs = [
  {
    label: 'Fachada', images: [
      { src: '/empreendimentos/vertice/fachada-1.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/vertice/fachada-2.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/vertice/fachada-3.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/vertice/fachada-4.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/vertice/fachada-5.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/vertice/fachada-6.avif', caption: 'Perspectiva ilustrada da fachada' },
    ]
  },
  {
    label: 'Apartamentos', images: [
      { src: '/empreendimentos/vertice/interna-1.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-2.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-3.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-4.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-5.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-6.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-7.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-8.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-9.avif',  caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-10.avif', caption: 'Perspectiva ilustrada do apartamento' },
      { src: '/empreendimentos/vertice/interna-11.avif', caption: 'Perspectiva ilustrada do apartamento' },
    ]
  },
]

function GaleriaVertice() {
  const { isMobile } = useBreakpoint()
  const [activeTab, setActiveTab] = useState(0)
  const [currentImg, setCurrentImg] = useState(0)

  const images = tabs[activeTab].images
  const total = images.length
  const img = images[currentImg]

  function prev() { setCurrentImg(i => (i - 1 + total) % total) }
  function next() { setCurrentImg(i => (i + 1) % total) }
  function selectTab(i) { setActiveTab(i); setCurrentImg(0) }

  return (
    <section style={{ background: '#e7e7e7', padding: '80px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/empreendimentos/vertice/icon-galeria.svg" alt="" style={{ width: '17px', height: '16px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#494c4f' }}>Galeria de Imagens</span>
            {!isMobile && <><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 400, color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vértice Anália Franco</span></>}
          </div>
          <div style={{ width: '100%', height: '1px', background: '#d4d4d4' }} />
        </div>

        {/* Título */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
            Espaços Pensados Para Sua Convivência
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7' }}>Acesse as imagens no menu abaixo</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', width: isMobile ? '100%' : 'auto', alignItems: 'center', background: '#fff', borderRadius: '4px', padding: isMobile ? '0 12px' : '0 40px', marginBottom: '24px', gap: isMobile ? '0' : '48px', overflowX: isMobile ? 'auto' : 'visible' }}>
          {tabs.map((tab, i) => (
            <div key={tab.label} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '48px', flexShrink: 0 }}>
              <button
                onClick={() => selectTab(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0,
                  padding: isMobile ? '12px 8px' : '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: activeTab === i ? '2px solid #052e7e' : '2px solid transparent',
                  color: '#494c4f', fontSize: isMobile ? '13px' : '14px', fontWeight: 600, whiteSpace: 'nowrap',
                }}
              >
                <img src="/empreendimentos/vertice/icon-tab.svg" alt="" style={{ width: '21px', height: '21px', objectFit: 'contain' }} />
                {tab.label}
              </button>
              {i < tabs.length - 1 && (
                <div style={{ width: '1px', height: '11px', background: '#d4d4d4', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: isMobile ? '4/3' : '1312/578' }}>
          <img
            src={img.src}
            alt={img.caption}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }} />

          {/* Nav arrows */}
          <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', flexShrink: 0, background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L1 8L8 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', flexShrink: 0, background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '8px 0 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Fullscreen btn */}
          <button style={{ position: 'absolute', top: '16px', right: '17px', width: '48px', height: '48px', background: 'rgba(21,69,67,0.56)', backdropFilter: 'blur(2px)', border: 'none', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/empreendimentos/vertice/icon-fullscreen.svg" alt="Tela cheia" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
          </button>

          {/* Caption + counter */}
          <div style={{ position: 'absolute', bottom: '22px', left: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{img.caption}</span>
            <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>
              {currentImg + 1} <span style={{ color: '#779dff' }}>/</span> {total}
            </span>
          </div>

          {/* Aviso direito */}
          <span style={{ position: 'absolute', bottom: '22px', right: '24px', fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
            Imagens meramente ilustrativas
          </span>
        </div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 4 — LAZER
════════════════════════════════════════════════════════ */
const lazerImages = [
  { src: '/empreendimentos/vertice/lazer-rooftop01.avif', caption: 'Perspectiva ilustrada do Rooftop' },
  { src: '/empreendimentos/vertice/lazer-rooftop03.avif', caption: 'Perspectiva ilustrada do Rooftop' },
  { src: '/empreendimentos/vertice/lazer-rooftop04.avif', caption: 'Perspectiva ilustrada do Rooftop' },
  { src: '/empreendimentos/vertice/lazer-jogos.avif',     caption: 'Perspectiva ilustrada do Salão de Jogos' },
  { src: '/empreendimentos/vertice/lazer-fitness.avif',   caption: 'Perspectiva ilustrada da Academia' },
  { src: '/empreendimentos/vertice/lazer-gourmet.avif',   caption: 'Perspectiva ilustrada do Gourmet' },
  { src: '/empreendimentos/vertice/lazer-churrasqueira.avif', caption: 'Perspectiva ilustrada da Churrasqueira' },
  { src: '/empreendimentos/vertice/lazer-coworking.avif', caption: 'Perspectiva ilustrada do Coworking' },
  { src: '/empreendimentos/vertice/lazer-pet.avif',       caption: 'Perspectiva ilustrada do Pet Place' },
  { src: '/empreendimentos/vertice/lazer-sauna.avif',     caption: 'Perspectiva ilustrada da Sauna' },
  { src: '/empreendimentos/vertice/lazer-ifood.avif',     caption: 'Perspectiva ilustrada do iFood' },
]

const amenidades = [
  [
    { icon: 'ico-mercado.svg', label: 'Mini mercado' },
    { icon: 'ico-coworking.svg', label: 'Coworking/Sala de reunião' },
    { icon: 'ico-convivencia.svg', label: 'Espaço de convivência' },
    { icon: 'ico-solarium.svg', label: 'Solarium' },
  ],
  [
    { icon: 'ico-delivery.svg', label: 'Espaço delivery' },
    { icon: 'ico-academia.svg', label: 'Academia' },
    { icon: 'ico-lavanderia.svg', label: 'Lavanderia' },
    { icon: 'ico-piscina.svg', label: 'Piscina' },
  ],
  [
    { icon: 'ico-bicicletario.svg', label: 'Bicicletário' },
    { icon: 'ico-fitness.svg', label: 'Espaço fitness externo' },
    { icon: 'ico-festas.svg', label: 'Salão de festas' },
    { icon: 'ico-rooftop.svg', label: 'Rooftop' },
  ],
  [
    { icon: 'ico-pet.svg', label: 'Espaço pet' },
    { icon: 'ico-jogos.svg', label: 'Salão de jogos' },
    { icon: 'ico-gourmet.svg', label: 'Espaço gourmet' },
    { icon: 'ico-sauna.svg', label: 'Sauna' },
  ],
]

function LazerVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  const [imgIdx, setImgIdx] = useState(0)
  const total = lazerImages.length
  const img   = lazerImages[imgIdx]
  const next  = () => setImgIdx(i => (i + 1) % total)
  const prev  = () => setImgIdx(i => (i - 1 + total) % total)

  return (
    <section style={{ background: '#fff', padding: isMobile ? '48px 0' : '80px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/empreendimentos/vertice/icon-lazer-label.svg" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#494c4f' }}>Lazer</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vértice Anália Franco</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
        </div>

        {/* Título + descrição */}
        <div style={{ maxWidth: '790px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
            Experiências Premium Para o Seu Dia a Dia
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.35 }}>
            Um lazer pensado para acompanhar o ritmo da vida moderna. No Vértice Anália Franco, cada espaço foi projetado para unir bem-estar, praticidade e convivência, com ambientes completos que transformam a rotina em uma experiência mais leve, conectada e funcional.
          </p>
        </div>

        {/* Galeria de imagens — 1 no mobile, 2 no tablet/desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          {/* Imagem principal */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: isMobile ? '260px' : isTablet ? '320px' : '440px' }}>
            <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35))' }} />
            <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8L8 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {/* No mobile o next fica na imagem principal */}
            {isMobile && (
              <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '8px 0 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            )}
            <button style={{ position: 'absolute', top: '16px', right: '16px', width: '48px', height: '48px', background: 'rgba(21,69,67,0.56)', backdropFilter: 'blur(2px)', border: 'none', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/empreendimentos/vertice/icon-fullscreen.svg" alt="" style={{ width: '14px', height: '14px' }} />
            </button>
            <div style={{ position: 'absolute', bottom: '16px', left: '0', display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '16px' }}>
              <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
              <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{img.caption}</span>
            </div>
            <span style={{ position: 'absolute', bottom: '16px', right: '16px', fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
              Imagens meramente ilustrativas
            </span>
          </div>

          {/* Imagem secundária — só tablet/desktop */}
          {!isMobile && (
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: isTablet ? '320px' : '440px' }}>
              <img src={lazerImages[(imgIdx + 1) % total].src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35))' }} />
              <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '8px 0 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button style={{ position: 'absolute', top: '16px', right: '16px', width: '48px', height: '48px', background: 'rgba(21,69,67,0.56)', backdropFilter: 'blur(2px)', border: 'none', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/empreendimentos/vertice/icon-fullscreen.svg" alt="" style={{ width: '14px', height: '14px' }} />
              </button>
              <div style={{ position: 'absolute', bottom: '16px', left: '0', display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '16px' }}>
                <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
                <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{lazerImages[(imgIdx + 1) % total].caption}</span>
              </div>
              <span style={{ position: 'absolute', bottom: '16px', right: '16px', fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                Imagens meramente ilustrativas
              </span>
            </div>
          )}
        </div>

        {/* Grid de amenidades */}
        {isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px 8px' }}>
            {amenidades.flat().map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <div style={{ width: '1px', minHeight: '18px', background: '#779dff', flexShrink: 0, marginTop: '2px' }} />
                <img src={`/empreendimentos/vertice/${icon}`} alt="" style={{ width: '14px', height: '14px', objectFit: 'contain', flexShrink: 0, marginTop: '3px' }} />
                <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#31477b', flexShrink: 0, marginTop: '7px' }} />
                <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600, lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px 0' }}>
            {amenidades.map((col, ci) => (
              <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {col.map(({ icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '1px', height: '18px', background: '#779dff', flexShrink: 0 }} />
                    <img src={`/empreendimentos/vertice/${icon}`} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#31477b', flexShrink: 0 }} />
                    <span style={{ fontSize: '16px', color: '#a7a7a7', fontWeight: 600 }}>{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 5 — VÍDEO
════════════════════════════════════════════════════════ */
const YT_ID = 'VIbe5I9ax4o'

function VideoVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Seção */}
      <section
        style={{
          position: 'relative', height: isMobile ? '360px' : isTablet ? '440px' : '520px', overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Capa — fachada do empreendimento */}
        <img
          src="/empreendimentos/vertice/lazer-img-3.avif"
          alt="Capa do vídeo"
          loading="lazy"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
        />

        {/* Botão play central-direito */}
        {!isMobile && (
          <button
            onClick={() => setOpen(true)}
            style={{
              position: 'absolute', zIndex: 2,
              right: '25%', top: '50%', transform: 'translate(50%, -50%)',
              width: '140px', height: '140px', borderRadius: '50%',
              background: 'rgba(119,157,255,0.2)',
              border: '2px solid rgba(119,157,255,0.7)',
              backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(119,157,255,0.45)'; e.currentTarget.style.transform = 'translate(50%, -50%) scale(1.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(119,157,255,0.2)'; e.currentTarget.style.transform = 'translate(50%, -50%) scale(1)' }}
          >
            <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
              <path d="M10 6L26 16L10 26V6Z" fill="white" />
            </svg>
          </button>
        )}

        {/* Conteúdo */}
        <div
          style={{
            position: 'relative', zIndex: 1, height: '100%',
            paddingLeft: gridPad, paddingRight: gridPad,
            display: 'flex', alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '620px' }}>

            {/* Label */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <img src="/empreendimentos/vertice/icon-video-label.svg" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e3e3e3' }}>Vídeo Conceito</span>
                {!isMobile && <>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vértice Anália Franco</span>
                </>}
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            </div>

            {/* Título */}
            <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#779dff', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', lineHeight: 1.2 }}>
              O Futuro Agradece<br />Suas Escolhas
            </h2>

            {/* Descrição */}
            <p style={{ fontSize: '16px', color: '#a7a7a7', marginBottom: '64px' }}>
              Assista o vídeo e conheça os detalhes do empreendimento
            </p>

            {/* CTA */}
            <button
              onClick={() => setOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#779dff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Assista ao vídeo
              </span>
              <img src="/empreendimentos/vertice/icon-play.svg" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.88)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Fechar */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute', top: '24px', right: '32px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#fff', fontSize: '32px', lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Player */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: '90vw', maxWidth: '1100px', aspectRatio: '16/9' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
              title="Vídeo Vértice Anália Franco"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 6 — TOUR VIRTUAL
════════════════════════════════════════════════════════ */
function TourVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section style={{ background: '#fff', padding: isMobile ? '48px 0' : '80px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/empreendimentos/vertice/icon-tour.svg" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#494c4f' }}>Tour Virtual</span>
            {!isMobile && <>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vértice Anália Franco</span>
            </>}
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
        </div>

        {/* Título + descrição */}
        <div style={{ maxWidth: '790px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
            Explore o empreendimento em 360°
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.6 }}>
            Navegue pelos ambientes do Vértice Anália Franco com nosso tour virtual interativo. Conheça cada detalhe do empreendimento antes mesmo de uma visita presencial.
          </p>
        </div>

        {/* Tour Virtual iframe */}
        <div style={{ width: '100%', height: isMobile ? '340px' : isTablet ? '480px' : '680px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://tour.meupasseiovirtual.com/view/j84YeloeZdi"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            referrerPolicy="origin"
            allow="fullscreen *; autoplay *; screen-wake-lock *; geolocation *; accelerometer *; gyroscope *; xr-spatial-tracking *; vr *; web-share *;"
            allowFullScreen
            title="Tour Virtual Vértice Anália Franco"
          />
        </div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 7 — PLANTAS
════════════════════════════════════════════════════════ */
function PlantasVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  const [activeTab, setActiveTab] = useState(0)
  const [floorTab, setFloorTab] = useState('inf')
  const [lightbox, setLightbox] = useState(null)
  const tabRef = useRef(null)
  const planta = PLANTAS[activeTab]

  function selectTab(i) {
    setActiveTab(i)
    setFloorTab('inf')
  }

  function scrollTabs(dir) {
    if (tabRef.current) tabRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <>
    <section style={{ background: '#fff', borderTop: '1px solid #e7e7e7', paddingTop: isMobile ? '60px' : '120px', paddingBottom: isMobile ? '60px' : '120px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

        {/* ── Label + separator ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Plantas</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Vértice Anália Franco</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e7e7e7' }} />
        </div>

        {/* ── Título + descrição ── */}
        <div style={{ maxWidth: '864px', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 800, textTransform: 'uppercase', color: '#31447b', lineHeight: 1.35, margin: 0 }}>
            Praticidade, sofisticação e bem-estar em cada metro quadrado.
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.6, margin: 0 }}>
            Compactas e funcionais, elas se adaptam com perfeição a diferentes estilos de vida — seja para quem busca um lar moderno e eficiente, seja para quem investe com foco em alta liquidez e valorização.
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div style={{ position: 'relative', height: '46px', marginBottom: '24px' }}>
          {/* Left nav */}
          <button
            onClick={() => scrollTabs(-1)}
            style={{ position: 'absolute', left: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px', transform: 'rotate(180deg)' }} />
          </button>

          {/* Scrollable tabs */}
          <div
            ref={tabRef}
            style={{ overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none', position: 'absolute', left: '28px', right: '28px', top: 0, height: '46px', background: 'rgba(119,157,255,0.2)', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '0' }}
          >
            {PLANTAS.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {i > 0 && (
                  <div style={{ width: '1px', height: '11px', background: '#c5c5c5', flexShrink: 0, margin: '0 20px' }} />
                )}
                <button
                  onClick={() => selectTab(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px', height: '46px', padding: '0', border: 'none', background: 'none', cursor: 'pointer', flexShrink: 0,
                    borderBottom: activeTab === i ? '2px solid #052e7e' : '2px solid transparent',
                  }}
                >
                  <img src={plantasTabIcon} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '14px', color: '#494c4f', whiteSpace: 'nowrap', fontWeight: 600 }}>{p.area.toLowerCase()}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Right nav */}
          <button
            onClick={() => scrollTabs(1)}
            style={{ position: 'absolute', right: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px' }} />
          </button>
        </div>

        {/* ── Card ── */}
        <div style={{ background: '#e7e7e7', borderRadius: '8px', padding: isMobile ? '14px' : isTablet ? '15px 24px 13px 14px' : '15px 80px 13px 14px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '40px', alignItems: isMobile ? 'stretch' : 'center' }}>

          {/* Left — floor plan panel */}
          <div style={{ background: 'white', borderRadius: '4px', height: isMobile ? 'auto' : '726px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', flexShrink: 0 }}>
            {/* Blue vertical accent */}
            <div style={{ width: '3px', height: isMobile ? '220px' : '512px', background: '#31447b', flexShrink: 0 }} />

            <div style={{ width: isMobile ? 'calc(100% - 13px)' : '546px', height: isMobile ? '300px' : '474px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
              {planta.floorSup && (
                /* Inferior / Superior tabs */
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[{ key: 'inf', label: 'Inferior' }, { key: 'sup', label: 'Superior' }].map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setFloorTab(key)}
                      style={{
                        padding: '5px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                        background: floorTab === key ? '#31447b' : 'rgba(119,157,255,0.15)',
                        color: floorTab === key ? '#fff' : '#779dff',
                        transition: 'all 0.2s ease',
                      }}
                    >{label}</button>
                  ))}
                </div>
              )}
              <img
                src={planta.floorSup && floorTab === 'sup' ? planta.floorSup : planta.floor}
                alt="Planta"
                onClick={() => setLightbox(planta.floorSup && floorTab === 'sup' ? planta.floorSup : planta.floor)}
                style={{ flex: 1, width: '100%', height: 0, objectFit: 'contain', cursor: 'zoom-in' }}
              />
            </div>

            {/* Fullscreen button */}
            <button style={{ position: 'absolute', top: '14px', right: '14px', width: '48px', height: '48px', background: '#779dff', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6V1H6M10 1H15V6M15 10V15H10M6 15H1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right — specs */}
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: isMobile ? 'auto' : isTablet ? '560px' : '726px', paddingTop: isMobile ? '8px' : '32px', paddingBottom: isMobile ? '16px' : '32px', gap: isMobile ? '32px' : '0' }}>

            {/* Top: area title + separator + specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Area + tipo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <h3 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, textTransform: 'uppercase', color: '#31447b', lineHeight: 1, margin: 0 }}>{planta.area}</h3>
                <p style={{ fontSize: '16px', color: '#a7a7a7', textTransform: 'uppercase', margin: 0 }}>{planta.tipo}</p>
              </div>
              {/* Separator */}
              <div>
                <div style={{ width: '77px', height: '2px', background: '#779dff', marginBottom: '1px' }} />
                <div style={{ width: '100%', height: '1px', background: '#d0d0d0' }} />
              </div>
              {/* Spec items */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={plantasSpecBed} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, whiteSpace: 'nowrap' }}>{planta.dorms}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={plantasSpecPe} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, whiteSpace: 'nowrap' }}>{planta.pe}</span>
                </div>
              </div>

              {/* Aviso unidades com * */}
              {planta.area.includes('*') && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#fff8e1', border: '1px solid #f0c040', borderRadius: '6px', padding: '12px 14px' }}>
                  <span style={{ fontSize: '16px', lineHeight: 1, marginTop: '1px' }}>⚠️</span>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6b5000', lineHeight: 1.5 }}>
                    <strong>Atenção:</strong> Esta unidade não será entregue com o segundo pavimento construído.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* Lightbox */}
    {lightbox && (
      <div
        onClick={() => setLightbox(null)}
        style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <button
          onClick={() => setLightbox(null)}
          style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '32px', lineHeight: 1 }}
        >×</button>
        <div
          onClick={e => e.stopPropagation()}
          style={{ background: '#fff', borderRadius: '8px', padding: '24px', maxWidth: '90vw', maxHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: 'calc(90vw - 48px)', maxHeight: 'calc(90vh - 48px)', objectFit: 'contain' }}
          />
        </div>
      </div>
    )}
    </>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 8 — LOCALIZAÇÃO
════════════════════════════════════════════════════════ */
const locMapsIcon = '/empreendimentos/vertice/localizacao-maps-icon.svg'
const locWazeIcon = '/empreendimentos/vertice/localizacao-waze-icon.svg'
const locShare = '/empreendimentos/vertice/localizacao-share.svg'
const locDestaques = '/empreendimentos/vertice/localizacao-destaques-icon.svg'
const locCardIcon = '/empreendimentos/vertice/localizacao-card-icon.svg'
const locCeret = '/empreendimentos/vertice/localizacao-ceret.avif'
const locSuper = '/empreendimentos/vertice/localizacao-supermercado.avif'
const locHospital = '/empreendimentos/vertice/localizacao-hospital.avif'

const DESTAQ_TAGS = [
  'Shopping Anália Franco', 'Hospital e Maternidade Vitória',
  'Parque CERET', 'Supermercado Negreiros', 'Futura Estação Anália Franco',
]
const INFRA_CARDS = [
  'Mobilidade', 'Transporte', 'Lazer', 'Gastronomia',
  'Saúde', 'Educação', 'Mercados', 'Serviços e Comodidade',
]
const LOC_FOTOS = [
  { src: locCeret, label: 'Parque Ceret' },
  { src: locSuper, label: 'Supermercado Negreiros' },
  { src: locHospital, label: 'Hospital e Maternidade Vitória' },
]

function LocalizacaoVertice() {
  const { isMobile, isTablet } = useBreakpoint()
  const [mapaView, setMapaView] = useState('maps') // 'maps' | '360'

  return (
    <section style={{ borderTop: '1px solid #e7e7e7' }}>

      {/* ── Header: label + title ── */}
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, paddingTop: isMobile ? '60px' : '120px', paddingBottom: isMobile ? '40px' : '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={icoPin} alt="" style={{ width: '18px', height: '22px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', color: '#494c4f', fontWeight: 600, textTransform: 'uppercase' }}>Localização</span>
          </div>
          {!isMobile && <>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600, textTransform: 'uppercase' }}>Vértice Anália Franco</span>
          </>}
        </div>
        <div style={{ height: '1px', background: '#e7e7e7', marginBottom: '32px' }} />
        <h2 style={{ fontSize: isMobile ? '20px' : '32px', color: '#31447b', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.35, maxWidth: '864px', margin: 0 }}>
          Localização Estratégica, Próxima dos Principais Pontos do Bairro
        </h2>
      </div>

      {/* ── Mapa + conteúdo ── */}
      <div>
        {/* Mapa full-width com margem negativa para overlap */}
        <div style={{ marginBottom: isMobile ? '-60px' : '-127px' }}>

          {/* Abas Maps / 360° */}
          <div style={{ display: 'flex', paddingLeft: gridPad }}>
            {[
              { key: 'maps', label: 'Mapa' },
              { key: '360', label: 'Tour 360°' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setMapaView(tab.key)}
                style={{
                  padding: '10px 28px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '6px 6px 0 0',
                  marginRight: '4px',
                  background: mapaView === tab.key ? '#31477b' : '#e8edf5',
                  color: mapaView === tab.key ? 'white' : '#6b7280',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ width: '100%', aspectRatio: isMobile ? '3/4' : '1920/800', position: 'relative', overflow: 'hidden' }}>
            {/* Google Maps */}
            <iframe
              src="https://maps.google.com/maps?q=Rua+Bruna+340+Analia+Franco+Sao+Paulo+SP&output=embed&hl=pt-BR&z=16"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', opacity: mapaView === 'maps' ? 1 : 0, pointerEvents: mapaView === 'maps' ? 'auto' : 'none', transition: 'opacity 0.3s' }}
              title="Mapa Vértice Anália Franco"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Tour 360° */}
            <iframe
              src="https://tour.meupasseiovirtual.com/view/aRH3SqOsnal"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', opacity: mapaView === '360' ? 1 : 0, pointerEvents: mapaView === '360' ? 'auto' : 'none', transition: 'opacity 0.3s' }}
              title="Tour Virtual 360° Vértice Anália Franco"
              referrerPolicy="origin"
              allow="fullscreen *; autoplay *; screen-wake-lock *; geolocation *; accelerometer *; gyroscope *; xr-spatial-tracking *; vr *; web-share *;"
              allowFullScreen
            />
            {/* Botões overlay top-right — só no Maps */}
            {mapaView === 'maps' && (
              <div style={{ position: 'absolute', top: '14px', right: '15px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '8px', alignItems: 'flex-end', zIndex: 10 }}>
                <a
                  href="https://maps.google.com/maps?q=Rua+Bruna,+340,+An%C3%A1lia+Franco,+S%C3%A3o+Paulo"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 24px', background: '#0c1a36', borderRadius: '4px', textDecoration: 'none' }}
                >
                  <img src={locMapsIcon} alt="" style={{ width: '14px', height: '14px' }} />
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>Abrir com Maps</span>
                </a>
                <a
                  href="https://www.waze.com/ul?q=Rua+Bruna+340+An%C3%A1lia+Franco+S%C3%A3o+Paulo"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 24px', background: '#0c1a36', borderRadius: '4px', textDecoration: 'none' }}
                >
                  <img src={locWazeIcon} alt="" style={{ width: '18px', height: '18px' }} />
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>Abrir com Waze</span>
                </a>
                <img src={locShare} alt="Compartilhar" style={{ width: '38px', height: '38px', cursor: 'pointer', display: 'block' }} />
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo: duas colunas + fotos */}
        <div style={{ position: 'relative', zIndex: 1, paddingLeft: gridPad, paddingRight: gridPad, display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '62px', paddingBottom: isMobile ? '60px' : '120px' }}>

          {/* Duas colunas */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0' : '32px', alignItems: 'flex-start' }}>

            {/* Coluna esquerda */}
            <div style={{ width: isMobile ? '100%' : 'calc(50% - 16px)', flexShrink: 0 }}>
              {/* Card azul escuro (127px — overlap com mapa) */}
              <div style={{ background: '#31477b', borderRadius: '8px 8px 0 0', padding: '23px 17px 14px 21px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#779dff', fontWeight: 600 }}>Stand de vendas:</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>Avenida Álvaro Ramos, 896 - Belém</span>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
                    <img src={icoPin} alt="" style={{ width: '18px', height: '22px', flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
                    <span style={{ fontSize: '16px', color: 'white', fontWeight: 600 }}>Rua Bruna, 340 - Chácara Mafalda</span>
                  </div>
                  <a href="https://maps.google.com/maps?q=Rua+Bruna,+340,+An%C3%A1lia+Franco,+S%C3%A3o+Paulo" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', textDecoration: 'none', flexShrink: 0 }}>
                    <span style={{ fontSize: '12px', color: '#e3e3e3', fontWeight: 600 }}>Como chegar</span>
                    <svg width="7" height="13" viewBox="0 0 7.75 14" fill="none">
                      <path d="M0.75 0.75L7 7L0.75 13.25" stroke="#e3e3e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card claro (#f6f6f6) */}
              <div style={{ background: '#f6f6f6', borderRadius: '0 0 8px 8px', padding: '42px 35px 31px 29px', display: 'flex', flexDirection: 'column', gap: '47px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '47px' }}>
                  <p style={{ fontSize: '16px', color: '#494c4f', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                    No coração do Anália Franco, onde a cidade cresce, se reinventa e cada novo passo aponta para o futuro, nasce um projeto criado para quem enxerga além.
                    <br /><br />
                    Vertice Anália Franco, um encontro raro entre mobilidade, modernidade e o privilégio de estar onde tudo acontece.
                  </p>
                  <p style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                    O Jardim Anália Franco é um bairro nobre na Zona Leste de São Paulo que oferece alta qualidade de vida, combinando segurança, excelente infraestrutura (com vias de acesso importantes e serviços completos) e lazer de alto padrão (como o Shopping Anália Franco e o Parque CERET).
                  </p>
                </div>

                {/* Destaques header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={locDestaques} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#31477b', fontWeight: 600, whiteSpace: 'nowrap' }}>Destaques da localização</span>
                  <div style={{ flex: 1, height: '1px', background: '#e7e7e7' }} />
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 16px' }}>
                  {DESTAQ_TAGS.map(tag => (
                    <div key={tag} style={{ border: '1px solid #779dff', borderRadius: '8px', padding: '10px 12px' }}>
                      <span style={{ fontSize: '14px', color: '#31477b', fontWeight: 600, whiteSpace: 'nowrap' }}>{tag}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Mapa 3D */}
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#779dff', borderRadius: '8px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
                  <img src="/empreendimentos/vertice/localizacao-mapa3d-icon.svg" alt="" style={{ width: '18px', height: '18px' }} />
                  <svg width="7" height="13" viewBox="0 0 7.75 14" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M0.75 0.75L7 7L0.75 13.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', textAlign: 'left' }}>
                    <span style={{ fontSize: '12px', color: '#0c1a36', fontWeight: 700, display: 'block', lineHeight: 1 }}>Acesse o</span>
                    <span style={{ fontSize: '16px', color: '#0c1a36', fontWeight: 700, display: 'block', lineHeight: 1 }}>Mapa 3D</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Coluna direita */}
            <div style={{ width: isMobile ? '100%' : 'calc(50% - 16px)', flexShrink: 0, paddingTop: isMobile ? '32px' : '80px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {/* Sub-label */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={icoPin} alt="" style={{ width: '18px', height: '22px' }} />
                    <span style={{ fontSize: '13px', color: '#494c4f', fontWeight: 600, textTransform: 'uppercase' }}>Infraestrutura e Mobilidade</span>
                  </div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600, textTransform: 'uppercase' }}>Vértice Anália Franco</span>
                </div>
                <div style={{ height: '1px', background: '#e7e7e7' }} />
              </div>

              {/* Sub-título */}
              <p style={{ fontSize: '20px', color: '#31477b', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.3, maxWidth: '448px', margin: 0 }}>
                Uma região em constante valorização e evolução urbana
              </p>

              {/* Grid de cards de infra — 1 col no mobile, 2 cols no desktop */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '12px' : '24px 32px' }}>
                {INFRA_CARDS.map(label => (
                  <div key={label} style={{ background: '#0c1a36', borderRadius: '8px', height: '50px', padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0, overflow: 'hidden' }}>
                      <div style={{ width: '1px', height: '18px', background: '#4f6db5', flexShrink: 0 }} />
                      <img src={locCardIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                      <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4f6db5', flexShrink: 0 }} />
                      <span style={{ fontSize: '16px', color: '#e3e3e3', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fotos de pontos de referência */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '24px' : '32px' }}>
            {LOC_FOTOS.map(f => (
              <div key={f.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ aspectRatio: '416/277', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={f.src} alt={f.label} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderLeft: '1px solid #779dff', padding: '0 18px', height: '18px' }}>
                  <span style={{ fontSize: '12px', color: '#31477b', fontWeight: 600, whiteSpace: 'nowrap' }}>{f.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   PÁGINA
════════════════════════════════════════════════════════ */
export default function Vertice() {
  return (
    <>
      <Header />
      <HeroVertice />
      <ConceitoVertice />
      <GaleriaVertice />
      <LazerVertice />
      <VideoVertice />
      <TourVertice />
      <PlantasVertice />
      <LocalizacaoVertice />
      <EvolucaoObra
        etapas={[
          { label: 'Demolição',     pct: 100 },
          { label: 'Terraplanagem', pct: 100 },
          { label: 'Fundação',      pct: 30  },
          { label: 'Estrutura',     pct: 0   },
          { label: 'Alvenaria',     pct: 0   },
          { label: 'Hidráulica',    pct: 0   },
          { label: 'Elétrica',      pct: 0   },
          { label: 'Acabamento',    pct: 0   },
          { label: 'Pintura',       pct: 0   },
        ]}
        fotos={[
          { src: 'https://drive.google.com/thumbnail?id=1SPueACIxXUzJ54VyTq-jnZblmbG5S5mU&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
          { src: 'https://drive.google.com/thumbnail?id=1tOkYVbHCO5SPc7wwcJ_yBfygEeKHdIkE&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
          { src: 'https://drive.google.com/thumbnail?id=1m0zaNTVR1uzYClSMfqWkctiFStY-STCj&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
          { src: 'https://drive.google.com/thumbnail?id=150xBO04L70vsySanckM3OqQSjeGtpSWU&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
          { src: 'https://drive.google.com/thumbnail?id=1hOAHMQ4VGVTiwx9ZenMbM0O5mDD8O4rZ&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
          { src: 'https://drive.google.com/thumbnail?id=1JiH6Lb7VYowvgfg1NlWgpA9LTDNQDH1b&sz=w1200', date: 'Mai / 2026', caption: 'Andamento da obra' },
        ]}
      />
      <Footer />

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511910837322"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:brightness-110 transition-all"
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9998, background: '#25D366', width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
      >
        <img src={icoWpp} alt="WhatsApp" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
      </a>
    </>
  )
}
