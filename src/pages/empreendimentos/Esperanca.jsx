import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/* ─── assets ─── */
const heroBg = '/empreendimentos/esperanca/hero-fachada.avif'
const vistaAerea = '/empreendimentos/esperanca/vista-aerea.avif'
const mapaLocalizacao = '/empreendimentos/esperanca/mapa-localizacao.avif'
const salaEstar = '/empreendimentos/esperanca/sala-estar.avif'
const cozinha = '/empreendimentos/esperanca/cozinha.avif'
const dormitorio01 = '/empreendimentos/esperanca/dormitorio-01.avif'
const dormitorio02 = '/empreendimentos/esperanca/dormitorio-02.avif'
const lazerExterna = '/empreendimentos/esperanca/lazer-externa.avif'
const salaoFestas = '/empreendimentos/esperanca/salao-festas.avif'
const petcare = '/empreendimentos/esperanca/petcare.avif'

const icoPin = '/empreendimentos/vertice/icon-pin.svg'
const plantasLabelIcon = '/empreendimentos/vertice/plantas-label-icon.svg'
const plantasTabIcon = '/empreendimentos/vertice/plantas-tab-icon.svg'
const plantasNavArrow = '/empreendimentos/vertice/plantas-nav-arrow.svg'
const plantasSpecBed = '/empreendimentos/vertice/plantas-spec-bed.svg'
const plantasSpecPe = '/empreendimentos/vertice/plantas-spec-pe-direito.svg'
const locMapsIcon = '/empreendimentos/vertice/localizacao-maps-icon.svg'

const PLANTAS = [
  { id: 0, area: '42,94m²', unidades: 'Unidade 11', dorms: '2 dormitórios', extra: 'Varanda + Terraço descoberto', floor: '/empreendimentos/esperanca/plantas/unidade-11.avif' },
  { id: 1, area: '35,31m²', unidades: 'Unidades 12 e 13', dorms: '2 dormitórios', extra: 'Terraço descoberto', floor: '/empreendimentos/esperanca/plantas/unidade-12-13.avif' },
  { id: 2, area: '37,93m²', unidades: 'Unidades 14 e 15', dorms: '2 dormitórios', extra: 'Terraço descoberto', floor: '/empreendimentos/esperanca/plantas/unidade-14-15.avif' },
  { id: 3, area: '40,40m²', unidades: 'Unidade 16', dorms: '2 dormitórios', extra: '2 terraços descobertos', floor: '/empreendimentos/esperanca/plantas/unidade-16.avif' },
  { id: 4, area: '42,94m²', unidades: 'Unidades 21 e 31', dorms: '2 dormitórios', extra: 'Varanda', floor: '/empreendimentos/esperanca/plantas/unidade-21-31.avif' },
  { id: 5, area: '35,31m²', unidades: 'Unidades 22, 23, 32 e 33', dorms: '2 dormitórios', extra: '', floor: '/empreendimentos/esperanca/plantas/unidade-22-23-32-33.avif' },
  { id: 6, area: '37,93m²', unidades: 'Unidades 24, 25, 34 e 35', dorms: '2 dormitórios', extra: '', floor: '/empreendimentos/esperanca/plantas/unidade-24-25-34-35.avif' },
  { id: 7, area: '40,40m²', unidades: 'Unidades 26 e 36', dorms: '2 dormitórios', extra: '', floor: '/empreendimentos/esperanca/plantas/unidade-26-36.avif' },
  { id: 8, area: '37,99m² + 25,04m² externa', unidades: 'Unidade 41', dorms: '2 dormitórios', extra: 'Área privativa + Terraço descoberto', floor: '/empreendimentos/esperanca/plantas/unidade-41.avif' },
  { id: 9, area: '30,26m² + 10,57m² externa', unidades: 'Unidade 42', dorms: '1 dormitório', extra: 'Área privativa + Terraço descoberto', floor: '/empreendimentos/esperanca/plantas/unidade-42.avif' },
  { id: 10, area: '37,99m²', unidades: 'Unidades 51, 61 e 71', dorms: '2 dormitórios', extra: 'Área privativa', floor: '/empreendimentos/esperanca/plantas/unidade-51-61-71.avif' },
  { id: 11, area: '30,26m²', unidades: 'Unidades 52, 62 e 72', dorms: '1 dormitório', extra: 'Área privativa', floor: '/empreendimentos/esperanca/plantas/unidade-52-62-72.avif' },
  { id: 12, area: '38,08m²', unidades: 'Unidades 53, 63 e 73', dorms: '2 dormitórios', extra: 'Área privativa + Varanda', floor: '/empreendimentos/esperanca/plantas/unidade-53-63-73.avif' },
]

const DESTAQUES = [
  { tempo: '1 min', label: 'Metrô Guilhermina Esperança' },
  { tempo: '2 min', label: 'Hipermercado Carrefour' },
  { tempo: '4 min', label: 'Academia Gaviões' },
  { tempo: '9 min', label: 'Shopping Penha' },
  { tempo: '12 min', label: 'Shopping Metrô Itaquera' },
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
function HeroEsperanca() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '480px' : '624px' }}>
      <div className="absolute inset-0">
        <img src={heroBg} alt="Esperança Prime" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 45%, transparent 75%)' }} />
      </div>

      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <Link to="/empreendimentos" className="hover:text-white transition-colors">Empreendimentos</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Esperança Prime</span>
        </nav>
      )}

      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        <div className="flex items-center justify-center gap-4 bg-[#5b0a28] rounded-sm w-fit" style={{ alignSelf: 'flex-start', height: '36px', marginBottom: '16px', padding: '0 20px' }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Pronto para morar</span>
          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Zimbel Incorporadora</span>
        </div>

        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Esperança Prime
        </h1>

        <div className="flex items-center gap-2 text-[#c5a26a] font-semibold uppercase" style={{ fontSize: isMobile ? '11px' : '13px', marginBottom: '14px' }}>
          <img src={icoPin} alt="" className="w-4 h-4 object-contain brightness-0 invert opacity-70 shrink-0" />
          <span>Rua Aquiras, 111 - Vila Esperança, São Paulo</span>
        </div>

        <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.3)', marginBottom: '14px' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: isMobile ? '10px 20px' : '32px' }}>
          {[
            { icon: '/cards/cama.svg', label: '1 e 2 dormitórios' },
            { icon: '/cards/area.svg', label: '30,26 a 42,94m²' },
            { icon: '/cards/Frame-2.svg', label: '11 vagas' },
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
   SEÇÃO 2 — CONCEITO / LOCALIZAÇÃO PRIVILEGIADA
════════════════════════════════════════════════════════ */
function ConceitoEsperanca() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section className="w-full bg-white" style={{ padding: isMobile ? '48px 0' : '72px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '40px' : isTablet ? '32px' : '64px' }}>
        <div style={{ flex: 1, maxWidth: isMobile ? '100%' : isTablet ? '480px' : '560px' }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#330218' }}>Conceito</span>
              <span style={{ color: '#5b0a28', fontSize: '12px' }}>•</span>
              <span style={{ fontSize: '12px', fontWeight: 400, color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Esperança Prime</span>
            </div>
            <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 2.2vw, 38px)', color: '#330218', lineHeight: 1.35, marginBottom: '16px', fontWeight: 400, textTransform: 'uppercase' }}>
            Localização Privilegiada
          </h2>
          <p style={{ color: '#a7a7a7', fontSize: '20px', fontWeight: 400, lineHeight: 1.5, marginBottom: '20px' }}>
            A poucos passos do que a vida na Vila Esperança tem de melhor.
          </p>

          <div style={{ color: '#494c4f', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            <p style={{ marginBottom: '8px' }}>O Esperança Prime foi pensado para quem valoriza praticidade no dia a dia: a um minuto do Metrô Guilhermina Esperança, próximo a mercados, academia, escola e opções de lazer e compras.</p>
            <p>São 29 unidades distribuídas em 7 pavimentos, com plantas de 1 e 2 dormitórios, áreas externas privativas e uma completa área de lazer pensada para todos os momentos.</p>
          </div>

          <div style={{ width: '80px', height: '1px', background: '#ddd', marginBottom: '24px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {DESTAQUES.map((d) => (
              <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                <div style={{ minWidth: '56px', height: '32px', border: '1px solid #ca4080', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#5b0a28', whiteSpace: 'nowrap' }}>{d.tempo}</span>
                </div>
                <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600 }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{ flex: 1 }}>
            <img
              src={vistaAerea}
              alt="Fachada do empreendimento"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/5' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 3 — FICHA TÉCNICA
════════════════════════════════════════════════════════ */
const FICHA = [
  { value: '360m²', desc: 'Área do terreno' },
  { value: '1.610m²', desc: 'Área construída' },
  { value: '29', desc: 'Unidades' },
  { value: '7', desc: 'Pavimentos' },
  { value: '11', desc: 'Vagas' },
]

function FichaTecnicaEsperanca() {
  return (
    <section style={{ background: '#330218', paddingTop: '56px', paddingBottom: '56px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <h2 className="text-white text-[22px] md:text-[32px] font-extrabold uppercase text-center" style={{ marginBottom: '40px' }}>
          Ficha Técnica
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center text-center">
          {FICHA.map((f) => (
            <div key={f.desc} className="flex flex-col gap-2">
              <p className="font-extrabold leading-none" style={{ fontSize: 'clamp(32px, 3vw, 48px)', color: '#ca4080' }}>{f.value}</p>
              <p className="text-white/70 text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-center text-sm" style={{ marginTop: '32px' }}>Área de lazer e áreas externas privativas em todas as unidades.</p>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 4 — GALERIA (INTERIORES)
════════════════════════════════════════════════════════ */
function GaleriaEsperanca() {
  const { isMobile } = useBreakpoint()
  const fotos = [
    { src: salaEstar, label: 'Sala de estar' },
    { src: cozinha, label: 'Cozinha' },
    { src: dormitorio01, label: 'Dormitório 01' },
    { src: dormitorio02, label: 'Dormitório 02' },
  ]
  return (
    <section className="bg-white" style={{ paddingTop: isMobile ? '48px' : '72px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Galeria</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5b0a28', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Esperança Prime</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e7e7e7' }} />
        </div>
        <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#330218', fontWeight: 800, textTransform: 'uppercase', marginBottom: '28px' }}>
          Apartamento decorado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fotos.map((f) => (
            <div key={f.label} className="relative rounded-lg overflow-hidden" style={{ height: isMobile ? '260px' : '360px', boxShadow: '0 20px 60px rgba(51,2,24,0.18)' }}>
              <img src={f.src} alt={f.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(51,2,24,0) 60%, rgba(51,2,24,0.7) 100%)' }} />
              <span className="absolute bottom-4 left-4 text-white font-bold uppercase text-sm tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 5 — LAZER
════════════════════════════════════════════════════════ */
function LazerEsperanca() {
  const { isMobile } = useBreakpoint()
  return (
    <section style={{ background: '#f6f6f6', paddingTop: isMobile ? '48px' : '72px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Lazer</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5b0a28', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Esperança Prime</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e0e0e0' }} />
        </div>
        <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#330218', fontWeight: 800, textTransform: 'uppercase', marginBottom: '28px' }}>
          Área de lazer completa
        </h2>

        <div className="rounded-lg overflow-hidden" style={{ marginBottom: '24px', height: isMobile ? '260px' : '420px' }}>
          <img src={lazerExterna} alt="Área de lazer externa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ src: salaoFestas, label: 'Salão de Festas' }, { src: petcare, label: 'Petcare' }].map((f) => (
            <div key={f.label} className="relative rounded-lg overflow-hidden" style={{ height: isMobile ? '220px' : '300px' }}>
              <img src={f.src} alt={f.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(51,2,24,0) 60%, rgba(51,2,24,0.7) 100%)' }} />
              <span className="absolute bottom-4 left-4 text-white font-bold uppercase text-sm tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 6 — PLANTAS
════════════════════════════════════════════════════════ */
function PlantasEsperanca() {
  const { isMobile, isTablet } = useBreakpoint()
  const [activeTab, setActiveTab] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const tabRef = useRef(null)
  const planta = PLANTAS[activeTab]

  function scrollTabs(dir) {
    if (tabRef.current) tabRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <>
    <section style={{ background: '#fff', borderTop: '1px solid #e7e7e7', paddingTop: isMobile ? '60px' : '100px', paddingBottom: isMobile ? '60px' : '100px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Plantas</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5b0a28', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Esperança Prime</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e7e7e7' }} />
        </div>

        <div style={{ maxWidth: '864px', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 800, textTransform: 'uppercase', color: '#330218', lineHeight: 1.35, margin: 0 }}>
            13 plantas para todos os estilos de vida
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.6, margin: 0 }}>
            Apartamentos de 30,26m² a 42,94m², com 1 e 2 dormitórios, áreas privativas e terraços descobertos — feitos sob medida para quem busca praticidade sem abrir mão de conforto.
          </p>
        </div>

        <div style={{ position: 'relative', height: '46px', marginBottom: '24px' }}>
          <button
            onClick={() => scrollTabs(-1)}
            style={{ position: 'absolute', left: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#330218', border: 'none', cursor: 'pointer', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px', transform: 'rotate(180deg)' }} />
          </button>

          <div
            ref={tabRef}
            style={{ overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none', position: 'absolute', left: '28px', right: '28px', top: 0, height: '46px', background: 'rgba(91,10,40,0.2)', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '0' }}
          >
            {PLANTAS.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {i > 0 && (
                  <div style={{ width: '1px', height: '11px', background: '#c5c5c5', flexShrink: 0, margin: '0 20px' }} />
                )}
                <button
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px', height: '46px', padding: '0', border: 'none', background: 'none', cursor: 'pointer', flexShrink: 0,
                    borderBottom: activeTab === i ? '2px solid #330218' : '2px solid transparent',
                  }}
                >
                  <img src={plantasTabIcon} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '14px', color: '#494c4f', whiteSpace: 'nowrap', fontWeight: 600 }}>{p.area.toLowerCase()}</span>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTabs(1)}
            style={{ position: 'absolute', right: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#330218', border: 'none', cursor: 'pointer', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px' }} />
          </button>
        </div>

        <div style={{ background: '#e7e7e7', borderRadius: '8px', padding: isMobile ? '14px' : isTablet ? '15px 24px 13px 14px' : '15px 80px 13px 14px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '40px', alignItems: isMobile ? 'stretch' : 'center' }}>

          <div style={{ background: 'white', borderRadius: '4px', height: isMobile ? 'auto' : '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: '3px', height: isMobile ? '220px' : '460px', background: '#330218', flexShrink: 0 }} />
            <div style={{ width: isMobile ? 'calc(100% - 13px)' : '460px', height: isMobile ? '300px' : '460px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
              <img
                src={planta.floor}
                alt="Planta"
                onClick={() => setLightbox(planta.floor)}
                style={{ flex: 1, width: '100%', height: 0, objectFit: 'contain', cursor: 'zoom-in' }}
              />
            </div>
            <button
              onClick={() => setLightbox(planta.floor)}
              style={{ position: 'absolute', top: '14px', right: '14px', width: '48px', height: '48px', background: '#5b0a28', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6V1H6M10 1H15V6M15 10V15H10M6 15H1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: isMobile ? 'auto' : isTablet ? '500px' : '600px', paddingTop: isMobile ? '8px' : '32px', paddingBottom: isMobile ? '16px' : '32px', gap: isMobile ? '32px' : '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <h3 style={{ fontSize: isMobile ? '32px' : '44px', fontWeight: 800, textTransform: 'uppercase', color: '#330218', lineHeight: 1, margin: 0 }}>{planta.area}</h3>
                <p style={{ fontSize: '16px', color: '#a7a7a7', textTransform: 'uppercase', margin: 0 }}>{planta.unidades}</p>
              </div>
              <div>
                <div style={{ width: '77px', height: '2px', background: '#5b0a28', marginBottom: '1px' }} />
                <div style={{ width: '100%', height: '1px', background: '#d0d0d0' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #ca4080', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={plantasSpecBed} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, whiteSpace: 'nowrap' }}>{planta.dorms}</span>
                </div>
                {planta.extra && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                    <div style={{ width: '32px', height: '32px', border: '1px solid #ca4080', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={plantasSpecPe} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, whiteSpace: 'nowrap' }}>{planta.extra}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {lightbox && (
      <div
        onClick={() => setLightbox(null)}
        style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
      >
        <img src={lightbox} alt="Planta" style={{ maxWidth: '92vw', maxHeight: '92vh', objectFit: 'contain' }} />
      </div>
    )}
    </>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 7 — LOCALIZAÇÃO
════════════════════════════════════════════════════════ */
function LocalizacaoEsperanca() {
  const { isMobile } = useBreakpoint()
  return (
    <section style={{ background: '#f6f6f6', paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Localização</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5b0a28', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Esperança Prime</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e0e0e0' }} />
        </div>

        <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#330218', fontWeight: 800, textTransform: 'uppercase', marginBottom: '28px' }}>
          Localização estratégica na Vila Esperança
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="rounded-lg overflow-hidden flex-1" style={{ minHeight: isMobile ? '260px' : '480px' }}>
            <img src={mapaLocalizacao} alt="Mapa de localização" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col gap-6" style={{ maxWidth: isMobile ? '100%' : '380px' }}>
            <div>
              <p style={{ fontSize: '14px', color: '#a7a7a7', textTransform: 'uppercase', marginBottom: '4px' }}>Endereço</p>
              <p style={{ fontSize: '18px', color: '#330218', fontWeight: 700 }}>Rua Aquiras, 111 - Vila Esperança, São Paulo - SP</p>
            </div>
            <div style={{ width: '100%', height: '1px', background: '#e0e0e0' }} />
            <div className="flex flex-col gap-4">
              {DESTAQUES.map((d) => (
                <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ minWidth: '56px', height: '32px', border: '1px solid #ca4080', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 10px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#5b0a28', whiteSpace: 'nowrap' }}>{d.tempo}</span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600 }}>{d.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/maps?q=Rua+Aquiras,+111,+Vila+Esperan%C3%A7a,+S%C3%A3o+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white text-sm font-semibold uppercase w-fit hover:opacity-90 transition-opacity"
              style={{ background: '#5b0a28', padding: '14px 28px', borderRadius: '8px' }}
            >
              <img src={locMapsIcon} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Esperanca() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Header />
      <HeroEsperanca />
      <ConceitoEsperanca />
      <FichaTecnicaEsperanca />
      <GaleriaEsperanca />
      <LazerEsperanca />
      <PlantasEsperanca />
      <LocalizacaoEsperanca />
      <Footer />

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511910837322?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Esperan%C3%A7a%20Prime."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center hover:scale-105 transition-transform"
        style={{ bottom: '24px', right: '24px', width: '56px', height: '56px', borderRadius: '50%', background: '#25D366', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.13c-.24.68-1.4 1.3-1.93 1.34-.5.04-1.02.24-3.41-.71-2.89-1.15-4.74-4.09-4.88-4.28-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.34.07.12.07.7-.17 1.38z" /></svg>
      </a>
    </>
  )
}
