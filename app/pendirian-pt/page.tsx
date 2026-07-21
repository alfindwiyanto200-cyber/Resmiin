import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendirian PT Promo Rp 4.500.000 – Resmiin',
  description: 'Layanan Pendirian PT Promo Rp 4.500.000 mencakup Salinan Akta Pendirian PT, SK Kemenkumham, NPWP, NIB, dan Pembukaan Rekening BCA/Mandiri.',
};

export default function PendirianPTPage() {
  return (
    <ServiceDetailView
      badge="⭐ PALING POPULER · HARGA PROMO"
      title="Pendirian PT"
      checklist={[
        'Salinan Akta Pendirian PT',
        'SK Kemenkumham',
        'NPWP Badan Perusahaan',
        'NIB (Nomor Induk Berusaha)',
        'Pembukaan Rekening BCA / Mandiri',
      ]}
      price="Rp 4.500.000"
      oldPrice="Rp 6.000.000"
      ctaText="Pesan Pendirian PT (Promo)"
      docTitle="Pendirian PT"
      docIco="🏢"
      duration="5–7 hari kerja"
      features={[
        { ico: '📜', title: 'Salinan Akta Pendirian PT', desc: 'Akta Notaris pendirian Perseroan Terbatas resmi sesuai ketentuan hukum RI.' },
        { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Surat Keputusan pengesahan badan hukum PT dari Menteri Hukum & HAM RI.' },
        { ico: '💳', title: 'NPWP Perusahaan', desc: 'Nomor Pokok Wajib Pajak Badan atas nama PT terdaftar Ditjen Pajak.' },
        { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Identitas usaha terintegrasi via sistem OSS RBA untuk kegiatan operasional.' },
        { ico: '🏦', title: 'Buka Rekening BCA / Mandiri', desc: 'Fasilitas pendampingan pembukaan rekening giro perusahaan di Bank BCA atau Mandiri.' },
      ]}
      steps={[
        { title: 'Konsultasi Data Perusahaan', desc: 'Pengecekan nama PT, penetapan modal, struktur direksi & komisaris.' },
        { title: 'Pembuatan Akta Notaris', desc: 'Pembuatan dan penandatanganan Salinan Akta Pendirian PT oleh Notaris.' },
        { title: 'Pengesahan Kemenkumham', desc: 'Penerbitan SK pengesahan badan hukum dari Kementerian Hukum & HAM.' },
        { title: 'Pengurusan NIB, NPWP & Rekening', desc: 'Penerbitan NPWP, NIB OSS RBA, dan pendampingan buka rekening BCA/Mandiri.' },
      ]}
      related={[
        { slug: 'pt-perorangan', name: 'PT Perorangan', ico: '👤', bg: '#EBF5FF', price: 'Rp 1.000.000' },
        { slug: 'pendirian-cv', name: 'Pendirian CV', ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000 (Promo)' },
        { slug: 'merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
      ]}
      waMessage="Halo Resmiin, saya mau ambil Promo Pendirian PT Rp 4.500.000"
    />
  );
}
