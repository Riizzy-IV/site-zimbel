import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import sharp from 'sharp';
import { join } from 'path';
import { tmpdir } from 'os';

const BASE = 'c:/Users/win/Desktop/SITE ZIMBEL CERTO/public';

const downloads = [
  // ── Depoimentos (carrossel Sobre) ──
  { id: '1r1QWgEjCn3Bop3CkVq5hNX1fjUyWapEz', out: `${BASE}/sobre/obra-drive-1.avif` },
  { id: '1pvN8fORE29w_k0KJ6qzpVdi_ExTsisgA', out: `${BASE}/sobre/obra-drive-2.avif` },
  { id: '1wS65j6JtDPcfs0vRadA953bFFk1ujZ89', out: `${BASE}/sobre/obra-drive-3.avif` },
  { id: '1cyXD5UVsZeCvIBkmbTuKs3_rmv7hmWeo', out: `${BASE}/sobre/obra-drive-4.avif` },
  { id: '1QeGWgcH6rydzj_XOlJOi-sddPBbw9zZb', out: `${BASE}/sobre/obra-drive-5.avif` },
  { id: '1PS7L-z7dNUxSkpWxn8pzPuPCdHWmtsiW', out: `${BASE}/sobre/obra-drive-6.avif` },
  // ── EvolucaoObra Evolution — Jul/2025 ──
  { id: '1XzaiAYQik0yJg3CXg5MmFJusAvNvE-sS', out: `${BASE}/empreendimentos/evolution/obra/obra-jul-1.avif` },
  { id: '1sRPLJXGNief8xGPYtqTWftTa37q_50Gt', out: `${BASE}/empreendimentos/evolution/obra/obra-jul-2.avif` },
  { id: '1mT-eMrCeXymwIPsAvq3oWT8E1oOt2q39', out: `${BASE}/empreendimentos/evolution/obra/obra-jul-3.avif` },
  // ── EvolucaoObra Evolution — Mar/2026 ──
  { id: '1DnRlqT_vWDamITiZ5kD_nBirVOrwVQvO', out: `${BASE}/empreendimentos/evolution/obra/obra-mar-1.avif` },
  { id: '1dodd1fJuy5uk96KGf1Mf2B27oFaxP3eA', out: `${BASE}/empreendimentos/evolution/obra/obra-mar-2.avif` },
  { id: '1z0nAbB-_CpUuBugBZr1pxr93TcHiLhW6', out: `${BASE}/empreendimentos/evolution/obra/obra-mar-3.avif` },
  // ── EvolucaoObra Evolution — Mai/2026 ──
  { id: '1r1QWgEjCn3Bop3CkVq5hNX1fjUyWapEz', out: `${BASE}/empreendimentos/evolution/obra/obra-mai-1.avif` },
  { id: '17pRsqqXAx3JCPDgqVUxNSLiGvlKgYGOM', out: `${BASE}/empreendimentos/evolution/obra/obra-mai-2.avif` },
  { id: '1vej4L32epBrnSgyr8gapcB9Zt3hxcJip',  out: `${BASE}/empreendimentos/evolution/obra/obra-mai-3.avif` },
  // ── EvolucaoObra Vértice — Mai/2026 ──
  { id: '1SPueACIxXUzJ54VyTq-jnZblmbG5S5mU', out: `${BASE}/empreendimentos/vertice/obra/obra-1.avif` },
  { id: '1tOkYVbHCO5SPc7wwcJ_yBfygEeKHdIkE', out: `${BASE}/empreendimentos/vertice/obra/obra-2.avif` },
  { id: '1m0zaNTVR1uzYClSMfqWkctiFStY-STCj', out: `${BASE}/empreendimentos/vertice/obra/obra-3.avif` },
  { id: '150xBO04L70vsySanckM3OqQSjeGtpSWU',  out: `${BASE}/empreendimentos/vertice/obra/obra-4.avif` },
  { id: '1hOAHMQ4VGVTiwx9ZenMbM0O5mDD8O4rZ', out: `${BASE}/empreendimentos/vertice/obra/obra-5.avif` },
  { id: '1JiH6Lb7VYowvgfg1NlWgpA9LTDNQDH1b', out: `${BASE}/empreendimentos/vertice/obra/obra-6.avif` },
];

// Cria pastas necessárias
const dirs = [...new Set(downloads.map(d => d.out.substring(0, d.out.lastIndexOf('/'))))];
dirs.forEach(d => mkdirSync(d, { recursive: true }));

async function downloadAndConvert({ id, out }) {
  const url = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
  const tmp = join(tmpdir(), `drive-${id}.jpg`);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Salva temporariamente
    await pipeline(res.body, createWriteStream(tmp));

    // Converte para AVIF
    const info = await sharp(tmp).avif({ quality: 72, effort: 4 }).toFile(out);
    const { statSync } = await import('fs');
    const srcSize = statSync(tmp).size;
    console.log(`✓ ${out.split('/').pop()}  ${(srcSize/1024/1024).toFixed(1)}MB → ${(info.size/1024).toFixed(0)}KB`);

    // Remove temp
    await import('fs').then(fs => fs.unlinkSync(tmp));
  } catch (e) {
    console.error(`✗ ${id}: ${e.message}`);
  }
}

// Processa em lotes de 4 paralelos
for (let i = 0; i < downloads.length; i += 4) {
  await Promise.all(downloads.slice(i, i + 4).map(downloadAndConvert));
}

console.log('\nConcluído.');
