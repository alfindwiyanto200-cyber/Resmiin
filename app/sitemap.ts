import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://resmiin.com';

  const routes = [
    '',
    '/tentang-kami',
    '/solusi',
    '/pendirian-pt',
    '/pendirian-cv',
    '/pt-perorangan',
    '/pendirian-yayasan',
    '/pendirian-perkumpulan',
    '/merek-haki',
    '/layanan/sertifikasi-iso',
    '/layanan/sni',
    '/layanan/sop',
    '/layanan/nib',
    '/layanan/sertifikat-standar',
    '/layanan/perizinan-usaha',
    '/layanan/merek-haki',
    '/layanan/digital-marketing',
    '/layanan/virtual-office',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/layanan') ? 0.8 : 0.6,
  }));
}
