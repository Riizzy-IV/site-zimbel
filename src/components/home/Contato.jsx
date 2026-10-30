import { Cabecalho, Destino, LinhaH } from './ui'
import { COR, DISPLAY, PAD, TEXT, TRIM } from './tokens'

const CONTATOS = [
  { titulo: 'Clientes', icone: 'caixa', href: 'https://wa.me/5511910837322?text=Ol%C3%A1%2C%20sou%20cliente%20e%20gostaria%20de%20atendimento.' },
  { titulo: 'Parceiros', icone: '/home/contato-parceiros.svg', href: 'https://wa.me/5511910837322?text=Ol%C3%A1%2C%20sou%20corretor%20parceiro%20e%20gostaria%20de%20atendimento.' },
]

// Facebook e LinkedIn aparecem no design, mas ainda sem URL — entram quando os links forem definidos.
const REDES = [
  { nome: 'Instagram', icone: '/home/social-instagram.svg', href: 'https://www.instagram.com/zimbel.incorporadora/' },
  { nome: 'Facebook', icone: '/home/social-facebook.svg', href: null },
  { nome: 'LinkedIn', icone: '/home/social-linkedin.svg', href: null },
].filter((r) => r.href)

const COLUNAS = [
  {
    titulo: 'Empreendimentos',
    links: [
      ['Lançamentos', '/empreendimentos?filtro=lancamentos'],
      ['Breve Lançamento', '/empreendimentos?filtro=lancamentos'],
      ['Em Obras', '/empreendimentos?filtro=obras'],
      ['Pronto para Morar', '/empreendimentos?filtro=entregues'],
      ['Portfólio Completo', '/empreendimentos?filtro=todas'],
    ],
  },
  {
    titulo: 'Páginas',
    links: [
      ['Home', '/'],
      ['Sobre a Zimbel', '#sobre'],
      ['Empreendimentos', '/empreendimentos'],
      ['Portfólio', '/empreendimentos'],
      ['Contato', '#contato'],
    ],
  },
]

function CardContato({ item }) {
  return (
    <Destino
      href={item.href}
      className="flex-none sm:flex-[0_1_539px] hover:brightness-110 transition-[filter]"
      style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: 28, background: COR.vinho, borderRadius: 4, padding: 'clamp(24px, 1.82vw, 35px) 32px', textDecoration: 'none' }}
    >
      {item.icone === 'caixa' ? (
        <span style={{ width: 72, height: 72, flexShrink: 0, background: COR.vinhoClaro, border: `1px solid ${COR.rosa}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ position: 'relative', width: 32, height: 32 }}>
            <span style={{ position: 'absolute', inset: '8.33%' }}>
              <img src="/home/contato-clientes.svg" alt="" style={{ position: 'absolute', inset: '-2.81% -2.81% -2.83% -2.81%', width: '105.62%', height: '105.64%', maxWidth: 'none' }} />
            </span>
          </span>
        </span>
      ) : (
        <img src={item.icone} alt="" style={{ width: 72, height: 72, flexShrink: 0 }} />
      )}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: DISPLAY }}>
        <span style={{ ...TRIM, fontSize: 'clamp(15px, 0.94vw, 18px)', color: COR.rosa }}>Contato para</span>
        <span style={{ ...TRIM, fontSize: 'clamp(28px, 2.08vw, 40px)', color: '#fff' }}>{item.titulo}</span>
      </span>
    </Destino>
  )
}

function Rodape() {
  const linkStyle = { fontFamily: TEXT, fontSize: 14, lineHeight: 1.3, color: '#abb6ba', textDecoration: 'none', whiteSpace: 'nowrap' }
  return (
    <footer style={{ background: COR.vinhoEscuro, paddingInline: PAD, paddingTop: 'clamp(64px, 8.5vw, 163px)', paddingBottom: 32 }}>
      <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(48px, 9.27vw, 178px)', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, flex: '537 1 0', minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 2.92vw, 56px)' }}>
            <div style={{ position: 'relative', width: 200, height: 47 }}>
              <img src="/home/footer-logo.svg" alt="Zimbel Incorporadora" style={{ position: 'absolute', inset: '21.59% 0 3.05% -0.25%', width: '100.25%', height: '75.36%', maxWidth: 'none' }} />
            </div>
            <p style={{ fontFamily: TEXT, fontSize: 16, lineHeight: 1.416, color: COR.cinzaFundo, maxWidth: 537 }}>
              A Zimbel nasceu com um único propósito: oferecer qualidade de moradia para seus clientes e segurança e rentabilidade para os investidores. Trazer inovação e qualidade é o que buscamos incansavelmente em todos os nossos projetos.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontFamily: TEXT, fontWeight: 700, fontSize: 14, color: COR.cinzaFundo }}>Siga a gente</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {REDES.map((r) => (
                <a key={r.nome} href={r.href} target="_blank" rel="noopener noreferrer" aria-label={r.nome} className="hover:opacity-80 transition-opacity">
                  <img src={r.icone} alt="" style={{ width: 40, height: 40, display: 'block' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 53, flex: '966 1 0', minWidth: 0, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 27 }}>
            <LinhaH src="/home/footer-linha.svg" />
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, 1.46vw, 28px)' }}>
              <span style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
                <span style={{ position: 'absolute', inset: '8.33% 12.5%' }}>
                  <img src="/home/footer-pin.svg" alt="" style={{ position: 'absolute', inset: '-3.75% -4.17%', width: '108.34%', height: '107.5%', maxWidth: 'none' }} />
                </span>
              </span>
              <p style={{ fontFamily: TEXT, fontSize: 14, lineHeight: 1.3, color: '#fff' }}>Avenida Álvaro Ramos, 896 - Belém, São Paulo - SP, 03330-002</p>
            </div>
            <LinhaH src="/home/footer-linha.svg" />
          </div>

          <div style={{ display: 'flex', gap: 'clamp(40px, 3.7vw, 71px)', flexWrap: 'wrap' }}>
            {COLUNAS.map((col) => (
              <div key={col.titulo} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <p style={{ fontFamily: TEXT, fontWeight: 700, fontSize: 14, lineHeight: 1.2, color: COR.rosa, textTransform: 'uppercase' }}>{col.titulo}</p>
                  <img src="/home/footer-sublinhado.svg" alt="" style={{ width: 32, height: 2 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.links.map(([rotulo, href]) => (
                    <Destino key={rotulo} href={href} style={linkStyle} className="hover:text-white transition-colors">- {rotulo}</Destino>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 'clamp(40px, 2.6vw, 50px)' }}>
        <LinhaH src="/home/footer-linha-base.svg" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', color: '#fff', fontFamily: TEXT, fontSize: 12 }}>
            <span style={{ opacity: 0.5 }}>2026 Zimbel Incorporadora © - Todos os direitos reservados</span>
            <span style={{ opacity: 0.3, fontSize: 14 }}>I</span>
            <Destino href="/politica-de-privacidade" style={{ opacity: 0.5, color: '#fff', textDecoration: 'none' }} className="hover:!opacity-80">
              Política de Privacidade e Cookies
            </Destino>
          </div>
          <a href="https://balzani.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-end', gap: 18, textDecoration: 'none', color: '#fff', fontFamily: TEXT, fontSize: 16, lineHeight: 1.25 }}>
            <span>Feito com <span style={{ color: '#e5243b' }}>♥</span> por</span>
            <img src="/home/footer-balzani.svg" alt="Balzani" style={{ width: 93, height: 18 }} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Contato() {
  return (
    <>
      <section id="contato" style={{ paddingInline: PAD, scrollMarginTop: 65 }}>
        <LinhaH style={{ marginTop: 'clamp(56px, 5.1vw, 98px)' }} />
        <div
          className="flex flex-col lg:flex-row lg:items-end"
          style={{ gap: 'clamp(32px, 9.32vw, 179px)', paddingTop: 'clamp(60px, 6.25vw, 120px)', paddingBottom: 'clamp(64px, 7.14vw, 137px)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 38, flexShrink: 0 }}>
            <Cabecalho label="contato" titulo={<>Entre em contato<br />com a Zimbel</>} />
            <p style={{ ...TRIM, fontFamily: TEXT, fontSize: 16, color: COR.cinza }}>E tire suas dúvidas</p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end" style={{ gap: 32, flex: 1, width: '100%' }}>
            {CONTATOS.map((c) => <CardContato key={c.titulo} item={c} />)}
          </div>
        </div>
      </section>
      <Rodape />
    </>
  )
}
