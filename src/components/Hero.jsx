import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const gridPl = 'max(40px, calc((100vw - 1312px) / 2))';

const slides = [
  {
    num: '01',
    title: 'Vértice Anália Franco',
    badge: { tag: 'Lançamento', location: 'Anália Franco' },
    subtitle: 'O futuro agradece suas escolhas',
    bg: '/empreendimentos/vertice/fachada-6.avif',
    logo: null,
    logoText: 'Vértice',
    href: '/empreendimentos/vertice',
    specs: [
      { icon: '/cards/cama.svg', label: 'Suítes e 1 dorm.' },
      { icon: '/cards/area.svg', label: '32 a 200m²' },
      { icon: '/cards/Frame-2.svg', label: '1 vaga' },
      { icon: '/cards/plantas.svg', label: 'Varanda Gourmet' },
    ],
  },
  {
    num: '02',
    title: 'Evolution Tatuapé',
    badge: { tag: 'Lançamento', location: 'Tatuapé' },
    subtitle: 'Viva a evolução do seu bairro',
    bg: '/empreendimentos/evolution-fachada.avif',
    logo: null,
    logoText: 'Evolution',
    href: '/empreendimentos/evolution',
    specs: [
      { icon: '/cards/cama.svg', label: '2 dormitórios' },
      { icon: '/cards/area.svg', label: '34 a 50m²' },
      { icon: '/cards/Frame-2.svg', label: '1 vaga' },
      { icon: '/cards/plantas.svg', label: 'Área Gourmet' },
    ],
  },
  {
    num: '03',
    title: 'Esperança Prime',
    badge: { tag: 'Lançamento', location: 'Esperança' },
    subtitle: 'O prime que você merece',
    bg: '/empreendimentos/fachada-esperanca.avif',
    logo: null,
    logoText: 'Esperança Prime',
    href: null,
    specs: [
      { icon: '/cards/cama.svg', label: 'Suítes e 2 dorm.' },
      { icon: '/cards/area.svg', label: '50 a 200m²' },
      { icon: '/cards/Frame-2.svg', label: '2 vagas' },
      { icon: '/cards/plantas.svg', label: 'Piscina Privativa' },
    ],
  },
];

function getBreakpoint(vw) {
  if (vw < 768) return 'mobile';
  if (vw < 1024) return 'md';
  if (vw < 1400) return 'sm';    // 1024–1400: sem indicadores
  if (vw < 1800) return 'lg-sm'; // 1400–1800: com indicadores
  if (vw < 2100) return 'lg';    // 1800–2100: desktop grande
  return 'xl';                   // 2100+: ultra-wide
}

function Spec({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <img src={icon} alt="" className="w-8 h-8 object-contain brightness-0 invert" />
      </div>
      <span className="text-white text-sm font-semibold">{children}</span>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [bp, setBp] = useState(() => getBreakpoint(window.innerWidth));
  const [vh, setVh] = useState(() => window.innerHeight);

  useEffect(() => {
    const update = () => {
      setBp(getBreakpoint(window.innerWidth));
      setVh(window.innerHeight);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const baseSectionHeight = bp === 'mobile' ? 760 : bp === 'md' ? 650 : bp === 'sm' ? 760 : 817;
  const sectionHeight = bp === 'mobile' ? baseSectionHeight : Math.min(baseSectionHeight, vh - 90);
  const paddingTop = bp === 'mobile' ? 300 :bp === 'md' ? Math.round(sectionHeight * 0.50) : bp === 'sm' ? Math.round(sectionHeight * 0.50) : 430;
  const badgeWidth = bp === 'mobile' ? 'fit-content' : '336px';
  const h1Size = bp === 'mobile' ? 'clamp(18px, 5.5vw, 26px)' : bp === 'md' ? '34px' : '40px';
  const isMobile = bp === 'mobile';
  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: `${sectionHeight}px` }}>

      {/* Backgrounds — crossfade por opacity */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            objectPosition: 'center center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : 'low'}
          decoding={i === 0 ? 'sync' : 'async'}
        />
      ))}

      {/* Gradiente escuro na base */}
      <div
        className="absolute inset-0"
        style={{
          background: isMobile
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 30%, rgba(12,26,54,0.75) 60%, rgba(12,26,54,0.95) 100%)'
            : 'linear-gradient(to bottom, transparent, transparent, rgba(0,0,0,0.88))',
        }}
      />

      {/* Botões de navegação laterais */}
      {!isMobile && (
        <>
          <button
            onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-10 flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: '48px', height: '64px', background: 'rgba(5,46,126,0.85)', borderRadius: '0 8px 8px 0', opacity: 0.75 }}
          >
            <svg width="18" height="18" viewBox="0 0 10 10" fill="none">
              <path d="M7 1L3 5L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent(c => (c + 1) % slides.length)}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-10 flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: '48px', height: '64px', background: 'rgba(5,46,126,0.85)', borderRadius: '8px 0 0 8px', opacity: 0.75 }}
          >
            <svg width="18" height="18" viewBox="0 0 10 10" fill="none">
              <path d="M3 1L7 5L3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* ── Conteúdo principal ── */}
      <div className="absolute inset-0 flex flex-col" style={{ paddingTop: `${paddingTop}px` }}>

        {/* Badge + Título */}
        <div style={{ paddingLeft: gridPl, paddingRight: isMobile ? gridPl : undefined }}>
          <div
            className="flex items-center justify-center gap-[16px] bg-[#31477b] h-9 rounded-sm"
            style={{ marginBottom: '20px', width: badgeWidth, paddingLeft: '20px', paddingRight: '20px' }}
          >
            <span className="text-white text-[13.8px] font-bold uppercase tracking-wide">{slide.badge.tag}</span>
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="text-white text-[13.8px] font-bold uppercase tracking-wide">{slide.badge.location}</span>
          </div>
          <h1
            className="text-white font-extrabold uppercase leading-tight"
            style={{ fontSize: h1Size, marginBottom: '6px', transition: 'opacity 0.4s ease' }}
          >
            {slide.title}
          </h1>
          <p className="text-[#779dff] font-bold uppercase" style={{ fontSize: isMobile ? '13px' : '18px', textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            {slide.subtitle}
          </p>
        </div>

        <div className="flex-1" style={{ minHeight: '32px' }} />

        {/* ── Barra inferior ── */}
        {isMobile ? (
          /* Mobile: pinned to bottom of section */
          <div className="absolute bottom-0 left-0 right-0 flex flex-col">
            {/* Slide dots */}
            <div className="flex justify-center gap-2" style={{ paddingBottom: '10px' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? '20px' : '8px',
                    height: '8px',
                    background: i === current ? '#779dff' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>
            {/* Specs panel */}
            <div
              className="flex flex-col gap-3 backdrop-blur-sm w-full"
              style={{ background: 'rgba(12,26,54,0.9)', padding: '16px' }}
            >
              <div className="shrink-0">
                {slide.logo
                  ? <img src={slide.logo} alt="" className="h-8 object-contain" style={{ maxWidth: '180px' }} />
                  : <span className="text-white font-extrabold text-lg tracking-wide">{slide.logoText}</span>
                }
              </div>
              <div className="w-full h-px bg-white opacity-20" />
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {slide.specs.map((sp, i) => (
                  <Spec key={i} icon={sp.icon}>{sp.label}</Spec>
                ))}
              </div>
            </div>
            {/* Saiba Mais */}
            <div
              className="flex flex-col items-center justify-center bg-[#779dff] gap-1 cursor-pointer hover:bg-[#6b8ee8] transition-colors w-full"
              style={{ height: '52px' }}
              onClick={() => slide.href && navigate(slide.href)}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-sm font-semibold uppercase">Saiba mais</span>
            </div>
          </div>
        ) : (
          /* Tablet / Desktop: horizontal bar */
          <div className="flex items-stretch w-full">

            {/* Painel escuro de especificações */}
            <div
              className="flex items-center gap-6 backdrop-blur-sm shrink-0"
              style={{
                background: 'rgba(12,26,54,0.9)',
                width: bp === 'xl' ? 'min(1200px, calc(100% - 900px))' : bp === 'lg' ? 'min(1100px, calc(100% - 450px))' : bp === 'lg-sm' ? 'min(780px, calc(100% - 340px))' : bp === 'md' ? 'min(600px, calc(100% - 280px))' : 'min(780px, 68%)',
                maxWidth: bp === 'xl' ? 'min(1200px, calc(100% - 900px))' : bp === 'lg' ? 'min(1100px, calc(100% - 450px))' : bp === 'lg-sm' ? 'min(780px, calc(100% - 340px))' : bp === 'md' ? 'min(600px, calc(100% - 280px))' : 'min(780px, 68%)',
                height: '142px',
                paddingLeft: gridPl,
                paddingRight: '32px',
                paddingBottom: '16px',
              }}
            >
              <div className="shrink-0">
                {slide.logo
                  ? <img src={slide.logo} alt="" className="h-8 object-contain" style={{ maxWidth: '180px' }} />
                  : <span className="text-white font-extrabold text-xl tracking-wide">{slide.logoText}</span>
                }
              </div>

              <div className="w-px h-20 bg-white opacity-20 shrink-0" />

              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div className="grid grid-cols-2 gap-x-6">
                  <Spec icon={slide.specs[0].icon}>{slide.specs[0].label}</Spec>
                  <Spec icon={slide.specs[1].icon}>{slide.specs[1].label}</Spec>
                </div>
                <div className="w-full h-px bg-white opacity-20" />
                <div className="grid grid-cols-2 gap-x-6">
                  <Spec icon={slide.specs[2].icon}>{slide.specs[2].label}</Spec>
                  <Spec icon={slide.specs[3].icon}>{slide.specs[3].label}</Spec>
                </div>
              </div>
            </div>

            {/* Botão Saiba Mais */}
            <div
              className="flex flex-col items-center justify-center bg-[#779dff] shrink-0 gap-1 cursor-pointer hover:bg-[#6b8ee8] transition-colors rounded-tr-[8px]"
              style={{ width: bp === 'xl' || bp === 'lg' || bp === 'lg-sm' ? '192px' : '140px', height: '142px' }}
              onClick={() => slide.href && navigate(slide.href)}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-sm font-semibold uppercase">Saiba mais</span>
            </div>

            {/* Espaço transparente em 768–1400px (sem indicadores) */}
            {(bp === 'sm' || bp === 'md') && <div className="flex-1" />}

            {/* Indicadores de slide — apenas 1400px+ */}
            {(bp === 'lg-sm' || bp === 'lg' || bp === 'xl') && (
              <div className="flex-1 flex justify-around items-end pb-4">
                {slides.map((s, i) => (
                  <div
                    key={s.num}
                    onClick={() => setCurrent(i)}
                    className="flex flex-col gap-[3px] cursor-pointer"
                    style={{
                      height: '74px',
                      borderBottom: i === current ? '4px solid #779dff' : '4px solid transparent',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <span className="text-[14px] leading-none" style={{ color: '#d1d1d1', opacity: i === current ? 1 : 0.5 }}>{s.num}</span>
                    <span className="text-[12px] font-semibold leading-none" style={{ color: '#888', opacity: i === current ? 1 : 0.5 }}>{s.title}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}


      </div>
    </section>
  );
}
