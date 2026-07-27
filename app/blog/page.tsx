import React from 'react';
import Link from 'next/link';
import { getAllArticles, getImageUrl } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Panduan Bisnis – Resmiin',
  description: 'Wawasan praktis seputar legalitas perusahaan, perpajakan, perizinan usaha OSS, dan strategi mengembangkan bisnis di Indonesia.',
};

export const revalidate = 60;

export default async function BlogListingPage() {
  const articles = await getAllArticles();

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

      {/* TOP STORIES SECTION */}
      <section className="blog-section">
        <div className="blog-container">
          <h2 className="section-head-title">Top Stories</h2>

          <div className="blog-grid-3">
            {articles.map((art) => {
              const coverUrl = getImageUrl(art.featuredImage);
              const formattedDate = art.publishedAt
                ? new Date(art.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
                : '2025-11-05';

              return (
                <Link key={art.id} href={`/blog/${art.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <img src={coverUrl} alt={art.title} />
                  </div>
                  <div className="blog-card-meta">
                    <span>{formattedDate}</span>
                    <span className="meta-dot">•</span>
                    <span>{art.category?.name || 'LEGALITAS BISNIS'}</span>
                    <span className="meta-dot">•</span>
                    <span>{art.readTime || '3min baca'}</span>
                  </div>
                  <h3 className="blog-card-h3">{art.title}</h3>
                  <p className="blog-card-excerpt">{art.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}
