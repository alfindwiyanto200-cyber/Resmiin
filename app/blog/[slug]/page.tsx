import React from 'react';
import Link from 'next/link';
import { FALLBACK_ARTICLES } from '@/sanity/lib/client';
import type { Metadata } from 'next';

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
    <article className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="pt-24 pb-8 px-6 max-w-[860px] mx-auto">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-600 mb-5">
          <span>{article.publishedAt}</span>
          <span>•</span>
          <span>Oleh Tim Hukum Resmiin</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
          {article.title}
        </h1>
      </header>

      {/* FEATURED BANNER IMAGE */}
      <div className="max-w-[920px] mx-auto px-6 mb-10">
        <img
          src={article.coverImage || '/assets/blog-1.png'}
          alt={article.title}
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* TOOLBAR */}
      <div className="max-w-[760px] mx-auto px-6 mb-10 pb-5 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div>Kategori: <strong className="text-slate-900">{article.category} • {article.readTime}</strong></div>
        <div className="flex items-center gap-2">
          <span>Bagikan:</span>
          <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 text-slate-700 hover:text-blue-600">🔗</button>
          <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 text-slate-700 hover:text-blue-600">𝕏</button>
          <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 text-slate-700 hover:text-blue-600">in</button>
        </div>
      </div>

      {/* BODY CONTENT */}
      <main className="max-w-[760px] mx-auto px-6 pb-20 text-base md:text-lg text-slate-800 leading-relaxed space-y-6">
        <p>
          Mendirikan Perseroan Terbatas (PT) dulu diidentikkan dengan proses birokrasi yang memakan waktu berminggu-minggu, penumpukan berkas fisik, dan ketidakpastian status hukum. Namun, berkat digitalisasi layanan di Kementerian Hukum dan HAM serta integrasi Online Single Submission (OSS RBA), proses pendirian PT kini <strong className="text-slate-900 font-bold">dapat diselesaikan jauh lebih cepat hanya dalam 3 hingga 5 hari kerja.</strong>
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 py-3 my-8 bg-blue-50/60 rounded-r-2xl italic text-slate-900 text-lg leading-relaxed">
          &ldquo;Lebih dari <strong className="font-bold">80% pengusaha baru</strong> di Indonesia menghabiskan waktu terlalu lama mengurus berkas awal. Melalui layanan terintegrasi Resmiin, seluruh tahapan Notaris hingga NIB dipangkas menjadi hitungan hari.&rdquo;
          <span className="block text-xs font-bold text-slate-500 not-italic mt-2">— Tim Legal Corporate Resmiin</span>
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 pt-6 tracking-tight">
          Revolusi Layanan Pendirian PT Online
        </h2>

        <p>
          Sistem pengesahan badan hukum yang transparan memungkinkan notaris dan pelaku usaha melakukan verifikasi nama perusahaan serta pemesanan akta secara instan. Kombinasi ini <strong className="text-slate-900 font-bold">menghemat waktu hingga berhari-hari</strong> dibandingkan metode konvensional.
        </p>

        <ul className="space-y-3 pt-2">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl leading-none">•</span>
            <span><strong className="text-slate-900">Salinan Akta Pendirian Notaris:</strong> Dibuat oleh Notaris resmi berlisensi dengan draf Anggaran Dasar yang disesuaikan kebutuhan bisnis Anda.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl leading-none">•</span>
            <span><strong className="text-slate-900">SK Pengesahan Kemenkumham:</strong> Surat Keputusan resmi dari Menteri Hukum &amp; HAM RI yang menandakan PT Anda sah sebagai badan hukum berdiri.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-xl leading-none">•</span>
            <span><strong className="text-slate-900">NIB (Nomor Induk Berusaha) OSS:</strong> Berfungsi sebagai identitas usaha tunggal, pengganti SIUP dan TDP.</span>
          </li>
        </ul>
      </main>

      {/* AUTHOR BOX */}
      <div className="max-w-[760px] mx-auto px-6 pb-16">
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shrink-0">
            RL
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">Ditulis oleh Tim Legal Resmiin</h4>
            <p className="text-xs text-slate-500 mt-1">Mitra terpercaya legalitas dan insfrastruktur bisnis Indonesia. Membantu lebih dari 2.500+ perusahaan tumbuh berkelanjutan.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
