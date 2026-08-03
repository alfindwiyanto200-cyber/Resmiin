import { prisma } from './db';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featuredImage: string | null;
  category?: { name: string; slug: string } | null;
  author?: { name: string } | null;
  publishedAt: Date | null;
  createdAt: Date;
  seoTitle: string | null;
  seoDescription: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  readTime?: string;
  schemaMarkup?: string | null;
  canonicalUrl?: string | null;
  metaRobots?: string | null;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
  twitterImage?: string | null;
}

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Hemat 3+ Hari: Cara Terbaru Mendirikan PT Secara Online Tanpa Ribet',
    slug: 'cara-terbaru-mendirikan-pt-online',
    publishedAt: new Date('2025-11-05'),
    createdAt: new Date('2025-11-05'),
    category: { name: 'LEGALITAS BISNIS', slug: 'legalitas-bisnis' },
    author: { name: 'Tim Hukum Resmiin' },
    readTime: '3min baca',
    excerpt:
      'Proses pendirian PT kini jauh lebih ringkas berkat sistem terintegrasi. Pelajari syarat terbaru, estimasi biaya, dan dokumen wajib agar bisnis Anda langsung legal.',
    featuredImage: '/assets/blog-1.png',
    seoTitle: null,
    seoDescription: null,
    content: `
      <p>Mendirikan Perseroan Terbatas (PT) dulu diidentikkan dengan proses birokrasi yang memakan waktu berminggu-minggu, penumpukan berkas fisik, dan ketidakpastian status hukum. Namun, berkat digitalisasi layanan di Kementerian Hukum dan HAM serta integrasi Online Single Submission (OSS RBA), proses pendirian PT kini <strong>dapat diselesaikan jauh lebih cepat hanya dalam 3 hingga 5 hari kerja.</strong></p>
      <h2>Keuntungan PT Berbadan Hukum</h2>
      <p>Pemisahan harta kekayaan pribadi dengan badan usaha memberikan perlindungan aset yang maksimal bagi para pendiri dan investor.</p>
    `,
  },
  {
    id: '2',
    title: 'Syarat Buka Rekening Giro BCA & Mandiri untuk PT Baru di Tahun Ini',
    slug: 'syarat-buka-rekening-giro-bca-mandiri-pt',
    publishedAt: new Date('2025-06-10'),
    createdAt: new Date('2025-06-10'),
    category: { name: 'PERBANKAN BISNIS', slug: 'perbankan-bisnis' },
    author: { name: 'Tim Hukum Resmiin' },
    readTime: '4min baca',
    excerpt:
      'Memiliki rekening atas nama perusahaan sangat krusial untuk profesionalisme. Simak panduan langkah dan berkas legalitas yang wajib disiapkan sebelum ke bank.',
    featuredImage: '/assets/blog-2.png',
    seoTitle: null,
    seoDescription: null,
    content: null,
  },
  {
    id: '3',
    title: 'Mengapa Mendaftarkan Merek HAKI Harus Dilakukan Sebelum Launching Produk?',
    slug: 'mengapa-mendaftarkan-merek-haki-harus-awal',
    publishedAt: new Date('2025-06-03'),
    createdAt: new Date('2025-06-03'),
    category: { name: 'HAKI & BRAND', slug: 'haki-brand' },
    author: { name: 'Tim Hukum Resmiin' },
    readTime: '3min baca',
    excerpt:
      'Banyak pebisnis menyesal karena nama brand diserobot orang lain. Ketahui pentingnya memiliki Bukti Pendaftaran HAKI sejak hari pertama bisnis Anda berdiri.',
    featuredImage: '/assets/blog-3.png',
    seoTitle: null,
    seoDescription: null,
    content: null,
  },
];

async function getArticlesFromDB(): Promise<Article[]> {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      include: {
        category: { select: { name: true, slug: true } },
        author: { select: { name: true } },
      },
    });
    return articles as Article[];
  } catch {
    return [];
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const articles = await getArticlesFromDB();
  return articles.length > 0 ? articles : FALLBACK_ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const article = await prisma.article.findUnique({
      where: { slug },
      include: {
        category: { select: { name: true, slug: true } },
        author: { select: { name: true } },
      },
    });
    return (article as Article) ?? null;
  } catch {
    return FALLBACK_ARTICLES.find((a) => a.slug === slug) ?? null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true },
    });
    const dbSlugs = articles.map((a) => a.slug);
    const fallbackSlugs = FALLBACK_ARTICLES.map((a) => a.slug);
    return Array.from(new Set([...dbSlugs, ...fallbackSlugs]));
  } catch {
    return FALLBACK_ARTICLES.map((a) => a.slug);
  }
}

export function getImageUrl(url: string | null | undefined): string {
  if (!url) return '/assets/blog-1.png';
  return url;
}
