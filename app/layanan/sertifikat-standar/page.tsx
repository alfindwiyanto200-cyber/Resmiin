import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Pengurusan Sertifikat Standar OSS RBA – Resmiin',
  description: 'Pengurusan Sertifikat Standar untuk usaha dengan tingkat risiko Menengah. Kepatuhan KBLI terjamin, proses verifikasi instan & profesional.',
};

export default function SertifikatStandarPage() {
  return (
    <ServiceDetailView
      badge="📜 PERSETUJUAN STANDAR USAHA"
      title="Sertifikat Standar"
      checklist={[
        'Sertifikat Standar Disetujui/Terverifikasi OSS',
        'Dokumen Pernyataan Mandiri Kepatuhan Standar',
        'Draf Dokumen Kriteria Teknis & Sarana Usaha',
        'Pengawalan Proses Verifikasi Sektoral Kementerian',
      ]}
      price="Rp 2.500.000"
      oldPrice="Rp 3.500.000"
      ctaText="Urus Sertifikat Standar"
      docTitle="Sertifikat Standar OSS"
      docIco="📜"
      duration="5–10 hari kerja (Hingga Disetujui)"
      features={[
        { ico: '🔍', title: 'Penyelarasan Risiko KBLI', desc: 'Membantu pemenuhan standar bagi kegiatan usaha kategori risiko Menengah-Rendah & Menengah-Tinggi.' },
        { ico: '📄', title: 'Penyusunan Berkas Teknis', desc: 'Menyusun berkas dokumen persyaratan standar sarana, struktur organisasi, dan panduan mutu.' },
        { ico: '🤝', title: 'Kombinasi Izin Tata Ruang', desc: 'Memastikan KKPR (Kesesuaian Kegiatan Pemanfaatan Ruang) dan izin tata ruang terintegrasi.' },
      ]}
      steps={[
        { title: 'Verifikasi Risiko KBLI Usaha', desc: 'Mengecek tingkat risiko KBLI 2020 dan menganalisis kewajiban Sertifikat Standar.' },
        { title: 'Pengisian Pernyataan Mandiri', desc: 'Mengisi pernyataan kesanggupan pemenuhan standar di platform OSS RBA.' },
        { title: 'Penyusunan & Upload Bukti Teknis', desc: 'Mengunggah draf persyaratan sarana usaha/sistem manajemen ke dinas teknis sektoral.' },
        { title: 'Persetujuan & Penerbitan Sertifikat', desc: 'Memantau verifikasi instansi pemerintah daerah/pusat hingga status Sertifikat Standar dinyatakan disetujui.' },
      ]}
      related={[
        { slug: 'layanan/nib', name: 'NIB Elektronik', ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'layanan/sertifikasi-iso', name: 'Sertifikasi ISO', ico: '🏅', bg: '#FDF2F8', price: 'Rp 12.500.000' },
      ]}
      waMessage="Halo Resmiin, saya mau dibantu untuk pengurusan Sertifikat Standar OSS usaha saya."
    />
  );
}
