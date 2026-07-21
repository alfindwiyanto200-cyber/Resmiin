import React from 'react';
import Link from 'next/link';
import { FALLBACK_ARTICLES } from '@/sanity/lib/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Panduan Bisnis – Resmiin',
  description: 'Wawasan praktis seputar legalitas perusahaan, perpajakan, perizinan usaha OSS, dan strategi mengembangkan bisnis di Indonesia.',
};

export default function BlogListingPage() {
  const articles = FALLBACK_ARTICLES;

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* BLOG HERO HEADER */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <h1 className="blog-main-title">Blog &amp; Panduan Bisnis</h1>
          <p className="blog-sub-title">Dapatkan wawasan praktis seputar legalitas perusahaan, perpajakan, perizinan usaha, dan strategi mengembangkan bisnis di Indonesia.</p>

          {/* Category Filter Bar */}
          <div className="blog-cat-bar">
            <a href="#" className="blog-cat-pill active">Semua Artikel</a>
            <a href="#" className="blog-cat-pill">Pendirian PT &amp; CV</a>
            <a href="#" className="blog-cat-pill">Perizinan OSS NIB</a>
            <a href="#" className="blog-cat-pill">Perpajakan Badan</a>
            <a href="#" className="blog-cat-pill">Perlindungan HAKI</a>
            <a href="#" className="blog-cat-pill">Kisah Sukses Klien</a>
          </div>
        </div>
      </section>

      {/* TOP STORIES SECTION (Hostinger Reference Image 2) */}
      <section className="blog-section">
        <div className="blog-container">
          <h2 className="section-head-title">Top Stories</h2>

          <div className="blog-grid-3">
            {articles.map((art) => (
              <Link key={art._id} href={`/blog/${art.slug.current}`} className="blog-card">
                <div className="blog-card-img">
                  <img src={art.coverImage || '/assets/blog-1.png'} alt={art.title} />
                </div>
                <div className="blog-card-meta">
                  <span>{art.publishedAt}</span>
                  <span className="meta-dot">•</span>
                  <span>{art.category}</span>
                  <span className="meta-dot">•</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="blog-card-h3">{art.title}</h3>
                <p className="blog-card-excerpt">{art.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY LIFE & PANDUAN USAHA (Hostinger Reference Image 3) */}
      <section className="blog-section" style={{ paddingTop: 0 }}>
        <div className="blog-container">
          <h2 className="section-head-title">Panduan &amp; Edukasi Bisnis</h2>

          <div className="blog-grid-3">
            <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="blog-card">
              <div className="blog-card-img">
                <img src="/assets/blog-1.png" alt="PT Perorangan vs PT Biasa" />
              </div>
              <div className="blog-card-meta">
                <span>20 MEI</span>
                <span className="meta-dot">•</span>
                <span>EDUKASI LEGAL</span>
                <span className="meta-dot">•</span>
                <span>5min baca</span>
              </div>
              <h3 className="blog-card-h3">PT Perorangan vs PT Biasa: Mana Paket yang Paling Cocok untuk Bisnis Anda?</h3>
              <p className="blog-card-excerpt">Bagi pengusaha pemula dengan anggaran efisien, PT Perorangan bisa jadi opsi tepat. Ketahui kelebihan dan perbandingannya.</p>
            </Link>

            <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="blog-card">
              <div className="blog-card-img">
                <img src="/assets/blog-2.png" alt="Perizinan NIB OSS RBA" />
              </div>
              <div className="blog-card-meta">
                <span>29 APR</span>
                <span className="meta-dot">•</span>
                <span>PERIZINAN OSS</span>
                <span className="meta-dot">•</span>
                <span>4min baca</span>
              </div>
              <h3 className="blog-card-h3">Panduan Memilih Kode KBLI yang Tepat Saat Mengurus NIB di OSS RBA</h3>
              <p className="blog-card-excerpt">Kesalahan memilih KBLI bisa menghambat perizinan operasional bisnis Anda. Pelajari cara penentuan KBLI yang pas.</p>
            </Link>

            <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="blog-card">
              <div className="blog-card-img">
                <img src="/assets/blog-3.png" alt="Kepatuhan Pajak Badan" />
              </div>
              <div className="blog-card-meta">
                <span>05 FEB</span>
                <span className="meta-dot">•</span>
                <span>PERPAJAKAN</span>
                <span className="meta-dot">•</span>
                <span>6min baca</span>
              </div>
              <h3 className="blog-card-h3">Kewajiban Pajak Perusahaan Baru: Apa yang Wajib Dilaporkan Setiap Bulan?</h3>
              <p className="blog-card-excerpt">Memahami PPh 21, PPh 23, dan PPN untuk badan usaha baru agar terhindar dari denda administrasi pajak.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
