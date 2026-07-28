import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Penyusunan & Standarisasi SOP Bisnis – Resmiin',
  description: 'Merapikan operasional bisnis Anda dengan Standard Operating Procedure (SOP) profesional. Tingkatkan produktivitas tim dan siap scale up.',
};

export default function SopPage() {
  return (
    <ServiceDetailView
      badge="⚙️ OPERASIONAL EFEKTIF"
      title="Standarisasi SOP"
      checklist={[
        'Buku Dokumen SOP Departemen Lengkap',
        'Flowchart Visual & Bagan Alur Kerja',
        'Deskripsi Pekerjaan (Job Descriptions) Jelas',
        'Template Formulir Kerja & KPI Pendukung',
      ]}
      price="Rp 6.000.000"
      oldPrice="Rp 8.000.000"
      ctaText="Ajukan Pembuatan SOP"
      docTitle="Buku Dokumen SOP"
      docIco="⚙️"
      duration="2–3 minggu (Selesai Draft & Final)"
      features={[
        { ico: '📊', title: 'Pemetaan Proses Bisnis', desc: 'Menganalisis dan menyusun ulang alur kerja divisi keuangan, HRD, pemasaran, dan operasional inti agar lebih ramping.' },
        { ico: '🗺️', title: 'Flowchart Visual Terstruktur', desc: 'Pembuatan diagram alir visual untuk mempermudah karyawan memahami tanggung jawab masing-masing.' },
        { ico: '📈', title: 'KPI & Form Evaluasi Kerja', desc: 'Penyusunan indikator kinerja utama (KPI) serta formulir harian/mingguan untuk memantau disiplin tim.' },
      ]}
      steps={[
        { title: 'Wawancara & Pemetaan Bisnis', desc: 'Tim melakukan wawancara dengan manajemen & kepala divisi untuk memetakan kondisi saat ini (As-Is).' },
        { title: 'Penyusunan Draf Prosedur (SOP)', desc: 'Menulis draf tertulis berisi alur kerja, penanggung jawab, input, dan output proses.' },
        { title: 'Review & Diskusi Bersama (FGD)', desc: 'Melakukan Focus Group Discussion bersama manajemen untuk meninjau kecocokan draf SOP.' },
        { title: 'Finalisasi & Pelatihan Sosialisasi', desc: 'Penyelesaian dokumen akhir, pembuatan diagram visual, dan sesi sosialisasi kepada karyawan.' },
      ]}
      related={[
        { slug: 'layanan/sertifikasi-iso', name: 'Sertifikasi ISO', ico: '🏅', bg: '#FDF2F8', price: 'Rp 12.500.000' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'layanan/nib', name: 'NIB Elektronik', ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
      ]}
      waMessage="Halo Resmiin, saya tertarik untuk menggunakan jasa penyusunan SOP untuk perusahaan saya."
    />
  );
}
