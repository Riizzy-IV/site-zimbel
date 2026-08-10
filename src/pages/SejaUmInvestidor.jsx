import { Link } from 'react-router-dom'
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

/* ════════════════════════════════════════════════════════
   SEÇÃO 1 — HERO
════════════════════════════════════════════════════════ */
function HeroInvestidor() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '420px' : '620px' }}>
      <div className="absolute inset-0">
        <img src="/investidor/hero-bg.avif" alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.45) 45%, transparent 75%)' }} />
      </div>

      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Seja um investidor</span>
        </nav>
      )}

      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        <div className="flex items-center justify-center gap-4 rounded-full w-fit" style={{ alignSelf: 'flex-start', height: '36px', marginBottom: '24px', padding: '0 20px', border: '1px solid #c5a26a' }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Invista na</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a26a] shrink-0" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Zimbel Incorporadora</span>
        </div>

        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '32px' : '56px', marginBottom: '20px' }}>
          Seja um investidor
        </h1>

        <div style={{ width: '48px', height: '2px', background: '#c5a26a', marginBottom: '16px' }} />

        <p className="text-[#c5a26a] font-bold uppercase" style={{ fontSize: isMobile ? '13px' : '18px', lineHeight: 1.4 }}>
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
                Empreendimentos pensados para unir localização, qualidade e potencial de valorização.
              </p>
            </div>
            <div className="text-[#494c4f] text-[14px] leading-relaxed flex flex-col gap-2">
              <p>Investir em um imóvel vai muito além da escolha de uma planta. É uma decisão que envolve localização, qualidade construtiva, liquidez e perspectiva de valorização ao longo do tempo.</p>
              <p>Na Zimbel Incorporadora, cada empreendimento é desenvolvido com atenção a esses fatores, buscando criar projetos contemporâneos, bem localizados e alinhados às novas formas de morar e investir.</p>
              <p>Nosso portfólio contempla imóveis com diferentes perfis e possibilidades de investimento, permitindo encontrar oportunidades de acordo com seus objetivos — seja para geração de renda, formação de patrimônio ou valorização imobiliária.</p>
              <p>Mais do que adquirir um imóvel, você investe em um patrimônio pensado para o presente e preparado para o futuro.</p>
            </div>

            <div className="flex flex-col gap-1" style={{ marginTop: isMobile ? '48px' : '80px', marginBottom: '18px' }}>
              <h2 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Como funciona
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Do primeiro contato à escolha do imóvel, uma jornada simples, transparente e orientada aos seus objetivos.
              </p>
            </div>
            <div className="text-[#494c4f] text-[14px] leading-relaxed flex flex-col gap-2">
              <p>Nossa equipe acompanha você durante todo o processo de investimento, apresentando os empreendimentos, diferenciais, condições comerciais e informações necessárias para uma tomada de decisão mais segura.</p>
              <p>Você conhece as oportunidades disponíveis, entende o perfil de cada projeto e escolhe a alternativa que melhor se conecta à sua estratégia de investimento.</p>
              <p>Conheça as oportunidades da Zimbel e encontre o empreendimento ideal para o seu próximo investimento.</p>
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
   SEÇÃO 3 — CONTATO / CADASTRO
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
      <ContatoInvestidor />
      <Footer showContactHeader={false} />
    </>
  )
}
