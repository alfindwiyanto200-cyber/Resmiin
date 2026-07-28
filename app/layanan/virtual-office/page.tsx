import React from 'react';
import ServiceDetailView from '@/components/ServiceDetailView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Virtual Office Murah & Lokasi Strategis – Resmiin',
  description: 'Sewa Virtual Office dan Alamat Bisnis Resmi prestisius untuk pendirian PT / CV Anda. Layanan resepsionis, pengelolaan surat, meeting room, dan coworking space.',
};

export default function VirtualOfficePage() {
  return (
    <ServiceDetailView
      badge="🏢 ALAMAT BISNIS STRATEGIS"
      title="Virtual Office"
      checklist={[
        'Alamat Bisnis Prestisius & Zonasi Perkantoran Komersial',
        'Layanan Pengelolaan Surat Menyurat & Paket Masuk',
        'Resepsionis Profesional (Handling Telpon Klien Anda)',
        'Gratis Penggunaan Meeting Room & Akses Coworking Space',
        'Surat Perjanjian Sewa Resmi (PKS) untuk Domisili & PKP',
        'Tersedia Opsi Sewa Harian/Bulanan Private Office',
      ]}
      price="Rp 3.500.000"
      oldPrice="Rp 4.500.000"
      ctaText="Sewa Virtual Office"
      docTitle="Perjanjian Sewa Kantor"
      docIco="🏢"
      duration="1–2 hari kerja (Surat Sewa Terbit)"
      features={[
        { ico: '📍', title: 'Alamat Prestisius & Legalitas PKP', desc: 'Lokasi di gedung perkantoran komersial utama yang lolos verifikasi zonasi untuk syarat pendirian PT/CV dan pengajuan Pengusaha Kena Pajak (PKP).' },
        { ico: '📞', title: 'Layanan Resepsionis & Surat', desc: 'Resepsionis profesional siap menangani panggilan telepon masuk atas nama perusahaan Anda dan meneruskan info surat/paket masuk secara instan.' },
        { ico: '🛋️', title: 'Meeting Room & Private Office', desc: 'Akses gratis ke meeting room berfasilitas lengkap, area coworking space yang dinamis, serta opsi peningkatan ke ruang kantor fisik (Private Office).' },
      ]}
      steps={[
        { title: 'Pilih Alamat Gedung & Paket', desc: 'Memilih lokasi gedung kantor virtual strategis yang diinginkan sesuai domisili target pasar Anda.' },
        { title: 'Lengkapi Data Penyewa', desc: 'Mengisi form pemesanan dan mengirimkan fotokopi KTP & NPWP penanggung jawab perusahaan.' },
        { title: 'Penyusunan Surat Perjanjian Sewa', desc: 'Menandatangani PKS (Perjanjian Kerjasama) sewa kantor yang sah secara hukum.' },
        { title: 'Pengiriman Berkas Domisili', desc: 'Surat Keterangan Domisili diserahkan dalam bentuk PDF dan cetak untuk siap digunakan sebagai domisili resmi perusahaan.' },
      ]}
      related={[
        { slug: 'pendirian-pt', name: 'Pendirian PT', ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000' },
        { slug: 'pendirian-cv', name: 'Pendirian CV', ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000' },
        { slug: 'layanan/nib', name: 'NIB OSS RBA', ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
      ]}
      waMessage="Halo Resmiin, saya tertarik untuk menyewa Virtual Office untuk domisili bisnis saya."
    />
  );
}
