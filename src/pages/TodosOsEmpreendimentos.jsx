import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

const tabs = [
  { label: 'Todos', icon: <img src="/icon/todos.svg" alt="" className="w-5 h-5 object-contain" /> },
  { label: 'Lançamentos', icon: <img src="/icon/star.svg" alt="" className="w-5 h-5 object-contain" /> },
  { label: 'Em obras', icon: <img src="/icon/obra.svg" alt="" className="w-5 h-5 object-contain" /> },
  { label: 'Pronto para morar', icon: <img src="/icon/chave.svg" alt="" className="w-5 h-5 object-contain" /> },
]

const FILTRO_PARA_TAB = {
  todas: 0,
  lancamentos: 1,
  obras: 2,
  entregues: 3,
}

const empreendimentos = [
  {
    img: '/empreendimentos/vertice/hero-bg.jpg', city: 'Anália Franco - São Paulo', name: 'Vértice Anália Franco', href: '/empreendimentos/vertice',
    specs: [{ icon: '/cards/cama.svg', label: 'Studio e 1 dorm.' }, { icon: '/cards/area.svg', label: '24 a 54m²' }, { icon: '/cards/Frame-2.svg', label: '1 vaga' }, { icon: '/cards/area.svg', label: 'Rooftop com vista livre' }],
    status: ['Lançamentos', 'Em obras'],
  },
  {
    img: '/empreendimentos/evolution-fachada.avif', city: 'Tatuapé - São Paulo', name: 'Evolution Tatuapé', href: '/empreendimentos/evolution',
    specs: [{ icon: '/cards/cama.svg', label: '2 dormitórios' }, { icon: '/cards/area.svg', label: '34 a 50m²' }, { icon: '/cards/Frame-2.svg', label: '1 vaga' }, { icon: '/cards/area.svg', label: 'Área Gourmet' }],
    status: ['Em obras'],
  },
  {
    img: '/empreendimentos/esperanca-fachada.avif', city: 'Vila Esperança - São Paulo', name: 'Esperança Prime', href: null,
    specs: [{ icon: '/cards/cama.svg', label: 'Suítes e 1 dorm.' }, { icon: '/cards/area.svg', label: '32 a 200m²' }, { icon: '/cards/Frame-2.svg', label: '1 vaga' }, { icon: '/cards/area.svg', label: 'Varanda Gourmet' }],
    status: ['Pronto para morar'],
  },
]

/* ════════════════════════════════════════════════════════
   SEÇÃO 1 — HERO
════════════════════════════════════════════════════════ */
function HeroTodosEmpreendimentos() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '420px' : '620px' }}>
      <div className="absolute inset-0">
        <img src="/empreendimentos-page/hero-bg.avif" alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9) 100%)' }} />
      </div>

      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="hover:text-white cursor-pointer transition-colors">Empreendimentos</span>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Todos os empreendimentos</span>
        </nav>
      )}

      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        <div className="flex items-center justify-center gap-4 bg-[#5b0a28] rounded-sm w-fit" style={{ alignSelf: 'flex-start', height: '36px', marginBottom: '16px', padding: '0 20px' }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Empreendimentos</span>
          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Zimbel Incorporadora</span>
        </div>

        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Todos os empreendimentos
        </h1>

        <p className="text-[#c5a26a] font-bold uppercase" style={{ fontSize: isMobile ? '12px' : '16px' }}>
          Conheça todos os nossos imóveis
        </p>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 2 — LISTAGEM
════════════════════════════════════════════════════════ */
function ListaEmpreendimentos() {
  const navigate = useNavigate()
  const { isMobile } = useBreakpoint()
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const filtro = searchParams.get('filtro')
    if (filtro && FILTRO_PARA_TAB[filtro] !== undefined) {
      setActiveTab(FILTRO_PARA_TAB[filtro])
    }
  }, [searchParams])

  const filtrados = tabs[activeTab].label === 'Todos'
    ? empreendimentos
    : empreendimentos.filter(e => e.status.includes(tabs[activeTab].label))

  return (
    <section className="bg-white" style={{ paddingTop: '56px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

        <div className="flex flex-col gap-1" style={{ marginBottom: '32px' }}>
          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex items-center gap-2.5">
              <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Empreendimentos em destaque</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#ca4080] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="w-full h-px bg-[#e3e3e3]" style={{ marginTop: '12px', marginBottom: '15px' }} />
          <h2 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            Construindo e realizando sonhos
          </h2>
          <p className="text-[#a7a7a7] text-base font-medium">
            Empreendimentos modernos em todos os detalhes, pensados em você
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap items-stretch"
          style={{ background: '#4c0522', borderLeft: '5px solid #6d1136', borderRadius: '4px', marginBottom: '32px' }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="flex items-center gap-3"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === i ? '3px solid #ca4080' : '3px solid transparent',
                padding: '16px 24px',
                cursor: 'pointer',
              }}
            >
              {tab.icon}
              <span className="text-white text-sm font-semibold uppercase whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Cards: 1 grande em cima + resto em linha embaixo (2 itens ficam lado a lado, sem card grande) */}
        {(() => {
          const [big, ...small] = filtrados.length === 2 ? [null, ...filtrados] : filtrados
          return (
            <div className="flex flex-col gap-6">
              {big && (
                <div
                  className="relative w-full rounded-lg overflow-hidden cursor-pointer"
                  style={{ height: isMobile ? '320px' : '560px', boxShadow: '0 20px 60px rgba(51,2,24,0.4)' }}
                  onClick={() => big.href && navigate(big.href)}
                >
                  <img src={big.img} alt={big.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(51,2,24,0) 35%, rgba(51,2,24,0.72) 72%, #330218 100%)' }} />

                  <div className="absolute bottom-0 flex items-end gap-5" style={{ left: 0, right: isMobile ? 0 : '200px', padding: isMobile ? '20px' : '32px' }}>
                    <div style={{ width: '4px', height: '90px', background: '#ca4080', borderRadius: '2px', flexShrink: 0 }} />
                    <div className="flex flex-col gap-3">
                      <div>
                        <div className="flex items-center gap-2" style={{ marginBottom: '4px' }}>
                          <img src="/icon/localizacao.svg" alt="" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                          <span className="text-white/80 text-[10px] md:text-[14px] uppercase tracking-wide">{big.city}</span>
                        </div>
                        <h3 className="text-white text-[16px] md:text-[24px] leading-none font-extrabold uppercase">{big.name}</h3>
                      </div>
                      <div className="hidden md:flex items-center flex-wrap gap-6">
                        {big.specs.map((s) => (
                          <div key={s.label} className="flex items-center gap-3">
                            <img src={s.icon} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                            <span className="text-white text-sm font-semibold whitespace-nowrap">{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 right-0 flex flex-col items-center justify-center gap-1 backdrop-blur-sm"
                    style={{ background: 'rgba(147,47,93,0.8)', width: isMobile ? '120px' : '192px', height: isMobile ? '50px' : '69px', borderTopLeftRadius: '8px' }}
                  >
                    <span className="text-white text-sm font-semibold uppercase">Saiba mais</span>
                  </div>
                </div>
              )}

              {small.length > 0 && (
                <div className="flex flex-col md:flex-row gap-6">
                  {small.map((emp) => (
                    <div
                      key={emp.name}
                      className="relative flex-1 rounded-lg overflow-hidden cursor-pointer"
                      style={{ height: isMobile ? '280px' : '380px', boxShadow: '0 20px 60px rgba(51,2,24,0.4)' }}
                      onClick={() => emp.href && navigate(emp.href)}
                    >
                      <img src={emp.img} alt={emp.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(51,2,24,0) 20%, #330218 100%)' }} />

                      <div className="absolute flex items-end gap-4" style={{ bottom: '20px', left: 0, right: '140px' }}>
                        <div style={{ width: '3px', height: '70px', background: '#ca4080', borderRadius: '2px', flexShrink: 0 }} />
                        <div className="flex flex-col gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <img src="/icon/localizacao.svg" alt="" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                              <span className="text-white/70 text-xs uppercase tracking-wide">{emp.city}</span>
                            </div>
                            <h3 className="text-white text-[13px] md:text-lg font-extrabold uppercase whitespace-nowrap">{emp.name}</h3>
                          </div>
                          <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-2">
                            {emp.specs.map((s) => (
                              <div key={s.label} className="flex items-center gap-2.5">
                                <img src={s.icon} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                <span className="text-white text-sm font-semibold leading-tight">{s.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute bottom-0 right-0 flex flex-col items-center justify-center gap-1 backdrop-blur-sm"
                        style={{ background: 'rgba(147,47,93,0.8)', width: isMobile ? '110px' : '160px', height: isMobile ? '50px' : '56px', borderTopLeftRadius: '8px' }}
                      >
                        <span className="text-white text-sm font-semibold uppercase">Saiba mais</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })()}
      </div>
    </section>
  )
}

export default function TodosOsEmpreendimentos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Header />
      <HeroTodosEmpreendimentos />
      <ListaEmpreendimentos />
      <Footer />
    </>
  )
}
