import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgVertice = "https://www.figma.com/api/mcp/asset/5d623035-f07c-474f-8b7e-a47e771b63bf";
const imgEvolution = "https://www.figma.com/api/mcp/asset/ecf4e29d-de38-4da8-a5d3-fbe0d5ac44b4";
const imgEsperanca = "https://www.figma.com/api/mcp/asset/f66c968a-3ec1-4a77-82a9-21c80a8e8b92";
const iconLocation = '/icon/localizacao.svg';
const iconBed = '/cards/cama.svg';
const iconArea = '/cards/area.svg';
const iconCar = '/cards/Frame-2.svg';
const iconBalcony = '/cards/area.svg';

const gridPl = 'max(16px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(16px, calc((100vw - 1312px) / 2))';

const tabs = [
  {
    label: 'Lançamentos',
    icon: <img src="/icon/star.svg" alt="" className="w-[20px] h-[20px] object-contain" />,
  },
  {
    label: 'Em obras',
    icon: <img src="/icon/obra.svg" alt="" className="w-[20px] h-[20px] object-contain" />,
  },
  {
    label: 'Pronto para morar',
    icon: <img src="/icon/chave.svg" alt="" className="w-[20px] h-[20px] object-contain" />,
  },
];

const smallCards = [
  { img: imgEvolution, city: 'Tatuapé - São Paulo', name: 'Evolution Tatuapé', href: '/empreendimentos/evolution',
    specs: [{ icon: iconBed, label: '2 dormitórios' }, { icon: iconArea, label: '34 a 50m²' }, { icon: iconCar, label: '1 vaga' }, { icon: iconBalcony, label: 'Área Gourmet' }] },
  { img: imgEsperanca, city: 'Vila Esperança - São Paulo', name: 'Esperança Prime', href: null,
    specs: [{ icon: iconBed, label: 'Suítes e 1 dorm.' }, { icon: iconArea, label: '32 a 200m²' }, { icon: iconCar, label: '1 vaga' }, { icon: iconBalcony, label: 'Varanda Gourmet' }] },
];

function SpecIcon({ src, children }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <img src={src} alt="" className="w-8 h-8 object-contain" />
      </div>
      <div className="text-white text-sm font-semibold leading-tight">{children}</div>
    </div>
  );
}

function ArrowUp() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SaibaMais({ className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-[#779dff] cursor-pointer hover:bg-[#6b8ee8] transition-colors gap-1.5 ${className}`}>
      <ArrowUp />
      <span className="text-white text-sm font-semibold uppercase">Saiba mais</span>
    </div>
  );
}

export default function Empreendimentos() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* ── Breadcrumb + título ── */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <rect x="1" y="5" width="16" height="11" rx="1" stroke="#779dff" strokeWidth="1.4" />
                <path d="M5 5V3.5C5 2.12 6.79 1 9 1C11.21 1 13 2.12 13 3.5V5" stroke="#779dff" strokeWidth="1.4" strokeLinecap="round" />
                <rect x="6.5" y="8" width="5" height="4" rx="0.5" stroke="#779dff" strokeWidth="1.2" />
              </svg>
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">
                Empreendimentos em destaque
              </span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">
              Zimbel Incorporadora
            </span>
          </div>
          <div className="w-full h-px bg-[#e3e3e3]" />
          <div className="flex flex-col gap-1 mt-3">
            <h2 className="text-[#1d2748] text-[28px] md:text-[38px] font-extrabold uppercase leading-tight">
              Conheça os empreendimentos Zimbel
            </h2>
            <p className="text-[#a7a7a7] text-base font-medium">
              Empreendimentos modernos em todos os detalhes, pensados em você
            </p>
          </div>
        </div>

        {/* ── Filter tabs ── */}
        <div className="no-scrollbar" style={{ overflowX: 'auto', marginTop: '32px', marginBottom: '32px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            background: '#1e3a8a',
            borderRadius: '6px',
            width: 'fit-content',
          }}
        >
          {tabs.map((tab, i) => (
            <div key={tab.label} style={{ display: 'flex', alignItems: 'stretch' }}>
              {i > 0 && (
                <div style={{
                  width: '1px',
                  background: 'rgba(255,255,255,0.5)',
                  height: '20px',
                  alignSelf: 'center',
                }} />
              )}
              <button
                onClick={() => setActiveTab(i)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  border: 'none',
                  borderBottom: '3px solid transparent',
                  background: 'transparent',
                  color: '#ffffff',
                  opacity: activeTab === i ? 1 : 0.75,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                className="md:!px-[40px] md:!py-[16px] md:!text-[13px]"
              >
                <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === i && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '65%',
                    height: '3px',
                    background: '#93b4ff',
                    borderRadius: '2px 2px 0 0',
                  }} />
                )}
              </button>
            </div>
          ))}
        </div>
        </div>

        {/* ── Card grande ── */}
        <div
          className="relative w-full rounded-lg overflow-hidden"
          style={{
            height: 'clamp(300px, 35vw, 560px)',
            marginBottom: '24px',
            boxShadow: '0 20px 60px rgba(12,26,54,0.4)',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/empreendimentos/vertice')}
        >
          <img
            src={imgVertice}
            alt="Vértice Anália Franco"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(12,26,54,0) 35%, rgba(12,26,54,0.72) 72%, #0c1a36 100%)',
            }}
          />

          {/* Info bottom-left */}
          <div
            className="absolute bottom-0 flex items-end gap-5"
            style={{ left: '0px', right: '160px', paddingBottom: '24px' }}
          >
            {/* Barra azul */}
            <div style={{ width: '3px', height: '90px', background: '#779dff', borderRadius: '2px', flexShrink: 0 }} />

            <div className="flex flex-col gap-3 md:gap-5">
              <div>
                <div className="flex items-center gap-2" style={{ marginBottom: '6px' }}>
                  <img src={iconLocation} alt="" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                  <span className="text-white/80 text-[12px] md:text-[14px] uppercase tracking-wide">Anália Franco - São Paulo</span>
                </div>
                <h3 className="text-white text-[20px] md:text-[30px] leading-none font-extrabold uppercase">Vértice Anália Franco</h3>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <SpecIcon src={iconBed}>Suítes e 1 dorm.</SpecIcon>
                <SpecIcon src={iconArea}>32 a 200m²</SpecIcon>
                <SpecIcon src={iconCar}>1 vaga</SpecIcon>
                <SpecIcon src={iconBalcony} wide>
                  <span>Varanda</span>
                  <span>Gourmet</span>
                </SpecIcon>
              </div>
            </div>
          </div>

          <SaibaMais className="absolute bottom-0 right-0 w-36 md:w-48 h-[56px] md:h-[70px] rounded-tl-lg" />
        </div>

        {/* ── Dois cards menores ── */}
        <div className="flex flex-col md:flex-row gap-6" style={{ marginBottom: '72px' }}>
          {smallCards.map((card) => {
            const cardInner = (
              <div
                className="relative flex-1 rounded-lg overflow-hidden"
                style={{
                  height: 'clamp(240px, 28vw, 380px)',
                  boxShadow: '0 20px 60px rgba(12,26,54,0.4)',
                  cursor: card.href ? 'pointer' : 'default',
                }}
                onClick={() => card.href && navigate(card.href)}
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(12,26,54,0) 20%, #0c1a36 100%)' }}
                />

                <div className="absolute flex items-end gap-4" style={{ bottom: '20px', left: '0px', right: '140px' }}>
                  <div style={{ width: '3px', height: '70px', background: '#779dff', borderRadius: '2px', flexShrink: 0 }} />
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <img src={iconLocation} alt="" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                        <span className="text-white/70 text-xs uppercase tracking-wide">{card.city}</span>
                      </div>
                      <h3 className="text-white text-lg font-extrabold uppercase">{card.name}</h3>
                    </div>
                    <div className="hidden md:grid grid-cols-2 gap-x-4 gap-y-2">
                      {card.specs.map((s) => (
                        <SpecIcon key={s.label} src={s.icon}>{s.label}</SpecIcon>
                      ))}
                    </div>
                  </div>
                </div>

                <SaibaMais className="absolute bottom-0 right-0 w-32 md:w-40 h-[50px] md:h-[56px] rounded-tl-lg" />
              </div>
            )

            return <div key={card.name} style={{ flex: 1 }}>{cardInner}</div>
          })}
        </div>

        {/* ── CTA Banner ── */}
        <div
          className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 rounded-lg overflow-hidden"
          style={{
            background: '#052E7E',
            padding: '24px 24px',
            boxShadow: '0 20px 60px rgba(12,26,54,0.4)',
          }}
        >
          <img
            src="/cards/bg.avif"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ mixBlendMode: 'multiply', opacity: 0.6 }}
          />
          <div className="relative flex flex-col gap-1.5">
            <h3 className="text-white text-[18px] md:text-[22px] font-extrabold uppercase tracking-wide">
              Veja todos os imóveis da Zimbel
            </h3>
            <p className="text-[#a8bfff] text-sm italic">
              Faça da exclusividade o seu novo padrão.
            </p>
          </div>
          <button
            className="relative flex items-center justify-center gap-3 text-white text-[15px] font-semibold cursor-pointer transition-colors hover:opacity-90 w-full md:w-auto shrink-0"
            style={{ background: '#779dff', padding: '18px 36px', borderRadius: '10px' }}
          >
            Veja todos os imóveis
            <ArrowUp />
          </button>
        </div>

      </div>
    </section>
  );
}
