import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PT Perorangan Rp 1.000.000 – Resmiin',
  description: 'Layanan Pendirian PT Perorangan resmi mencakup SK Kemenkumham, NPWP Badan Perusahaan, dan NIB OSS RBA.',
};

export default function PTPeroranganPage() {
  return (
    <ServiceDetailView
      badge="Layanan Terjangkau"
      title="PT Perorangan"
      checklist={[
        'SK Kemenkumham',
        'NPWP Badan Perusahaan',
        'NIB (Nomor Induk Berusaha)',
      ]}
      price="Rp 1.000.000"
      ctaText="Pesan PT Perorangan Sekarang"
      docTitle="PT Perorangan"
      docIco="👤"
      duration="3–5 hari kerja"
      features={[
        { ico: '📜', title: 'SK Kemenkumham', desc: 'Pengesahan resmi pendirian PT Perorangan dari Kementerian Hukum dan HAM RI.' },
        { ico: '💳', title: 'NPWP Perusahaan', desc: 'Nomor Pokok Wajib Pajak Badan atas nama PT Perorangan terdaftar Ditjen Pajak.' },
        { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Izin usaha resmi terintegrasi via sistem OSS RBA yang siap digunakan operasional.' },
      ]}
      steps={[
        { title: 'Konsultasi & Pengumpulan Data', desc: 'Kirimkan data KTP & NPWP pendiri tunggal serta nama PT Perorangan yang diinginkan.' },
        { title: 'Pernyataan Pendirian', desc: 'Penyusunan format Pernyataan Pendirian PT Perorangan sesuai standar Kemenkumham.' },
        { title: 'Penerbitan SK Kemenkumham', desc: 'Proses registrasi dan pengesahan SK Badan Hukum dari Kemenkumham RI.' },
        { title: 'Pengurusan NPWP & NIB', desc: 'Penerbitan NPWP Badan dan NIB OSS RBA untuk kelengkapan operasional usaha.' },
      ]}
      related={[
        { slug: 'pendirian-cv', name: 'Pendirian CV', ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000 (Promo)' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
        { slug: 'merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
      ]}
      waMessage="Halo Resmiin, saya mau pesan paket PT Perorangan Rp 1.000.000"
    />
  );
}
