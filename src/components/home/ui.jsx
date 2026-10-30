import { Link } from 'react-router-dom'
import { BOTAO, COR, DISPLAY, PAD, TITULO, TRIM } from './tokens'

export function Label({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <img src="/home/label-icone.svg" alt="" style={{ width: 12, height: 11 }} />
      <span style={{ ...TRIM, fontFamily: DISPLAY, fontSize: 14, letterSpacing: '0.84px', color: COR.vinho, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <img src="/home/label-linha.svg" alt="" style={{ width: 41, height: 1 }} />
    </div>
  )
}

export function Titulo({ children, style }) {
  return (
    <h2 style={{ ...TRIM, fontFamily: DISPLAY, fontWeight: 400, fontSize: TITULO, lineHeight: 'normal', color: COR.vinho, ...style }}>
      {children}
    </h2>
  )
}

export function Cabecalho({ label, titulo, tituloStyle, gap = 40 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      <Label>{label}</Label>
      <Titulo style={tituloStyle}>{titulo}</Titulo>
    </div>
  )
}

export function Destino({ href, children, ...props }) {
  if (href?.startsWith('/')) return <Link to={href} {...props}>{children}</Link>
  const externo = href?.startsWith('http')
  return (
    <a href={href} target={externo ? '_blank' : undefined} rel={externo ? 'noopener noreferrer' : undefined} {...props}>
      {children}
    </a>
  )
}

export function Botao({ children, href, onClick, seta = '/home/seta-dourada.svg', style }) {
  return (
    <Destino
      href={href}
      onClick={onClick}
      className="hover:brightness-125 transition-[filter]"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: COR.vinho, color: '#fff', borderRadius: 2, padding: '10px 24px',
        fontFamily: DISPLAY, fontSize: BOTAO, textTransform: 'uppercase', whiteSpace: 'nowrap', textDecoration: 'none', cursor: 'pointer',
        ...style,
      }}
    >
      <span style={{ display: 'block', ...TRIM }}>{children}</span>
      <Seta src={seta} />
    </Destino>
  )
}

export function Seta({ src }) {
  return (
    <span style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
      <img src={src} alt="" style={{ position: 'absolute', inset: '16.62% 16.62% 20.83% 20.83%', width: '62.55%', height: '62.55%' }} />
    </span>
  )
}

export function LinhaH({ src = '/home/divisor-secao.svg', style }) {
  return <img src={src} alt="" style={{ display: 'block', width: '100%', height: 1, ...style }} />
}

export function LinhaV({ src, altura, blend }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 1, height: altura, flexShrink: 0 }}>
      <img
        src={src}
        alt=""
        style={{ position: 'absolute', left: 1, top: 0, width: altura, height: 1, maxWidth: 'none', transformOrigin: '0 0', transform: 'rotate(90deg)', mixBlendMode: blend }}
      />
    </span>
  )
}

export function Secao({ id, children, style }) {
  return (
    <section id={id} style={{ paddingInline: PAD, ...style }}>
      {children}
    </section>
  )
}
