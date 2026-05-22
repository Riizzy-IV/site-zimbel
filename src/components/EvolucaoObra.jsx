const gridPl = 'max(120px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(120px, calc((100vw - 1312px) / 2))';

export default function EvolucaoObra({ etapas }) {
  return (
    <section style={{ background: '#f8f9fb', paddingTop: '72px', paddingBottom: '80px' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="9" width="4" height="8" rx="1" stroke="#1d2748" strokeWidth="1.4"/>
                <rect x="7" y="5" width="4" height="12" rx="1" stroke="#1d2748" strokeWidth="1.4"/>
                <rect x="13" y="1" width="4" height="16" rx="1" stroke="#1d2748" strokeWidth="1.4"/>
              </svg>
              <span style={{ color: '#1d2748' }} className="text-[13px] font-semibold uppercase tracking-wide">Evolução de obra</span>
            </div>
          </div>
          <div className="w-full h-px" style={{ background: 'rgba(29,39,72,0.1)' }} />
          <h2 className="text-[#1d2748] text-[26px] lg:text-[38px] font-extrabold uppercase leading-tight mt-3">
            Andamento da obra
          </h2>
        </div>

        {/* Etapas */}
        <div className="flex flex-col gap-6" style={{ maxWidth: '720px' }}>
          {etapas.map((etapa) => (
            <div key={etapa.label} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#1d2748' }}>{etapa.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: etapa.pct === 100 ? '#22c55e' : '#779dff' }}>
                  {etapa.pct}%
                </span>
              </div>
              <div style={{ height: '8px', borderRadius: '100px', background: 'rgba(29,39,72,0.1)', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${etapa.pct}%`,
                    borderRadius: '100px',
                    background: etapa.pct === 100 ? '#22c55e' : '#779dff',
                    transition: 'width 1s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
