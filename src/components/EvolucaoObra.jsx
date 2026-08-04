import { useState, useEffect } from 'react';

const gridPl = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';
const gridPr = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))';

export default function EvolucaoObra({ etapas, fotos = [] }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  const total = fotos.length;
  const prev = () => setImgIdx(i => (i - 1 + total) % total);
  const next = () => setImgIdx(i => (i + 1) % total);
  const hasCarousel = total > 0;

  const Carousel = () => (
    <div
      style={{ position: 'relative', borderRadius: isMobile ? '0' : '8px', overflow: 'hidden', aspectRatio: '4/3', cursor: 'zoom-in' }}
      onClick={() => setLightbox(fotos[imgIdx].src)}
    >
      <img
        key={imgIdx}
        src={fotos[imgIdx].src}
        alt={fotos[imgIdx].caption ?? ''}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        loading="lazy"
        decoding="async"
      />

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <button
        onClick={e => { e.stopPropagation(); prev(); }}
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '48px', height: '56px', background: '#330218', border: 'none', cursor: 'pointer', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M8 1L1 8L8 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <button
        onClick={e => { e.stopPropagation(); next(); }}
        style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '48px', height: '56px', background: '#330218', border: 'none', cursor: 'pointer', borderRadius: '8px 0 0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      {fotos[imgIdx].date && (
        <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(51,2,24,0.85)', backdropFilter: 'blur(4px)', borderRadius: '4px', padding: '5px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1" stroke="#5b0a28" strokeWidth="1.2"/><path d="M4 1V3M8 1V3M1 5H11" stroke="#5b0a28" strokeWidth="1.2" strokeLinecap="round"/></svg>
          <span style={{ fontSize: '12px', color: '#fff', fontWeight: 700, letterSpacing: '0.03em' }}>{fotos[imgIdx].date}</span>
        </div>
      )}

      <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {fotos[imgIdx].caption && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '1px', height: '18px', background: '#5b0a28', flexShrink: 0 }} />
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{fotos[imgIdx].caption}</span>
          </div>
        )}
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginLeft: 'auto' }}>
          {imgIdx + 1} <span style={{ color: '#5b0a28' }}>/</span> {total}
        </span>
      </div>

      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setImgIdx(i); }}
            style={{ width: i === imgIdx ? '20px' : '8px', height: '8px', borderRadius: '100px', background: i === imgIdx ? '#5b0a28' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
    <section style={{ background: '#f8f9fb', paddingTop: '72px', paddingBottom: isMobile && hasCarousel ? '0' : '80px' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="9" width="4" height="8" rx="1" stroke="#330218" strokeWidth="1.4"/>
                <rect x="7" y="5" width="4" height="12" rx="1" stroke="#330218" strokeWidth="1.4"/>
                <rect x="13" y="1" width="4" height="16" rx="1" stroke="#330218" strokeWidth="1.4"/>
              </svg>
              <span style={{ color: '#330218' }} className="text-[13px] font-semibold uppercase tracking-wide">Evolução de obra</span>
            </div>
          </div>
          <div className="w-full h-px" style={{ background: 'rgba(51,2,24,0.1)' }} />
          <h2 className="text-[#330218] text-[26px] lg:text-[38px] font-extrabold uppercase leading-tight mt-3">
            Andamento da obra
          </h2>
        </div>

        {isMobile ? (
          /* Mobile: barras com padding normal */
          <div style={{ marginBottom: hasCarousel ? '32px' : '0' }}>
            <div className="flex flex-col gap-6">
              {etapas.map((etapa) => (
                <div key={etapa.label} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#330218' }}>{etapa.label}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: etapa.pct === 100 ? '#22c55e' : '#5b0a28' }}>{etapa.pct}%</span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '100px', background: 'rgba(51,2,24,0.1)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${etapa.pct}%`, borderRadius: '100px', background: etapa.pct === 100 ? '#22c55e' : '#5b0a28', transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: 50/50 */
          <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="flex flex-col gap-6">
                {etapas.map((etapa) => (
                  <div key={etapa.label} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#330218' }}>{etapa.label}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: etapa.pct === 100 ? '#22c55e' : '#5b0a28' }}>{etapa.pct}%</span>
                    </div>
                    <div style={{ height: '8px', borderRadius: '100px', background: 'rgba(51,2,24,0.1)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${etapa.pct}%`, borderRadius: '100px', background: etapa.pct === 100 ? '#22c55e' : '#5b0a28', transition: 'width 1s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {hasCarousel && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <Carousel />
              </div>
            )}
          </div>
        )}

      </div>
    </section>

    {/* Mobile: carrossel full-width fora do padding */}
    {isMobile && hasCarousel && (
      <div style={{ background: '#f8f9fb', paddingBottom: '80px' }}>
        <Carousel />
      </div>
    )}

    {/* Lightbox */}
    {lightbox && (
      <div
        onClick={() => setLightbox(null)}
        style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '32px', lineHeight: 1 }}>×</button>
        <img
          src={lightbox}
          alt=""
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }}
        />
      </div>
    )}
    </>
  );
}
