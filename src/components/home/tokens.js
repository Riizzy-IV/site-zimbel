export const DISPLAY = "'Zalando Sans Expanded', sans-serif"
export const TEXT = "'Zalando Sans', sans-serif"

export const COR = {
  vinho: '#5b0a28',
  vinhoEscuro: '#330218',
  vinhoClaro: '#6d1136',
  rosa: '#ca4080',
  dourado: '#c5a26a',
  douradoClaro: '#d6b994',
  cinzaEscuro: '#3f3f3f',
  cinza: '#494c4f',
  cinzaClaro: '#a7a7a7',
  cinzaFundo: '#e3e3e3',
}

// Margem lateral do design (120px em 1920px), com conteúdo de no máximo 1681px.
export const PAD = 'max(20px, 6.25vw, calc((100vw - 1681px) / 2))'

export const TITULO = 'clamp(28px, 2.08vw, 40px)'
export const BOTAO = 'clamp(14px, 0.94vw, 18px)'

// O Figma recorta a caixa de texto na altura das maiúsculas (text-box-trim); sem isso os espaçamentos ficam maiores.
export const TRIM = { textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic' }
