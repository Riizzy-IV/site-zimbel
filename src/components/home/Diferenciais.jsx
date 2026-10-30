import LinhaDecorativa from '../LinhaDecorativa'
import { useState } from 'react'
import { Botao, Cabecalho, LinhaH, LinhaV } from './ui'
import { COR, DISPLAY, PAD, TEXT, TRIM } from './tokens'

const YT_ID = 'VIbe5I9ax4o'
const VIDEO_TOPO = 'clamp(48px, 5.05vw, 97px)'

const CARDS = [
  { n: 1, titulo: 'wellness', foto: '/home/dif-wellness.avif', degrade: true },
  { n: 2, titulo: 'qualidade', foto: '/home/dif-qualidade.avif' },
  { n: 3, titulo: 'conexões', foto: '/home/dif-conexoes.avif' },
]

const NUMEROS = [
  { valor: '+10 mil', texto: 'Metros quadrados de obra executados.', icone: 'caixa' },
  { valor: '+150', texto: 'Famílias atendidas.', icone: '/home/stat-familias.svg' },
  { valor: '+3 anos', texto: 'De experiência no mercado imobiliário.', icone: '/home/stat-experiencia.svg' },
]

function Icone({ icone }) {
  if (icone !== 'caixa') return <img src={icone} alt="" style={{ width: 72, height: 72, flexShrink: 0 }} />
  return (
    <div style={{ width: 72, height: 72, flexShrink: 0, background: COR.vinhoClaro, border: `1px solid ${COR.rosa}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 26.667, height: 25.333 }}>
        <img src="/home/stat-obra.svg" alt="" style={{ position: 'absolute', inset: '-3.95% -3.75%', width: '107.5%', height: '107.9%', maxWidth: 'none' }} />
      </div>
    </div>
  )
}

function Video() {
  const [aberto, setAberto] = useState(false)
  return (
    <>
      <button
        onClick={() => setAberto(true)}
        aria-label="Assistir ao vídeo da Zimbel"
        style={{ position: 'relative', display: 'block', width: '100%', aspectRatio: '1680 / 836', border: 'none', padding: 0, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', background: '#000' }}
      >
        <img src="/home/video-capa.avif" alt="" loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </button>

      {aberto && (
        <div onClick={() => setAberto(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setAberto(false)} aria-label="Fechar vídeo" style={{ position: 'absolute', top: 24, right: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 32, lineHeight: 1 }}>×</button>
          <div onClick={(e) => e.stopPropagation()} style={{ width: '90vw', maxWidth: 1100, aspectRatio: '16 / 9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
              title="Vídeo Zimbel Incorporadora"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default function Diferenciais() {
  return (
    <section>
      <div style={{ paddingInline: PAD, paddingTop: 'clamp(60px, 6.2vw, 119px)' }}>
        <Cabecalho label="diferenciais" titulo="É sobre fazer a diferença na vida das pessoas" tituloStyle={{ maxWidth: 571 }} />

        <div
          className="flex flex-col lg:flex-row lg:justify-between"
          style={{ position: 'relative', gap: 32, marginTop: 'clamp(32px, 1.8vw, 35px)', paddingLeft: 'clamp(0px, 6.6%, 111px)' }}
        >
          <div className="hidden lg:block" style={{ position: 'absolute', left: 0, top: -50, width: 210, height: 199, pointerEvents: 'none' }}>
            <LinhaDecorativa borrada="/home/deco-diferenciais.svg" nitida="/home/deco-diferenciais-nitida.svg" pad="-1.56% -1.48%" blend="normal" />
          </div>
          <p style={{ ...TRIM, position: 'relative', borderLeft: `5px solid ${COR.dourado}`, paddingLeft: 40, fontFamily: DISPLAY, fontSize: 'clamp(18px, 1.25vw, 24px)', color: COR.cinzaEscuro, minHeight: 106, flexShrink: 0 }}>
            Transformamos<br />sonhos em<br />projetos reais
          </p>
          <div style={{ ...TRIM, fontFamily: TEXT, fontSize: 16, color: COR.cinza, maxWidth: 571 }}>
            <p style={{ marginBottom: 12 }}>A Zimbel nasceu com um único propósito: Oferecer qualidade de moradia para seus clientes e segurança e rentabilidade para os investidores.</p>
            <p>Fundada em 2023, a Zimbel foi criada para ser diferente. Temos o compromisso de realizar o sonho da casa própria de nossos clientes e ser uma empresa segura, responsável e transparente.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start', maxWidth: 396 }}>
            <p style={{ ...TRIM, fontFamily: TEXT, fontWeight: 500, fontSize: 16, color: COR.cinza }}>
              Trazer inovação e qualidade é o que buscaremos incansavelmente em todos nossos projetos.
            </p>
            <Botao href="#contato">entre em contato</Botao>
          </div>
        </div>
      </div>

      {/* A faixa vinho começa na metade dos cards (213 de 409px) */}
      <div style={{ paddingInline: PAD, marginTop: 'clamp(32px, 2.24vw, 43px)', background: `linear-gradient(to bottom, #fff 52.08%, ${COR.vinho} 52.08%)` }}>
        <div className="no-scrollbar flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory" style={{ gap: 'clamp(16px, 1.67vw, 32px)', filter: 'drop-shadow(0 50px 40px rgba(0,0,0,0.25))' }}>
          {CARDS.map((c) => (
            <div key={c.n} className="snap-start shrink-0 w-[82%] md:w-auto" style={{ position: 'relative', aspectRatio: '539 / 409', borderRadius: 2, overflow: 'hidden' }}>
              <img src={c.foto} alt={c.titulo} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: c.degrade ? 'center 62%' : 'center' }} />
              {c.degrade && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(200.73deg, rgba(0,0,0,0) 25.303%, rgba(0,0,0,0.4) 91.266%)' }} />}
              <span style={{ ...TRIM, position: 'absolute', left: 20, bottom: 20, fontFamily: DISPLAY, fontSize: 'clamp(18px, 1.25vw, 24px)', color: '#fff' }}>
                {c.n}. {c.titulo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: COR.vinho, paddingInline: PAD, paddingTop: 'clamp(48px, 5.52vw, 106px)' }}>
        <div className="flex flex-col lg:flex-row lg:justify-between" style={{ gap: 32 }}>
          {NUMEROS.map((n, i) => (
            <div key={n.valor} style={{ display: 'contents' }}>
              {i > 0 && <span className="hidden lg:flex" style={{ alignSelf: 'stretch', alignItems: 'center' }}><LinhaV src={i === 1 ? '/home/stat-divisor-1.svg' : '/home/stat-divisor-2.svg'} altura={72} blend="overlay" /></span>}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Icone icone={n.icone} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, color: '#fff' }}>
                  <p style={{ ...TRIM, fontFamily: DISPLAY, fontWeight: 600, fontSize: 'clamp(36px, 3.33vw, 64px)' }}>{n.valor}</p>
                  <p style={{ ...TRIM, fontFamily: DISPLAY, fontSize: 'clamp(14px, 0.83vw, 16px)' }}>{n.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <LinhaH style={{ marginTop: 'clamp(48px, 4.64vw, 89px)' }} />
      </div>

      {/* A faixa vinho termina na metade do vídeo (431 de 836px) */}
      <div style={{ paddingInline: PAD, paddingTop: VIDEO_TOPO }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: `calc(-1 * ${VIDEO_TOPO})`, height: `calc(51.56% + ${VIDEO_TOPO})`, left: `calc(-1 * ${PAD})`, right: `calc(-1 * ${PAD})`, background: COR.vinho }} />
          <div style={{ position: 'relative' }}><Video /></div>
        </div>
      </div>
    </section>
  )
}
