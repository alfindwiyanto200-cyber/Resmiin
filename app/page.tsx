'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <>
      {/* ===== HERO — FULLSCREEN IMAGE ===== */}
      <section className="hero" id="hero">
        <div className={`hero-img-layer ${heroLoaded ? 'loaded' : ''}`} id="heroBg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-text-wrap">
          <h1 className="hero-h1">Bangun bisnis<br/>Anda secara<br/>resmi di sini</h1>
          <p className="hero-sub">Pendirian perusahaan, perizinan, dan konsultasi<br/>bisnis — semua dalam satu tempat yang terpercaya.</p>
          <a href="#layanan-unggulan" className="btn-hero">Mulai sekarang</a>
          <div className="hero-guarantee">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Konsultasi gratis, tanpa komitmen
          </div>
        </div>
      </section>

      {/* ===== 2 BOX LAYANAN UNGGULAN ===== */}
      <section className="featured-section" id="layanan-unggulan">
        <div className="featured-wrap">
          <a href="#harga" className="feat-box feat-box--left" id="feat-box-1">
            <div className="feat-box-content">
              <h2 className="feat-title">Pendirian &amp; legalitas<br/>bisnis Anda</h2>
              <p className="feat-desc">Layanan pendirian PT, CV, yayasan dan pengurusan perizinan lengkap dengan proses cepat dan transparan.</p>
              <div className="feat-price-row">
                <span className="feat-label">Mulai dari</span>
                <span className="feat-price">Rp 1.000.000</span>
              </div>
            </div>
            <div className="feat-arrow">↗</div>
            <div className="feat-deco feat-deco--1"></div>
          </a>

          <Link href="/merek-haki" className="feat-box feat-box--right" id="feat-box-2">
            <div className="feat-box-content">
              <h2 className="feat-title">Perlindungan Merek<br/>&amp; Hak Cipta HAKI</h2>
              <p className="feat-desc">Dapatkan Bukti Pendaftaran HAKI resmi dari DJKI untuk melindungi brand &amp; aset kekayaan intelektual bisnis Anda.</p>
              <div className="feat-price-row">
                <span className="feat-label">Harga Promo</span>
                <span className="feat-price">Rp 3.500.000</span>
              </div>
            </div>
            <div className="feat-arrow">↗</div>
            <div className="feat-deco feat-deco--2"></div>
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONI ===== */}
      <section className="testi-section" id="testimoni">
        <div className="testi-header">
          <span className="testi-badge">Dipercaya oleh</span>
          <h2 className="testi-heading">Mereka sudah bisnis<br/>resmi, kini giliran Anda</h2>
          <div className="testi-rating">
            <span className="rating-word">Excellent</span>
            <div className="stars-wrap">
              <span className="star-icon">★</span><span className="star-icon">★</span><span className="star-icon">★</span><span className="star-icon">★</span><span className="star-icon">★</span>
            </div>
            <a href="#" className="rating-link">2.500+ ulasan</a>
            <span className="rating-sep">|</span>
            <span className="rating-platform">Google &amp; Trustpilot</span>
          </div>
        </div>

        <div className="testi-grid-container">
          <div className="testi-card">
            <div className="testi-card-logo">
              <img src="https://ui-avatars.com/api/?name=DW&background=00695C&color=fff&size=48&bold=true&rounded=true" alt="DW" width="48" height="48" />
            </div>
            <p className="testi-quote">&ldquo;Proses pendirian PT sangat cepat, dalam 5 hari kerja semua SK Kemenkumham, NIB, dan NPWP sudah lengkap. Rekening BCA juga langsung dibantu!&rdquo;</p>
            <div className="testi-tags">
              <span className="testi-tag">Pendirian PT</span>
              <span className="testi-tag">NIB OSS</span>
            </div>
            <div className="testi-author">
              <img src="https://ui-avatars.com/api/?name=Diana+Wijaya&background=00695C&color=fff&size=36&rounded=true" alt="Diana Wijaya" width="36" height="36" />
              <div>
                <strong>Diana Wijaya</strong>
                <span>Direktur, CV Wijaya Makmur</span>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-card-logo">
              <img src="https://ui-avatars.com/api/?name=RP&background=6D28D9&color=fff&size=48&bold=true&rounded=true" alt="RP" width="48" height="48" />
            </div>
            <p className="testi-quote">&ldquo;Konsultasi gratis yang diberikan sangat membantu saya memahami struktur bisnis yang tepat. Mereka memberikan solusi terbaik, bukan yang paling mahal.&rdquo;</p>
            <div className="testi-tags">
              <span className="testi-tag">Konsultasi</span>
              <span className="testi-tag">Pendirian CV</span>
            </div>
            <div className="testi-author">
              <img src="https://ui-avatars.com/api/?name=Rino+Pratama&background=6D28D9&color=fff&size=36&rounded=true" alt="Rino Pratama" width="36" height="36" />
              <div>
                <strong>Rino Pratama</strong>
                <span>Entrepreneur, Pratama Group</span>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-card-logo">
              <img src="https://ui-avatars.com/api/?name=LS&background=0284C7&color=fff&size=48&bold=true&rounded=true" alt="LS" width="48" height="48" />
            </div>
            <p className="testi-quote">&ldquo;Dari pendirian PT hingga pengurusan perizinan, Resmiin selalu memberikan hasil yang memuaskan. Tim mereka sangat kompeten dan komunikatif.&rdquo;</p>
            <div className="testi-tags">
              <span className="testi-tag">Pendirian PT</span>
              <span className="testi-tag">Perizinan</span>
            </div>
            <div className="testi-author">
              <img src="https://ui-avatars.com/api/?name=Linda+Santoso&background=0284C7&color=fff&size=36&rounded=true" alt="Linda Santoso" width="36" height="36" />
              <div>
                <strong>Linda Santoso</strong>
                <span>CEO, PT Linda Kreasi</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ===== VISI MISI ===== */}
      <section className="vm-section" id="visi-misi">
        <div className="vm-container">
          <div className="vm-label">Tentang Resmiin</div>
          <h2 className="vm-heading">Visi &amp; Misi kami</h2>

          <div className="vm-grid">
            <div className="vm-visi">
              <div className="vm-icon">🎯</div>
              <h3>Visi</h3>
              <p>Menjadi <strong>Business Infrastructure Partner</strong> paling terpercaya di Indonesia yang membantu perusahaan membangun fondasi yang kuat, bertumbuh secara berkelanjutan, dan memberikan dampak positif bagi perekonomian bangsa.</p>
            </div>

            <div className="vm-misi">
              <div className="vm-icon">🚀</div>
              <h3>Misi</h3>
              <ul>
                <li>
                  <div className="vm-dot"></div>
                  <p>Menyediakan layanan profesional yang terintegrasi untuk mendukung setiap tahap perjalanan bisnis, mulai dari pendirian, operasional, pengembangan, hingga ekspansi perusahaan.</p>
                </li>
                <li>
                  <div className="vm-dot"></div>
                  <p>Membangun standar layanan yang <strong>transparan, akurat, tepat waktu</strong>, dan berorientasi pada solusi sehingga setiap klien memperoleh kepastian dalam setiap proses bisnisnya.</p>
                </li>
                <li>
                  <div className="vm-dot"></div>
                  <p>Mengembangkan tim profesional dengan kompetensi multidisiplin, integritas tinggi, dan pola pikir sebagai mitra strategis bagi setiap klien.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HARGA ===== */}
      <section className="pricing-section" id="harga">
        <div className="pricing-container">
          <div className="pricing-badge">Harga Transparan</div>
          <h2 className="pricing-heading">Pilih paket yang<br/>sesuai kebutuhan Anda</h2>
          <p className="pricing-sub">Harga terjangkau dengan layanan premium. Tanpa biaya tersembunyi.</p>

          <div className="pricing-cards">

            {/* PT PERORANGAN */}
            <div className="pc">
              <div className="pc-label">Usaha Mikro</div>
              <div className="pc-icon">👤</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>PT Perorangan</h3>
              <p className="pc-desc">Legalitas resmi untuk usaha perorangan cepat &amp; mudah.</p>
              <div className="pc-price-area">
                <span className="pc-main">Rp 1.000.000</span>
              </div>
              <Link href="/pt-perorangan" className="pc-btn">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck">✓</span> SK Kemenkumham</li>
                <li><span className="ck">✓</span> NPWP Perusahaan</li>
                <li><span className="ck">✓</span> NIB (Nomor Induk Berusaha)</li>
              </ul>
            </div>

            {/* PENDIRIAN CV (PROMO) */}
            <div className="pc">
              <div className="pc-featured-label" style={{ background: 'linear-gradient(135deg, #00C98D, #059669)' }}>🔥 Harga Promo</div>
              <div className="pc-icon">📋</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Pendirian CV</h3>
              <p className="pc-desc">Paket lengkap pendirian CV dengan fasilitas buka rekening bank.</p>
              <div className="pc-price-area">
                <span className="pc-old">Rp 4.500.000</span>
                <span className="pc-main">Rp 3.000.000</span>
              </div>
              <Link href="/pendirian-cv" className="pc-btn">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck">✓</span> Salinan Akta Pendirian CV</li>
                <li><span className="ck">✓</span> SK Kemenkumham</li>
                <li><span className="ck">✓</span> NPWP Perusahaan</li>
                <li><span className="ck">✓</span> NIB (Nomor Induk Berusaha)</li>
                <li><span className="ck">✓</span> Buka Rekening BCA / Mandiri</li>
              </ul>
            </div>

            {/* PENDIRIAN PT (PROMO - FEATURED) */}
            <div className="pc pc--featured">
              <div className="pc-featured-label">✦ Terlaris · Hemat Rp 1,5 Juta</div>
              <div className="pc-icon">🏢</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Pendirian PT</h3>
              <p className="pc-desc" style={{ color: 'rgba(255,255,255,.8)' }}>Paket lengkap pendirian Perseroan Terbatas dengan fasilitas Buka Rekening.</p>
              <div className="pc-price-area">
                <span className="pc-old" style={{ color: 'rgba(255,255,255,.6)' }}>Rp 6.000.000</span>
                <span className="pc-main" style={{ color: '#fff' }}>Rp 4.500.000</span>
              </div>
              <Link href="/pendirian-pt" className="pc-btn pc-btn--white">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck" style={{ color: '#93C5FD' }}>✓</span> Salinan Akta Pendirian PT</li>
                <li><span className="ck" style={{ color: '#93C5FD' }}>✓</span> SK Kemenkumham</li>
                <li><span className="ck" style={{ color: '#93C5FD' }}>✓</span> NPWP Perusahaan</li>
                <li><span className="ck" style={{ color: '#93C5FD' }}>✓</span> NIB (Nomor Induk Berusaha)</li>
                <li><span className="ck" style={{ color: '#93C5FD' }}>✓</span> Buka Rekening BCA / Mandiri</li>
              </ul>
            </div>

            {/* YAYASAN */}
            <div className="pc">
              <div className="pc-label">Organisasi</div>
              <div className="pc-icon">🏛️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Pendirian Yayasan</h3>
              <p className="pc-desc">Legalitas resmi organisasi sosial, kemanusiaan, &amp; keagamaan.</p>
              <div className="pc-price-area">
                <span className="pc-old">Rp 5.000.000</span>
                <span className="pc-main">Rp 3.000.000</span>
              </div>
              <Link href="/pendirian-yayasan" className="pc-btn">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck">✓</span> Salinan Pendirian Yayasan</li>
                <li><span className="ck">✓</span> SK Kemenkumham</li>
              </ul>
            </div>

            {/* PERKUMPULAN */}
            <div className="pc">
              <div className="pc-label">Komunitas / Asosiasi</div>
              <div className="pc-icon">🤝</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Pendirian Perkumpulan</h3>
              <p className="pc-desc">Badan hukum berbasis keanggotaan untuk asosiasi &amp; himpunan.</p>
              <div className="pc-price-area">
                <span className="pc-old">Rp 5.000.000</span>
                <span className="pc-main">Rp 3.000.000</span>
              </div>
              <Link href="/pendirian-perkumpulan" className="pc-btn">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck">✓</span> Salinan Akta Perkumpulan</li>
                <li><span className="ck">✓</span> SK Kemenkumham</li>
              </ul>
            </div>

            {/* MEREK HAKI */}
            <div className="pc">
              <div className="pc-label">Perlindungan Merek</div>
              <div className="pc-icon">🛡️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Merek &amp; HAKI</h3>
              <p className="pc-desc">Perlindungan hukum nama brand, logo, &amp; hak cipta bisnis Anda.</p>
              <div className="pc-price-area">
                <span className="pc-old">Rp 4.500.000</span>
                <span className="pc-main">Rp 3.500.000</span>
              </div>
              <Link href="/merek-haki" className="pc-btn">Pilih Paket</Link>
              <ul className="pc-feats">
                <li><span className="ck">✓</span> Bukti Pendaftaran HAKI</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
