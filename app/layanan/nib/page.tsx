import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan NIB (Nomor Induk Berusaha) – Resmiin',
  description: 'Urus NIB Perusahaan Anda dengan cepat melalui platform OSS RBA terintegrasi. Legalitas instan, klasifikasi KBLI akurat, dan biaya transparan.',
};

export default function NibPage() {
  return (
    <ServiceDetailView
      badge="📄 IDENTITAS BERUSAHA RESMI"
      title="Nomor Induk Berusaha (NIB)"
      checklist={[
        'Dokumen NIB OSS RBA Terbit Resmi',
        'Penentuan Kode KBLI 2020 yang Akurat',
        'Username & Password Akun OSS Perusahaan',
        'Hak Akses Ekspor-Impor Dasar (API-U/API-P)',
      ]}
      price="Rp 1.000.000"
      oldPrice="Rp 1.500.000"
      ctaText="Ajukan Pembuatan NIB"
      docTitle="Dokumen NIB OSS"
      docIco="📄"
      duration="1–2 hari kerja (Terbit Instan)"
      features={[
        { ico: '🔑', title: 'Akses OSS Terintegrasi', desc: 'Pembuatan akun resmi di OSS RBA dengan hak akses penuh diserahkan kembali kepada Anda.' },
        { ico: '🏷️', title: 'Klasifikasi KBLI Tepat', desc: 'Konsultasi kode KBLI yang cocok agar bisnis Anda beroperasi sesuai lingkup hukum yang berlaku.' },
        { ico: '⚙️', title: 'Satu Nomor untuk Semua', desc: 'NIB berlaku juga sebagai Tanda Daftar Perusahaan (TDP), Angka Pengenal Importir (API), dan Akses Kepabeanan.' },
      ]}
      steps={[
        { title: 'Persiapan Data Pengurus', desc: 'Mengumpulkan KTP, NPWP, dan Akta Perusahaan (bila ada) sebagai syarat awal.' },
        { title: 'Pemetaan Lokasi & KBLI', desc: 'Menganalisis kode KBLI yang sesuai serta koordinat lokasi usaha untuk izin tata ruang.' },
        { title: 'Input Sistem OSS RBA', desc: 'Mengisi formulir modal disetor, jumlah karyawan, dan rencana kegiatan usaha di portal OSS.' },
        { title: 'Penerbitan Dokumen NIB', desc: 'NIB diterbitkan secara elektronik dan file asli PDF resmi dikirimkan langsung kepada Anda.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'layanan/sertifikat-standar', name: 'Sertifikat Standar', ico: '📜', bg: '#FEF3C7', price: 'Rp 2.500.000' },
        { slug: 'layanan/perizinan-usaha', name: 'Perizinan Usaha', ico: '🔑', bg: '#FFF1F2', price: 'Hubungi Kami' },
      ]}
      waMessage="Halo Resmiin, saya mau mengurus NIB untuk usaha saya."
    />
  );
}
