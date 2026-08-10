
const gridPl = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';
const gridPr = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';

const stats = [
  { value: '+10 mil', desc: 'Metros quadrados de obra executados.' },
  { value: '+150', desc: 'Famílias atendidas.' },
  { value: '+3 anos', desc: 'De experiência no mercado imobiliário.' },
];

function BuildingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="4" width="20" height="32" rx="1.5" stroke="#5b0a28" strokeWidth="1.6" />
      <path d="M17 36V29a3 3 0 0 1 3-3 3 3 0 0 1 3 3v7" stroke="#5b0a28" strokeWidth="1.6" />
      <circle cx="15.5" cy="11" r="1.3" fill="#5b0a28" />
      <circle cx="20" cy="11" r="1.3" fill="#5b0a28" />
      <circle cx="24.5" cy="11" r="1.3" fill="#5b0a28" />
      <circle cx="15.5" cy="17" r="1.3" fill="#5b0a28" />
      <circle cx="20" cy="17" r="1.3" fill="#5b0a28" />
      <circle cx="24.5" cy="17" r="1.3" fill="#5b0a28" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sobre() {

  return (
    <section id="sobre" className="bg-white" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* ── Breadcrumb + título ── */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Sobre</span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#5b0a28] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="flex flex-col gap-3" style={{ marginTop: '16px' }}>
            <h2 className="text-[#3d3d3d] text-[28px] lg:text-[38px] font-extrabold uppercase leading-tight" style={{ maxWidth: '640px' }}>
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
              href="https://wa.me/5511910837322?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Zimbel." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-semibold w-fit cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: '#5b0a28', padding: '12px 24px', borderRadius: '6px' }}
            >
              Entre em contato
              <ArrowUp />
            </a>
          </div>
        </div>

        {/* DESKTOP: layout with images and man */}
        <div className="hidden lg:block relative" style={{ paddingTop: '72px', marginBottom: '84px' }}>

          {/* Card branco */}
          <div
            className="relative rounded-xl bg-white"
            style={{ marginLeft: '223px', height: '630px', boxShadow: '0 20px 60px rgba(51,2,24,0.18)' }}
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
                href="https://wa.me/5511910837322?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Zimbel." target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-sm font-semibold w-fit cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: '#5b0a28', padding: '12px 24px', borderRadius: '6px' }}
              >
                Entre em contato
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

        </div>

        {/* ── Stats ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 justify-items-center text-center rounded-xl"
          style={{ background: '#f7eef0', padding: 'clamp(32px, 4vw, 56px) clamp(20px, 4vw, 40px)' }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 md:gap-4">
              <BuildingIcon />
              <p
                className="text-[#330218] font-semibold leading-none"
                style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
              >
                {stat.value}
              </p>
              <p className="text-[#6b7280] leading-snug" style={{ fontSize: 'clamp(15px, 1.1vw, 15px)' }}>{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
