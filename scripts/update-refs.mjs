import { readFile, writeFile } from 'fs/promises';

const SRC = 'c:/Users/win/Desktop/SITE ZIMBEL CERTO/src';

const replacements = [
  // ── Vertice.jsx ──
  {
    file: `${SRC}/pages/empreendimentos/Vertice.jsx`,
    subs: [
      [/hero-bg\.jpg/g,              'hero-bg.avif'],
      [/planta-unidade1\.png/g,      'planta-unidade1.avif'],
      [/lazer-img-3\.jpg/g,          'lazer-img-3.avif'],
      [/localizacao-ceret\.jpg/g,    'localizacao-ceret.avif'],
      [/localizacao-supermercado\.jpg/g, 'localizacao-supermercado.avif'],
      [/localizacao-hospital\.jpg/g, 'localizacao-hospital.avif'],
      [/planta-perspectiva-1\.jpg/g, 'planta-perspectiva-1.avif'],
      [/planta-perspectiva-2\.jpg/g, 'planta-perspectiva-2.avif'],
      // plantas — PNG e JPG
      [/(\/plantas\/[^'"]+)\.(png)/g, '$1.avif'],
      [/(\/plantas\/[^'"]+)\.(jpg)/g, '$1.avif'],
    ],
  },
  // ── Evolution.jsx ──
  {
    file: `${SRC}/pages/empreendimentos/Evolution.jsx`,
    subs: [
      [/localizacao-foto-1\.jpg/g, 'localizacao-foto-1.avif'],
      [/localizacao-foto-2\.jpg/g, 'localizacao-foto-2.avif'],
      [/localizacao-foto-3\.jpg/g, 'localizacao-foto-3.avif'],
    ],
  },
  // ── Sobre.jsx ──
  {
    file: `${SRC}/components/Sobre.jsx`,
    subs: [
      [/\/img\/IMG_4622\.JPG\.jpeg/g, '/img/sobre-foto.avif'],
    ],
  },
];

for (const { file, subs } of replacements) {
  let content = await readFile(file, 'utf8');
  let changed = 0;
  for (const [from, to] of subs) {
    const next = content.replace(from, to);
    if (next !== content) { changed++; content = next; }
  }
  await writeFile(file, content, 'utf8');
  console.log(`✓ ${file.split('/').pop()} — ${changed} substituições`);
}

console.log('\nReferências atualizadas.');
