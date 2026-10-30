import Lenis from 'lenis'

// Rolagem suave do site inteiro (Lenis). Centralizada aqui para que a animação de abertura,
// o lightbox e os links internos consigam pausar ou comandar a rolagem.
let lenis = null

export function iniciarRolagem() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  lenis = new Lenis({ autoRaf: true, lerp: 0.085, anchors: { offset: -70 } })
}

export function rolarPara(alvo, opcoes = {}) {
  if (lenis) {
    lenis.scrollTo(alvo, { offset: typeof alvo === 'number' ? 0 : -70, ...opcoes })
    return
  }
  if (typeof alvo === 'number') window.scrollTo({ top: alvo, behavior: opcoes.immediate ? 'auto' : 'smooth' })
  else alvo?.scrollIntoView({ behavior: 'smooth' })
}

export function pausarRolagem() {
  lenis?.stop()
}

export function retomarRolagem() {
  lenis?.start()
}
