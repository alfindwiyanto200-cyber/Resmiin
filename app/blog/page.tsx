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
    <div className="bg-white min-h-screen">
      
      {/* BLOG HERO */}
      <section className="pt-24 pb-10 px-6 max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
          Blog &amp; Panduan Bisnis
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-[620px] mb-8 leading-relaxed">
          Dapatkan wawasan praktis seputar legalitas perusahaan, perpajakan, perizinan usaha, dan strategi mengembangkan bisnis di Indonesia.
        </p>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-100 no-scrollbar">
          <button className="px-4 py-2 rounded-full text-xs font-bold bg-blue-600 text-white whitespace-nowrap">
            Semua Artikel
          </button>
          <button className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">
            Pendirian PT &amp; CV
          </button>
          <button className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">
            Perizinan OSS NIB
          </button>
          <button className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">
            Perpajakan Badan
          </button>
          <button className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap">
            Perlindungan HAKI
          </button>
        </div>
      </section>

      {/* TOP STORIES (Hostinger Image 2 style) */}
      <section className="py-12 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Top Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((art) => (
            <Link key={art._id} href={`/blog/${art.slug.current}`} className="group flex flex-col">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                <img
                  src={art.coverImage || '/assets/blog-1.png'}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                <span>{art.publishedAt}</span>
                <span>•</span>
                <span>{art.category}</span>
                <span>•</span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                {art.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                {art.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* EDUKASI BISNIS GRID (Hostinger Image 3 style) */}
      <section className="pb-20 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Panduan &amp; Edukasi Bisnis
        </h2>
        <p className="text-sm text-slate-500 mb-8">Dapatkan wawasan mendalam tentang pengelolaan legalitas &amp; kepatuhan pajak.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="group flex flex-col">
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 flex items-center justify-center text-white font-extrabold text-lg mb-5">
              PT Perorangan vs PT Biasa
            </div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">
              20 MEI • EDUKASI LEGAL • 5MIN BACA
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              PT Perorangan vs PT Biasa: Mana Paket yang Paling Cocok untuk Bisnis Anda?
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
              Bagi pengusaha pemula dengan anggaran efisien, PT Perorangan bisa jadi opsi tepat. Ketahui kelebihan dan perbandingannya.
            </p>
          </Link>

          <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="group flex flex-col">
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 p-6 flex items-center justify-center text-white font-extrabold text-lg mb-5">
              Perizinan NIB OSS RBA
            </div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">
              29 APR • PERIZINAN • 4MIN BACA
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              Panduan Memilih Kode KBLI yang Tepat Saat Mengurus NIB di OSS RBA
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
              Kesalahan memilih KBLI bisa menghambat perizinan operasional bisnis Anda. Pelajari cara penentuan KBLI yang pas.
            </p>
          </Link>

          <Link href="/blog/cara-terbaru-mendirikan-pt-online" className="group flex flex-col">
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 p-6 flex items-center justify-center text-white font-extrabold text-lg mb-5">
              Kepatuhan Pajak Badan
            </div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">
              05 FEB • PERPAJAKAN • 6MIN BACA
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              Kewajiban Pajak Perusahaan Baru: Apa yang Wajib Dilaporkan Setiap Bulan?
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
              Memahami PPh 21, PPh 23, dan PPN untuk badan usaha baru agar terhindar dari denda administrasi pajak.
            </p>
          </Link>

        </div>
      </section>
    </div>
  );
}
