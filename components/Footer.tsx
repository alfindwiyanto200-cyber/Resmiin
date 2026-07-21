import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src="/logo.png" alt="Resmiin" className="h-8 w-auto mb-4 brightness-200" />
          <p className="text-sm text-slate-400 leading-relaxed">
            Business Infrastructure Partner paling terpercaya di Indonesia. Membantu perusahaan membangun fondasi legalitas yang kuat &amp; bertumbuh secara berkelanjutan.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Layanan Utama</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/pt-perorangan" className="hover:text-blue-400 transition-colors">PT Perorangan (Rp 1 Juta)</Link></li>
            <li><Link href="/pendirian-cv" className="hover:text-blue-400 transition-colors">Pendirian CV (Promo)</Link></li>
            <li><Link href="/pendirian-pt" className="hover:text-blue-400 transition-colors">Pendirian PT (Terlaris)</Link></li>
            <li><Link href="/pendirian-yayasan" className="hover:text-blue-400 transition-colors">Pendirian Yayasan</Link></li>
            <li><Link href="/pendirian-perkumpulan" className="hover:text-blue-400 transition-colors">Pendirian Perkumpulan</Link></li>
            <li><Link href="/merek-haki" className="hover:text-blue-400 transition-colors">Merek &amp; HAKI</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Perusahaan</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#visi-misi" className="hover:text-blue-400 transition-colors">Visi &amp; Misi</Link></li>
            <li><Link href="/#testimoni" className="hover:text-blue-400 transition-colors">Testimoni</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog &amp; Artikel</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Kontak</h4>
          <div className="space-y-2.5 text-sm text-slate-400">
            <p>📧 info@resmiin.com</p>
            <p>📱 +62 821-0000-0000</p>
            <p>📍 Jakarta, Indonesia</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; 2024 Resmiin. Semua hak dilindungi.</p>
        <p>Business Infrastructure Partner Terpercaya di Indonesia</p>
      </div>
    </footer>
  );
}
