import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sertifikasi ISO Perusahaan Terpercaya – Resmiin',
  description: 'Jasa Pengurusan Sertifikasi ISO 9001, 14001, 45001, dll. Proses transparan, biaya kompetitif, dan pendampingan audit penuh.',
};

export default function SertifikasiIsoPage() {
  return (
    <ServiceDetailView
      badge="🏅 STANDARISASI INTERNASIONAL"
      title="Sertifikasi ISO"
      checklist={[
        'Sertifikat ISO 9001:2015 (Manajemen Mutu)',
        'Sertifikat ISO 14001:2015 (Sistem Lingkungan)',
        'Sertifikat ISO 45001:2018 (Manajemen K3)',
        'Pendampingan audit penuh & pembuatan dokumen pendukung',
      ]}
      price="Rp 12.500.000"
      oldPrice="Rp 15.000.000"
      ctaText="Ajukan Sertifikasi ISO"
      docTitle="Sertifikat ISO Resmi"
      docIco="🏅"
      duration="3–4 minggu (Hingga Terbit)"
      features={[
        { ico: '🎖️', title: 'Sertifikasi ISO Terakreditasi', desc: 'Sertifikat ISO resmi yang dikeluarkan oleh badan sertifikasi nasional maupun internasional yang terakreditasi KAN/IAS.' },
        { ico: '📝', title: 'Penyusunan Manual Mutu & Prosedur', desc: 'Pembuatan manual mutu, instruksi kerja, dan kebijakan perusahaan sesuai klausul standar ISO.' },
        { ico: '🕵️', title: 'Internal Audit & Review Manajemen', desc: 'Pendampingan pelaksanaan audit internal serta rapat tinjauan manajemen untuk kesiapan audit eksternal.' },
      ]}
      steps={[
        { title: 'Gap Analysis & Diagnosa Awal', desc: 'Menganalisis kesiapan sistem operasional perusahaan saat ini dibandingkan standar ISO.' },
        { title: 'Perancangan Sistem & Dokumentasi', desc: 'Menyusun prosedur kerja (SOP), instruksi kerja, formulir, dan manual mutu.' },
        { title: 'Implementasi & Audit Internal', desc: 'Menerapkan sistem baru secara operasional dan melatih tim internal untuk audit.' },
        { title: 'Audit Badan Sertifikasi (Stage 1 & 2)', desc: 'Pendampingan penuh saat audit eksternal oleh auditor dari badan sertifikasi pilihan hingga sertifikat diterbitkan.' },
      ]}
      related={[
        { slug: 'layanan/sop', name: 'Standarisasi SOP', ico: '⚙️', bg: '#F3F4F6', price: 'Rp 6.000.000' },
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'layanan/sni', name: 'Sertifikasi SNI', ico: '🛡️', bg: '#ECFDF5', price: 'Hubungi Kami' },
      ]}
      waMessage="Halo Resmiin, saya mau tanya/ambil jasa pengurusan Sertifikasi ISO."
    />
  );
}
