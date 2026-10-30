import LinhaDecorativa from '../LinhaDecorativa'
import { Botao, Cabecalho, LinhaV, Secao } from './ui'
import { COR, DISPLAY, TEXT, TRIM } from './tokens'

const ESPEC = 'clamp(14px, 0.94vw, 18px)'

function LinhaVertice() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, width: '100%' }}>
      <img src="/home/vertice-logo.svg" alt="Vértice Anália Franco" style={{ width: 'clamp(150px, 10.9vw, 210px)', aspectRatio: '210 / 35', height: 'auto' }} />
      {['Studios', '1 dorm'].map((item) => (
        <span key={item} style={{ display: 'contents' }}>
          <LinhaV src="/home/divisor-vertical.svg" altura={35} />
          <span style={{ ...TRIM, fontFamily: DISPLAY, fontSize: ESPEC, color: '#000', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{item}</span>
        </span>
      ))}
      <LinhaV src="/home/divisor-vertical.svg" altura={35} />
    </div>
  )
}

function Foto({ src, alt = '', esmaecida, style, imgStyle }) {
  return (
    <div
      className={esmaecida ? 'opacity-40 hover:opacity-100 transition-opacity duration-500' : undefined}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...imgStyle }} />
    </div>
  )
}

function Chamada() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 34, alignItems: 'flex-start' }}>
      <p style={{ borderLeft: `5px solid ${COR.dourado}`, paddingLeft: 40, fontFamily: TEXT, fontSize: ESPEC, color: COR.vinho, maxWidth: 329 }}>
        Projetos que já nascem preparados para acompanhar essa transformação
      </p>
      <Botao href="/empreendimentos/vertice" seta="/home/seta-dourada-clara.svg" style={{ color: COR.cinzaFundo, height: 'clamp(48px, 3.02vw, 58px)' }}>
        Conheça o vértice
      </Botao>
    </div>
  )
}

const TEXTO_TOPO = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 3.3vw, 63px)' }}>
    <Cabecalho label="Conheça nosso trabalho" titulo="Empreendimentos que inspiram vida" tituloStyle={{ maxWidth: 439 }} />
    <LinhaVertice />
  </div>
)

export default function Destaque() {
  return (
    <Secao id="empreendimentos" style={{ paddingTop: 'clamp(64px, 6.56vw, 126px)' }}>
      {/* Desktop: grade de 3 colunas do Figma, com proporção fixa de 1681 x 769 */}
      <div className="hidden lg:grid" style={{ position: 'relative', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', columnGap: 32, aspectRatio: '1681 / 769' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 0 }}>
          {/* No Figma o texto fica alinhado ao pé de uma área de 344px (de 769) */}
          <div style={{ height: '44.73%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>{TEXTO_TOPO}</div>
          <Foto
            src="/home/vertice-living.avif"
            esmaecida
            style={{ height: '47.33%', flexShrink: 0 }}
            imgStyle={{ inset: 'auto', left: '-26.94%', top: '-29.23%', width: '153.87%', height: '129.23%', objectFit: 'fill', maxWidth: 'none' }}
          />
        </div>
        <Foto src="/home/vertice-piscina.avif" alt="Piscina do rooftop do Vértice Anália Franco" style={{ height: '100%' }} />
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, minmax(0, 1fr))' }}>
          <Foto src="/home/vertice-cozinha.avif" esmaecida />
          <div style={{ display: 'flex', alignItems: 'center' }}><Chamada /></div>
          <Foto src="/home/vertice-academia.avif" esmaecida />
        </div>

        <div style={{ position: 'absolute', left: '87.45%', top: '53.71%', width: '12.43%', aspectRatio: '209 / 199', pointerEvents: 'none' }}>
          <LinhaDecorativa borrada="/home/deco-vertice.svg" nitida="/home/deco-vertice-nitida.svg" pad="-1.56% -1.48%" blend="normal" />
        </div>
      </div>

      {/* Mobile/tablet: empilhado, sem as fotos esmaecidas */}
      <div className="flex lg:hidden" style={{ flexDirection: 'column', gap: 32 }}>
        {TEXTO_TOPO}
        <Foto src="/home/vertice-piscina.avif" alt="Piscina do rooftop do Vértice Anália Franco" style={{ aspectRatio: '4 / 5' }} />
        <Chamada />
      </div>
    </Secao>
  )
}
