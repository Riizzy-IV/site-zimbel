import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LinhaDecorativa from './LinhaDecorativa'

const DISPLAY = "'Zalando Sans Expanded', sans-serif"
const TEXT = "'Zalando Sans', sans-serif"
const GOLD = '#c5a26a'
const SIDE = 'max(20px, 6.5vw)'

const NAV = [
  { label: 'sobre', icon: '/home/nav-sobre.svg', iconEscuro: '/home/nav-sobre-escuro.svg', box: '8.33%', pad: '-5.62%', secao: 'sobre' },
  { label: 'empreendimentos', icon: '/home/nav-empreendimentos.svg', iconEscuro: '/home/nav-empreendimentos-escuro.svg', box: '12.54% 4.16% 8.29% 4.17%', pad: '-5.92% -5.11%', rota: '/empreendimentos' },
  { label: 'investidores', icon: '/home/nav-investidores.svg', iconEscuro: '/home/nav-investidores-escuro.svg', box: '8.33% 20.9% 9.13% 22.27%', pad: '-5.68% -8.25%', rota: '/seja-um-investidor' },
  { label: 'seja um corretor', icon: '/home/nav-corretor.svg', iconEscuro: '/home/nav-corretor-escuro.svg', box: '12.5% 8.34% 12.5% 8.33%', pad: '-6.25% -5.62% -6.25% -5.63%', rota: '/seja-um-corretor' },
  { label: 'contato', icon: '/home/nav-contato.svg', iconEscuro: '/home/nav-contato-escuro.svg', box: '14.58% 8.34% 14.58% 8.33%', pad: '-6.62% -5.62% -6.62% -5.63%', secao: 'contato' },
]

function NavIcon({ item, escuro }) {
  return (
    <span style={{ position: 'relative', width: 16, height: 16, flexShrink: 0, overflow: 'hidden' }}>
      <span style={{ position: 'absolute', inset: item.box }}>
        <span style={{ position: 'absolute', inset: item.pad }}>
          <img src={escuro ? item.iconEscuro : item.icon} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </span>
      </span>
    </span>
  )
}

// Sobre o hero o header é transparente com texto branco; depois dele vira a versão clara do Figma.
function HomeHeader({ claro }) {
  const navigate = useNavigate()
  const [aberto, setAberto] = useState(false)

  function ir(item) {
    setAberto(false)
    if (item.secao) document.getElementById(item.secao)?.scrollIntoView({ behavior: 'smooth' })
    else navigate(item.rota)
  }

  const itemStyle = {
    display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', padding: 0, cursor: 'pointer',
    fontFamily: DISPLAY, fontSize: 14, color: claro ? '#454545' : '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap',
  }

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 65,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: SIDE,
          backdropFilter: claro ? 'blur(9px)' : 'blur(25.15px)', WebkitBackdropFilter: claro ? 'blur(9px)' : 'blur(25.15px)',
          borderBottom: claro ? 'none' : '1px solid rgba(255,255,255,0.05)',
          background: claro ? 'rgba(255,255,255,0.85)' : 'transparent',
          transition: 'background 300ms ease',
        }}
      >
        {claro && <img src="/home/header-linha.svg" alt="" style={{ position: 'absolute', left: SIDE, right: SIDE, bottom: 0, width: `calc(100% - 2 * ${SIDE})`, height: 1 }} />}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Zimbel Incorporadora" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}>
          <img src={claro ? '/home/header-logo-escuro.svg' : '/home/header-logo.svg'} alt="Zimbel Incorporadora" style={{ width: 189, height: claro ? 34 : 32, maxWidth: 'none' }} />
        </button>

        <nav className="hidden lg:flex items-center" style={{ gap: 'clamp(28px, 3.4vw, 65px)' }}>
          {NAV.map((item) => (
            <button key={item.label} onClick={() => ir(item)} style={itemStyle} className="hover:opacity-75 transition-opacity">
              <NavIcon item={item} escuro={claro} />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-10 h-10"
          aria-label="Abrir menu"
          onClick={() => setAberto(true)}
          style={{ background: 'none', border: 'none' }}
        >
          <span className={`block w-6 h-[2px] rounded ${claro ? 'bg-[#454545]' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] rounded ${claro ? 'bg-[#454545]' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] rounded ${claro ? 'bg-[#454545]' : 'bg-white'}`} />
        </button>
      </header>

      {aberto && (
        <div className="lg:hidden" style={{ position: 'fixed', inset: 0, zIndex: 60, background: '#330218', display: 'flex', flexDirection: 'column', padding: `24px ${SIDE}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
            <img src="/home/header-logo.svg" alt="Zimbel Incorporadora" style={{ width: 160, height: 'auto' }} />
            <button aria-label="Fechar menu" onClick={() => setAberto(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 32, lineHeight: 1, cursor: 'pointer' }}>×</button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {NAV.map((item) => (
              <button key={item.label} onClick={() => ir(item)} style={{ ...itemStyle, color: '#fff', fontSize: 18, gap: 12 }}>
                <NavIcon item={item} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

const PAINEL_BG = 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 29.535%), linear-gradient(90deg, rgb(91,10,40) 0%, rgb(91,10,40) 100%)'
const TITULO_PAINEL = 'clamp(24px, 2.92vw, 56px)'
const painel = { position: 'relative', width: '100vw', height: '100%', overflow: 'hidden', flexShrink: 0 }

// Primeira dobra: 3 painéis lado a lado que deslizam na horizontal conforme a rolagem vertical
// (a seção tem 3 telas de altura e o conteúdo fica fixo na tela enquanto isso).
export default function HomeHero() {
  const secaoRef = useRef(null)
  const trilhoRef = useRef(null)
  const [claro, setClaro] = useState(false)

  useEffect(() => {
    let frame = 0
    const atualizar = () => {
      frame = 0
      const secao = secaoRef.current
      if (!secao) return
      const { top, height, bottom } = secao.getBoundingClientRect()
      const progresso = Math.min(1, Math.max(0, -top / (height - window.innerHeight)))
      trilhoRef.current.style.transform = `translate3d(${-progresso * 200}vw, 0, 0)`
      setClaro(bottom <= 65)
    }
    const agendar = () => { if (!frame) frame = requestAnimationFrame(atualizar) }
    atualizar()
    window.addEventListener('scroll', agendar, { passive: true })
    window.addEventListener('resize', agendar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', agendar)
      window.removeEventListener('resize', agendar)
    }
  }, [])

  return (
    <>
      <HomeHeader claro={claro} />

      <section ref={secaoRef} style={{ position: 'relative', height: '300vh', background: '#330218' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          <div ref={trilhoRef} style={{ display: 'flex', width: '300vw', height: '100%', willChange: 'transform' }}>

            {/* Painel 1 — Viver bem é o novo luxo */}
            <div style={painel}>
              <img src="/home/hero-wellness.avif" alt="Mulher praticando yoga ao pôr do sol" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 29.535%), linear-gradient(90deg, rgba(91,10,40,0.8) 0%, rgba(91,10,40,0.8) 100%), linear-gradient(90deg, rgba(91,10,40,0) 0%, rgb(91,10,40) 99.844%)' }} />
              <LinhaDecorativa borrada="/home/hero-linha-1.svg" nitida="/home/hero-linha-1-nitida.svg" direcao="to bottom left" inicio={30} fim={52} inset="14.44% 20.63% -23.8% 14.32%" pad="-1.81% -1.71%" />
              <div style={{ position: 'absolute', right: SIDE, top: '38%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', maxWidth: `calc(100vw - 2 * ${SIDE})` }}>
                <h1 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: 'clamp(34px, 2.92vw, 56px)', lineHeight: 'normal', color: '#fff', textTransform: 'uppercase', width: '12.16em', maxWidth: '100%' }}>
                  viver bem é o novo luxo
                </h1>
                <p style={{ fontFamily: TEXT, fontSize: 'clamp(17px, 1.04vw, 20px)', color: '#fff', textWrap: 'balance', marginTop: 'clamp(16px, 2.03vw, 39px)' }}>
                  <strong style={{ color: GOLD }}>Wellness</strong> é viver em um lugar que favorece corpo, mente e presença
                </p>
              </div>
            </div>

            {/* Painel 2 — Arquitetura e convivência importam */}
            <div style={{ ...painel, backgroundImage: PAINEL_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: SIDE }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'clamp(20px, 1.875vw, 36px)', maxWidth: '100%' }}>
                <div style={{ position: 'relative', width: 'clamp(48px, 3.75vw, 72px)', aspectRatio: '72 / 69' }}>
                  <LinhaDecorativa borrada="/home/hero-icone-2.svg" nitida="/home/hero-icone-2-nitida.svg" pad="-9.57% -9.17%" direcao="to bottom left" inicio={30} fim={55} />
                </div>
                <p style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: TITULO_PAINEL, lineHeight: 'normal', color: '#fff', textTransform: 'uppercase', width: '20.07em', maxWidth: '100%', textWrap: 'balance' }}>
                  por isso, arquitetura, áreas de convivência e espaços de movimento <strong style={{ color: GOLD }}>importam</strong>
                </p>
                <p style={{ fontFamily: TEXT, fontSize: 'clamp(16px, 1.25vw, 24px)', color: '#fff', textWrap: 'balance' }}>
                  <strong style={{ color: GOLD }}>Morar bem</strong> também passa por como o espaço faz você sentir
                </p>
                <span style={{ background: GOLD, color: '#5b0a28', fontFamily: TEXT, fontSize: 'clamp(13px, 0.83vw, 16px)', padding: '10px 24px', borderRadius: 5 }}>
                  Wellness, não é o excesso, <strong>é intenção</strong>
                </span>
              </div>
            </div>

            {/* Painel 3 — Construindo espaços para a qualidade de vida */}
            <div style={{ ...painel, backgroundImage: PAINEL_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: SIDE }}>
              <LinhaDecorativa borrada="/home/hero-linha-3.svg" nitida="/home/hero-linha-3-nitida.svg" inset="14.44% 10.89% -45.93% 10.89%" pad="-1.51% -1.42%" />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'clamp(40px, 5.57vw, 107px)', maxWidth: '100%' }}>
                <img src="/home/hero-logo-3.svg" alt="Zimbel Incorporadora" style={{ width: 'clamp(220px, 27vw, 519px)', aspectRatio: '519 / 88', height: 'auto' }} />
                <p style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: TITULO_PAINEL, lineHeight: 'normal', color: '#fff', textTransform: 'uppercase', width: '18.93em', maxWidth: '100%', textWrap: 'balance' }}>
                  construindo espaços pensados para a qualidade de vida
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
