import { useEffect, useRef, useState } from 'react'
import { Botao, Cabecalho, LinhaH } from './ui'
import { pausarRolagem, retomarRolagem } from '../../lib/rolagem'
import { COR, PAD, TEXT, TRIM } from './tokens'

const FOTOS = [
  { src: '/home/sobre-equipe.avif', alt: 'Sócios da Zimbel Incorporadora' },
  { src: '/sobre/palestra-target-28.avif', pos: 'center 18%' },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 10].map((n) => ({ src: `/sobre/sobre-${n}.avif` })),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ src: `/sobre/obra-${n}.avif` })),
  ...[1, 2, 3, 4, 5].map((n) => ({ src: `/escritorio/escritorio-${n}.avif` })),
  ...[1, 2, 3, 4, 5].map((n) => ({ src: `/sobre/obra-drive-${n}.avif` })),
]

const TERRENO_WPP = 'https://wa.me/5511910837322?text=Ol%C3%A1%2C%20tenho%20um%20terreno%20e%20gostaria%20de%20apresentar%20para%20a%20Zimbel.'
const ESPACO = 'clamp(56px, 5.1vw, 98px)'
const LARGURA_FOTO = `calc((100vw - 2 * ${PAD}) * 0.7448)`

function BotaoSeta({ direcao, onClick, style }) {
  return (
    <button
      onClick={onClick}
      aria-label={direcao === 'esq' ? 'Foto anterior' : 'Próxima foto'}
      className="hover:brightness-125 transition-[filter]"
      style={{
        position: 'absolute', top: '50%', zIndex: 2, width: 'clamp(44px, 3.75vw, 72px)', height: 'clamp(44px, 3.75vw, 72px)',
        transform: `translateY(-50%)${direcao === 'dir' ? ' rotate(180deg)' : ''}`,
        background: COR.vinhoClaro, border: `1px solid ${COR.rosa}`, borderRadius: 4, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', ...style,
      }}
    >
      <span style={{ position: 'relative', width: 24, height: 24 }}>
        <span style={{ position: 'absolute', inset: '17% 37.5% 17% 32.93%' }}>
          <img src="/home/carrossel-seta.svg" alt="" style={{ position: 'absolute', inset: '-4.73% -10.57%', width: '121.14%', height: '109.46%', maxWidth: 'none' }} />
        </span>
      </span>
    </button>
  )
}

function Ampliada({ indice, onFechar, onTrocar }) {
  const foto = FOTOS[indice]

  useEffect(() => {
    const onTecla = (e) => {
      if (e.key === 'Escape') onFechar()
      if (e.key === 'ArrowLeft') onTrocar(-1)
      if (e.key === 'ArrowRight') onTrocar(1)
    }
    window.addEventListener('keydown', onTecla)
    document.documentElement.style.overflow = 'hidden'
    pausarRolagem()
    return () => {
      window.removeEventListener('keydown', onTecla)
      document.documentElement.style.overflow = ''
      retomarRolagem()
    }
  }, [onFechar, onTrocar])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      onClick={onFechar}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(20, 1, 10, 0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(56px, 6vw, 96px) clamp(16px, 6vw, 120px)' }}
    >
      <img
        src={foto.src}
        alt={foto.alt ?? 'Zimbel Incorporadora'}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 4, boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
      />
      <button
        onClick={onFechar}
        aria-label="Fechar"
        style={{ position: 'absolute', top: 16, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 40, lineHeight: 1, cursor: 'pointer' }}
      >
        ×
      </button>
      <span style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.7)', fontFamily: TEXT, fontSize: 14 }}>
        {indice + 1} / {FOTOS.length}
      </span>
      <div onClick={(e) => e.stopPropagation()}>
        <BotaoSeta direcao="esq" onClick={() => onTrocar(-1)} style={{ left: 'clamp(8px, 2vw, 32px)' }} />
        <BotaoSeta direcao="dir" onClick={() => onTrocar(1)} style={{ right: 'clamp(8px, 2vw, 32px)' }} />
      </div>
    </div>
  )
}

function Carrossel() {
  const trilho = useRef(null)
  const [aberta, setAberta] = useState(null)
  const trocar = (sentido) => setAberta((i) => (i + sentido + FOTOS.length) % FOTOS.length)
  const fechar = () => setAberta(null)
  const mover = (sentido) => {
    const el = trilho.current
    const passo = el.firstElementChild.getBoundingClientRect().width + 32
    el.scrollBy({ left: sentido * passo, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative', marginTop: 'clamp(48px, 4.64vw, 89px)' }}>
      <div
        ref={trilho}
        className="no-scrollbar"
        style={{ display: 'flex', gap: 32, overflowX: 'auto', scrollSnapType: 'x mandatory', marginRight: `calc(-1 * ${PAD})`, paddingRight: PAD }}
      >
        {FOTOS.map((f, i) => (
          <button
            key={f.src}
            onClick={() => setAberta(i)}
            aria-label="Ampliar foto"
            style={{ position: 'relative', flexShrink: 0, width: LARGURA_FOTO, aspectRatio: '1252 / 665', borderRadius: 4, overflow: 'hidden', scrollSnapAlign: 'start', border: 'none', padding: 0, cursor: 'zoom-in', background: '#eee' }}
          >
            <img src={f.src} alt={f.alt ?? 'Zimbel Incorporadora'} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: f.pos ?? 'center' }} />
          </button>
        ))}
      </div>
      <BotaoSeta direcao="esq" onClick={() => mover(-1)} style={{ left: `calc(-1 * min(37px, ${PAD} - 8px))` }} />
      <BotaoSeta direcao="dir" onClick={() => mover(1)} style={{ right: `calc(-1 * min(33px, ${PAD} - 8px))` }} />
      {aberta !== null && <Ampliada indice={aberta} onFechar={fechar} onTrocar={trocar} />}
    </div>
  )
}

export default function SobreZimbel() {
  return (
    <section style={{ paddingInline: PAD, paddingTop: 'clamp(72px, 7.86vw, 151px)', overflowX: 'clip' }}>
      <div id="sobre" style={{ display: 'flex', flexDirection: 'column', gap: 38, scrollMarginTop: 90 }}>
        <Cabecalho label="sobre a zimbel" titulo="Conheça um pouco sobre a Zimbel" tituloStyle={{ maxWidth: 447 }} />
        <p style={{ ...TRIM, fontFamily: TEXT, fontSize: 16, color: COR.cinza }}>Transformamos sonhos em projetos reais</p>
      </div>

      <Carrossel />

      <LinhaH src="/home/divisor-sobre.svg" style={{ marginTop: ESPACO }} />

      <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(32px, 4.74vw, 91px)', paddingTop: ESPACO, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative', flex: '904 1 0', width: '100%', aspectRatio: '904 / 567', borderRadius: 4, overflow: 'hidden' }}>
          <img src="/home/terreno.avif" alt="Obra em construção" loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: '681 1 0', display: 'flex', flexDirection: 'column', gap: 37, alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 38 }}>
            <Cabecalho label="ofereça seu terreno" titulo="Tem um terreno? Transforme em oportunidade!" />
            <p style={{ ...TRIM, fontFamily: TEXT, fontSize: 16, color: COR.cinza, maxWidth: 637 }}>
              A Zimbel busca novas áreas para desenvolver projetos inovadores na Zona Leste de São Paulo. Se você tem um terreno, fale com nossa equipe e descubra como podemos construir juntos um empreendimento de alto padrão.
            </p>
          </div>
          <Botao href={TERRENO_WPP}>oferecer meu terreno</Botao>
        </div>
      </div>
    </section>
  )
}
