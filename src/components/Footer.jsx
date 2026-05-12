const gridPl = 'max(16px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(16px, calc((100vw - 1312px) / 2))';

function ArrowDiagonal() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAddress() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 1.667A5.833 5.833 0 0110 13.333C6.318 13.333 3.333 10.349 3.333 6.667A6.667 6.667 0 0110 0a6.667 6.667 0 016.667 6.667c0 3.681-2.985 6.666-6.667 6.666z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="6.667" r="2" stroke="white" strokeWidth="1.4" />
      <path d="M3 14.5C1.5 15.5 1 16.5 1 17.5c0 1 .667 1.833 9 1.833s9-.833 9-1.833c0-1-.5-2-2-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconClients() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M58 56c0-8.837-9.85-16-22-16s-22 7.163-22 16" stroke="rgba(119,157,255,0.6)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="36" cy="24" r="12" stroke="rgba(119,157,255,0.6)" strokeWidth="4" />
      <path d="M68 56c0-6.627-7.163-12-16-12" stroke="rgba(119,157,255,0.4)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="52" cy="22" r="9" stroke="rgba(119,157,255,0.4)" strokeWidth="4" />
    </svg>
  );
}

function IconPartners() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="20" width="28" height="36" rx="4" stroke="rgba(119,157,255,0.6)" strokeWidth="4" />
      <path d="M36 30h16a4 4 0 014 4v22a4 4 0 01-4 4H36" stroke="rgba(119,157,255,0.4)" strokeWidth="4" />
      <path d="M20 32h8M20 40h8M20 48h8" stroke="rgba(119,157,255,0.6)" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 38h4M44 46h4" stroke="rgba(119,157,255,0.4)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
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
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <rect x="1" y="5" width="16" height="11" rx="1" stroke="#779dff" strokeWidth="1.4" />
                  <path d="M5 5V3.5C5 2.12 6.79 1 9 1C11.21 1 13 2.12 13 3.5V5" stroke="#779dff" strokeWidth="1.4" strokeLinecap="round" />
                  <rect x="6.5" y="8" width="5" height="4" rx="0.5" stroke="#779dff" strokeWidth="1.2" />
                </svg>
                <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Contato</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#779dff] shrink-0" />
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
        {/* Contact cards: flex-col on mobile, flex-row on md+ */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          {[
            { icon: <IconClients />, label: 'Contato para', title: 'Clientes' },
            { icon: <IconPartners />, label: 'Contato para', title: 'Parceiros' },
          ].map((card) => (
            <div
              key={card.title}
              className="flex-1 flex items-center gap-8 md:gap-14 cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: '#052e7e', borderRadius: '10px', height: '120px', padding: '0 24px' }}
            >
              <div className="hidden md:block">{card.icon}</div>
              <div className="flex flex-col gap-2">
                <p className="text-[#779dff] text-[13px] md:text-[15px] font-semibold">{card.label}</p>
                <p className="text-white text-[28px] md:text-[40px] font-extrabold leading-none">{card.title}</p>
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
                  <img src="/Menu/Linkedin.svg" alt="LinkedIn" className="w-9 h-9 object-contain cursor-pointer brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
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
              <span className="text-white font-extrabold text-lg tracking-wide opacity-80">Balzani</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
