import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-start bg-slate-900 text-white px-6 overflow-hidden">
        {/* Background image & gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-[1200px] mx-auto w-full py-20">
          <div className="max-w-[640px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Bangun bisnis<br/>
              Anda secara<br/>
              <span className="text-blue-400">resmi di sini</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
              Pendirian perusahaan, perizinan, dan konsultasi bisnis — semua dalam satu tempat yang terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link href="#layanan-unggulan" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all shadow-lg shadow-blue-600/40">
                Mulai sekarang
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Konsultasi gratis, tanpa komitmen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 FEATURED BOXES */}
      <section id="layanan-unggulan" className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BOX 1 */}
          <Link href="#harga" className="group relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-xl hover:-translate-y-1 transition-all">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Pendirian &amp; legalitas<br/>bisnis Anda
              </h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-8 opacity-90 max-w-[420px]">
                Layanan pendirian PT, CV, yayasan dan pengurusan perizinan lengkap dengan proses cepat dan transparan.
              </p>
              <div>
                <span className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">Mulai dari</span>
                <span className="text-3xl font-extrabold text-white">Rp 1.000.000</span>
              </div>
            </div>
            <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg font-bold group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              ↗
            </div>
          </Link>

          {/* BOX 2 */}
          <Link href="/merek-haki" className="group relative bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-xl hover:-translate-y-1 transition-all">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Perlindungan Merek<br/>&amp; Hak Cipta HAKI
              </h2>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed mb-8 opacity-90 max-w-[420px]">
                Dapatkan Bukti Pendaftaran HAKI resmi dari DJKI untuk melindungi brand &amp; aset kekayaan intelektual bisnis Anda.
              </p>
              <div>
                <span className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-1">Harga Promo</span>
                <span className="text-3xl font-extrabold text-white">Rp 3.500.000</span>
              </div>
            </div>
            <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg font-bold group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              ↗
            </div>
          </Link>

        </div>
      </section>

      {/* TESTIMONI SECTION */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-200/60">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 mb-4">
              DI PERCAYA OLEH 2.500+ KLIEN
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Apa kata pengusaha tentang Resmiin?
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <span className="font-bold text-slate-900">Sangat Memuaskan</span>
              <span className="text-emerald-500 font-bold tracking-wider">★★★★★</span>
              <span>4.9 / 5.0 Rating CS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;Proses pendirian PT sangat cepat, dalam 5 hari kerja semua SK Kemenkumham, NIB, dan NPWP sudah lengkap. Rekening BCA juga langsung dibantu!&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">AH</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Ahmad Hendra</div>
                  <div className="text-xs text-slate-500">Direktur Utama, PT Hendra Karya</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;Konsultasi awal gratisnya sangat mencerahkan. Tim Resmiin transparan memberi arahan legalitas yang paling tepat untuk skala bisnis kami.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">DW</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Diana Wijaya</div>
                  <div className="text-xs text-slate-500">Founder, CV Wijaya Makmur</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;Pendaftaran merek HAKI keluar bukti pendaftarannya hanya 1 hari kerja. Sangat profesional &amp; tanpa biaya tersembunyi.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">RP</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Rino Pratama</div>
                  <div className="text-xs text-slate-500">CEO, Pratama Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI MISI SECTION */}
      <section id="visi-misi" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3 block">Tentang Resmiin</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Visi &amp; Misi kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 md:p-10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Visi</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Menjadi <strong className="text-blue-400">Business Infrastructure Partner</strong> paling terpercaya di Indonesia yang membantu perusahaan membangun fondasi yang kuat, bertumbuh secara berkelanjutan, dan memberikan dampak positif bagi perekonomian bangsa.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 md:p-10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Misi</h3>
              <ul className="space-y-4 text-sm md:text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Menyediakan layanan profesional yang terintegrasi untuk mendukung setiap tahap perjalanan bisnis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Membangun standar layanan yang <strong className="text-blue-300">transparan, akurat, dan tepat waktu</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Mengembangkan tim profesional dengan integritas tinggi sebagai mitra strategis bisnis Anda.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION (#harga) */}
      <section id="harga" className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-extrabold text-blue-600 mb-4 uppercase tracking-wider">
            HARGA TRANSPARAN
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Pilih paket yang<br/>sesuai kebutuhan Anda
          </h2>
          <p className="text-slate-500 text-base">Harga terjangkau dengan layanan premium. Tanpa biaya tersembunyi.</p>
        </div>

        {/* 6 OFFICIAL PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* 1. PT PERORANGAN */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Usaha Mikro</span>
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">PT Perorangan</h3>
              <p className="text-xs text-slate-500 mb-6">Legalitas resmi untuk usaha perorangan cepat &amp; mudah.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-slate-900">Rp 1.000.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> SK Kemenkumham</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> NPWP Perusahaan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> NIB (Nomor Induk Berusaha)</li>
              </ul>
            </div>
            <Link href="/pt-perorangan" className="block text-center py-3 px-6 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all">
              Pilih Paket
            </Link>
          </div>

          {/* 2. PENDIRIAN CV (PROMO) */}
          <div className="bg-white border border-emerald-300 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              🔥 Harga Promo
            </span>
            <div>
              <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider block mb-2">Usaha Kecil &amp; Menengah</span>
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Pendirian CV</h3>
              <p className="text-xs text-slate-500 mb-6">Paket lengkap pendirian CV dengan fasilitas buka rekening bank.</p>
              <div className="mb-6">
                <span className="line-through text-slate-400 text-sm font-semibold block">Rp 4.500.000</span>
                <span className="text-3xl font-extrabold text-blue-600">Rp 3.000.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Salinan Akta Pendirian CV</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> SK Kemenkumham</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> NPWP Perusahaan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> NIB (Nomor Induk Berusaha)</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Buka Rekening BCA / Mandiri</li>
              </ul>
            </div>
            <Link href="/pendirian-cv" className="block text-center py-3 px-6 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md">
              Pilih Paket
            </Link>
          </div>

          {/* 3. PENDIRIAN PT (FEATURED TERLARIS) */}
          <div className="bg-slate-900 text-white border-2 border-blue-500 rounded-3xl p-8 shadow-2xl flex flex-col justify-between h-full relative md:-translate-y-3">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              ✦ Terlaris · Hemat Rp 1,5 Juta
            </span>
            <div>
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider block mb-2">Perseroan Terbatas</span>
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Pendirian PT</h3>
              <p className="text-xs text-slate-300 mb-6">Paket lengkap pendirian Perseroan Terbatas dengan fasilitas Buka Rekening.</p>
              <div className="mb-6">
                <span className="line-through text-slate-400 text-sm font-semibold block">Rp 6.000.000</span>
                <span className="text-3xl font-extrabold text-white">Rp 4.500.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200 mb-8 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Salinan Akta Pendirian PT</li>
                <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> SK Kemenkumham</li>
                <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> NPWP Perusahaan</li>
                <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> NIB (Nomor Induk Berusaha)</li>
                <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Buka Rekening BCA / Mandiri</li>
              </ul>
            </div>
            <Link href="/pendirian-pt" className="block text-center py-3.5 px-6 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/40">
              Pilih Paket
            </Link>
          </div>

          {/* 4. PENDIRIAN YAYASAN */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Organisasi</span>
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Pendirian Yayasan</h3>
              <p className="text-xs text-slate-500 mb-6">Legalitas resmi organisasi sosial, kemanusiaan, &amp; keagamaan.</p>
              <div className="mb-6">
                <span className="line-through text-slate-400 text-sm font-semibold block">Rp 5.000.000</span>
                <span className="text-3xl font-extrabold text-slate-900">Rp 3.000.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Salinan Pendirian Yayasan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> SK Kemenkumham</li>
              </ul>
            </div>
            <Link href="/pendirian-yayasan" className="block text-center py-3 px-6 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all">
              Pilih Paket
            </Link>
          </div>

          {/* 5. PENDIRIAN PERKUMPULAN */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Komunitas / Asosiasi</span>
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Pendirian Perkumpulan</h3>
              <p className="text-xs text-slate-500 mb-6">Badan hukum berbasis keanggotaan untuk asosiasi &amp; himpunan.</p>
              <div className="mb-6">
                <span className="line-through text-slate-400 text-sm font-semibold block">Rp 5.000.000</span>
                <span className="text-3xl font-extrabold text-slate-900">Rp 3.000.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Salinan Akta Perkumpulan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> SK Kemenkumham</li>
              </ul>
            </div>
            <Link href="/pendirian-perkumpulan" className="block text-center py-3 px-6 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all">
              Pilih Paket
            </Link>
          </div>

          {/* 6. MEREK & HAKI */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Perlindungan Merek</span>
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Merek &amp; HAKI</h3>
              <p className="text-xs text-slate-500 mb-6">Perlindungan hukum nama brand, logo, &amp; hak cipta bisnis Anda.</p>
              <div className="mb-6">
                <span className="line-through text-slate-400 text-sm font-semibold block">Rp 4.500.000</span>
                <span className="text-3xl font-extrabold text-slate-900">Rp 3.500.000</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Bukti Pendaftaran HAKI</li>
              </ul>
            </div>
            <Link href="/merek-haki" className="block text-center py-3 px-6 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all">
              Pilih Paket
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
