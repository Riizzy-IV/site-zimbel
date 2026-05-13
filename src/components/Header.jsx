import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* SVGs locais — sem URLs externas que expiram */
const logoSrc      = '/Menu/Logotype.svg';
const wppSrc       = '/Menu/whatsapp.svg';
const mailSrc      = '/Menu/mail.svg';
const telSrc       = '/Menu/telefone.svg';
const instaSrc     = '/Menu/instagram.svg';
const youtubeSrc   = '/Menu/Youtube.svg';
const linkedinSrc  = '/Menu/Linkedin.svg';

/* Padding dinâmico que respeita o grid de 1312px centralizado.
   Em 1920px → 304px  |  Em 1440px → 64px  |  Em 1312px → 16px */
const gridPl = 'max(16px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(16px, calc((100vw - 1312px) / 2))';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="w-full sticky top-0 z-50 bg-white shadow-sm flex items-stretch"
        style={{ height: 'var(--header-h, 64px)' }}
      >
        {/* CSS custom property for header height — 64px mobile, 96px lg+ */}
        <style>{`
          :root { --header-h: 64px; }
          @media (min-width: 1024px) { :root { --header-h: 96px; } }
        `}</style>

        {/* ── LOGO ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            paddingLeft: gridPl,
            paddingRight: 'max(16px, calc((100vw - 1312px) / 2))',
          }}
        >
          {/* On desktop keep 136px right padding; on mobile/tablet use gridPr only */}
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img
              src={logoSrc}
              alt="Zimbel Incorporadora"
              className="h-[40px] lg:h-[47px] w-auto lg:w-[200px] object-contain"
            />
          </button>
        </div>

        {/* ── HAMBURGER (mobile/tablet only) ── */}
        <div className="flex lg:hidden flex-1 items-center justify-end" style={{ paddingRight: gridPr }}>
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          >
            <span className="block w-6 h-[2px] bg-[#0c1a36] rounded" />
            <span className="block w-6 h-[2px] bg-[#0c1a36] rounded" />
            <span className="block w-6 h-[2px] bg-[#0c1a36] rounded" />
          </button>
        </div>

        {/* ── MENU WRAP: barra escura + nav — desktop only ── */}
        <div className="hidden lg:flex flex-1 flex-col min-w-0">

          {/* Barra superior escura — 36px, rounded-bl-8px */}
          <div
            className="bg-[#0c1a36] rounded-bl-[8px] flex items-center justify-end shrink-0"
            style={{ height: '36px', paddingRight: gridPr }}
          >
            <div className="flex items-center gap-6">

              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={wppSrc} alt="" className="w-[18px] h-[18px] object-contain brightness-0 invert" />
                <span className="text-[#e3e3e3] text-[12px] font-semibold">Whatsapp</span>
              </a>

              <span className="text-white opacity-20 text-xs select-none">|</span>

              {/* Email */}
              <a href="mailto:" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={mailSrc} alt="" className="w-[18px] h-[18px] object-contain brightness-0 invert" />
                <span className="text-[#e3e3e3] text-[12px] font-semibold">Email</span>
              </a>

              <span className="text-white opacity-20 text-xs select-none">|</span>

              {/* Telefone */}
              <a href="tel:" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={telSrc} alt="" className="w-[18px] h-[18px] object-contain brightness-0 invert" />
                <span className="text-[#e3e3e3] text-[12px] font-semibold">Telefone</span>
              </a>

              <span className="text-white opacity-20 text-xs select-none">|</span>

              {/* Redes sociais */}
              <div className="flex items-center gap-4">
                <span className="text-[#e3e3e3] text-[12px] font-semibold">
                  Acesse nossas redes sociais:
                </span>
                <div className="flex items-center gap-4">
                  <img src={instaSrc}    alt="Instagram" className="w-4 h-4 object-contain cursor-pointer" />
                  <img src={youtubeSrc}  alt="Youtube"   className="w-4 h-4 object-contain cursor-pointer" />
                  <img src={linkedinSrc} alt="LinkedIn"  className="w-4 h-4 object-contain cursor-pointer" />
                </div>
              </div>

            </div>
          </div>

          {/* Nav inferior — 60px */}
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-[86px]">

              {/* Links de navegação */}
              <nav className="flex items-center gap-[30px]">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="text-[#31447b] text-[14px] font-semibold">Sobre a Zimbel</span>
                  <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
                    <path d="M0 0L4.5 5L9 0H0Z" fill="#31447b" />
                  </svg>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#779dff] shrink-0" />
                <a href="#" className="text-[#31447b] text-[14px] font-semibold hover:text-[#4f6db5] transition-colors whitespace-nowrap">Imóveis</a>
                <span className="w-1 h-1 rounded-full bg-[#779dff] shrink-0" />
                <a href="#" className="text-[#31447b] text-[14px] font-semibold hover:text-[#4f6db5] transition-colors whitespace-nowrap">Futuros Lançamentos</a>
                <span className="w-1 h-1 rounded-full bg-[#779dff] shrink-0" />
                <a href="#" className="text-[#31447b] text-[14px] font-semibold hover:text-[#4f6db5] transition-colors whitespace-nowrap">Portfólio</a>
                <span className="w-1 h-1 rounded-full bg-[#779dff] shrink-0" />
                <a href="#" className="text-[#31447b] text-[14px] font-semibold hover:text-[#4f6db5] transition-colors whitespace-nowrap">Seja um Corretor</a>
              </nav>

              {/* Botão Contato */}
              <a
                href="#contato"
                className="flex items-center justify-center gap-[10px] bg-[#0c1a36] text-[#e3e3e3] text-[14px] font-semibold rounded-[4px] hover:bg-[#1a2d4e] transition-colors shrink-0"
                style={{ width: '122px', height: '42px', padding: '10px' }}
              >
                Contato
                <img src="/icon/contato.svg" alt="" style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }} />
              </a>

            </div>
          </div>

        </div>
      </header>

      {/* ── MOBILE OVERLAY MENU ── */}
      <div
        className="fixed inset-0 z-[60] bg-[#0c1a36] flex flex-col lg:hidden"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 300ms ease',
        }}
      >
        {/* Top bar: logo + close */}
        <div className="flex items-center justify-between shrink-0 border-b border-white/10" style={{ height: '64px', paddingLeft: '20px', paddingRight: '20px' }}>
          <button onClick={() => { navigate('/'); setMenuOpen(false); }} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img src={logoSrc} alt="Zimbel" className="h-8 w-auto object-contain brightness-0 invert" />
          </button>
          <button
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 overflow-y-auto" style={{ padding: '8px 20px' }}>
          {[
            'Sobre a Zimbel',
            'Imóveis',
            'Futuros Lançamentos',
            'Portfólio',
            'Seja um Corretor',
          ].map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 hover:text-[#779dff] transition-colors"
              style={{ paddingTop: '18px', paddingBottom: '18px', color: 'white', fontSize: '15px', fontWeight: 600 }}
            >
              {label}
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
                <path d="M1 1l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </nav>

        {/* Bottom: social icons + contact button */}
        <div className="shrink-0 flex flex-col gap-4 border-t border-white/10" style={{ padding: '20px' }}>
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-[11px] font-semibold uppercase tracking-widest">Redes</span>
            <div className="flex items-center gap-4">
              <img src={instaSrc}    alt="Instagram" className="w-6 h-6 object-contain cursor-pointer brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              <img src={youtubeSrc}  alt="Youtube"   className="w-6 h-6 object-contain cursor-pointer brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              <img src={linkedinSrc} alt="LinkedIn"  className="w-6 h-6 object-contain cursor-pointer brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-white font-semibold rounded-[8px] hover:bg-[#6b8ee8] transition-colors"
            style={{ background: '#779dff', fontSize: '14px', padding: '14px 24px' }}
          >
            Contato
            <img src="/icon/contato.svg" alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
          </a>
        </div>
      </div>
    </>
  );
}
