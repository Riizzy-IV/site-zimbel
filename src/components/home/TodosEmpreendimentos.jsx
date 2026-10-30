import { useState } from 'react'
import { Botao, Cabecalho, Destino, LinhaH, LinhaV, Secao, Seta } from './ui'
import { COR, DISPLAY, TRIM } from './tokens'

const ABAS = [
  { id: 'todos', label: 'Todos' },
  { id: 'lancamentos', label: 'Lançamentos' },
  { id: 'obras', label: 'Em obras' },
  { id: 'entregue', label: 'Entregue' },
]

const EMPREENDIMENTOS = [
  {
    id: 'vertice', nome: 'Vértice Anália Franco', specs: ['Studios', '1 dorm'], status: ['lancamentos', 'obras'],
    logo: '/home/vertice-logo-lista.svg', logoInativo: '/home/vertice-logo-lista-cinza.svg',
    foto: '/home/vertice-torre.avif', href: '/empreendimentos/vertice',
  },
  {
    id: 'evolution', nome: 'Evolution Tatuapé', specs: ['2 dorms', '34 a 50m²'], status: ['obras'],
    foto: '/empreendimentos/evolution-fachada.avif', href: '/empreendimentos/evolution',
  },
  {
    id: 'esperanca', nome: 'Esperança Prime', specs: ['1 e 2 dorms', '30 a 43m²'], status: ['entregue'],
    foto: '/empreendimentos/esperanca/hero-fachada.avif', href: '/empreendimentos/esperanca',
  },
]

const ESPACO = 'clamp(60px, 6.25vw, 120px)'

function Linha({ item, ativo, onAtivar }) {
  const cor = ativo ? '#000' : COR.cinzaClaro
  const divisor = ativo ? '/home/divisor-lista-ativo.svg' : '/home/divisor-lista.svg'
  return (
    <div
      onMouseEnter={onAtivar}
      onFocus={onAtivar}
      className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[clamp(110px,8.6vw,165px)_minmax(0,1fr)_auto]"
      style={{ alignItems: 'center', gap: 'clamp(10px, 0.83vw, 16px)', transition: 'color 200ms' }}
    >
      <div style={{ minWidth: 0 }}>
        {item.logo ? (
          <img src={ativo ? item.logo : item.logoInativo} alt={item.nome} style={{ width: '100%', aspectRatio: '165 / 27', height: 'auto', display: 'block' }} />
        ) : (
          <span style={{ fontFamily: DISPLAY, fontSize: 'clamp(13px, 0.83vw, 16px)', color: cor, textTransform: 'uppercase', lineHeight: 1.1, display: 'block' }}>{item.nome}</span>
        )}
      </div>
      <div className="order-last col-span-2 md:order-none md:col-span-1 md:justify-self-end" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 0.89vw, 17px)' }}>
        {item.specs.map((s) => (
          <span key={s} style={{ display: 'contents' }}>
            <LinhaV src={divisor} altura={17} />
            <span style={{ ...TRIM, fontFamily: DISPLAY, fontSize: 'clamp(12px, 0.73vw, 14px)', color: cor, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{s}</span>
          </span>
        ))}
        <LinhaV src={divisor} altura={17} />
      </div>
      <Destino
        href={item.href}
        style={{
          display: 'flex', alignItems: 'center', gap: 9, padding: '4px 9px', background: '#fff', border: `1px solid ${COR.cinzaClaro}`, borderRadius: 2,
          fontFamily: DISPLAY, fontWeight: 500, fontSize: 'clamp(12px, 0.73vw, 14px)', textTransform: 'uppercase', whiteSpace: 'nowrap', textDecoration: 'none',
          color: ativo ? COR.vinho : COR.cinzaClaro,
        }}
      >
        <span style={TRIM}>saiba mais</span>
        <Seta src={ativo ? '/home/seta-dourada-clara.svg' : '/home/seta-cinza.svg'} />
      </Destino>
    </div>
  )
}

export default function TodosEmpreendimentos() {
  const [aba, setAba] = useState('todos')
  const [ativoId, setAtivoId] = useState('vertice')
  const lista = aba === 'todos' ? EMPREENDIMENTOS : EMPREENDIMENTOS.filter((e) => e.status.includes(aba))
  const ativo = lista.find((e) => e.id === ativoId) ?? lista[0]

  function trocarAba(id) {
    setAba(id)
    setAtivoId(EMPREENDIMENTOS.find((e) => id === 'todos' || e.status.includes(id))?.id)
  }

  return (
    <Secao style={{ paddingTop: ESPACO }}>
      <LinhaH />
      <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(32px, 4.17vw, 80px)', paddingBlock: ESPACO, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative', flex: '919 1 0', minWidth: 0, width: '100%', aspectRatio: '919 / 613', borderRadius: 2, overflow: 'hidden' }}>
          {EMPREENDIMENTOS.map((e) => (
            <img
              key={e.id}
              src={e.foto}
              alt={e.nome}
              loading="lazy"
              decoding="async"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: e.id === ativo?.id ? 1 : 0, transition: 'opacity 400ms ease' }}
            />
          ))}
        </div>

        <div style={{ flex: '682 1 0', minWidth: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 3.65vw, 70px)', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 39, width: '100%' }}>
            <Cabecalho label="nossos empreendimentos" titulo="Conheça todos os empreendimentos da Zimbel" />
            <div role="tablist" style={{ display: 'flex', gap: 'clamp(10px, 1.04vw, 20px)', flexWrap: 'wrap' }}>
              {ABAS.map((a) => (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={aba === a.id}
                  onClick={() => trocarAba(a.id)}
                  style={{
                    border: 'none', cursor: 'pointer', borderRadius: 2, padding: '10px clamp(14px, 1.25vw, 24px)', whiteSpace: 'nowrap',
                    fontFamily: DISPLAY, fontSize: 'clamp(14px, 0.94vw, 18px)',
                    background: aba === a.id ? COR.cinzaEscuro : COR.cinzaFundo,
                    color: aba === a.id ? COR.douradoClaro : COR.cinza,
                    transition: 'background 200ms, color 200ms',
                  }}
                >
                  <span style={{ display: 'block', ...TRIM }}>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>
            {lista.map((item, i) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {i > 0 && <LinhaH src="/home/divisor-linha-lista.svg" />}
                <Linha item={item} ativo={item.id === ativo?.id} onAtivar={() => setAtivoId(item.id)} />
              </div>
            ))}
          </div>

          <Botao href="/empreendimentos">Ver todos os imóveis</Botao>
        </div>
      </div>
      <LinhaH />
    </Secao>
  )
}
