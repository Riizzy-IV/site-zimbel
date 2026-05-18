const gridPl = 'max(40px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(40px, calc((100vw - 1312px) / 2))';


function IconAddress() {
  return <img src="/icon/localizacao.svg" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />;
}

function IconClients() {
  return <img src="/icon/clientes.svg" alt="" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />;
}

function IconPartners() {
  return <img src="/icon/parceiros.svg" alt="" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />;
}

export default function Footer() {
  return (
    <footer className="w-full">

      {/* ── Contato header — fundo BRANCO ── */}
      <section id="contato" className="bg-white" style={{ paddingTop: '56px', paddingBottom: '40px' }}>
        <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-2.5">
                <img src="/icon/contato.svg" alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Contato</span>
              </div>
              <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
              <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
            </div>
            <div className="w-full h-px bg-[#e3e3e3]" />
            <div className="flex flex-col gap-1" style={{ marginTop: '20px' }}>
              <h2 className="text-[#1d2748] text-[26px] md:text-[38px] font-extrabold uppercase leading-tight">
                Entre em contato com a Zimbel
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                E tire suas dúvidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zona de transição: cards metade branco / metade navy ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #ffffff 50%, #0c1a36 50%)',
        paddingLeft: gridPl,
        paddingRight: gridPr,
        paddingTop: '24px',
        paddingBottom: '24px',
      }}>
        {/* Contact cards: sempre side-by-side */}
        <div className="flex flex-row gap-3 md:gap-8 w-full">
          {[
            { icon: <IconClients />, label: 'Contato para', title: 'Clientes' },
            { icon: <IconPartners />, label: 'Contato para', title: 'Parceiros' },
          ].map((card) => (
            <div
              key={card.title}
              className="flex-1 flex items-center gap-4 md:gap-14 cursor-pointer"
              style={{ background: '#052e7e', borderRadius: '10px', height: '90px', padding: '0 16px', minWidth: 0 }}
            >
              <div className="hidden md:block">{card.icon}</div>
              <div className="flex flex-col gap-1">
                <p className="text-[#779dff] text-[11px] md:text-[15px] font-semibold">{card.label}</p>
                <p className="text-white text-[22px] md:text-[40px] font-extrabold leading-none">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#0c1a36' }}>

        {/* Footer body */}
        <div style={{ paddingLeft: gridPl, paddingRight: gridPr, paddingTop: '40px', paddingBottom: '40px' }}>

          {/* flex-col on mobile, flex-row on lg+ */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24" style={{ marginBottom: '48px' }}>

            {/* Brand col — full width on mobile, 580px on lg+ */}
            <div
              className="flex flex-col gap-10 shrink-0"
              style={{ width: 'auto' }}
            >
              <div className="lg:w-[580px]">
                <div className="flex items-center gap-3">
                  <img src="/Menu/Logotype.svg" alt="Zimbel" className="h-10 object-contain brightness-0 invert" />
                </div>
              </div>
              <p className="text-[#c8d0e0] text-[15px] leading-relaxed lg:max-w-[580px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lectus laoreet, vulputate ligula nec, pretium dolor. Praesent a faucibus urna.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[#e3e3e3] text-sm font-bold">Siga a gente</span>
                <div className="flex items-center gap-2">
                  <img src="/Menu/instagram.svg" alt="Instagram" className="w-9 h-9 object-contain cursor-pointer brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                  {/* Facebook */}
                  <div className="w-9 h-9 flex items-center justify-center rounded cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Links col */}
            <div className="flex flex-col gap-10 flex-1">
              {/* Address */}
              <div className="flex flex-col gap-6">
                <div className="w-full h-px bg-white opacity-15" />
                <div className="flex items-center gap-5">
                  <IconAddress />
                  <p className="text-white text-sm leading-relaxed">
                    Avenida Álvaro Ramos, 896 - Belém, São Paulo - SP, 03330-002
                  </p>
                </div>
                <div className="w-full h-px bg-white opacity-15" />
              </div>

              {/* Nav links — flex-col on mobile, flex-row on md+ */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#779dff] text-sm font-bold uppercase tracking-wide">Empreendimentos</p>
                    <div className="w-8 h-0.5 bg-white opacity-25" />
                  </div>
                  <div className="flex flex-col gap-2 text-[#abb6ba] text-sm">
                    {['Lançamentos', 'Breve Lançamento', 'Em Obras', 'Pronto para Morar', 'Portfólio Completo'].map(l => (
                      <a key={l} href="#" className="hover:text-white transition-colors">- {l}</a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#779dff] text-sm font-bold uppercase tracking-wide">Páginas</p>
                    <div className="w-8 h-0.5 bg-white opacity-25" />
                  </div>
                  <div className="flex flex-col gap-2 text-[#abb6ba] text-sm">
                    {['Home', 'Sobre a Zimbel', 'Empreendimentos', 'Portfólio', 'Contato'].map(l => (
                      <a key={l} href="#" className="hover:text-white transition-colors">- {l}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="w-full h-px bg-white mb-8" style={{ opacity: 0.1 }} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 text-white" style={{ opacity: 0.45 }}>
              <span className="text-xs font-bold">2026 Zimbel Incorporadora © - Todos os direitos reservados</span>
              <span className="hidden md:inline" style={{ opacity: 0.4 }}>|</span>
              <span className="text-xs font-bold">Política de Privacidade e Cookies</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-sm font-normal opacity-70">Feito com ♥ por</span>
              <a href="https://balzani.com.br" target="_blank" rel="noopener noreferrer">
                <img src="/icon/Logo balzani menu.svg" alt="Balzani" className="h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
