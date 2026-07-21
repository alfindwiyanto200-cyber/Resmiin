'use client';

import React from 'react';
import Link from 'next/link';

interface Feature {
  ico: string;
  title: string;
  desc: string;
}

interface Step {
  title: string;
  desc: string;
}

interface Related {
  slug: string;
  name: string;
  ico: string;
  bg: string;
  price: string;
}

interface ServiceDetailProps {
  badge: string;
  title: string;
  checklist: string[];
  price: string;
  oldPrice?: string | null;
  ctaText: string;
  docTitle: string;
  docIco: string;
  duration: string;
  features: Feature[];
  steps: Step[];
  related: Related[];
  waMessage: string;
}

export default function ServiceDetailView(props: ServiceDetailProps) {
  const {
    badge,
    title,
    checklist,
    price,
    oldPrice,
    ctaText,
    docTitle,
    docIco,
    duration,
    features,
    steps,
    related,
    waMessage,
  } = props;

  const waUrl = `https://wa.me/62000000000?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-white">
      {/* BREADCRUMB */}
      <div className="bg-slate-50 border-b border-slate-100 py-3 px-6 text-xs text-slate-500">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Beranda</Link>
          <span>›</span>
          <Link href="/#harga" className="hover:text-blue-600">Layanan</Link>
          <span>›</span>
          <span className="font-semibold text-slate-900">{title}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto min-h-[calc(100vh-160px)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 mb-6 uppercase tracking-wider">
              {badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              {title}
            </h1>

            <ul className="space-y-3 mb-8">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base md:text-lg text-slate-700 font-medium">
                  <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* PRICE WRAP */}
            <div className="mb-8">
              <span className="block text-xs font-medium text-slate-400 mb-1">Mulai dari</span>
              <div className="flex items-baseline gap-3">
                {oldPrice && (
                  <span className="line-through text-slate-400 font-semibold text-xl md:text-2xl">
                    {oldPrice}
                  </span>
                )}
                <span className="text-3xl md:text-4xl font-extrabold text-blue-600">
                  {price}
                </span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 mb-6"
            >
              {ctaText}
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Konsultasi gratis sebelum memulai</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="text-emerald-500 font-bold tracking-wider">★★★★★</span>
              <span>Dipercaya lebih dari <strong className="text-slate-900 font-bold">2.500+ klien</strong></span>
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="flex justify-center">
            <div className="w-full max-w-[440px] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden relative">
              
              {/* CARD HEADER */}
              <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100/60 flex items-center justify-center text-2xl shrink-0">
                  {docIco}
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-bold text-slate-900">{docTitle}</div>
                  <div className="text-xs text-slate-400">Resmiin • Dokumen Legalitas</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  ✓ Terverifikasi
                </span>
              </div>

              {/* CARD BODY PROGRESS */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Konsultasi &amp; Pengumpulan Data</div>
                    <div className="text-xs text-emerald-600 font-semibold">Selesai</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Pembuatan &amp; Verifikasi Akta</div>
                    <div className="text-xs text-emerald-600 font-semibold">Selesai</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">SK Kemenkumham &amp; NIB</div>
                    <div className="text-xs text-blue-600 font-semibold">Dalam proses…</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 bg-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-600">Dokumen Complete Diserahkan</div>
                    <div className="text-xs text-slate-400">Menunggu</div>
                  </div>
                </div>
              </div>

              {/* FLOAT BADGE */}
              <div className="absolute -bottom-2 right-6 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-semibold text-slate-700 shadow-md flex items-center gap-1.5 animate-bounce">
                <span>⚡</span>
                <span>Estimasi <strong className="text-blue-600">{duration}</strong></span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section className="bg-slate-50 border-t border-slate-200/60 py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">
            Yang Anda dapatkan dalam Paket {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group">
                <div className="text-3xl mb-3">{feat.ico}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-slate-900 py-20 px-6 text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              Tahapan proses {title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Proses praktis &amp; transparan tanpa kerumitan bersama tim hukum profesional Resmiin.
            </p>
            <a href={waUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-400 hover:text-white transition-colors">
              Tanya CS Kami →
            </a>
          </div>

          <div className="md:col-span-2 space-y-6">
            {steps.map((st, idx) => (
              <div key={idx} className="flex gap-5 pb-6 border-b border-slate-800 last:border-0 last:pb-0">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-extrabold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{st.title}</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-8">
            Pilihan layanan legalitas lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((rel, idx) => (
              <Link
                key={idx}
                href={`/${rel.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: rel.bg }}>
                  {rel.ico}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{rel.name}</div>
                  <div className="text-xs text-slate-500">{rel.price} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 block">Mulai Hari Ini</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Siap mendirikan {title}?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            Tim Resmiin siap mendampingi seluruh kebutuhan legalitas bisnis Anda dengan jaminan resmi &amp; garansi proses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30"
            >
              Chat WhatsApp
            </a>
            <a
              href="mailto:info@resmiin.com"
              className="px-8 py-3.5 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
