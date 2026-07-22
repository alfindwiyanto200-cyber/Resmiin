'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleDropdown = (name: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const closeDropdown = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '76px' }}>
          <Link href="/" className="nav-logo-wrap" onClick={closeDropdown} style={{ overflow: 'visible', marginRight: '20px' }}>
            <img src="/logo.png" alt="Resmiin" className="nav-logo" style={{ height: '72px', width: 'auto', objectFit: 'contain', transform: 'scale(1.65)', transformOrigin: 'left center' }} />
          </Link>

          <nav className="nav-menu" id="navMenu">
            <Link href="/#harga" className="nav-item" onClick={closeDropdown}>Harga</Link>

            {/* MEGA DROPDOWN: LAYANAN */}
            <div 
              className={`nav-item has-dropdown mega-dropdown-wrap ${activeDropdown === 'layanan' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('layanan')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="nav-item-label" 
                onClick={() => toggleDropdown('layanan')}
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Layanan{' '}
                <svg width="11" height="11" viewBox="0 0 12 12" style={{ transform: activeDropdown === 'layanan' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <div 
                className={`nav-dropdown mega-dropdown ${activeDropdown === 'layanan' ? 'is-open' : ''}`}
                onMouseEnter={() => handleMouseEnter('layanan')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mega-cols">
                  {/* BADAN USASA */}
                  <div className="mega-col">
                    <p className="mega-head">BADAN USASA &amp; PT</p>
                    <Link href="/pt-perorangan" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#EBF5FF' }}>👤</div>
                      <div className="mega-text">
                        <span className="mega-name">PT Perorangan</span>
                        <span className="mega-desc">SK Kemenkumham, NPWP, NIB • <strong>Rp 1.000.000</strong></span>
                      </div>
                    </Link>
                    <Link href="/pendirian-cv" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#F0FDF4' }}>📋</div>
                      <div className="mega-text">
                        <span className="mega-name">
                          Pendirian CV <span className="mega-badge mega-badge--green">PROMO</span>
                        </span>
                        <span className="mega-desc">Akta, SK, NPWP, NIB, Buka Rekening • <strong>Rp 3.000.000</strong></span>
                      </div>
                    </Link>
                    <Link href="/pendirian-pt" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#EBF5FF' }}>🏢</div>
                      <div className="mega-text">
                        <span className="mega-name">
                          Pendirian PT <span className="mega-badge">TERLARIS</span>
                        </span>
                        <span className="mega-desc">Akta, SK, NPWP, NIB, Buka Rekening • <strong>Rp 4.500.000</strong></span>
                      </div>
                    </Link>
                  </div>

                  {/* ORGANISASI */}
                  <div className="mega-col">
                    <p className="mega-head">ORGANISASI &amp; NIRLABA</p>
                    <Link href="/pendirian-yayasan" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#FFF7ED' }}>🏛️</div>
                      <div className="mega-text">
                        <span className="mega-name">
                          Pendirian Yayasan <span className="mega-badge mega-badge--green">PROMO</span>
                        </span>
                        <span className="mega-desc">Salinan Pendirian &amp; SK Kemenkumham • <strong>Rp 3.000.000</strong></span>
                      </div>
                    </Link>
                    <Link href="/pendirian-perkumpulan" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#F5F3FF' }}>🤝</div>
                      <div className="mega-text">
                        <span className="mega-name">
                          Pendirian Perkumpulan <span className="mega-badge mega-badge--green">PROMO</span>
                        </span>
                        <span className="mega-desc">Salinan Akta &amp; SK Kemenkumham • <strong>Rp 3.000.000</strong></span>
                      </div>
                    </Link>
                  </div>

                  {/* PERLINDUNGAN BRAND */}
                  <div className="mega-col">
                    <p className="mega-head">HAK KEKAYAAN INTELEKTUAL</p>
                    <Link href="/merek-haki" className="mega-item" onClick={closeDropdown}>
                      <div className="mega-ico" style={{ background: '#EBF5FF' }}>🛡️</div>
                      <div className="mega-text">
                        <span className="mega-name">
                          Merek &amp; HAKI <span className="mega-badge mega-badge--green">PROMO</span>
                        </span>
                        <span className="mega-desc">Bukti Pendaftaran HAKI Resmi • <strong>Rp 3.500.000</strong></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* DROPDOWN: MENGEKSPLORASI */}
            <div 
              className={`nav-item has-dropdown ${activeDropdown === 'mengeksplorasi' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('mengeksplorasi')}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="nav-item-label" 
                onClick={() => toggleDropdown('mengeksplorasi')}
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Mengeksplorasi{' '}
                <svg width="11" height="11" viewBox="0 0 12 12" style={{ transform: activeDropdown === 'mengeksplorasi' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <div 
                className={`nav-dropdown ${activeDropdown === 'mengeksplorasi' ? 'is-open' : ''}`}
                onMouseEnter={() => handleMouseEnter('mengeksplorasi')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown-cols">
                  <div>
                    <p className="drop-head">PANDUAN &amp; ARTIKEL</p>
                    <Link href="/blog" className="drop-link" onClick={closeDropdown}>Blog &amp; Artikel</Link>
                    <Link href="/pendirian-pt" className="drop-link" onClick={closeDropdown}>Panduan Mendirikan PT</Link>
                    <Link href="/layanan" className="drop-link" onClick={closeDropdown}>Semua Layanan Kami</Link>
                  </div>
                  <div>
                    <p className="drop-head">PERUSAHAAN</p>
                    <Link href="/#visi-misi" className="drop-link" onClick={closeDropdown}>Visi &amp; Misi</Link>
                    <Link href="/#testimoni" className="drop-link" onClick={closeDropdown}>Testimoni Klien</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-actions">
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="btn-nav-ghost">
              Hubungi Kami
            </a>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="btn-nav-primary">
              Mulai Sekarang
            </a>
          </div>

          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} id="mobileNav">
        <Link href="/#harga" className="mob-link" onClick={() => setMobileOpen(false)}>Harga</Link>
        <Link href="/layanan" className="mob-link" onClick={() => setMobileOpen(false)}>Semua Layanan</Link>
        <Link href="/pt-perorangan" className="mob-link" onClick={() => setMobileOpen(false)}>PT Perorangan (Rp 1.000.000)</Link>
        <Link href="/pendirian-cv" className="mob-link" onClick={() => setMobileOpen(false)}>Pendirian CV (Rp 3.000.000)</Link>
        <Link href="/pendirian-pt" className="mob-link" onClick={() => setMobileOpen(false)}>Pendirian PT (Rp 4.500.000)</Link>
        <Link href="/pendirian-yayasan" className="mob-link" onClick={() => setMobileOpen(false)}>Pendirian Yayasan</Link>
        <Link href="/pendirian-perkumpulan" className="mob-link" onClick={() => setMobileOpen(false)}>Pendirian Perkumpulan</Link>
        <Link href="/merek-haki" className="mob-link" onClick={() => setMobileOpen(false)}>Merek &amp; HAKI</Link>
        <Link href="/blog" className="mob-link" onClick={() => setMobileOpen(false)}>Blog &amp; Artikel</Link>
        <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="btn-nav-primary" style={{ marginTop: '8px' }}>
          Mulai Sekarang
        </a>
      </div>
    </>
  );
}
