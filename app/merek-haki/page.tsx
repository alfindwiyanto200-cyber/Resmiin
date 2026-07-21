import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendaftaran Merek & HAKI Rp 3.500.000 – Resmiin',
  description: 'Layanan Pendaftaran Merek & HAKI Promo Rp 3.500.000 mencakup Bukti Pendaftaran HAKI Resmi dari DJKI Kemenkumham.',
};

export default function MerekHakiPage() {
  return (
    <ServiceDetailView
      badge="🔥 HARGA PROMO HAKI"
      title="Merek & HAKI"
      checklist={[
        'Bukti Pendaftaran HAKI Resmi',
      ]}
      price="Rp 3.500.000"
      oldPrice="Rp 4.500.000"
      ctaText="Daftarkan Merek (Promo)"
      docTitle="Merek & HAKI"
      docIco="🛡️"
      duration="1–2 hari kerja (Bukti Terbit)"
      features={[
        { ico: '📝', title: 'Bukti Pendaftaran HAKI Resmi', desc: 'Tanda Terima / Bukti Pendaftaran Merek resmi yang diterbitkan oleh DJKI Kemenkumham RI.' },
        { ico: '🔍', title: 'Penelusuran Ketersediaan Merek', desc: 'Pengecekan mendalam atas potensi kesamaan nama & logo dengan merek lain di DJKI.' },
        { ico: '🛡️', title: 'Perlindungan Hukum Brand', desc: 'Perlindungan hak eksklusif penggunaan nama bisnis dan logo Anda di seluruh Indonesia.' },
      ]}
      steps={[
        { title: 'Penelusuran Nama & Logo Merek', desc: 'Tim melakukan pengecekan di pangkalan data DJKI Kemenkumham.' },
        { title: 'Penyusunan Berkas & Kelas Barang', desc: 'Menentukan kelas barang/jasa yang sesuai dengan produk atau layanan Anda.' },
        { title: 'Pengajuan Resmi ke DJKI', desc: 'Pendaftaran akun dan submission berkas pendaftaran merek secara online.' },
        { title: 'Penerbitan Bukti Pendaftaran', desc: 'Penyerahan Bukti Pendaftaran HAKI Resmi dalam 1-2 hari kerja.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
        { slug: 'pendirian-cv', name: 'Pendirian CV', ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000 (Promo)' },
        { slug: 'pt-perorangan', name: 'PT Perorangan', ico: '👤', bg: '#EBF5FF', price: 'Rp 1.000.000' },
      ]}
      waMessage="Halo Resmiin, saya mau ambil Promo Pendaftaran Merek HAKI Rp 3.500.000"
    />
  );
}
