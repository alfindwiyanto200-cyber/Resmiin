'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Resmiin" className="h-8 w-auto object-contain" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-semibold text-slate-700">
          <Link href="/#harga" className="hover:text-blue-600 transition-colors">
            Harga
          </Link>

          {/* MEGA DROPDOWN: LAYANAN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('layanan')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-5 focus:outline-none">
              <span>Layanan</span>
              <svg width="11" height="11" viewBox="0 0 12 12" className={`transition-transform duration-200 ${activeDropdown === 'layanan' ? 'rotate-180 text-blue-600' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            </button>

            {/* MEGA DROPDOWN PANEL */}
            {activeDropdown === 'layanan' && (
              <div 
                className="fixed top-16 left-0 right-0 w-full bg-white border-b border-slate-200 shadow-xl py-8 px-6 transition-all animate-fade-in"
                onMouseEnter={() => handleMouseEnter('layanan')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-8">
                  
                  {/* COL 1: BADAN USASA */}
                  <div className="border-r border-slate-100 pr-6">
                    <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-4 pb-2 border-b border-slate-100">
                      BADAN USASA &amp; PT
                    </p>
                    <Link href="/pt-perorangan" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg shrink-0">👤</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">PT Perorangan</div>
                        <div className="text-xs text-slate-500">SK Kemenkumham, NPWP, NIB • <strong className="text-slate-800">Rp 1.000.000</strong></div>
                      </div>
                    </Link>
                    <Link href="/pendirian-cv" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group mt-1">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg shrink-0">📋</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          Pendirian CV <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">PROMO</span>
                        </div>
                        <div className="text-xs text-slate-500">Akta, SK, NPWP, NIB, Rekening • <strong className="text-slate-800">Rp 3.000.000</strong></div>
                      </div>
                    </Link>
                    <Link href="/pendirian-pt" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group mt-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg shrink-0">🏢</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          Pendirian PT <span className="text-[9px] font-extrabold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase">TERLARIS</span>
                        </div>
                        <div className="text-xs text-slate-500">Akta, SK, NPWP, NIB, Rekening • <strong className="text-slate-800">Rp 4.500.000</strong></div>
                      </div>
                    </Link>
                  </div>

                  {/* COL 2: ORGANISASI */}
                  <div className="border-r border-slate-100 pr-6">
                    <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-4 pb-2 border-b border-slate-100">
                      ORGANISASI &amp; NIRLABA
                    </p>
                    <Link href="/pendirian-yayasan" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg shrink-0">🏛️</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          Pendirian Yayasan <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">PROMO</span>
                        </div>
                        <div className="text-xs text-slate-500">Salinan Pendirian &amp; SK • <strong className="text-slate-800">Rp 3.000.000</strong></div>
                      </div>
                    </Link>
                    <Link href="/pendirian-perkumpulan" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group mt-1">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-lg shrink-0">🤝</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          Pendirian Perkumpulan <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">PROMO</span>
                        </div>
                        <div className="text-xs text-slate-500">Salinan Akta &amp; SK Kemenkumham • <strong className="text-slate-800">Rp 3.000.000</strong></div>
                      </div>
                    </Link>
                  </div>

                  {/* COL 3: HAKI */}
                  <div>
                    <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-4 pb-2 border-b border-slate-100">
                      HAK KEKAYAAN INTELEKTUAL
                    </p>
                    <Link href="/merek-haki" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg shrink-0">🛡️</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          Merek &amp; HAKI <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">PROMO</span>
                        </div>
                        <div className="text-xs text-slate-500">Bukti Pendaftaran HAKI Resmi • <strong className="text-slate-800">Rp 3.500.000</strong></div>
                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* DROPDOWN: MENGEKSPLORASI */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('eksplor')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-5 focus:outline-none">
              <span>Mengeksplorasi</span>
              <svg width="11" height="11" viewBox="0 0 12 12" className={`transition-transform duration-200 ${activeDropdown === 'eksplor' ? 'rotate-180 text-blue-600' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            </button>

            {activeDropdown === 'eksplor' && (
              <div 
                className="absolute top-16 left-1/2 -translate-x-1/2 w-96 bg-white border border-slate-200 rounded-2xl shadow-xl p-6 transition-all animate-fade-in"
                onMouseEnter={() => handleMouseEnter('eksplor')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-3">PANDUAN</p>
                    <Link href="/blog" className="block py-1.5 text-sm font-semibold text-blue-600 hover:underline">Blog &amp; Artikel</Link>
                    <Link href="/pendirian-pt" className="block py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600">Panduan Mendirikan PT</Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-3">PERUSAHAAN</p>
                    <Link href="/#visi-misi" className="block py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600">Visi &amp; Misi</Link>
                    <Link href="/#testimoni" className="block py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600">Testimoni</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/62000000000" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
            Hubungi Kami
          </a>
          <Link href="/#harga" className="px-5 py-2.5 rounded-lg text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20">
            Mulai Sekarang
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden p-2 text-slate-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-3 text-base font-semibold">
          <Link href="/#harga" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100">Harga</Link>
          <Link href="/pt-perorangan" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 text-blue-600">PT Perorangan (Rp 1.000.000)</Link>
          <Link href="/pendirian-cv" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 text-blue-600">Pendirian CV (Rp 3.000.000)</Link>
          <Link href="/pendirian-pt" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100 text-blue-600">Pendirian PT (Rp 4.500.000)</Link>
          <Link href="/pendirian-yayasan" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100">Pendirian Yayasan</Link>
          <Link href="/pendirian-perkumpulan" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100">Pendirian Perkumpulan</Link>
          <Link href="/merek-haki" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100">Merek &amp; HAKI</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-2 border-b border-slate-100">Blog &amp; Artikel</Link>
          <a href="https://wa.me/62000000000" target="_blank" rel="noreferrer" className="mt-2 text-center py-3 rounded-lg bg-blue-600 text-white font-bold">Mulai Sekarang</a>
        </div>
      )}
    </header>
  );
}
