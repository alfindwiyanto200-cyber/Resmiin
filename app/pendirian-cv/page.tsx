import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendirian CV Promo Rp 3.000.000 – Resmiin',
  description: 'Layanan Pendirian CV Promo Rp 3.000.000 mencakup Salinan Akta Pendirian, SK Kemenkumham, NPWP, NIB, dan Buka Rekening BCA/Mandiri.',
};

export default function PendirianCVPage() {
  return (
    <ServiceDetailView
      badge="🔥 HARGA PROMO HEMAT RP 1.500.000"
      title="Pendirian CV"
      checklist={[
        'Salinan Akta Pendirian CV',
        'SK Kemenkumham',
        'NPWP Badan Perusahaan',
        'NIB (Nomor Induk Berusaha)',
        'Pembukaan Rekening BCA / Mandiri',
      ]}
      price="Rp 3.000.000"
      oldPrice="Rp 4.500.000"
      ctaText="Pesan Pendirian CV (Promo)"
      docTitle="Pendirian CV"
      docIco="📋"
      duration="3–5 hari kerja"
      features={[
        { ico: '📜', title: 'Salinan Akta Pendirian CV', desc: 'Akta notaris otentik pendirian CV resmi yang disahkan Notaris berlisensi.' },
        { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Surat Keputusan pendaftaran dan pengesahan CV di AHU Kemenkumham RI.' },
        { ico: '💳', title: 'NPWP Perusahaan', desc: 'Nomor Pokok Wajib Pajak Badan CV resmi dari Direktorat Jenderal Pajak.' },
        { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Identitas usaha terintegrasi via sistem OSS RBA untuk kegiatan operasional.' },
        { ico: '🏦', title: 'Buka Rekening BCA / Mandiri', desc: 'Pendampingan prioritas pembukaan rekening giro perusahaan di Bank BCA atau Mandiri.' },
      ]}
      steps={[
        { title: 'Konsultasi & Pengisian Form', desc: 'Diskusikan nama CV, bidang usaha (KBLI), dan data persero aktif/komanditer.' },
        { title: 'Pembuatan Akta Notaris', desc: 'Penandatanganan dan penerbitan Salinan Akta Pendirian CV di hadapan Notaris.' },
        { title: 'Pengesahan Kemenkumham', desc: 'Pendaftaran CV ke AHU Online Kemenkumham RI untuk legalitas badan usaha.' },
        { title: 'Pengurusan NIB, NPWP & Rekening', desc: 'Penerbitan NPWP, NIB OSS, dan bantuan buka rekening di BCA / Mandiri.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
        { slug: 'pt-perorangan', name: 'PT Perorangan', ico: '👤', bg: '#EBF5FF', price: 'Rp 1.000.000' },
        { slug: 'merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
      ]}
      waMessage="Halo Resmiin, saya mau ambil Promo Pendirian CV Rp 3.000.000"
    />
  );
}
