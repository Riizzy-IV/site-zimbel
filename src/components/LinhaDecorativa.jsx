// No Figma a linha tem desfoque progressivo: borrada numa ponta e nítida no resto. O SVG exportado
// só traz a versão toda borrada, então sobrepomos uma cópia sem filtro e mesclamos as duas com máscaras.
const camada = (mascara) => ({
  position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none',
  maskImage: mascara, WebkitMaskImage: mascara,
})

export default function LinhaDecorativa({ borrada, nitida, inset = 0, pad, style, direcao = 'to bottom', inicio = 15, fim = 40, blend = 'plus-lighter' }) {
  return (
    <div style={{ position: 'absolute', inset, mixBlendMode: blend, pointerEvents: 'none', ...style }}>
      <div style={{ position: 'absolute', inset: pad }}>
        <img src={borrada} alt="" style={camada(`linear-gradient(${direcao}, #000 ${inicio}%, transparent ${fim}%)`)} />
        <img src={nitida} alt="" style={camada(`linear-gradient(${direcao}, transparent ${inicio}%, #000 ${fim}%)`)} />
      </div>
    </div>
  )
}
