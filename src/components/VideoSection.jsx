import { useState } from 'react';

const YT_ID = 'VIbe5I9ax4o';
const THUMB = `https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`;

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        onClick={() => setOpen(true)}
        className="w-full relative flex items-center justify-center cursor-pointer overflow-hidden"
        style={{ aspectRatio: '16/9', maxHeight: '800px', background: '#000' }}
      >
        <img
          src={THUMB}
          alt="Vídeo Vértice Anália Franco"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <button className="relative z-10 opacity-80 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="2" />
            <path d="M31 26L57 40L31 54V26Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '32px', lineHeight: 1 }}
          >×</button>
          <div onClick={e => e.stopPropagation()} style={{ width: '90vw', maxWidth: '1100px', aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
              title="Vértice Anália Franco"
              allow="autoplay; fullscreen"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
