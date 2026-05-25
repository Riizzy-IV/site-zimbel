import { useState, useEffect } from 'react';

const manImg = "https://www.figma.com/api/mcp/asset/723e1951-88a3-43e9-a10f-9596d13409c3";

const gridPl = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';
const gridPr = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';

const stats = [
  { value: '+10 mil', desc: 'Metros quadrados de obra executados.' },
  { value: '+150', desc: 'Famílias atendidas.' },
  { value: '+3 anos', desc: 'De experiência no mercado imobiliário.' },
];

function ArrowUp() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sobre() {
  const [isWide, setIsWide] = useState(() => window.innerWidth >= 1560);
  useEffect(() => {
    const update = () => setIsWide(window.innerWidth >= 1560);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Sobre</span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="flex flex-col gap-3" style={{ marginTop: '16px' }}>
            <h2 className="text-[#1d2748] text-[28px] lg:text-[38px] font-extrabold uppercase leading-tight" style={{ maxWidth: '640px' }}>
              É sobre fazer a diferença na vida das pessoas
            </h2>
            <p className="text-[#a7a7a7] text-base font-medium">
              Transformamos sonhos em projetos reais
            </p>
          </div>
        </div>

        {/* ── Card / layout ── */}

        {/* MOBILE / TABLET: simplified card, no images */}
        <div className="block lg:hidden" style={{ marginBottom: '64px' }}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[#4b5563] text-[15px] leading-relaxed">
                A Zimbel nasceu com um único propósito: Oferecer qualidade de moradia para seus clientes
                e segurança e rentabilidade para os investidores.
              </p>
              <p className="text-[#4b5563] text-[15px] leading-relaxed">
                Fundada em 2023, a Zimbel foi criada para ser diferente. Temos o compromisso de realizar
                o sonho da casa própria de nossos clientes e ser uma empresa segura, responsável e transparente.
              </p>
              <p className="text-[#4b5563] text-[15px] leading-relaxed">
                Trazer inovação e qualidade é o que buscaremos incansavelmente em todos nossos projetos.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-white text-sm font-semibold w-fit cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: '#779dff', padding: '12px 24px', borderRadius: '6px' }}
            >
              Saiba mais sobre a Zimbel
              <ArrowUp />
            </a>
          </div>
        </div>

        {/* DESKTOP: layout with images and man */}
        <div className="hidden lg:block relative" style={{ paddingTop: '72px', marginBottom: '84px' }}>

          {/* Card branco */}
          <div
            className="relative rounded-xl bg-white"
            style={{ marginLeft: '223px', height: '630px', boxShadow: '0 20px 60px rgba(12,26,54,0.18)' }}
          >
            {/* Texto no painel direito */}
            <div
              className="absolute flex flex-col gap-6 justify-center"
              style={{ left: '52%', top: 0, bottom: 0, right: '56px' }}
            >
              <div className="flex flex-col gap-4">
                <p className="text-[#4b5563] text-[15px] leading-relaxed">
                  A Zimbel nasceu com um único propósito: Oferecer qualidade de moradia para seus clientes
                  e segurança e rentabilidade para os investidores.
                </p>
                <p className="text-[#4b5563] text-[15px] leading-relaxed">
                  Fundada em 2023, a Zimbel foi criada para ser diferente. Temos o compromisso de realizar
                  o sonho da casa própria de nossos clientes e ser uma empresa segura, responsável e transparente.
                </p>
                <p className="text-[#4b5563] text-[15px] leading-relaxed">
                  Trazer inovação e qualidade é o que buscaremos incansavelmente em todos nossos projetos.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 text-white text-sm font-semibold w-fit cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: '#779dff', padding: '12px 24px', borderRadius: '6px' }}
              >
                Saiba mais sobre a Zimbel
                <ArrowUp />
              </a>
            </div>
          </div>

          {/* Foto interna */}
          <img
            src="/img/sobre-foto.avif"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute object-cover rounded-xl pointer-events-none"
            style={{ top: '124px', left: 0, width: '50%', height: '527px', objectPosition: 'center center', zIndex: 2 }}
          />

          {/* Homem — só aparece em 1560px+ para não tapar o texto */}
          {isWide && (
            <img
              src={manImg}
              alt="Zimbel"
              className="absolute object-contain object-bottom pointer-events-none"
              style={{ bottom: -1, left: '350px', width: '420px', height: '690px', zIndex: 3 }}
            />
          )}
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-items-center text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 md:gap-4">
              <p
                className="text-[#31447b] font-semibold leading-none"
                style={{ fontSize: 'clamp(48px, 5vw, 64px)' }}
              >
                {stat.value}
              </p>
              <div>
                <div className="flex justify-center mb-1 md:mb-4">
                  <div className="w-8 md:w-24 h-[3px] bg-[#779dff] rounded" />
                </div>
                <p className="text-[#6b7280] leading-snug" style={{ fontSize: 'clamp(15px, 1.1vw, 15px)' }}>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
