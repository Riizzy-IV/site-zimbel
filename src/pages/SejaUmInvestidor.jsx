import { Link, useNavigate } from 'react-router-dom'
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

function ArrowUp() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const EMPREENDIMENTOS = [
  { label: 'Esperança Prime', href: null },
  { label: 'Evolution Tatuapé', href: '/empreendimentos/evolution' },
  { label: 'Vértice Anália Franco', href: '/empreendimentos/vertice' },
]

/* ════════════════════════════════════════════════════════
   SEÇÃO 1 — HERO
════════════════════════════════════════════════════════ */
function HeroInvestidor() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '420px' : '520px' }}>
      <div className="absolute inset-0">
        <img src="/investidor/hero-bg.avif" alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 100%)' }} />
      </div>

      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Seja um investidor</span>
        </nav>
      )}

      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        <div className="flex items-center justify-center gap-4 bg-[#5b0a28] rounded-sm w-fit" style={{ alignSelf: 'flex-start', height: '36px', marginBottom: '16px', padding: '0 20px' }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Invista na</span>
          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Zimbel Incorporadora</span>
        </div>

        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Seja um investidor
        </h1>

        <p className="text-[#ca4080] font-bold uppercase" style={{ fontSize: isMobile ? '12px' : '16px' }}>
          Invista em empreendimentos de alta rentabilidade
        </p>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 2 — VANTAGENS + COMO FUNCIONA
════════════════════════════════════════════════════════ */
function VantagensInvestidor() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="bg-white" style={{ paddingTop: '56px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div className="flex flex-col lg:flex-row items-start gap-12">

          <div className="flex flex-col flex-1" style={{ maxWidth: '672px' }}>
            <div className="flex flex-col gap-1" style={{ marginBottom: '32px' }}>
              <div className="flex items-center gap-7 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
                  <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Porque investir</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#ca4080] shrink-0" />
                <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
              </div>
              <div className="w-full h-px bg-[#e3e3e3]" style={{ marginTop: '12px', marginBottom: '15px' }} />
              <h2 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Vantagens de investir na Zimbel
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Empreendimentos modernos em todos os detalhes, pensados em rentabilidade e no cliente
              </p>
            </div>
            <div className="text-[#494c4f] text-[14px] leading-relaxed flex flex-col gap-2">
              <p>A Zimbel Incorporadora é uma empresa sólida e confiável, com imóveis de valor no mercado. Temos um portfólio focado em HMP e HIS.</p>
              <p>
                Se você está procurando uma oportunidade de investimento segura e rentável, a{' '}
                <span className="font-bold">Zimbel Incorporadora é a escolha certa</span>. Entre em contato conosco e saiba mais sobre nossas opções de investimento.
              </p>
            </div>

            <div className="flex flex-col gap-1" style={{ marginTop: isMobile ? '48px' : '80px', marginBottom: '18px' }}>
              <h2 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Como funciona
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Conheça o passo a passo para investir com segurança em nossos empreendimentos, do primeiro contato à rentabilidade do seu investimento.
              </p>
            </div>
          </div>

          {!isMobile && (
            <div className="rounded-lg overflow-hidden shrink-0" style={{ width: '400px', height: '510px' }}>
              <img src="/investidor/entrepreneurs.avif" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 3 — RENTABILIDADE
════════════════════════════════════════════════════════ */
function RentabilidadeInvestidor() {
  const navigate = useNavigate()
  const { isMobile } = useBreakpoint()
  const [active, setActive] = useState(EMPREENDIMENTOS.length - 1)

  return (
    <section className="bg-[#f6f6f6]" style={{ paddingTop: isMobile ? '48px' : '72px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <h2 className="text-[#5b0a28] font-extrabold uppercase text-center" style={{ fontSize: 'clamp(24px, 3vw, 38px)', marginBottom: '32px' }}>
          Rentabilidade
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4" style={{ marginBottom: '32px' }}>
          {EMPREENDIMENTOS.map((emp, i) => (
            <button
              key={emp.label}
              onClick={() => { setActive(i); if (emp.href) navigate(emp.href) }}
              className="flex items-center justify-center gap-2.5 rounded transition-colors"
              style={{ background: active === i ? '#5b0a28' : '#ca4080', height: '62px', padding: '0 24px' }}
            >
              <span className="text-white text-sm font-semibold whitespace-nowrap">{emp.label}</span>
              <img src="/investidor/icon-arrow.svg" alt="" style={{ width: '20px', height: '19px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </button>
          ))}
        </div>

        <div className="w-full rounded-lg overflow-hidden mx-auto" style={{ maxWidth: '1088px' }}>
          <img src="/investidor/rentabilidade-chart.png" alt="Gráfico de rentabilidade" className="w-full h-auto" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 4 — CONTATO / CADASTRO
════════════════════════════════════════════════════════ */
function ContatoInvestidor() {
  const { isMobile } = useBreakpoint()

  const campos = [
    { label: 'Nome:*', placeholder: 'insira seu nome' },
    { label: 'Sobrenome:*', placeholder: 'insira seu sobrenome' },
    { label: 'E-mail:*', placeholder: 'email@email.com.br' },
    { label: 'Telefone ou Whatsapp:*', placeholder: '(xx) 99999-9999' },
  ]

  return (
    <section id="cadastro" className="bg-white" style={{ paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {!isMobile && (
            <div className="rounded-lg overflow-hidden shrink-0" style={{ width: '420px', height: '540px' }}>
              <img src="/investidor/contato-foto.avif" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          )}

          <div className="flex flex-col gap-8 flex-1" style={{ maxWidth: '753px' }}>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[#3d3d3d] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Contato via e-mail
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Estamos prontos para atender você. Entre em contato e tire suas dúvidas!
              </p>
            </div>

            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-x-6 gap-y-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                {campos.map((campo) => (
                  <div key={campo.label} className="flex flex-col gap-2">
                    <label className="text-[#5b0a28] text-[15px] font-semibold">{campo.label}</label>
                    <input
                      type="text"
                      placeholder={campo.placeholder}
                      className="border border-[#e3e3e3] rounded-lg text-[15px] placeholder:text-[#a7a7a7] focus:outline-none focus:border-[#5b0a28] transition-colors"
                      style={{ padding: '18px 16px' }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="peer sr-only" />
                  <img src="/corretor/icon-checkbox.svg" alt="" className="shrink-0" style={{ width: '16px', height: '16px' }} />
                  <span className="text-[#6d1136] text-[15px]">
                    Eu concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="peer sr-only" />
                  <img src="/corretor/icon-checkbox.svg" alt="" className="shrink-0" style={{ width: '16px', height: '16px' }} />
                  <span className="text-[#6d1136] text-[15px]">
                    Ao informar meus dados eu concordo com os{' '}
                    <Link to="/politica-de-privacidade" className="underline hover:text-[#5b0a28] transition-colors">
                      termos de privacidade e cookies
                    </Link>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-[#ca4080] hover:bg-[#932f5d] transition-colors rounded w-fit"
                style={{ height: '62px', padding: '0 32px' }}
              >
                <span className="text-white text-sm font-semibold">Cadastrar</span>
                <ArrowUp />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SejaUmInvestidor() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Header />
      <HeroInvestidor />
      <VantagensInvestidor />
      <RentabilidadeInvestidor />
      <ContatoInvestidor />
      <Footer showContactHeader={false} />
    </>
  )
}
