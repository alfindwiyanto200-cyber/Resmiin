import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Pemasaran Digital & Growth – Resmiin',
  description: 'Tingkatkan omzet bisnis Anda dengan layanan Digital Marketing terpadu. Jasa SEO, Google & Meta Ads, Social Media, Landing Page, dan Analytics.',
};

export default function PemasaranDigitalPage() {
  return (
    <ServiceDetailView
      badge="📈 GROWTH & PEMASARAN"
      title="Digital Marketing"
      checklist={[
        'Optimasi SEO Website (Target Halaman Pertama Google)',
        'Setup & Optimasi Google Ads & Meta Ads (FB & IG)',
        'Pengelolaan Content Marketing & Social Media Manajemen',
        'Landing Page Profesional dengan Konversi Tinggi',
        'Analisis Data & Tracking Dashboard Analytics Terintegrasi',
      ]}
      price="Rp 5.000.000"
      oldPrice="Rp 7.500.000"
      ctaText="Mulai Pemasaran Digital"
      docTitle="Strategi Marketing"
      docIco="📈"
      duration="2–4 minggu (Setup & Launch Campaign)"
      features={[
        { ico: '🔍', title: 'SEO & Landing Page Kinerja Tinggi', desc: 'Meningkatkan lalu lintas organik website Anda di mesin pencari Google dan membuat landing page berkecepatan tinggi yang dioptimalkan untuk penjualan.' },
        { ico: '📣', title: 'Google Ads & Meta Ads Tertarget', desc: 'Mengelola kampanye iklan berbayar (PPC) di Google Search/Display serta Instagram, Facebook, dan TikTok Ads untuk menjangkau pembeli potensial secara langsung.' },
        { ico: '📊', title: 'Content Marketing & Analytics', desc: 'Pembuatan konten media sosial kreatif yang relevan disertai pemasangan tracking pixel, Google Analytics, dan laporan performa berkala.' },
      ]}
      steps={[
        { title: 'Riset Audiens & Kompetitor', desc: 'Menganalisis kata kunci berkonversi tinggi, tren pencarian kompetitor, dan menentukan profil target pelanggan bisnis Anda.' },
        { title: 'Pembuatan Landing Page & Tracking', desc: 'Mendesain landing page penawaran produk/jasa dan memasang tracking pixel serta kode analitik untuk mengukur data konversi.' },
        { title: 'Peluncuran Campaign & Konten', desc: 'Menulis copywriting iklan yang menarik, mendesain aset visual, menyetel parameter target demografis, dan meluncurkan kampanye iklan.' },
        { title: 'Optimasi Harian & Laporan Bulanan', desc: 'Memantau biaya per klik (CPC), rasio konversi (ROAS), dan mengirimkan laporan analitik bulanan yang transparan kepada Anda.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'layanan/merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000' },
        { slug: 'layanan/sop', name: 'Standarisasi SOP', ico: '⚙️', bg: '#F3F4F6', price: 'Rp 6.000.000' },
      ]}
      waMessage="Halo Resmiin, saya tertarik untuk menggunakan layanan Digital Marketing untuk meningkatkan pemasaran bisnis saya."
    />
  );
}
