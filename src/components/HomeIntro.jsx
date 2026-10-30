import { useEffect, useLayoutEffect, useState } from 'react'
import LinhaDecorativa from './LinhaDecorativa'
import { pausarRolagem, retomarRolagem, rolarPara } from '../lib/rolagem'

const STAGE_W = 1920
const STAGE_H = 1080
const EASE = 'cubic-bezier(0.5, 0, 0.5, 1)'

// Momento (ms) em que cada etapa começa — frames 1 a 5 do Figma, depois o fade para o hero.
const TIMELINE = [
  ['recolhe', 700],
  ['simbolo', 1900],
  ['cresce', 2520],
  ['cobre', 3220],
  ['foto', 3720],
  ['sai', 4420],
  ['fim', 5120],
]
const ORDEM = ['inicio', ...TIMELINE.map(([p]) => p)]

// Geometria do símbolo Z em cada frame (coordenadas do frame de 1920x1080).
const Z_W = 129.894
const Z_H = 124
// Largura reservada ao símbolo dentro do logo (o Z ocupa 0–130px; o texto começa depois).
const SIMBOLO_W = 140
// Ao crescer, o Z escala a partir do próprio centro (na posição do frame 3) em vez de seguir para o canto.
const centrado = (k) => ({ x: 895 + (Z_W - Z_W * k) / 2, y: 462 + (Z_H - Z_H * k) / 2, k })
const Z_POS = {
  logo: { x: 620, y: 462, k: 1 },
  centro: { x: 895, y: 462, k: 1 },
  // Um único crescimento contínuo até bem além do frame 5, para não haver parada antes de a foto cobrir a tela.
  final: centrado((4267 / Z_W) * 2.5),
}

function deveTocar() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function medirTela() {
  const w = window.innerWidth
  const h = window.innerHeight
  // O logo do frame 1 fica a 840px do centro do palco (x=120); mantém a margem proporcional do Figma (6,25%), mínimo 24px.
  const margem = Math.max(24, w * 0.0625)
  return { w, h, s: Math.min(h / STAGE_H, (w / 2 - margem) / 840) }
}

export default function HomeIntro() {
  const [tocar] = useState(deveTocar)
  const [fase, setFaseBruta] = useState('inicio')
  const [tela, setTela] = useState(medirTela)
  const ativo = tocar && fase !== 'fim'

  const avancar = (proxima) =>
    setFaseBruta((atual) => (ORDEM.indexOf(proxima) > ORDEM.indexOf(atual) ? proxima : atual))

  // Trava a rolagem sem esconder a barra (overflow: hidden fazia ela "pular" na tela ao final).
  useLayoutEffect(() => {
    if (!ativo) return
    const onResize = () => setTela(medirTela())
    const bloquear = (e) => e.preventDefault()
    const bloquearTecla = (e) => {
      if ([' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault()
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('wheel', bloquear, { passive: false })
    window.addEventListener('touchmove', bloquear, { passive: false })
    window.addEventListener('keydown', bloquearTecla)
    rolarPara(0, { immediate: true })
    pausarRolagem()
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('wheel', bloquear)
      window.removeEventListener('touchmove', bloquear)
      window.removeEventListener('keydown', bloquearTecla)
      retomarRolagem()
    }
  }, [ativo])

  // A barra fica invisível sobre o fundo vinho e ganha cor em fade junto com a saída da animação.
  const barraOculta = ativo && ORDEM.indexOf(fase) < ORDEM.indexOf('sai')
  useLayoutEffect(() => {
    const html = document.documentElement
    html.style.scrollbarColor = barraOculta ? 'transparent transparent' : ''
    html.style.backgroundColor = barraOculta ? '#330218' : ''
    return () => {
      html.style.scrollbarColor = ''
      html.style.backgroundColor = ''
    }
  }, [barraOculta])

  useEffect(() => {
    if (!tocar) return
    const timers = TIMELINE.map(([p, t]) => setTimeout(() => avancar(p), t))
    return () => timers.forEach(clearTimeout)
  }, [tocar])

  if (!ativo) return null

  const passou = (p) => ORDEM.indexOf(fase) >= ORDEM.indexOf(p)
  const pular = () => {
    avancar('sai')
    setTimeout(() => avancar('fim'), 700)
  }

  const z = passou('cresce') ? Z_POS.final : passou('simbolo') ? Z_POS.centro : Z_POS.logo
  const zTiming = passou('cresce')
    ? '1800ms cubic-bezier(0.35, 0, 0.75, 0.15)'
    : `650ms ${EASE}`

  // A mesma geometria do Z, em pixels da tela, para recortar a foto no formato do símbolo.
  const { w, h, s: escala } = tela
  const mascara = {
    x: (w - STAGE_W * escala) / 2 + z.x * escala,
    y: (h - STAGE_H * escala) / 2 + z.y * escala,
    w: Z_W * z.k * escala,
    h: 124 * z.k * escala,
  }
  const mascaraStyle = {
    maskImage: 'url(/home/intro-z.svg)',
    WebkitMaskImage: 'url(/home/intro-z.svg)',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: `${mascara.w}px ${mascara.h}px`,
    WebkitMaskSize: `${mascara.w}px ${mascara.h}px`,
    maskPosition: `${mascara.x}px ${mascara.y}px`,
    WebkitMaskPosition: `${mascara.x}px ${mascara.y}px`,
  }

  return (
    <div
      onClick={pular}
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 100, overflow: 'hidden', cursor: 'pointer',
        background: '#330218',
        opacity: passou('sai') ? 0 : 1,
        transition: 'opacity 700ms ease',
      }}
    >
      <div
        style={{
          position: 'absolute', left: '50%', top: '50%', width: STAGE_W, height: STAGE_H,
          background: '#330218',
          transform: `translate(-50%, -50%) scale(${escala})`,
        }}
      >
        {/* Linhas decorativas — o traço muda de #5B0A28 para #330218 a partir do frame 3 */}
        {['/home/intro-linha', '/home/intro-linha-2'].map((base, i) => (
          <LinhaDecorativa
            key={base}
            borrada={`${base}.svg`}
            nitida={`${base}-nitida.svg`}
            inset="14.81% 7.91% -4.19% 38.91%"
            pad="-2.22% -2.1%"
            style={{ opacity: (i === 0) !== passou('simbolo') ? 1 : 0, transition: 'opacity 500ms ease' }}
          />
        ))}

        {/* Logo completo: entra à esquerda e desliza para o centro. Depois o texto "ZIMBEL" desliza
            para dentro do símbolo e some, e só então o Z segue sozinho para o centro. */}
        <div
          style={{
            position: 'absolute', left: 120, top: 462, width: 681, height: 124,
            transform: `translateX(${passou('recolhe') ? 500 : 0}px)`,
            transition: `transform 880ms ${EASE}`,
          }}
        >
          <img
            src="/home/intro-logo.svg"
            alt=""
            style={{
              position: 'absolute', left: 0, top: 0, width: 681, height: 124, maxWidth: 'none',
              clipPath: `inset(0 ${681 - SIMBOLO_W}px 0 0)`,
              opacity: passou('simbolo') ? 0 : 1,
            }}
          />
          {/* Como no Smart Animate do Figma (frame 2 → 3), tudo converge para o centro num só movimento:
              a janela do texto acompanha o Z indo ao centro enquanto o texto desliza para dentro dele. */}
          <div
            style={{
              position: 'absolute', left: SIMBOLO_W, top: 0, width: 681 - SIMBOLO_W, height: 124, overflow: 'hidden',
              transform: `translateX(${passou('simbolo') ? Z_POS.centro.x - Z_POS.logo.x : 0}px)`,
              transition: `transform 650ms ${EASE}`,
            }}
          >
            <img
              src="/home/intro-logo.svg"
              alt=""
              style={{
                position: 'absolute', left: -SIMBOLO_W, top: 0, width: 681, height: 124, maxWidth: 'none',
                transform: `translateX(${passou('simbolo') ? -(681 - SIMBOLO_W) : 0}px)`,
                opacity: passou('simbolo') ? 0 : 1,
                transition: `transform 650ms ${EASE}, opacity 550ms ease`,
              }}
            />
          </div>
        </div>

        {/* "Viver bem é o novo luxo" recolhe para a direita */}
        <div
          style={{
            position: 'absolute', left: 976, top: 446, height: 156, overflow: 'hidden',
            width: passou('recolhe') ? 1 : 681,
            opacity: passou('recolhe') ? 0 : 1,
            transform: `translateX(${passou('recolhe') ? 476 : 0}px)`,
            transition: `width 880ms linear, transform 880ms linear, opacity 880ms ${EASE}`,
          }}
        >
          <p
            style={{
              width: 681, fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 700,
              fontSize: 64, lineHeight: 'normal', color: '#fff', textTransform: 'uppercase',
            }}
          >
            viver bem<br />é o novo luxo
          </p>
        </div>

        {/* Símbolo Z: fica no lugar do Z do logo, centraliza e depois cresce até cobrir a tela */}
        <img
          src="/home/intro-z.svg"
          alt=""
          style={{
            position: 'absolute', left: 0, top: 0, width: Z_W, height: 124, maxWidth: 'none',
            transformOrigin: '0 0',
            transform: `translate(${z.x}px, ${z.y}px) scale(${z.k})`,
            transition: `transform ${zTiming}, opacity ${passou('cresce') ? '350ms' : '0ms'} ease`,
            opacity: passou('simbolo') && !passou('cresce') ? 1 : 0,
          }}
        />
      </div>

      {/* Ao crescer, o Z deixa de ser branco e passa a revelar a foto pelo seu formato */}
      <div
        style={{
          position: 'absolute', inset: 0, ...mascaraStyle,
          opacity: passou('cresce') ? 1 : 0,
          transition: ['mask-size', 'mask-position', '-webkit-mask-size', '-webkit-mask-position']
            .map((prop) => `${prop} ${zTiming}`)
            .concat('opacity 350ms ease')
            .join(', '),
        }}
      >
        <img src="/home/hero-wellness.avif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <img
        src="/home/hero-wellness.avif"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: passou('foto') ? 1 : 0, transition: 'opacity 600ms ease',
        }}
      />
    </div>
  )
}
