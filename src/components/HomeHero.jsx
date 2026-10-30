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

export default function HomeHero() {
  const secaoRef = useRef(null)
  const [claro, setClaro] = useState(false)

  useEffect(() => {
    const atualizar = () => {
      const secao = secaoRef.current
      if (secao) setClaro(secao.getBoundingClientRect().bottom <= 65)
    }
    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    window.addEventListener('resize', atualizar)
    return () => {
      window.removeEventListener('scroll', atualizar)
      window.removeEventListener('resize', atualizar)
    }
  }, [])

  return (
    <>
      <HomeHeader claro={claro} />

      <section ref={secaoRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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
      </section>
    </>
  )
}
