import sharp from 'sharp';
import { readdir, access } from 'fs/promises';
import { join, basename, extname } from 'path';

const BASE = 'c:/Users/win/Desktop/SITE ZIMBEL CERTO/public';

const PHOTO_QUALITY = 72;   // fotos
const PLANT_QUALITY = 85;   // plantas (mais detalhe)

const files = [
  // ── Vértice ──
  { src: `${BASE}/empreendimentos/vertice/hero-bg.jpg`,               q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/galeria-placeholder.jpg`,   q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-1.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-2.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-3.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-4.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-5.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/lazer-img-6.jpg`,           q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/localizacao-ceret.jpg`,     q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/localizacao-hospital.jpg`,  q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/localizacao-supermercado.jpg`, q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/planta-perspectiva-1.jpg`,  q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/planta-perspectiva-2.jpg`,  q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/vertice/planta-unidade1.png`,       q: PLANT_QUALITY },
  // ── Evolution ──
  { src: `${BASE}/empreendimentos/evolution/localizacao-foto-1.jpg`,  q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/evolution/localizacao-foto-2.jpg`,  q: PHOTO_QUALITY },
  { src: `${BASE}/empreendimentos/evolution/localizacao-foto-3.jpg`,  q: PHOTO_QUALITY },
  // ── Sobre ──
  { src: `${BASE}/img/IMG_4622.JPG.jpeg`,                             q: PHOTO_QUALITY, out: `${BASE}/img/sobre-foto.avif` },
];

// ── Plantas (pasta inteira) ──
const plantasDir = `${BASE}/plantas`;
const plantasFiles = await readdir(plantasDir);
for (const f of plantasFiles) {
  if (/\.(png|jpg|jpeg)$/i.test(f)) {
    files.push({ src: join(plantasDir, f), q: PLANT_QUALITY });
  }
}

let converted = 0, skipped = 0, failed = 0;

for (const { src, q, out } of files) {
  try {
    await access(src);
  } catch {
    console.log(`⚠  não encontrado: ${src}`);
    skipped++;
    continue;
  }

  const dest = out ?? src.replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/, '.avif');

  try {
    const info = await sharp(src)
      .avif({ quality: q, effort: 6 })
      .toFile(dest);

    const srcSize = (await import('fs')).statSync(src).size;
    const reduction = Math.round((1 - info.size / srcSize) * 100);
    console.log(`✓ ${basename(dest)}  ${(srcSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB  (-${reduction}%)`);
    converted++;
  } catch (e) {
    console.error(`✗ ${basename(src)}: ${e.message}`);
    failed++;
  }
}

console.log(`\nConcluído: ${converted} convertidos, ${skipped} não encontrados, ${failed} erros`);
