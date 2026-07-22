import React from 'react';
import Link from 'next/link';
import { FALLBACK_ARTICLES } from '@/sanity/lib/client';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return FALLBACK_ARTICLES.map((article) => ({
    slug: article.slug.current,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = FALLBACK_ARTICLES.find((a) => a.slug.current === slug) || FALLBACK_ARTICLES[0];

  return {
    title: `${article.title} – Resmiin`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = FALLBACK_ARTICLES.find((a) => a.slug.current === slug) || FALLBACK_ARTICLES[0];

  return (
    <article className="article-page" style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* HEADER META */}
      <header className="article-header" style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px 20px' }}>
        <div className="article-meta-top" style={{ fontSize: '13px', fontWeight: 700, color: '#1565C0', marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <span>{article.publishedAt}</span>
          <span>•</span>
          <span>Oleh Tim Hukum Resmiin</span>
        </div>
        <h1 className="article-h1" style={{ fontSize: '42px', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2, marginBottom: '24px' }}>
          {article.title}
        </h1>
      </header>

      {/* FEATURED BANNER IMAGE */}
      <div className="article-hero-wrap" style={{ maxWidth: '920px', margin: '0 auto 40px', padding: '0 24px' }}>
        <img
          src={article.coverImage || '/assets/blog-1.png'}
          alt={article.title}
          style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', objectFit: 'cover' }}
        />
      </div>

      {/* SHARE TOOLBAR */}
      <div className="article-share-bar" style={{ maxWidth: '760px', margin: '0 auto 40px', padding: '0 24px 20px', borderBottom: '1px solid #EAEEF4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#637B96' }}>
        <div>Kategori: <strong style={{ color: '#0D1B2A' }}>{article.category} • {article.readTime}</strong></div>
      </div>

      {/* BODY CONTENT */}
      <main className="article-body" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px 60px', fontSize: '17px', lineHeight: 1.7, color: '#2C4360' }}>
        <p style={{ marginBottom: '20px' }}>
          Mendirikan Perseroan Terbatas (PT) dulu diidentikkan dengan proses birokrasi yang memakan waktu berminggu-minggu, penumpukan berkas fisik, dan ketidakpastian status hukum. Namun, berkat digitalisasi layanan di Kementerian Hukum dan HAM serta integrasi Online Single Submission (OSS RBA), proses pendirian PT kini <strong style={{ color: '#0D1B2A' }}>dapat diselesaikan jauh lebih cepat hanya dalam 3 hingga 5 hari kerja.</strong>
        </p>

        <blockquote style={{ borderLeft: '4px solid #1565C0', padding: '16px 24px', margin: '32px 0', background: '#F0F7FF', borderRadius: '0 16px 16px 0', fontStyle: 'italic', color: '#0D1B2A', fontSize: '18px' }}>
          &ldquo;Lebih dari <strong>80% pengusaha baru</strong> di Indonesia menghabiskan waktu terlalu lama mengurus berkas awal. Melalui layanan terintegrasi Resmiin, seluruh tahapan Notaris hingga NIB dipangkas menjadi hitungan hari.&rdquo;
          <span style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#637B96', fontStyle: 'normal', marginTop: '8px' }}>— Tim Legal Corporate Resmiin</span>
        </blockquote>

        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0D1B2A', margin: '36px 0 16px' }}>
          Revolusi Layanan Pendirian PT Online
        </h2>

        <p style={{ marginBottom: '20px' }}>
          Sistem pengesahan badan hukum yang transparan memungkinkan notaris dan pelaku usaha melakukan verifikasi nama perusahaan serta pemesanan akta secara instan. Kombinasi ini <strong style={{ color: '#0D1B2A' }}>menghemat waktu hingga berhari-hari</strong> dibandingkan metode konvensional.
        </p>

        <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '20px 0 30px' }}>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#0D1B2A' }}>Salinan Akta Pendirian Notaris:</strong> Dibuat oleh Notaris resmi berlisensi dengan draf Anggaran Dasar yang disesuaikan kebutuhan bisnis Anda.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#0D1B2A' }}>SK Pengesahan Kemenkumham:</strong> Surat Keputusan resmi dari Menteri Hukum &amp; HAM RI yang menandakan PT Anda sah sebagai badan hukum berdiri.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: '#0D1B2A' }}>NIB (Nomor Induk Berusaha) OSS:</strong> Berfungsi sebagai identitas usaha tunggal, pengganti SIUP dan TDP.</li>
        </ul>
      </main>

      {/* AUTHOR BOX */}
      <div style={{ maxWidth: '760px', margin: '0 auto 60px', padding: '0 24px' }}>
        <div style={{ background: '#F5F7FA', border: '1px solid #EAEEF4', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1565C0', color: '#fff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
            RL
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0D1B2A', margin: 0 }}>Ditulis oleh Tim Legal Resmiin</h4>
            <p style={{ fontSize: '13px', color: '#637B96', margin: '4px 0 0' }}>Mitra terpercaya legalitas dan insfrastruktur bisnis Indonesia. Membantu lebih dari 2.500+ perusahaan tumbuh berkelanjutan.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
