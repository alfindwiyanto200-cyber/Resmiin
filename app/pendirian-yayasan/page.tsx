import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendirian Yayasan Promo Rp 3.000.000 – Resmiin',
  description: 'Layanan Pendirian Yayasan Promo Rp 3.000.000 mencakup Salinan Pendirian Yayasan dan SK Kemenkumham.',
};

export default function PendirianYayasanPage() {
  return (
    <ServiceDetailView
      badge="🔥 HARGA PROMO ORGANISASI"
      title="Pendirian Yayasan"
      checklist={[
        'Salinan Pendirian Yayasan',
        'SK Kemenkumham',
      ]}
      price="Rp 3.000.000"
      oldPrice="Rp 5.000.000"
      ctaText="Pesan Pendirian Yayasan (Promo)"
      docTitle="Pendirian Yayasan"
      docIco="🏛️"
      duration="7–10 hari kerja"
      features={[
        { ico: '📜', title: 'Salinan Pendirian Yayasan', desc: 'Akta Notaris pendirian yayasan resmi sesuai Undang-Undang Yayasan No. 16 Tahun 2001.' },
        { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Surat Keputusan pengesahan badan hukum yayasan dari Kementerian Hukum & HAM RI.' },
      ]}
      steps={[
        { title: 'Konsultasi Struktur Yayasan', desc: 'Penetapan nama yayasan, Pembina, Pengurus, Pengawas, dan Anggaran Dasar.' },
        { title: 'Pembuatan Akta Pendirian', desc: 'Penerbitan Salinan Pendirian Yayasan di hadapan Notaris berlisensi.' },
        { title: 'Pengesahan Kemenkumham', desc: 'Penerbitan SK pengesahan badan hukum yayasan dari Kemenkumham RI.' },
      ]}
      related={[
        { slug: 'pendirian-perkumpulan', name: 'Pendirian Perkumpulan', ico: '🤝', bg: '#F5F3FF', price: 'Rp 3.000.000 (Promo)' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
        { slug: 'merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
      ]}
      waMessage="Halo Resmiin, saya mau ambil Promo Pendirian Yayasan Rp 3.000.000"
    />
  );
}
