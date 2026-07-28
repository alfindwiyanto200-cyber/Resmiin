import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Pengurusan Perizinan Usaha Lengkap & Sektoral – Resmiin',
  description: 'Pengurusan izin usaha khusus, izin sektoral (PB-UMKU), tata ruang (KKPR), dan perizinan lingkungan hidup (SPPL / UKL-UPL) terpercaya.',
};

export default function PerizinanUsahaPage() {
  return (
    <ServiceDetailView
      badge="🔑 IZIN SEKTORAL & OPERASIONAL"
      title="Perizinan Usaha"
      checklist={[
        'Konfirmasi KKPR (Tata Ruang / Izin Lokasi)',
        'Persetujuan Lingkungan (SPPL / UKL-UPL)',
        'Perizinan Menunjang Kegiatan Usaha (PB-UMKU)',
        'Izin Khusus Sektoral Kementerian Teknis',
      ]}
      price="Hubungi Kami"
      oldPrice={null}
      ctaText="Hubungi Konsultan Kami"
      docTitle="Perizinan Usaha Khusus"
      docIco="🔑"
      duration="14–30 hari kerja (Sesuai Tingkat Kompleksitas)"
      features={[
        { ico: '🗺️', title: 'Izin Tata Ruang (KKPR)', desc: 'Pengecekan kesesuaian zonasi RDTR daerah dan pengurusan KKPR otomatis/darat di platform OSS.' },
        { ico: '🍀', title: 'Persetujuan Lingkungan', desc: 'Pembuatan dokumen lingkungan SPPL atau UKL-UPL sesuai dengan jenis industri dan skala dampak operasional.' },
        { ico: '🏢', title: 'PB-UMKU & Izin Sektoral', desc: 'Membantu pengurusan izin edar, sertifikat produksi, izin impor/ekspor, dan izin komersial sektoral lainnya.' },
      ]}
      steps={[
        { title: 'Konsultasi RDTR & Zonasi', desc: 'Menganalisis peruntukan ruang lokasi kantor/pabrik sesuai rencana tata ruang daerah.' },
        { title: 'Pengajuan KKPR Elektronik', desc: 'Mengajukan KKPR di OSS dan mengawal pembayaran PNBP (jika ada) hingga terbit.' },
        { title: 'Drafting Dokumen Lingkungan', desc: 'Menyusun dokumen UKL-UPL atau SPPL untuk diserahkan ke Dinas Lingkungan Hidup.' },
        { title: 'Penerbitan Izin Operasional', desc: 'Pengajuan izin khusus komersial (PB-UMKU) di OSS RBA hingga terverifikasi instansi kementerian terkait.' },
      ]}
      related={[
        { slug: 'layanan/nib', name: 'NIB OSS RBA', ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
        { slug: 'layanan/sertifikat-standar', name: 'Sertifikat Standar', ico: '📜', bg: '#FEF3C7', price: 'Rp 2.500.000' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
      ]}
      waMessage="Halo Resmiin, saya butuh bantuan untuk pengurusan Perizinan Usaha sektoral khusus untuk bisnis saya."
    />
  );
}
