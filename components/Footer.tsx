import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="resmiin-footer">
      <div className="resmiin-footer-inner">
        
        {/* TOP MAIN SECTION */}
        <div className="resmiin-footer-top">
          
          {/* BRAND & CTA BUTTON */}
          <div className="resmiin-footer-brand">
            <Link href="/" className="footer-logo-link">
              <img src="/logo.png" alt="Resmiin" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              Partner Infrastruktur &amp; Legalitas Bisnis Terpercaya di Indonesia.
            </p>
            <a 
              href="https://wa.me/6282260092481" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-cta-pill"
            >
              Konsultasi WA
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          {/* 4 NAVIGATION COLUMNS */}
          <div className="resmiin-footer-cols">
            
            {/* COL 1: LAYANAN */}
            <div className="footer-col">
              <h5 className="footer-col-head">Yang kami lakukan</h5>
              <ul className="footer-links">
                <li><Link href="/pt-perorangan">PT Perorangan</Link></li>
                <li><Link href="/pendirian-cv">Pendirian CV</Link></li>
                <li><Link href="/pendirian-pt">Pendirian PT</Link></li>
                <li><Link href="/pendirian-yayasan">Pendirian Yayasan</Link></li>
                <li><Link href="/pendirian-perkumpulan">Pendirian Perkumpulan</Link></li>
                <li><Link href="/merek-haki">Merek &amp; HAKI</Link></li>
              </ul>
            </div>

            {/* COL 2: PERUSAHAAN */}
            <div className="footer-col">
              <h5 className="footer-col-head">Siapa kami</h5>
              <ul className="footer-links">
                <li><Link href="/#visi-misi">Tentang kami</Link></li>
                <li><Link href="/#testimoni">Testimoni Klien</Link></li>
                <li><Link href="/blog">Blog &amp; Edukasi</Link></li>
                <li><Link href="/#harga">Paket Harga</Link></li>
              </ul>
            </div>

            {/* COL 3: MENGEKSPLORASI */}
            <div className="footer-col">
              <h5 className="footer-col-head">Mengeksplorasi</h5>
              <ul className="footer-links">
                <li><Link href="/layanan">Semua Layanan</Link></li>
                <li><Link href="/pendirian-pt">Panduan Pendirian PT</Link></li>
                <li><Link href="/blog">Panduan Legalitas</Link></li>
                <li><Link href="/#faq">Pusat Bantuan</Link></li>
              </ul>
            </div>

            {/* COL 4: PERLU BANTUAN */}
            <div className="footer-col">
              <h5 className="footer-col-head">Perlu bantuan?</h5>
              <ul className="footer-links">
                <li>
                  <a href="https://wa.me/6282260092481" target="_blank" rel="noreferrer">
                    Hubungi Kami (WhatsApp)
                  </a>
                </li>
                <li>
                  <a href="tel:082260092481">0822-6009-2481</a>
                </li>
                <li>
                  <a href="mailto:info@resmiin.com">info@resmiin.com</a>
                </li>
                <li>
                  <span style={{ color: '#8696A0', fontSize: '15px' }}>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <hr className="footer-divider" />

        {/* BOTTOM ROW */}
        <div className="resmiin-footer-bottom">
          
          {/* LEFT: COPYRIGHT & PRIVACY */}
          <div className="footer-bottom-left">
            <span className="footer-copy">2026 © Resmiin. All rights reserved.</span>
            <div className="footer-legal-links">
              <Link href="#">Ketentuan &amp; Kebijakan Privasi</Link>
              <span className="footer-dot">•</span>
              <Link href="#">Peta situs</Link>
            </div>
          </div>

          {/* CENTER: SOCIAL MEDIA ICONS */}
          <div className="footer-socials">
            
            {/* INSTAGRAM */}
            <a 
              href="https://www.instagram.com/hai.resmiin/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle"
              aria-label="Instagram"
              title="Instagram @hai.resmiin"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* TIKTOK */}
            <a 
              href="https://www.tiktok.com/@resmi.in" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle"
              aria-label="TikTok"
              title="TikTok @resmi.in"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 1 0 5.55 6.29V8.69a8.18 8.18 0 0 0 4.77 1.52V6.69z"/>
              </svg>
            </a>

            {/* WHATSAPP */}
            <a 
              href="https://wa.me/6282260092481" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle"
              aria-label="WhatsApp"
              title="WhatsApp 082260092481"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>

            {/* X / TWITTER */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle"
              aria-label="X Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YOUTUBE */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle"
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>

          </div>

          {/* RIGHT: LANGUAGE SELECTOR */}
          <div className="footer-lang-picker">
            <span>Bahasa Indonesia</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>

      </div>
    </footer>
  );
}
