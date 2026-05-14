import { useState, useEffect } from 'react';

const gridPl = 'max(16px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(16px, calc((100vw - 1312px) / 2))';

const partners = [
  {
    title: 'Parceria com a Housi',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.',
  },
  {
    title: 'Parceria com a Housi',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.',
  },
  {
    title: 'Parceria com a Housi',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.',
  },
  {
    title: 'Parceria com a Housi',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.',
  },
];

const GAP = 24;
const CLONE = 3; // clones em cada ponta para preencher a viewport

function getCardW(vw) {
  if (vw < 768) return vw - 32;
  if (vw < 1024) return Math.round((vw - 64) / 2 - 12);
  return 400;
}

function ChevronLeft() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Vantagens() {
  const [cardW, setCardW] = useState(() => getCardW(window.innerWidth));
  const [idx, setIdx] = useState(CLONE); // CLONE = índice do primeiro card real
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const update = () => setCardW(getCardW(window.innerWidth));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const STEP = cardW + GAP;

  // Track: [...últimos 3, ...todos, ...primeiros 3]
  const looped = [
    ...partners.slice(-CLONE),
    ...partners,
    ...partners.slice(0, CLONE),
  ];

  const scrollPrev = () => setIdx(i => i - 1);
  const scrollNext = () => setIdx(i => i + 1);

  const handleTransitionEnd = () => {
    if (idx >= partners.length + CLONE) {
      setAnimated(false);
      setIdx(idx - partners.length);
    } else if (idx < CLONE) {
      setAnimated(false);
      setIdx(idx + partners.length);
    }
  };

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  return (
    <section className="bg-white" style={{ paddingTop: '72px', paddingBottom: '80px', overflow: 'hidden' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* ── Breadcrumb + título ── */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <rect x="1" y="5" width="16" height="11" rx="1" stroke="#779dff" strokeWidth="1.4"/>
                <path d="M5 5V3.5C5 2.12 6.79 1 9 1C11.21 1 13 2.12 13 3.5V5" stroke="#779dff" strokeWidth="1.4" strokeLinecap="round"/>
                <rect x="6.5" y="8" width="5" height="4" rx="0.5" stroke="#779dff" strokeWidth="1.2"/>
              </svg>
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Vantagens de compras</span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="w-full h-px bg-[#e3e3e3]" />

          <div className="flex items-end justify-between gap-4 mt-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1d2748] text-[26px] lg:text-[38px] font-extrabold uppercase leading-tight" style={{ maxWidth: '752px' }}>
                Parcerias e produtos que garantem a melhor entrega
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Qualidade comprovada que garantem cliente satisfeitos
              </p>
            </div>

            {/* Setas de navegação */}
            <div className="flex gap-[3px] shrink-0">
              <button
                onClick={scrollPrev}
                className="flex items-center justify-center bg-[#052e7e] cursor-pointer hover:bg-[#0a3a9e] transition-colors"
                style={{ width: '56px', height: '56px', borderRadius: '10px 0 0 10px' }}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={scrollNext}
                className="flex items-center justify-center bg-[#4f6db5] cursor-pointer hover:bg-[#5a7bc5] transition-colors"
                style={{ width: '56px', height: '56px', borderRadius: '0 10px 10px 0' }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* ── Cards de parceiros — overflow pela direita ── */}
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', marginTop: '48px', marginBottom: '80px' }}>
          {/* Máscara esquerda */}
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: gridPl, background: '#fff', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ paddingLeft: gridPl }}>
          <div
            className="flex"
            style={{
              width: 'max-content',
              gap: `${GAP}px`,
              transform: `translateX(-${idx * STEP}px)`,
              transition: animated ? 'transform 0.4s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-[rgba(79,109,181,0.35)] rounded-lg flex flex-col shrink-0"
                style={{ width: `${cardW}px`, padding: '28px', gap: '40px', boxShadow: '0 20px 30px rgba(12,26,54,0.08)' }}
              >
                {/* Logo do parceiro */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 rounded"
                    style={{ width: '48px', height: '48px', background: 'rgba(119,157,255,0.12)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#779dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#779dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#a7a7a7] font-bold tracking-[0.25em] text-[15px] uppercase">Housi</span>
                </div>

                {/* Informações */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-[#31477b] text-[22px] font-extrabold leading-snug">{p.title}</h3>
                  <div className="w-full h-px bg-[#e3e3e3]" />
                  <p className="text-[#a7a7a7] text-[15px] font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
    </section>
  );
}
