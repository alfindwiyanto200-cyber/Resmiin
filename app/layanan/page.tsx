import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Semua Layanan Legalitas & Pendirian Usaha – Resmiin',
  description: 'Layanan profesional Resmiin untuk kebutuhan pendirian PT, CV, Yayasan, Perkumpulan, serta pendaftaran Merek & HAKI di Indonesia.',
};

export default function LayananOverviewPage() {
  const services = [
    {
      slug: 'pt-perorangan',
      title: 'PT Perorangan',
      badge: 'TERJANGKAU',
      badgeClass: 'mega-badge',
      ico: '👤',
      bg: '#EBF5FF',
      price: 'Rp 1.000.000',
      desc: 'Solusi cepat & legal untuk pendiri tunggal. Sudah termasuk SK Kemenkumham, NPWP Perusahaan, dan NIB OSS RBA.',
      features: ['SK Kemenkumham Resmi', 'NPWP Badan Perusahaan', 'NIB OSS RBA Integrasi'],
    },
    {
      slug: 'pendirian-cv',
      title: 'Pendirian CV',
      badge: 'PROMO',
      badgeClass: 'mega-badge mega-badge--green',
      ico: '📋',
      bg: '#F0FDF4',
      price: 'Rp 3.000.000',
      desc: 'Badan usaha persekutuan komanditer untuk kemitraan bisnis yang fleksibel dengan pengesahan resmi.',
      features: ['Akta Notaris & SK Kemenkumham', 'NPWP & NIB OSS RBA', 'Bantu Pembukaan Rekening Bank'],
    },
    {
      slug: 'pendirian-pt',
      title: 'Pendirian PT',
      badge: 'TERLARIS',
      badgeClass: 'mega-badge',
      ico: '🏢',
      bg: '#EBF5FF',
      price: 'Rp 4.500.000',
      desc: 'Perseroan Terbatas dengan badan hukum kuat untuk skala bisnis profesional & kredibel di mata investor.',
      features: ['Akta Notaris & SK Kemenkumham', 'NPWP & NIB OSS RBA', 'Buka Rekening & Konsultasi Gratis'],
    },
    {
      slug: 'pendirian-yayasan',
      title: 'Pendirian Yayasan',
      badge: 'PROMO',
      badgeClass: 'mega-badge mega-badge--green',
      ico: '🏛️',
      bg: '#FFF7ED',
      price: 'Rp 3.000.000',
      desc: 'Badan hukum bidang sosial, keagamaan, dan kemanusiaan dengan pengesahan resmi Kemenkumham.',
      features: ['Salinan Pendirian Akta Notaris', 'SK Pengesahan Kemenkumham', 'NPWP Badan Sosial & NIB'],
    },
    {
      slug: 'pendirian-perkumpulan',
      title: 'Pendirian Perkumpulan',
      badge: 'PROMO',
      badgeClass: 'mega-badge mega-badge--green',
      ico: '🤝',
      bg: '#F5F3FF',
      price: 'Rp 3.000.000',
      desc: 'Wadah organisasi nirlaba, asosiasi, atau komunitas yang sah secara legal hukum Indonesia.',
      features: ['Salinan Akta Pendirian', 'SK Pengesahan Kemenkumham RI', 'Kelengkapan Legalitas Komunitas'],
    },
    {
      slug: 'merek-haki',
      title: 'Merek & HAKI',
      badge: 'PROMO',
      badgeClass: 'mega-badge mega-badge--green',
      ico: '🛡️',
      bg: '#EBF5FF',
      price: 'Rp 3.500.000',
      desc: 'Perlindungan hak cipta, merek dagang, dan aset intelektual bisnis dari peniruan atau plagiarisme.',
      features: ['Pengecekan Kelayakan Merek', 'Pendaftaran Resmi DJKI Kemenkumham', 'Sertifikat Bukti Hak Merek'],
    },
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* HERO BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#fff', padding: '60px 24px 80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Layanan Legalitas Lengkap
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '20px 0 12px 0', lineHeight: 1.2 }}>
            Layanan Resmiin untuk Kebutuhan Bisnis Anda
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.6 }}>
            Pilih paket legalitas yang sesuai dengan skala usaha Anda. Proses transparan, terverifikasi Kemenkumham, dan didampingi tim profesional.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <div style={{ maxWidth: '1140px', margin: '-40px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {services.map((item) => (
            <div 
              key={item.slug} 
              style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                padding: '28px', 
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                    {item.ico}
                  </div>
                  <span className={item.badgeClass}>{item.badge}</span>
                </div>

                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                  {item.desc}
                </p>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Fitur Utama</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '13px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', color: '#64748B' }}>Mulai dari</span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: '#2563EB' }}>{item.price}</span>
                </div>

                <Link 
                  href={`/${item.slug}`} 
                  className="btn-nav-primary"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none', width: '100%' }}
                >
                  Lihat Detail Layanan →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
