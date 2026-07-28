import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Sertifikasi SNI (Standar Nasional Indonesia) – Resmiin',
  description: 'Pengurusan Sertifikat SPPT SNI Resmi untuk produk Anda. Jaminan mutu nasional, pengujian lab terakreditasi, dan pendampingan LSPro lengkap.',
};

export default function SniPage() {
  return (
    <ServiceDetailView
      badge="🛡️ SERTIFIKASI MUTU NASIONAL"
      title="Sertifikasi SNI"
      checklist={[
        'Sertifikat SPPT SNI dari LSPro Terakreditasi',
        'Pengujian Laboratorium terakreditasi KAN',
        'Pendampingan Audit Sistem Manajemen Mutu (SMM)',
        'Registrasi Nomor Pendaftaran Barang (NPB)',
      ]}
      price="Rp 25.000.000"
      oldPrice="Rp 30.000.000"
      ctaText="Ajukan Sertifikasi SNI"
      docTitle="Sertifikat SPPT SNI"
      docIco="🛡️"
      duration="2–3 bulan (Tergantung Durasi Uji Lab)"
      features={[
        { ico: '🔬', title: 'Pengujian Laboratorium KAN', desc: 'Melakukan pengujian kesesuaian fisik, kimia, dan mekanis sampel produk di laboratorium penguji terakreditasi.' },
        { ico: '🏭', title: 'Audit Pabrik & LSPro', desc: 'Pendampingan penuh audit proses produksi di pabrik oleh Lembaga Sertifikasi Produk (LSPro) resmi.' },
        { ico: '🏷️', title: 'Tanda SNI & NPB', desc: 'Penerbitan Nomor Pendaftaran Barang (NPB) dan hak penempelan tanda SNI di kemasan produk.' },
      ]}
      steps={[
        { title: 'Identifikasi Skema & Parameter SNI', desc: 'Menentukan apakah SNI produk wajib/sukarela dan menganalisis parameter pengujian.' },
        { title: 'Persiapan Dokumen & SMM Pabrik', desc: 'Menyusun manual mutu pabrik dan melengkapi berkas administrasi importir/produsen.' },
        { title: 'Audit LSPro & Sampling Produk', desc: 'Petugas LSPro melakukan audit lapangan ke fasilitas produksi dan mengambil sampel acak.' },
        { title: 'Pengujian Laboratorium & Terbit SNI', desc: 'Menunggu hasil pengujian laboratorium dan sidang panel LSPro hingga SPPT SNI diterbitkan.' },
      ]}
      related={[
        { slug: 'layanan/sertifikasi-iso', name: 'Sertifikasi ISO', ico: '🏅', bg: '#FDF2F8', price: 'Rp 12.500.000' },
        { slug: 'layanan/merek-haki', name: 'Merek & HAKI', ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000' },
        { slug: 'layanan/sop', name: 'Standarisasi SOP', ico: '⚙️', bg: '#F3F4F6', price: 'Rp 6.000.000' },
      ]}
      waMessage="Halo Resmiin, saya ingin menanyakan pengurusan Sertifikasi SNI untuk produk saya."
    />
  );
}
