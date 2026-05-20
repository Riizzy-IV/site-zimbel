import { useState, useEffect, useRef, useCallback } from 'react';

function useIsMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

const gridPl = 'max(40px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(40px, calc((100vw - 1312px) / 2))';

const images = [
  { src: '/empreendimentos/vertice/interna-1.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-2.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-3.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-4.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-5.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-6.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-7.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-8.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-9.avif',  caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-10.avif', caption: 'Vértice Anália Franco' },
  { src: '/empreendimentos/vertice/interna-11.avif', caption: 'Vértice Anália Franco' },
];

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

export default function Depoimentos() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const total = images.length;

  function goTo(i) {
    setCurrent((i + total) % total);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const prev = images[(current - 1 + total) % total];
  const curr = images[current];
  const next = images[(current + 1) % total];

  return (
    <section style={{ background: '#0c1a36', paddingTop: '72px', paddingBottom: '80px', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr, marginBottom: '48px' }}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <rect x="1" y="5" width="16" height="11" rx="1" stroke="#779dff" strokeWidth="1.4"/>
                <path d="M5 5V3.5C5 2.12 6.79 1 9 1C11.21 1 13 2.12 13 3.5V5" stroke="#779dff" strokeWidth="1.4" strokeLinecap="round"/>
                <rect x="6.5" y="8" width="5" height="4" rx="0.5" stroke="#779dff" strokeWidth="1.2"/>
              </svg>
              <span className="text-[#779dff] text-[13px] font-semibold uppercase tracking-wide">Sobre</span>
            </div>
            <span className="w-1.5 h-1.5 bg-[#779dff] shrink-0" />
            <span className="text-[#4f6db5] text-[13px] font-semibold uppercase tracking-wide">Zimbel Incorporadora</span>
          </div>
          <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-[26px] lg:text-[38px] font-extrabold uppercase leading-tight">
                Conheça um pouco sobre a Zimbel
              </h2>
              <p style={{ color: '#4f6db5' }} className="text-base font-medium">
                Transformamos sonhos em projetos reais
              </p>
            </div>

            {/* Setas de navegação */}
            <div className="flex gap-[3px] shrink-0">
              <button
                onClick={() => goTo(current - 1)}
                className="flex items-center justify-center cursor-pointer"
                style={{ width: '56px', height: '56px', borderRadius: '10px 0 0 10px', background: 'rgba(119,157,255,0.15)', border: '1px solid rgba(119,157,255,0.2)' }}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="flex items-center justify-center cursor-pointer"
                style={{ width: '56px', height: '56px', borderRadius: '0 10px 10px 0', background: '#779dff' }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Carrossel ── */}
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>
        {isMobile ? (
          /* Mobile: apenas imagem central */
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
            {images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.caption}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: i === current ? 1 : 0, transition: 'opacity 0.6s ease' }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '3px', height: '18px', background: '#779dff', borderRadius: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>{curr.caption}</span>
            </div>
          </div>
        ) : (
          /* Desktop: 3 colunas — anterior / atual / seguinte */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '16px', alignItems: 'center' }}>
            <div
              onClick={() => goTo(current - 1)}
              style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', opacity: 0.4, transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
            >
              <img src={prev.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
            </div>

            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
              {images.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.caption}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: i === current ? 1 : 0, transition: 'opacity 0.6s ease' }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '18px', background: '#779dff', borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>{curr.caption}</span>
              </div>
            </div>

            <div
              onClick={() => goTo(current + 1)}
              style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', opacity: 0.4, transition: 'opacity 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
            >
              <img src={next.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
            </div>
          </div>
        )}

        {/* Indicadores */}
        <div className="flex justify-center gap-2" style={{ marginTop: '28px' }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '100px',
                background: i === current ? '#779dff' : 'rgba(119,157,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
