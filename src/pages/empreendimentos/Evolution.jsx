import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EvolucaoObra from '../../components/EvolucaoObra'

/* ─── assets ─── */
const heroBg   = '/hero/Sala Evolution 1.avif'
const fachada  = '/empreendimentos/evolution-fachada.avif'
const icoPin   = '/empreendimentos/vertice/icon-pin.svg'
const icoWpp   = '/empreendimentos/vertice/icon-wpp.svg'

/* ─── plantas assets (compartilhados até os específicos chegarem) ─── */
const plantasLabelIcon = '/empreendimentos/vertice/plantas-label-icon.svg'
const plantasTabIcon   = '/empreendimentos/vertice/plantas-tab-icon.svg'
const plantasNavArrow  = '/empreendimentos/vertice/plantas-nav-arrow.svg'
const plantasDownload  = '/empreendimentos/vertice/plantas-download-icon.svg'
const plantasSpecBed   = '/empreendimentos/vertice/plantas-spec-bed.svg'
const plantasSpecPe    = '/empreendimentos/vertice/plantas-spec-pe-direito.svg'
const PLANTAS = [
  { id: 0, area: '44,30m²', tipo: 'Planta tipo • Unidade 11 + Terraço descoberto', dorms: '2 dorms.', pe: 'Varanda Gourmet • 1 vaga', floor: '/empreendimentos/evolution/plantas/planta-0.webp' },
  { id: 1, area: '34,97m²', tipo: 'Planta tipo • Unidades 12–17 + Terraço descoberto', dorms: '2 dorms.', pe: '', floor: '/empreendimentos/evolution/plantas/planta-1.webp' },
  { id: 2, area: '40,40m²', tipo: 'Planta tipo • Unidade 18 + Terraço descoberto', dorms: '2 dorms.', pe: '', floor: '/empreendimentos/evolution/plantas/planta-2.webp' },
  { id: 3, area: '44,30m²', tipo: 'Planta tipo • Unidades 21 e 31', dorms: '2 dorms.', pe: 'Varanda Gourmet • 1 vaga', floor: '/empreendimentos/evolution/plantas/planta-3.webp' },
  { id: 4, area: '34,97m²', tipo: 'Planta tipo • Unidades 22–27 e 32–37', dorms: '2 dorms.', pe: '', floor: '/empreendimentos/evolution/plantas/planta-4.webp' },
  { id: 5, area: '40,40m²', tipo: 'Planta tipo • Unidades 28 e 38', dorms: '2 dorms.', pe: '', floor: '/empreendimentos/evolution/plantas/planta-5.webp' },
  { id: 6, area: '49,90m²', tipo: 'Planta tipo • Unidade 41 + Área externa', dorms: '2 dorms. c/ 1 suíte', pe: 'Varanda Gourmet • 1 vaga', floor: '/empreendimentos/evolution/plantas/planta-6.webp' },
  { id: 7, area: '49,90m²', tipo: 'Planta tipo • Unidades 51, 61, 71, 81 e 91', dorms: '2 dorms. c/ 1 suíte', pe: 'Varanda Gourmet • 1 vaga', floor: '/empreendimentos/evolution/plantas/planta-7.webp' },
  { id: 8, area: '38,96m²', tipo: 'Planta tipo • Unidades 52, 62, 72, 82 e 92', dorms: '2 dorms.', pe: '', floor: '/empreendimentos/evolution/plantas/planta-8.webp' },
  { id: 9, area: '44,74m²', tipo: 'Planta tipo • Unidades 53, 63, 73, 83 e 93', dorms: '2 dorms.', pe: 'Varanda Gourmet • 1 vaga', floor: '/empreendimentos/evolution/plantas/planta-9.webp' },
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
function HeroEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '480px' : '624px' }}>

      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(12,26,54,0.88) 0%, rgba(12,26,54,0.6) 50%, rgba(12,26,54,0.1) 100%)' }} />
      </div>

      {/* Breadcrumb (desktop only) */}
      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="hover:text-white cursor-pointer transition-colors">Empreendimentos</span>
          <span className="mx-1 opacity-40">›</span>
          <span className="hover:text-white cursor-pointer transition-colors">Lançamentos</span>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Evolution Tatuapé</span>
        </nav>
      )}

      {/* Conteúdo principal */}
      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        {/* Badge */}
        <div className="flex items-center justify-center gap-4 bg-[#31477b] rounded-sm" style={{ width: isMobile ? 'auto' : '336px', alignSelf: isMobile ? 'flex-start' : undefined, height: '36px', marginBottom: '16px', padding: isMobile ? '0 16px' : undefined }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide">Lançamento</span>
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide">Tatuapé</span>
        </div>

        {/* Título */}
        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Evolution Tatuapé
        </h1>

        {/* Endereço */}
        <div className="flex items-center gap-2 text-[#779dff] font-semibold uppercase" style={{ fontSize: isMobile ? '11px' : '13px', marginBottom: '14px' }}>
          <img src={icoPin} alt="" className="w-4 h-4 object-contain brightness-0 invert opacity-70 shrink-0" />
          <span>R. Prof. Pedreira de Freitas, 848 - Tatuapé, SP</span>
        </div>

        {/* Separador */}
        <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.3)', marginBottom: '14px' }} />

        {/* Specs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: isMobile ? '10px 20px' : '32px' }}>
          {[
            { icon: '/cards/cama.svg',    label: '2 dormitórios' },
            { icon: '/cards/area.svg',    label: '40 unidades' },
            ...(!isMobile ? [{ icon: '/cards/plantas.svg', label: 'Entrega out/2026' }] : []),
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
function ConceitoEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section className="w-full bg-white" style={{ padding: isMobile ? '48px 0' : '72px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '40px' : isTablet ? '32px' : '64px' }}>
        {/* Coluna esquerda */}
        <div style={{ flex: 1, maxWidth: isMobile ? '100%' : isTablet ? '480px' : '560px' }}>

          {/* Label */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <img src="/empreendimentos/vertice/icon-conceito.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#31447b' }}>Conceito</span>
              <span style={{ color: '#779dff', fontSize: '12px' }}>•</span>
              <span style={{ fontSize: '12px', fontWeight: 400, color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evolution Tatuapé</span>
            </div>
            <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
          </div>

          {/* Título */}
          <h2
            style={{ fontSize: 'clamp(26px, 2.2vw, 38px)', color: '#31447b', lineHeight: 1.35, marginBottom: '16px', fontWeight: 400, textTransform: 'uppercase' }}
          >
            Viver Bem é<br />Evoluir Sempre
          </h2>

          {/* Subtítulo */}
          <p style={{ color: '#a7a7a7', fontSize: '20px', fontWeight: 400, lineHeight: 1.5, marginBottom: '20px' }}>
            Mais do que um apartamento,<br />o Evolution é o seu próximo passo.
          </p>

          {/* Corpo */}
          <div style={{ color: '#494c4f', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            <p style={{ marginBottom: '8px' }}>Localizado em um dos bairros mais desejados de São Paulo, o Evolution Tatuapé reúne design moderno, infraestrutura completa e uma localização privilegiada a poucos minutos de tudo que importa.</p>
            <p style={{ marginBottom: '8px' }}>Com 40 unidades cuidadosamente planejadas, o empreendimento oferece o equilíbrio perfeito entre praticidade e sofisticação — ideal para quem busca qualidade de vida ou um investimento de alto potencial de valorização.</p>
            <p>Área construída de 2.295,53 m² sobre um terreno de 475 m², com previsão de entrega para outubro de 2026.</p>
          </div>

          {/* Separador */}
          <div style={{ width: '80px', height: '1px', background: '#ddd', marginBottom: '24px' }} />

          {/* Specs 2×2 */}
          <div style={{ display: 'flex', gap: '48px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { icon: '/empreendimentos/vertice/spec-cama.svg',   label: 'Dormitórios',   value: '2 dormitórios' },
                { icon: '/empreendimentos/vertice/spec-plantas.svg', label: 'Unidades',      value: '40 unidades' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#a7a7a7', marginBottom: '2px' }}>{label}</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#31447b' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { icon: '/empreendimentos/vertice/spec-lazer.svg', label: 'Área construída', value: '2.295,53 m²' },
                { icon: '/empreendimentos/vertice/spec-housi.svg', label: 'Entrega prevista', value: 'Outubro/2026' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
            <div style={{ width: '5px', background: '#31447b', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', padding: '16px', flex: 1 }}>
              {[
                { icon: '/empreendimentos/vertice/cta-book.svg',  line1: 'Baixe o',  line2: 'Book digital', href: '#' },
                { icon: '/empreendimentos/vertice/cta-house.svg', line1: 'Visite o', line2: 'Hotsite',      href: '#' },
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

        {/* Coluna direita — fachada (desktop only) */}
        {!isMobile && <div className="flex-1 flex justify-end">
          <div className="relative" style={{ maxWidth: isTablet ? '380px' : '540px', width: '100%' }}>
            <img
              src={fachada}
              alt="Perspectiva ilustrada da fachada"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/5' }}
            />
            <div className="absolute top-4 right-4 w-8 h-8 rounded" style={{ background: '#31447b' }} />
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
const galeriaTabs = [
  {
    label: 'Fachada', images: [
      { src: '/empreendimentos/evolution/fachada/fachada-1.avif', caption: 'Perspectiva ilustrada da fachada' },
      { src: '/empreendimentos/evolution/fachada/fachada-2.avif', caption: 'Perspectiva ilustrada da fachada' },
    ]
  },
  {
    label: 'Apartamentos', images: [
      { src: '/empreendimentos/evolution/apartamentos/sala.avif',       caption: 'Perspectiva ilustrada da Sala de Estar' },
      { src: '/empreendimentos/evolution/apartamentos/cozinha-1.avif',  caption: 'Perspectiva ilustrada da Cozinha' },
      { src: '/empreendimentos/evolution/apartamentos/cozinha-2.avif',  caption: 'Perspectiva ilustrada da Cozinha' },
      { src: '/empreendimentos/evolution/apartamentos/dorm-1.avif',     caption: 'Perspectiva ilustrada do Dormitório' },
      { src: '/empreendimentos/evolution/apartamentos/dorm-2.avif',     caption: 'Perspectiva ilustrada do Dormitório' },
      { src: '/empreendimentos/evolution/apartamentos/banheiro.avif',   caption: 'Perspectiva ilustrada do Banheiro' },
      { src: '/empreendimentos/evolution/apartamentos/lavanderia.avif', caption: 'Perspectiva ilustrada da Lavanderia' },
      { src: '/empreendimentos/evolution/apartamentos/gourmet.avif',    caption: 'Perspectiva ilustrada do Espaço Gourmet' },
    ]
  },
]

function GaleriaEvolution() {
  const { isMobile } = useBreakpoint()
  const [activeTab, setActiveTab] = useState(0)
  const [currentImg, setCurrentImg] = useState(0)

  const images = galeriaTabs[activeTab].images
  const total  = images.length
  const img    = images[currentImg]

  function prev()        { setCurrentImg(i => (i - 1 + total) % total) }
  function next()        { setCurrentImg(i => (i + 1) % total) }
  function selectTab(i)  { setActiveTab(i); setCurrentImg(0) }

  return (
    <section style={{ background: '#e7e7e7', padding: '80px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/empreendimentos/vertice/icon-galeria.svg" alt="" style={{ width: '17px', height: '16px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#494c4f' }}>Galeria de Imagens</span>
            {!isMobile && <><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 400, color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evolution Tatuapé</span></>}
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
        <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '4px', padding: isMobile ? '0 16px' : '0 40px', marginBottom: '24px', gap: isMobile ? '16px' : '48px', overflowX: isMobile ? 'auto' : undefined, whiteSpace: 'nowrap' }}>
          {galeriaTabs.map((tab, i) => (
            <div key={tab.label} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '16px' : '48px', flexShrink: 0 }}>
              <button
                onClick={() => selectTab(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: activeTab === i ? '2px solid #052e7e' : '2px solid transparent',
                  color: '#494c4f', fontSize: '14px', fontWeight: 600,
                }}
              >
                <img src="/empreendimentos/vertice/icon-tab.svg" alt="" style={{ width: '21px', height: '21px', objectFit: 'contain' }} />
                {tab.label}
              </button>
              {i < galeriaTabs.length - 1 && (
                <div style={{ width: '1px', height: '11px', background: '#d4d4d4' }} />
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: isMobile ? '4/3' : '1312/578' }}>
          <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }} />

          <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8L8 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '8px 0 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <button style={{ position: 'absolute', top: '16px', right: '17px', width: '48px', height: '48px', background: 'rgba(21,69,67,0.56)', backdropFilter: 'blur(2px)', border: 'none', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/empreendimentos/vertice/icon-fullscreen.svg" alt="Tela cheia" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
          </button>

          <div style={{ position: 'absolute', bottom: '22px', left: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{img.caption}</span>
            <div style={{ width: '1px', height: '21px', background: '#779dff' }} />
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>
              {currentImg + 1} <span style={{ color: '#779dff' }}>/</span> {total}
            </span>
          </div>

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
  { src: '/empreendimentos/evolution/lazer/academia.avif',     caption: 'Academia' },
  { src: '/empreendimentos/evolution/lazer/jacuzzi-1.avif',    caption: 'Jacuzzi' },
  { src: '/empreendimentos/evolution/lazer/jacuzzi-2.avif',    caption: 'Jacuzzi' },
  { src: '/empreendimentos/evolution/lazer/gourmet-1.avif',    caption: 'Espaço Gourmet' },
  { src: '/empreendimentos/evolution/lazer/gourmet-2.avif',    caption: 'Espaço Gourmet' },
  { src: '/empreendimentos/evolution/lazer/gourmet-3.avif',    caption: 'Espaço Gourmet' },
  { src: '/empreendimentos/evolution/lazer/gourmet-4.avif',    caption: 'Espaço Gourmet' },
  { src: '/empreendimentos/evolution/lazer/coworking.avif',    caption: 'Coworking' },
  { src: '/empreendimentos/evolution/lazer/marketplace.avif',  caption: 'Marketplace' },
  { src: '/empreendimentos/evolution/lazer/bicicletario.avif', caption: 'Bicicletário' },
  { src: '/empreendimentos/evolution/lazer/espaco-pet.avif',   caption: 'Espaço Pet' },
  { src: '/empreendimentos/evolution/lazer/petcap.avif',       caption: 'Espaço Pet' },
  { src: '/empreendimentos/evolution/lazer/hall.avif',         caption: 'Hall de Entrada' },
]

const amenidades = [
  [
    { icon: 'ico-academia.svg',   label: 'Academia' },
    { icon: 'ico-piscina.svg',    label: 'Jacuzzi' },
    { icon: 'ico-mercado.svg',    label: 'Mini-mercado' },
    { icon: 'ico-bicicletario.svg', label: 'Bicicletário' },
  ],
  [
    { icon: 'ico-festas.svg',     label: 'Salão de festas' },
    { icon: 'ico-pet.svg',        label: 'Espaço Pet' },
    { icon: 'ico-coworking.svg',  label: 'Coworking' },
    { icon: 'ico-convivencia.svg', label: 'Área de lazer descoberta' },
  ],
]

function LazerEvolution() {
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
            {!isMobile && <><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evolution Tatuapé</span></>}
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
        </div>

        {/* Título + descrição */}
        <div style={{ maxWidth: '790px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(18px, 1.8vw, 28px)', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
            Estrutura Completa Para o Seu Bem-Estar
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.35 }}>
            O Evolution Tatuapé foi pensado para quem valoriza qualidade de vida no dia a dia. Com uma área de lazer que combina saúde, convivência e praticidade, cada espaço foi projetado para fazer parte da sua rotina.
          </p>
        </div>

        {/* Galeria de lazer — 1 no mobile, 2 no tablet/desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: isMobile ? '260px' : isTablet ? '320px' : '440px' }}>
            <img src={img.src} alt={img.caption} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35))' }} />
            <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8L8 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
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
              <img src={lazerImages[(imgIdx + 1) % total].src} alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

        {/* Grid de amenidades — 2 colunas */}
        {isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 16px' }}>
            {amenidades.flat().map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <div style={{ width: '1px', height: '18px', background: '#779dff', flexShrink: 0, marginTop: '1px' }} />
                <img src={`/empreendimentos/vertice/${icon}`} alt="" style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#31477b', flexShrink: 0, marginTop: '7px' }} />
                <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 0' }}>
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
const YT_ID = 'feZbQ4nK-z4'

function VideoEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  const [open, setOpen] = useState(false)

  return (
    <>
      <section style={{ position: 'relative', height: isMobile ? '360px' : isTablet ? '440px' : '520px', overflow: 'hidden', background: '#000' }}>
        <img
          src={fachada}
          alt="Capa do vídeo"
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

        <div style={{ position: 'relative', zIndex: 1, height: '100%', paddingLeft: gridPad, paddingRight: gridPad, display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <img src="/empreendimentos/vertice/icon-video-label.svg" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e3e3e3' }}>Vídeo Conceito</span>
                {!isMobile && <><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evolution Tatuapé</span></>}
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#779dff', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', lineHeight: 1.2 }}>
              Viver Bem é<br />Evoluir Sempre
            </h2>
            <p style={{ fontSize: '16px', color: '#a7a7a7', marginBottom: '64px' }}>
              Assista o vídeo e conheça os detalhes do empreendimento
            </p>
            <button
              onClick={() => setOpen(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#779dff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Assista ao vídeo
              </span>
              <img src="/empreendimentos/vertice/icon-play.svg" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            </button>
          </div>
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '32px', lineHeight: 1 }}>×</button>
          <div onClick={e => e.stopPropagation()} style={{ width: '90vw', maxWidth: '1100px', aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
              title="Vídeo Evolution Tatuapé"
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
const TOUR_UNITS = [
  { label: '34,97m² + terraço descoberto', src: 'https://tour360.meupasseiovirtual.com/064248/273055/tourvirtual/index.html?autoplaysound=yes&showfloorplans=no' },
  { label: '44,30m² + terraço descoberto', src: 'https://tour360.meupasseiovirtual.com/064248/273098/tourvirtual/index.html?autoplaysound=yes&showfloorplans=no' },
]

function TourEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  const [activeUnit, setActiveUnit] = useState(0)

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, maxWidth: '1920px', margin: '0 auto' }}>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img src="/empreendimentos/vertice/icon-tour.svg" alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#494c4f' }}>Tour Virtual</span>
            {!isMobile && <><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#a7a7a7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evolution Tatuapé</span></>}
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e8e8e8' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '790px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 2vw, 32px)', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
              Explore o empreendimento em 360°
            </h2>
            <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.6 }}>
              Navegue pelos ambientes do Evolution Tatuapé com nosso tour virtual interativo. Conheça cada detalhe do empreendimento antes mesmo de uma visita presencial.
            </p>
          </div>

          {/* Seletor de unidade */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            {TOUR_UNITS.map((unit, i) => (
              <button
                key={i}
                onClick={() => setActiveUnit(i)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: activeUnit === i ? 'none' : '1px solid #d8d8d8',
                  background: activeUnit === i ? '#779dff' : '#fff',
                  color: activeUnit === i ? '#fff' : '#494c4f',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {unit.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ width: '100%', height: isMobile ? '340px' : isTablet ? '480px' : '680px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            key={activeUnit}
            src={TOUR_UNITS[activeUnit].src}
            style={{ border: 'none', width: '100%', height: '100%' }}
            referrerPolicy="origin"
            allow="fullscreen *; geolocation *; autoplay *; gyroscope *; xr-spatial-tracking *; vr *; web-share *"
            allowFullScreen
            title={`Tour Virtual Evolution Tatuapé — ${TOUR_UNITS[activeUnit].label}`}
          />
        </div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 7 — PLANTAS
════════════════════════════════════════════════════════ */
function PlantasEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  const [activeTab, setActiveTab] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const tabRef  = useRef(null)
  const planta  = PLANTAS[activeTab]

  function scrollTabs(dir) {
    if (tabRef.current) tabRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e7e7e7', paddingTop: isMobile ? '60px' : '120px', paddingBottom: isMobile ? '60px' : '120px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

        {/* Label */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <img src={plantasLabelIcon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#494c4f', letterSpacing: '0.07em' }}>Plantas</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', textTransform: 'uppercase', color: '#a7a7a7', letterSpacing: '0.07em' }}>Evolution Tatuapé</span>
          </div>
          <div style={{ width: '100%', height: '1px', background: '#e7e7e7' }} />
        </div>

        {/* Título + descrição */}
        <div style={{ maxWidth: '864px', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 800, textTransform: 'uppercase', color: '#31447b', lineHeight: 1.35, margin: 0 }}>
            Praticidade, sofisticação e bem-estar em cada metro quadrado.
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.6, margin: 0 }}>
            Compactas e funcionais, as plantas do Evolution Tatuapé se adaptam a diferentes estilos de vida — seja para quem busca um lar moderno e eficiente, seja para quem investe com foco em valorização.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ position: 'relative', height: '46px', marginBottom: '24px' }}>
          <button
            onClick={() => scrollTabs(-1)}
            style={{ position: 'absolute', left: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px', transform: 'rotate(180deg)' }} />
          </button>

          <div
            ref={tabRef}
            style={{ overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none', position: 'absolute', left: '28px', right: '28px', top: 0, height: '46px', background: 'rgba(119,157,255,0.2)', display: 'flex', alignItems: 'center', padding: '0 20px' }}
          >
            {PLANTAS.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {i > 0 && <div style={{ width: '1px', height: '11px', background: '#c5c5c5', flexShrink: 0, margin: '0 20px' }} />}
                <button
                  onClick={() => setActiveTab(i)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '46px', padding: '0', border: 'none', background: 'none', cursor: 'pointer', flexShrink: 0, borderBottom: activeTab === i ? '2px solid #052e7e' : '2px solid transparent' }}
                >
                  <img src={plantasTabIcon} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '14px', color: '#494c4f', whiteSpace: 'nowrap', fontWeight: 600 }}>{p.area.toLowerCase()}</span>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTabs(1)}
            style={{ position: 'absolute', right: 0, top: 0, zIndex: 2, width: '28px', height: '46px', background: '#052e7e', border: 'none', cursor: 'pointer', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={plantasNavArrow} alt="" style={{ width: '6px', height: '11px' }} />
          </button>
        </div>

        {/* Card */}
        <div style={{ background: '#e7e7e7', borderRadius: '8px', padding: isMobile ? '14px' : isTablet ? '15px 24px 13px 14px' : '15px 80px 13px 14px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '40px', alignItems: isMobile ? 'stretch' : 'center' }}>
          <div style={{ background: 'white', borderRadius: '4px', height: isMobile ? 'auto' : isTablet ? '560px' : '726px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: '3px', height: isMobile ? '220px' : isTablet ? '380px' : '512px', background: '#31447b', flexShrink: 0 }} />
            <div onClick={() => setLightbox(planta.floor)} style={{ width: isMobile ? 'calc(100% - 13px)' : isTablet ? '380px' : '546px', height: isMobile ? '280px' : isTablet ? '340px' : '454px', flexShrink: 0, padding: isMobile ? '12px' : '28px', cursor: 'zoom-in' }}>
              <img src={planta.floor} alt="Planta" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <button style={{ position: 'absolute', top: '14px', right: '14px', width: '48px', height: '48px', background: '#779dff', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 6V1H6M10 1H15V6M15 10V15H10M6 15H1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: isMobile ? 'auto' : isTablet ? '560px' : '726px', paddingTop: isMobile ? '8px' : '32px', paddingBottom: isMobile ? '16px' : '32px', gap: isMobile ? '32px' : '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <h3 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, textTransform: 'uppercase', color: '#31447b', lineHeight: 1, margin: 0 }}>{planta.area}</h3>
                <p style={{ fontSize: '16px', color: '#a7a7a7', textTransform: 'uppercase', margin: 0 }}>{planta.tipo}</p>
              </div>
              <div>
                <div style={{ width: '77px', height: '2px', background: '#779dff', marginBottom: '1px' }} />
                <div style={{ width: '100%', height: '1px', background: '#d0d0d0' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={plantasSpecBed} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600 }}>{planta.dorms}</span>
                </div>
                {planta.pe && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                    <div style={{ width: '32px', height: '32px', border: '1px solid #779dff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={plantasSpecPe} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600 }}>{planta.pe}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '32px', lineHeight: 1 }}
          >×</button>
          <img
            src={lightbox}
            alt=""
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
      )}
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 8 — LOCALIZAÇÃO
════════════════════════════════════════════════════════ */
const locMapsIcon  = '/empreendimentos/vertice/localizacao-maps-icon.svg'
const locWazeIcon  = '/empreendimentos/vertice/localizacao-waze-icon.svg'
const locShare     = '/empreendimentos/vertice/localizacao-share.svg'
const locDestaques = '/empreendimentos/vertice/localizacao-destaques-icon.svg'
const locCardIcon  = '/empreendimentos/vertice/localizacao-card-icon.svg'
const locFoto1     = '/empreendimentos/evolution/localizacao-foto-1.jpg'
const locFoto2     = '/empreendimentos/evolution/localizacao-foto-2.jpg'
const locFoto3     = '/empreendimentos/evolution/localizacao-foto-3.jpg'

const DESTAQ_TAGS = [
  'Sky Fit Academia', 'Coco Bambu',
  'Hospital São Luiz', 'Parque Ceret', 'Shopping Anália Franco',
]
const INFRA_CARDS = [
  'Mobilidade', 'Transporte', 'Lazer', 'Gastronomia',
  'Saúde', 'Educação', 'Mercados', 'Serviços e Comodidade',
]
const LOC_FOTOS = [
  { src: locFoto1, label: 'Sky Fit Academia' },
  { src: locFoto2, label: 'Parque Ceret' },
  { src: locFoto3, label: 'Hospital São Luiz' },
]

function LocalizacaoEvolution() {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <section style={{ borderTop: '1px solid #e7e7e7' }}>

      {/* Header */}
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad, paddingTop: isMobile ? '60px' : '120px', paddingBottom: isMobile ? '40px' : '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={icoPin} alt="" style={{ width: '18px', height: '22px', objectFit: 'contain' }} />
            <span style={{ fontSize: '13px', color: '#494c4f', fontWeight: 600, textTransform: 'uppercase' }}>Localização</span>
          </div>
          {!isMobile && <><div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
          <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600, textTransform: 'uppercase' }}>Evolution Tatuapé</span></>}
        </div>
        <div style={{ height: '1px', background: '#e7e7e7', marginBottom: '32px' }} />
        <h2 style={{ fontSize: isMobile ? '20px' : '32px', color: '#31477b', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.35, maxWidth: '864px', margin: 0 }}>
          Localização Estratégica, Próxima dos Principais Pontos do Bairro
        </h2>
      </div>

      {/* Mapa + conteúdo */}
      <div>
        <div style={{ marginBottom: isMobile ? '-60px' : '-127px' }}>
          <div style={{ width: '100%', aspectRatio: isMobile ? '3/4' : '1920/800', position: 'relative', overflow: 'hidden' }}>
            <iframe
              src="https://maps.google.com/maps?q=R.+Prof.+Pedreira+de+Freitas+848+Tatua%C3%A9+S%C3%A3o+Paulo+SP&output=embed&hl=pt-BR&z=16"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              title="Mapa Evolution Tatuapé"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div style={{ position: 'absolute', top: '14px', right: '15px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '8px', alignItems: 'flex-end', zIndex: 10 }}>
              <a
                href="https://maps.google.com/maps?q=R.+Prof.+Pedreira+de+Freitas,+848,+Tatuap%C3%A9,+S%C3%A3o+Paulo"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 24px', background: '#0c1a36', borderRadius: '4px', textDecoration: 'none' }}
              >
                <img src={locMapsIcon} alt="" style={{ width: '14px', height: '14px' }} />
                <span style={{ fontSize: '14px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>Abrir com Maps</span>
              </a>
              <a
                href="https://www.waze.com/ul?q=R.+Prof.+Pedreira+de+Freitas+848+Tatua%C3%A9+S%C3%A3o+Paulo"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 24px', background: '#0c1a36', borderRadius: '4px', textDecoration: 'none' }}
              >
                <img src={locWazeIcon} alt="" style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '14px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>Abrir com Waze</span>
              </a>
              <img src={locShare} alt="Compartilhar" style={{ width: '38px', height: '38px', cursor: 'pointer', display: 'block' }} />
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, paddingLeft: gridPad, paddingRight: gridPad, display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '62px', paddingBottom: isMobile ? '60px' : '120px' }}>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0' : '32px', alignItems: 'flex-start' }}>

            {/* Coluna esquerda */}
            <div style={{ width: isMobile ? '100%' : 'calc(50% - 16px)', flexShrink: 0 }}>
              <div style={{ background: '#31477b', borderRadius: '8px 8px 0 0', padding: '23px 17px 14px 21px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#779dff', fontWeight: 600 }}>Endereço:</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>R. Prof. Pedreira de Freitas, 848/854 - Tatuapé</span>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
                    <img src={icoPin} alt="" style={{ width: '18px', height: '22px', flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
                    <span style={{ fontSize: '16px', color: 'white', fontWeight: 600 }}>Tatuapé, São Paulo - SP</span>
                  </div>
                  <a
                    href="https://maps.google.com/maps?q=R.+Prof.+Pedreira+de+Freitas,+848,+Tatuap%C3%A9,+S%C3%A3o+Paulo"
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', textDecoration: 'none', flexShrink: 0 }}
                  >
                    <span style={{ fontSize: '12px', color: '#e3e3e3', fontWeight: 600 }}>Como chegar</span>
                    <svg width="7" height="13" viewBox="0 0 7.75 14" fill="none">
                      <path d="M0.75 0.75L7 7L0.75 13.25" stroke="#e3e3e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

              <div style={{ background: '#f6f6f6', borderRadius: '0 0 8px 8px', padding: '42px 35px 31px 29px', display: 'flex', flexDirection: 'column', gap: '47px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '47px' }}>
                  <p style={{ fontSize: '16px', color: '#494c4f', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                    No coração do Tatuapé, onde a cidade pulsa com energia e conveniência, o Evolution nasce para quem quer mais do que um endereço — quer uma experiência completa de moradia.
                    <br /><br />
                    A 2 minutos da Sky Fit Academia, do Hospital São Luiz e do Coco Bambu, e a apenas 5 minutos do Parque Ceret — tudo ao alcance de quem escolhe viver bem.
                  </p>
                  <p style={{ fontSize: '14px', color: '#494c4f', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                    O Tatuapé é um dos bairros mais valorizados da Zona Leste de São Paulo, reconhecido pela excelente infraestrutura, comércio diversificado, áreas verdes e fácil acesso ao centro e às principais vias da cidade.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={locDestaques} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#31477b', fontWeight: 600, whiteSpace: 'nowrap' }}>Destaques da localização</span>
                  <div style={{ flex: 1, height: '1px', background: '#e7e7e7' }} />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 16px' }}>
                  {DESTAQ_TAGS.map(tag => (
                    <div key={tag} style={{ border: '1px solid #779dff', borderRadius: '8px', padding: '10px 12px' }}>
                      <span style={{ fontSize: '14px', color: '#31477b', fontWeight: 600, whiteSpace: 'nowrap' }}>{tag}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Coluna direita */}
            <div style={{ width: isMobile ? '100%' : 'calc(50% - 16px)', flexShrink: 0, paddingTop: isMobile ? '32px' : '80px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={icoPin} alt="" style={{ width: '18px', height: '22px' }} />
                    <span style={{ fontSize: '13px', color: '#494c4f', fontWeight: 600, textTransform: 'uppercase' }}>Infraestrutura e Mobilidade</span>
                  </div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#779dff', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#a7a7a7', fontWeight: 600, textTransform: 'uppercase' }}>Evolution Tatuapé</span>
                </div>
                <div style={{ height: '1px', background: '#e7e7e7' }} />
              </div>

              <p style={{ fontSize: '20px', color: '#31477b', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.3, maxWidth: '448px', margin: 0 }}>
                Uma região em constante valorização e evolução urbana
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '12px' : '24px 32px' }}>
                {INFRA_CARDS.map(label => (
                  <div key={label} style={{ background: '#0c1a36', borderRadius: '8px', height: '50px', padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '1px', height: '18px', background: '#4f6db5', flexShrink: 0 }} />
                      <img src={locCardIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                      <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4f6db5', flexShrink: 0 }} />
                      <span style={{ fontSize: '16px', color: '#e3e3e3', fontWeight: 700, whiteSpace: 'nowrap' }}>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fotos */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '24px' : '32px' }}>
            {LOC_FOTOS.map(f => (
              <div key={f.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ aspectRatio: '416/277', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={f.src} alt={f.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
export default function Evolution() {
  return (
    <>
      <Header />
      <HeroEvolution />
      <ConceitoEvolution />
      <GaleriaEvolution />
      <LazerEvolution />
      <VideoEvolution />
      <TourEvolution />
      <PlantasEvolution />
      <LocalizacaoEvolution />
      <EvolucaoObra etapas={[
        { label: 'Estrutura',  pct: 100 },
        { label: 'Alvenaria',  pct: 100 },
        { label: 'Hidráulica', pct: 95  },
        { label: 'Elétrica',   pct: 95  },
        { label: 'Acabamento', pct: 60  },
        { label: 'Pintura',    pct: 60  },
      ]} />
      <Footer />
      <a
        href="https://wa.me/"
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
