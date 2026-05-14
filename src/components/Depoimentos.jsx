import { useState, useEffect } from 'react';

const gridPl = 'max(16px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(16px, calc((100vw - 1312px) / 2))';

const testimonials = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'Ana Clara - Vértice Anália Franco' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'Ana Clara - Vértice Anália Franco' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'Ana Clara - Vértice Anália Franco' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'João Silva - Evolution Tatuapé' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'João Silva - Evolution Tatuapé' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis massa lorem, a malesuada nulla sodales non. Sed felis nisl, lacinia vel dui non, viverra aliquam elit.', author: 'João Silva - Evolution Tatuapé' },
];

const GAP = 24;

function getVisibleCount(vw) {
  if (vw < 768) return 1;
  if (vw < 1024) return 2;
  return 3;
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

function ArrowDiagonal() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Depoimentos() {
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount(window.innerWidth));
  const [idx, setIdx] = useState(visibleCount);
  const [animated, setAnimated] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  // Build looped array based on current visibleCount
  const looped = [
    ...testimonials.slice(-visibleCount),
    ...testimonials,
    ...testimonials.slice(0, visibleCount),
  ];

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const newVisible = getVisibleCount(vw);
      const pad = Math.max(16, (vw - 1312) / 2);
      const available = vw - pad * 2;
      setCardWidth((available - GAP * (newVisible - 1)) / newVisible);
      setVisibleCount(prev => {
        if (prev !== newVisible) {
          // Reset idx when visible count changes
          setAnimated(false);
          setIdx(newVisible);
        }
        return newVisible;
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const handleTransitionEnd = () => {
    if (idx >= testimonials.length + visibleCount) {
      setAnimated(false);
      setIdx(visibleCount);
    } else if (idx < visibleCount) {
      setAnimated(false);
      setIdx(testimonials.length + visibleCount - 1);
    }
  };

  const STEP = cardWidth + GAP;
  const offset = idx * STEP;

  return (
    <section style={{ background: '#f0f2f5', paddingTop: '72px', paddingBottom: '80px', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <rect x="1" y="5" width="16" height="11" rx="1" stroke="#779dff" strokeWidth="1.4"/>
                <path d="M5 5V3.5C5 2.12 6.79 1 9 1C11.21 1 13 2.12 13 3.5V5" stroke="#779dff" strokeWidth="1.4" strokeLinecap="round"/>
                <rect x="6.5" y="8" width="5" height="4" rx="0.5" stroke="#779dff" strokeWidth="1.2"/>
              </svg>
              <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">Depoimentos</span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
            <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="w-full h-px bg-[#e3e3e3]" />

          <div className="flex items-end justify-between gap-4 mt-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1d2748] text-[26px] lg:text-[38px] font-extrabold uppercase leading-tight">
                O que falam os nossos clientes
              </h2>
              <p className="text-[#a7a7a7] text-base font-medium">
                Transformamos sonhos em projetos reais
              </p>
            </div>

            {/* Setas de navegação */}
            <div className="flex gap-[3px] shrink-0">
              <button
                onClick={() => setIdx(i => i - 1)}
                className="flex items-center justify-center bg-[#052e7e] cursor-pointer hover:bg-[#0a3a9e] transition-colors"
                style={{ width: '56px', height: '56px', borderRadius: '10px 0 0 10px' }}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setIdx(i => i + 1)}
                className="flex items-center justify-center bg-[#4f6db5] cursor-pointer hover:bg-[#5a7bc5] transition-colors"
                style={{ width: '56px', height: '56px', borderRadius: '0 10px 10px 0' }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div style={{ position: 'relative', overflow: 'hidden', marginTop: '48px', marginBottom: '48px' }}>
        {/* Máscaras laterais com cor de fundo para esconder cards fora do limite */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: gridPl, background: '#f0f2f5', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: gridPr, background: '#f0f2f5', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>
          <div
            className="flex"
            style={{
              width: 'max-content',
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              transition: animated ? 'transform 0.4s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg flex flex-col justify-end shrink-0"
                style={{ width: `${cardWidth}px`, height: '380px', padding: '36px', boxShadow: '0 20px 30px rgba(12,26,54,0.07)' }}
              >
                <div className="flex flex-col gap-6">
                  <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
                    <path d="M0 34V20.8C0 14.667 1.533 9.733 4.6 6C7.733 2.2 12.267 0 18.2 0v5.6C15.267 5.6 13 6.6 11.4 8.6 9.8 10.533 9 13.2 9 16.6H18.2V34H0zm23.8 0V20.8c0-6.133 1.533-11.067 4.6-14.8C31.533 2.2 36.067 0 42 0v5.6c-2.933 0-5.2 1-6.8 3-1.6 1.933-2.4 4.6-2.4 8H42V34H23.8z" fill="#779dff"/>
                  </svg>
                  <p className="text-[#6b7280] text-[15px] font-medium leading-relaxed">{t.text}</p>
                  <p className="text-[#4f6db5] text-[15px] font-bold">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ paddingLeft: gridPl }}>
        <button
          className="flex items-center gap-2 text-white text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          style={{ background: '#052e7e', padding: '16px 24px', borderRadius: '6px' }}
        >
          Veja todos os imóveis
          <ArrowDiagonal />
        </button>
      </div>

    </section>
  );
}
