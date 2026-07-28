import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendaftaran Merek & Perlindungan HKI – Resmiin',
  description: 'Jasa Pendaftaran Merek Dagang, Hak Cipta, Paten, dan Desain Industri Resmi DJKI Kemenkumham. Lindungi nama brand dan aset intelektual bisnis Anda.',
};

export default function LayananMerekHakiPage() {
  return (
    <ServiceDetailView
      badge="🛡️ PERLINDUNGAN HKI RESMI"
      title="Perlindungan Merek & HKI"
      checklist={[
        'Bukti Pendaftaran Merek Dagang & Jasa Kemenkumham',
        'Pencatatan Hak Cipta Karya Kreatif & Software',
        'Pendaftaran Paten Invensi & Formula Teknologi',
        'Registrasi Desain Industri Kemasan & Produk',
      ]}
      price="Rp 3.500.000"
      oldPrice="Rp 4.500.000"
      ctaText="Daftarkan Merek / HKI"
      docTitle="Bukti Pendaftaran HKI"
      docIco="🛡️"
      duration="1–2 hari kerja (Bukti Terbit)"
      features={[
        { ico: '📝', title: 'Pendaftaran Merek & Hak Cipta', desc: 'Melindungi nama brand, logo, slogan, serta karya tulisan, musik, seni, dan perangkat lunak dari pembajakan.' },
        { ico: '🧪', title: 'Paten & Desain Industri', desc: 'Perlindungan eksklusif untuk invensi teknologi baru, formula produk, serta bentuk visual estetika kemasan luar.' },
        { ico: '💎', title: 'Manfaat Kepemilikan HKI', desc: 'Menjamin kepastian hukum, mencegah plagiarisme kompetitor, dan meningkatkan brand value sebagai aset tidak berwujud.' },
      ]}
      steps={[
        { title: 'Penelusuran Ketersediaan Nama', desc: 'Pengecekan kesamaan nama, logo, atau invensi di pangkalan data DJKI Kemenkumham dan analisis persyaratan dokumen (KTP, TTD Digital, File Logo).' },
        { title: 'Klasifikasi Kelas Barang/Jasa', desc: 'Menentukan kelas perlindungan yang tepat untuk produk/jasa Anda berdasarkan sistem klasifikasi internasional.' },
        { title: 'Pembayaran PNBP & Submit Online', desc: 'Melakukan pembayaran biaya PNBP resmi ke kas negara dan mengunggah dokumen pendaftaran ke portal DJKI.' },
        { title: 'Penerbitan Bukti Pendaftaran Resmi', desc: 'Penyerahan Bukti Pendaftaran Resmi (Tanda Terima) dalam 1-2 hari kerja untuk langsung melindungi nama brand Anda selama masa publikasi.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'pendirian-cv', name: 'Pendirian CV', ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000' },
        { slug: 'layanan/nib', name: 'NIB OSS RBA', ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
      ]}
      waMessage="Halo Resmiin, saya mau mendaftarkan Merek Dagang / HKI untuk bisnis saya."
    />
  );
}
