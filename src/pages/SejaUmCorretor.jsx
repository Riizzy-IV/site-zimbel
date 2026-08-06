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

const CARDS = [
  {
    icon: '/corretor/icon-cliente.svg',
    titulo: 'Atendimento ao cliente',
    texto: 'Quando o cliente mencionar um corretor parceiro durante a checagem, o atendimento será vinculado a esse profissional, garantindo transparência no processo.',
  },
  {
    icon: '/corretor/icon-propostas.svg',
    titulo: 'Propostas',
    texto: 'Caso a proposta não avance ou o cliente desista, o corretor parceiro será comunicado e poderá acompanhar os próximos passos da negociação.',
  },
  {
    icon: '/corretor/icon-acompanhamentos.svg',
    titulo: 'Acompanhamentos',
    texto: 'O corretor parceiro deverá acompanhar a evolução do atendimento junto à equipe responsável, mantendo visibilidade sobre o status do cliente.',
  },
  {
    icon: '/corretor/icon-comissoes.svg',
    titulo: 'Comissões',
    texto: 'As regras de comissionamento são claras e respeitam o vínculo do cliente com o corretor parceiro, conforme os critérios comerciais do empreendimento.',
  },
  {
    icon: '/corretor/icon-cadastros.svg',
    titulo: 'Cadastros',
    texto: 'Cadastre-se como parceiro e tenha acesso às informações comerciais, materiais de apoio e oportunidades disponíveis.',
  },
]

/* ════════════════════════════════════════════════════════
   SEÇÃO 1 — HERO
════════════════════════════════════════════════════════ */
function HeroCorretor() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="relative w-full" style={{ height: isMobile ? '420px' : '520px' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/corretor/hero-bg.avif" alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="sync" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 100%)' }} />
      </div>

      {/* Breadcrumb */}
      {!isMobile && (
        <nav className="absolute top-6 z-10 flex items-center gap-1 text-white/60 text-[12px] font-medium" style={{ left: gridPad }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-1 opacity-40">›</span>
          <span className="text-white font-semibold">Seja um corretor</span>
        </nav>
      )}

      {/* Conteúdo */}
      <div className="absolute z-10 flex flex-col" style={{ left: gridPad, right: gridPad, bottom: isMobile ? '24px' : '48px' }}>
        <div className="flex items-center justify-center gap-4 bg-[#5b0a28] rounded-sm w-fit" style={{ alignSelf: 'flex-start', height: '36px', marginBottom: '16px', padding: '0 20px' }}>
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Seja um corretor</span>
          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
          <span className="text-white text-[13px] font-bold uppercase tracking-wide whitespace-nowrap">Zimbel Incorporadora</span>
        </div>

        <h1 className="text-white font-extrabold uppercase leading-tight" style={{ fontSize: isMobile ? '24px' : '34px', marginBottom: '10px' }}>
          Construa sonhos conosco
        </h1>

        <p className="text-[#ca4080] font-bold uppercase" style={{ fontSize: isMobile ? '12px' : '16px' }}>
          Do processo de vendas à realização de sonhos
        </p>
      </div>

      {/* CTA flutuante */}
      {!isMobile && (
        <a
          href="#cadastro"
          className="absolute flex items-center justify-center gap-3 bg-[#ca4080] hover:bg-[#932f5d] transition-colors rounded"
          style={{ right: gridPad, bottom: '48px', height: '62px', width: '261px' }}
        >
          <span className="text-white text-sm font-semibold uppercase">Seja um corretor</span>
          <ArrowUp />
        </a>
      )}
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 2 — VANTAGENS
════════════════════════════════════════════════════════ */
function VantagensCorretor() {
  const { isMobile } = useBreakpoint()
  return (
    <section className="bg-white" style={{ paddingTop: '56px', paddingBottom: isMobile ? '48px' : '72px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

        <div className="flex flex-col gap-1" style={{ marginBottom: isMobile ? '40px' : '72px' }}>
          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex items-center gap-2.5">
              <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Parcerias</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#ca4080] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="w-full h-px bg-[#e3e3e3]" style={{ marginTop: '12px', marginBottom: '3px' }} />
          <h2 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)', marginTop: '12px' }}>
            Corretores parceiros são bem-vindos
          </h2>
          <p className="text-[#a7a7a7] text-base font-medium">
            Empreendimentos modernos em todos os detalhes, pensados em você
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {CARDS.map((card) => (
            <div key={card.titulo} className="flex flex-col gap-4" style={{ maxWidth: '375px' }}>
              <div className="bg-[#5b0a28] flex items-center justify-center rounded-full shrink-0" style={{ width: '92px', height: '92px' }}>
                <img src={card.icon} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </div>
              <p className="text-[#6d1136] font-bold uppercase" style={{ fontSize: '20px' }}>{card.titulo}</p>
              <p className="text-[#494c4f] text-[14px] leading-relaxed">{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   SEÇÃO 3 — CONTATO / CADASTRO
════════════════════════════════════════════════════════ */
function ContatoCorretor() {
  const { isMobile } = useBreakpoint()

  const campos = [
    { label: 'Nome:*', placeholder: 'insira seu nome' },
    { label: 'Sobrenome:*', placeholder: 'insira seu sobrenome' },
    { label: 'E-mail:*', placeholder: 'email@email.com.br' },
    { label: 'Telefone ou Whatsapp:*', placeholder: '(xx) 99999-9999' },
  ]

  return (
    <section id="cadastro" className="bg-[#f6f6f6]" style={{ paddingTop: isMobile ? '48px' : '80px', paddingBottom: isMobile ? '48px' : '80px' }}>
      <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Foto */}
          {!isMobile && (
            <div className="rounded-lg overflow-hidden shrink-0" style={{ width: '420px', height: '540px' }}>
              <img src="/corretor/contato-foto.avif" alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          )}

          {/* Formulário */}
          <div className="flex flex-col gap-8 flex-1" style={{ maxWidth: '753px' }}>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[#3d3d3d] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Contato via e-mail
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Estamos prontos para atender você. Entre em contato e tire suas dúvidas!
              </p>
            </div>

            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
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

export default function SejaUmCorretor() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Header />
      <HeroCorretor />
      <VantagensCorretor />
      <ContatoCorretor />
      <Footer showContactHeader={false} />
    </>
  )
}
