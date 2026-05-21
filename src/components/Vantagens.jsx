const gridPl = 'max(40px, calc((100vw - 1312px) / 2))';
const gridPr = 'max(40px, calc((100vw - 1312px) / 2))';

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Vantagens() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ paddingLeft: gridPl, paddingRight: gridPr }}>

        {/* ── Layout: imagem esquerda + texto direita ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Imagem */}
          <div
            className="w-full lg:w-[480px] xl:w-[540px] shrink-0 rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(12,26,54,0.18)' }}
          >
            <img
              src="/terreno.jpg"
              alt="Ofereça seu terreno"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#1d2748] text-[32px] md:text-[42px] font-extrabold leading-tight">
                Ofereça{' '}
                <span className="text-[#779dff]">seu terreno</span>
              </h2>
              <p className="text-[#31447b] text-[16px] font-bold">
                Tem um terreno? Transforme em oportunidade!
              </p>
            </div>

            <p className="text-[#6b7280] text-[15px] leading-relaxed" style={{ maxWidth: '520px' }}>
              A Zimbel busca novas áreas para desenvolver projetos inovadores na Zona Leste de São Paulo.
              Se você tem um terreno, fale com nossa equipe e descubra como podemos construir juntos
              um empreendimento de alto padrão.
            </p>

            <a
              href="#contato"
              className="flex items-center gap-3 text-white text-[15px] font-semibold w-fit hover:opacity-90 transition-opacity"
              style={{ background: '#779dff', padding: '16px 32px', borderRadius: '10px' }}
            >
              Oferecer meu terreno
              <ArrowRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
