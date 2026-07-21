import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendirian Perkumpulan Promo Rp 3.000.000 – Resmiin',
  description: 'Layanan Pendirian Perkumpulan Promo Rp 3.000.000 mencakup Salinan Akta Perkumpulan dan SK Kemenkumham.',
};

export default function PendirianPerkumpulanPage() {
  return (
    <ServiceDetailView
      badge="🔥 HARGA PROMO PERKUMPULAN"
      title="Pendirian Perkumpulan"
      checklist={[
        'Salinan Akta Perkumpulan',
        'SK Kemenkumham',
      ]}
      price="Rp 3.000.000"
      oldPrice="Rp 5.000.000"
      ctaText="Pesan Pendirian Perkumpulan (Promo)"
      docTitle="Pendirian Perkumpulan"
      docIco="🤝"
      duration="7–10 hari kerja"
      features={[
        { ico: '📜', title: 'Salinan Akta Perkumpulan', desc: 'Akta Notaris pendirian perkumpulan/asosiasi resmi yang disahkan Notaris berlisensi.' },
        { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Surat Keputusan pengesahan badan hukum perkumpulan dari Kementerian Hukum & HAM RI.' },
      ]}
      steps={[
        { title: 'Konsultasi Nama & Pengurus', desc: 'Menentukan nama perkumpulan, Anggaran Dasar, dan susunan pengurus serta anggota.' },
        { title: 'Pembuatan Akta Notaris', desc: 'Penerbitan Salinan Akta Perkumpulan oleh Notaris berlisensi.' },
        { title: 'Pengesahan Kemenkumham', desc: 'Pengajuan dan penerbitan SK pengesahan badan hukum perkumpulan di Kemenkumham RI.' },
      ]}
      related={[
        { slug: 'pendirian-yayasan', name: 'Pendirian Yayasan', ico: '🏛️', bg: '#FFF7ED', price: 'Rp 3.000.000 (Promo)' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
        { slug: 'merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
      ]}
      waMessage="Halo Resmiin, saya mau ambil Promo Pendirian Perkumpulan Rp 3.000.000"
    />
  );
}
