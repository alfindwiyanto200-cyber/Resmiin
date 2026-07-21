import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Resmiin" className="footer-logo" />
          <p>Business Infrastructure Partner paling terpercaya di Indonesia.</p>
        </div>
        <div className="footer-col">
          <h4>Layanan Utama</h4>
          <Link href="/pt-perorangan">PT Perorangan</Link>
          <Link href="/pendirian-cv">Pendirian CV</Link>
          <Link href="/pendirian-pt">Pendirian PT</Link>
          <Link href="/pendirian-yayasan">Pendirian Yayasan</Link>
          <Link href="/pendirian-perkumpulan">Pendirian Perkumpulan</Link>
          <Link href="/merek-haki">Merek &amp; HAKI</Link>
        </div>
        <div className="footer-col">
          <h4>Perusahaan</h4>
          <Link href="/#visi-misi">Visi &amp; Misi</Link>
          <Link href="/#testimoni">Testimoni</Link>
          <Link href="/blog">Blog &amp; Artikel</Link>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          <div className="footer-contact">
            <p>📧 info@resmiin.com</p>
            <p>📱 +62 821-0000-0000</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Resmiin. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}
