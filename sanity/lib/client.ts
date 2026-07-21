import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  readTime: string;
  excerpt: string;
  coverImage?: string;
  bodyHtml?: string;
}

export const FALLBACK_ARTICLES: Article[] = [
  {
    _id: '1',
    title: 'Hemat 3+ Hari: Cara Terbaru Mendirikan PT Secara Online Tanpa Ribet',
    slug: { current: 'cara-terbaru-mendirikan-pt-online' },
    publishedAt: '2025-11-05',
    category: 'LEGALITAS BISNIS',
    readTime: '3min baca',
    excerpt: 'Proses pendirian PT kini jauh lebih ringkas berkat sistem terintegrasi. Pelajari syarat terbaru, estimasi biaya, dan dokumen wajib agar bisnis Anda langsung legal.',
    coverImage: '/assets/blog-1.png',
    bodyHtml: `
      <p>Mendirikan Perseroan Terbatas (PT) dulu diidentikkan dengan proses birokrasi yang memakan waktu berminggu-minggu. Berkat digitalisasi Kemenkumham & OSS RBA, proses kini pangkas menjadi 3–5 hari kerja.</p>
      <h2>Keuntungan PT Berbadan Hukum</h2>
      <p>Pemisahan harta kekayaan pribadi dengan badan usaha memberikan perlindungan aset yang maksimal bagi para pendiri dan investor.</p>
    `
  },
  {
    _id: '2',
    title: 'Syarat Buka Rekening Giro BCA & Mandiri untuk PT Baru di Tahun Ini',
    slug: { current: 'syarat-buka-rekening-giro-bca-mandiri-pt' },
    publishedAt: '2025-06-10',
    category: 'PERBANKAN BISNIS',
    readTime: '4min baca',
    excerpt: 'Memiliki rekening atas nama perusahaan sangat krusial untuk profesionalisme. Simak panduan langkah dan berkas legalitas yang wajib disiapkan sebelum ke bank.',
    coverImage: '/assets/blog-2.png',
  },
  {
    _id: '3',
    title: 'Mengapa Mendaftarkan Merek HAKI Harus Dilakukan Sebelum Launching Produk?',
    slug: { current: 'mengapa-mendaftarkan-merek-haki-harus-awal' },
    publishedAt: '2025-06-03',
    category: 'HAKI & BRAND',
    readTime: '3min baca',
    excerpt: 'Banyak pebisnis menyesal karena nama brand diserobot orang lain. Ketahui pentingnya memiliki Bukti Pendaftaran HAKI sejak hari pertama bisnis Anda berdiri.',
    coverImage: '/assets/blog-3.png',
  },
];
