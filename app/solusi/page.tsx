import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solusi Bisnis Komprehensif – Resmiin',
  description: 'Temukan solusi terbaik untuk bisnis Anda dari Resmiin. Mulai dari pendirian badan usaha, perizinan, perlindungan merek, pemasaran digital, hingga konsultasi bisnis.',
};

export default function SolusiPage() {
  const solusiList = [
    {
      ico: '🚀',
      title: 'Memulai Bisnis (Startup & UMKM)',
      desc: 'Solusi pendirian badan usaha bagi Anda yang ingin melangkah secara resmi. Kami membantu pemilihan struktur badan usaha yang tepat agar sesuai dengan modal, visi bisnis, dan rencana operasional Anda.',
      items: ['Pendirian PT (Perseroan Terbatas)', 'Pendirian CV (Persekutuan Komanditer)', 'Pendirian PT Perorangan (untuk pelaku usaha mikro)', 'Pendirian Yayasan & Perkumpulan Sosial'],
      link: '/#harga'
    },
    {
      ico: '⚖️',
      title: 'Kepatuhan Legalitas & Hukum',
      desc: 'Menjaga kelangsungan bisnis Anda dengan fondasi legalitas hukum yang kokoh. Kami mengurus dokumen hukum pendukung agar bisnis Anda terhindar dari sengketa dan masalah kepatuhan di kemudian hari.',
      items: ['Akta Notaris & Pengesahan Kemenkumham', 'NPWP Perusahaan & Kepatuhan Pajak', 'Dokumen Legalitas Tambahan', 'Drafting & Review Kontrak Bisnis'],
      link: '/#harga'
    },
    {
      ico: '📄',
      title: 'Perizinan Berusaha Sektoral',
      desc: 'Membantu bisnis Anda mendapatkan izin resmi untuk beroperasi sesuai dengan sektor industri (KBLI) Anda di platform OSS RBA (Risk-Based Approach).',
      items: ['Nomor Induk Berusaha (NIB) Elektronik', 'Sertifikat Standar KBLI Menengah Tinggi', 'Izin Operasional & Komersial Khusus', 'Izin Lingkungan & Kepatuhan Teknis'],
      link: '/layanan/nib'
    },
    {
      ico: '🛡️',
      title: 'Brand Protection & HKI',
      desc: 'Melindungi identitas merek, logo, karya kreatif, dan invensi teknologi bisnis Anda dari pembajakan serta plagiarisme kompetitor melalui pendaftaran kekayaan intelektual resmi.',
      items: ['Pendaftaran Merek Dagang & Jasa di DJKI', 'Perlindungan Hak Cipta Karya Kreatif', 'Pendaftaran Paten Invensi Teknologi', 'Pendaftaran Desain Industri Produk'],
      link: '/layanan/merek-haki'
    },
    {
      ico: '📈',
      title: 'Akselerasi Pemasaran Digital',
      desc: 'Meningkatkan penjualan dan jangkauan pasar bisnis Anda melalui strategi digital marketing terukur yang dikelola oleh tim growth hacker profesional kami.',
      items: ['Optimasi Mesin Pencari (SEO)', 'Iklan Google & Meta (Google Ads, Facebook Ads)', 'Pengelolaan Media Sosial & Konten', 'Pembuatan Landing Page Berkonversi Tinggi'],
      link: '/layanan/digital-marketing'
    },
    {
      ico: '⚙️',
      title: 'Scale Up Bisnis & Konsultan',
      desc: 'Mempersiapkan bisnis Anda untuk berkembang lebih besar secara sistematis melalui konsultasi operasional, restrukturisasi korporasi, serta penyusunan standardisasi proses.',
      items: ['Standard Operating Procedure (SOP) Bisnis', 'Sertifikasi ISO Kredibilitas Internasional', 'Konsultasi Manajemen & Strategi Bisnis', 'Standardisasi Mutu Nasional (SNI)'],
      link: '/layanan/sop'
    }
  ];

  return (
    <div style={{ background: '#FAFBFD', color: '#0D1B2A', paddingBottom: '80px' }}>
      
      {/* HEADER BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)',
        padding: '100px 24px 80px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Solusi Bisnis Resmiin</h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, fontWeight: 400 }}>
            Layanan infrastruktur end-to-end terintegrasi untuk membantu bisnis Anda tumbuh dari skala startup hingga korporasi besar dengan aman.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(41,182,246,0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="bc-inner">
          <Link href="/">Beranda</Link>
          <span className="bc-sep">›</span>
          <span>Solusi</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* LIFE CYCLE DESCRIPTION */}
        <section style={{ paddingTop: '80px', paddingBottom: '40px', textAlign: 'center' }}>
          <span className="why-label">Siklus Bisnis Lengkap</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '12px' }}>
            Solusi untuk Setiap Tahapan Bisnis Anda
          </h2>
          <p style={{ color: '#637B96', fontSize: '16px', marginTop: '8px', maxWidth: '700px', margin: '8px auto 0', lineHeight: 1.6 }}>
            Setiap tahapan perkembangan bisnis membutuhkan penanganan infrastruktur, perizinan, dan legalitas yang berbeda. Kami di sini untuk mendampingi Anda di setiap langkah.
          </p>
        </section>

        {/* SOLUTIONS GRID */}
        <section style={{ padding: '20px 0 60px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {solusiList.map((solusi, idx) => (
              <div key={idx} className="solusi-card">
                <div>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{solusi.ico}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0D1B2A', marginBottom: '12px' }}>{solusi.title}</h3>
                  <p style={{ fontSize: '14.5px', color: '#637B96', lineHeight: 1.7, marginBottom: '24px' }}>{solusi.desc}</p>
                  
                  <div style={{ marginBottom: '28px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>Cakupan Layanan:</span>
                    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {solusi.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#2C4360', fontWeight: 500 }}>
                          <span style={{ color: '#00C98D' }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href={solusi.link} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#1565C0',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  marginTop: '12px'
                }}>
                  Pelajari Selengkapnya <span style={{ transition: 'transform 0.2s' }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CONSULTATION HERO BANNER */}
        <section style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          color: '#fff',
          marginTop: '40px',
          boxShadow: '0 12px 40px rgba(13,27,42,0.15)'
        }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, marginBottom: '14px' }}>Butuh Solusi Khusus Bisnis Anda?</h2>
          <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Setiap industri memiliki keunikan operasional dan kebutuhan hukum sendiri. Diskusikan dengan tim legal &amp; bisnis konsultan ahli kami hari ini.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="cta-btn-wa" style={{ border: 'none', background: '#fff', color: '#0D1B2A' }}>
              Konsultasi WhatsApp Sekarang
            </a>
            <a href="mailto:info@resmiin.com" className="cta-btn-email" style={{ border: '2px solid rgba(255,255,255,0.5)' }}>
              Kirim Email Resmi
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
