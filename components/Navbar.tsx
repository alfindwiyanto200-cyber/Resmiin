'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mobile accordion states
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const [activeMobileSubcat, setActiveMobileSubcat] = useState<string | null>(null);

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
    setMobileOpen(false);
    setMobileLayananOpen(false);
    setActiveMobileSubcat(null);
  };

  const toggleMobileSubcat = (cat: string) => {
    setActiveMobileSubcat(prev => (prev === cat ? null : cat));
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '76px' }}>
          <Link href="/" className="nav-logo-wrap" onClick={closeDropdown} style={{ display: 'flex', alignItems: 'center', minWidth: '180px', marginRight: '24px' }}>
            <img src="/logo.png" alt="Resmiin" className="nav-logo" style={{ height: '62px', width: 'auto', objectFit: 'contain', transform: 'scale(1.3)', transformOrigin: 'left center' }} />
          </Link>

          <nav className="nav-menu" id="navMenu">
            <Link href="/tentang-kami" className="nav-item" onClick={closeDropdown}>
              Tentang Kami
            </Link>

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
                  {/* KOLOM 1: LEGALITAS & STANDARISASI */}
                  <div className="mega-col">
                    <div className="mega-section">
                      <p className="mega-head">LEGALITAS BISNIS</p>
                      <Link href="/pt-perorangan" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#EBF5FF' }}>👤</div>
                        <div className="mega-text">
                          <span className="mega-name">PT Perorangan</span>
                          <span className="mega-desc">SK Kemenkumham, NPWP, NIB</span>
                        </div>
                      </Link>
                      <Link href="/pendirian-cv" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#F0FDF4' }}>📋</div>
                        <div className="mega-text">
                          <span className="mega-name">Pendirian CV <span className="mega-badge mega-badge--green">PROMO</span></span>
                          <span className="mega-desc">Akta, SK, NPWP, NIB, Buka Rekening</span>
                        </div>
                      </Link>
                      <Link href="/pendirian-pt" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#EBF5FF' }}>🏢</div>
                        <div className="mega-text">
                          <span className="mega-name">Pendirian PT <span className="mega-badge">TERLARIS</span></span>
                          <span className="mega-desc">Akta, SK, NPWP, NIB, Buka Rekening</span>
                        </div>
                      </Link>
                      <Link href="/pendirian-yayasan" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#FFF7ED' }}>🏛️</div>
                        <div className="mega-text">
                          <span className="mega-name">Pendirian Yayasan</span>
                          <span className="mega-desc">Akta &amp; SK Kemenkumham Lengkap</span>
                        </div>
                      </Link>
                      <Link href="/pendirian-perkumpulan" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#F5F3FF' }}>🤝</div>
                        <div className="mega-text">
                          <span className="mega-name">Pendirian Perkumpulan <span className="mega-badge mega-badge--green">PROMO</span></span>
                          <span className="mega-desc">Akta &amp; SK Kemenkumham Lengkap</span>
                        </div>
                      </Link>
                    </div>

                    <div className="mega-section" style={{ marginTop: '20px' }}>
                      <p className="mega-head">STANDARISASI BISNIS</p>
                      <Link href="/layanan/sertifikasi-iso" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#FDF2F8' }}>🏅</div>
                        <div className="mega-text">
                          <span className="mega-name">Sertifikasi ISO</span>
                          <span className="mega-desc">ISO 9001, 14001, 45001, dll.</span>
                        </div>
                      </Link>
                      <Link href="/layanan/sni" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#ECFDF5' }}>🛡️</div>
                        <div className="mega-text">
                          <span className="mega-name">Standar Nasional Indonesia (SNI)</span>
                          <span className="mega-desc">Sertifikasi mutu &amp; kepatuhan produk</span>
                        </div>
                      </Link>
                      <Link href="/layanan/sop" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#F3F4F6' }}>⚙️</div>
                        <div className="mega-text">
                          <span className="mega-name">Standarisasi SOP</span>
                          <span className="mega-desc">Penyusunan Standard Operating Procedure</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* KOLOM 2: PERIZINAN & PERLINDUNGAN MEREK */}
                  <div className="mega-col">
                    <div className="mega-section">
                      <p className="mega-head">PERIZINAN BERUSAHA</p>
                      <Link href="/layanan/nib" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#F0FDF4' }}>📄</div>
                        <div className="mega-text">
                          <span className="mega-name">Nomor Induk Berusaha (NIB)</span>
                          <span className="mega-desc">Identitas pelaku usaha resmi via OSS</span>
                        </div>
                      </Link>
                      <Link href="/layanan/sertifikat-standar" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#FEF3C7' }}>📜</div>
                        <div className="mega-text">
                          <span className="mega-name">Sertifikat Standar</span>
                          <span className="mega-desc">Pemenuhan standar usaha terverifikasi</span>
                        </div>
                      </Link>
                      <Link href="/layanan/perizinan-usaha" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#FFF1F2' }}>🔑</div>
                        <div className="mega-text">
                          <span className="mega-name">Perizinan Usaha</span>
                          <span className="mega-desc">Izin khusus operasional &amp; komersial</span>
                        </div>
                      </Link>
                    </div>

                    <div className="mega-section" style={{ marginTop: '20px' }}>
                      <p className="mega-head">PERLINDUNGAN MEREK &amp; HKI</p>
                      <Link href="/layanan/merek-haki" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#EBF5FF' }}>🛡️</div>
                        <div className="mega-text">
                          <span className="mega-name">Merek &amp; HKI</span>
                          <span className="mega-desc">Pendaftaran Merek, Hak Cipta &amp; Paten</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* KOLOM 3: PEMASARAN DIGITAL & VIRTUAL OFFICE */}
                  <div className="mega-col">
                    <div className="mega-section">
                      <p className="mega-head">PEMASARAN DIGITAL</p>
                      <Link href="/layanan/pemasaran-digital" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#EEF2F6' }}>📈</div>
                        <div className="mega-text">
                          <span className="mega-name">Digital Marketing</span>
                          <span className="mega-desc">SEO, Ads, Content &amp; Landing Page</span>
                        </div>
                      </Link>
                    </div>

                    <div className="mega-section" style={{ marginTop: '20px' }}>
                      <p className="mega-head">VIRTUAL OFFICE</p>
                      <Link href="/layanan/virtual-office" className="mega-item" onClick={closeDropdown}>
                        <div className="mega-ico" style={{ background: '#F5F3FF' }}>🏢</div>
                        <div className="mega-text">
                          <span className="mega-name">Virtual Office</span>
                          <span className="mega-desc">Alamat bisnis, surat menyurat &amp; ruang meeting</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/solusi" className="nav-item" onClick={closeDropdown}>
              Solusi
            </Link>

            <Link href="/blog" className="nav-item" onClick={closeDropdown}>
              Berita &amp; Artikel
            </Link>
          </nav>

          <div className="nav-actions">
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="btn-nav-primary">
              Hubungi Kami
            </a>
          </div>

          <button
            className={`burger ${mobileOpen ? 'open' : ''}`}
            id="burger"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAV (ACCORDION STYLE) */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} id="mobileNav" style={{ display: mobileOpen ? 'flex' : 'none', flexDirection: 'column', gap: '8px', overflowY: 'auto', maxHeight: 'calc(100vh - 76px)' }}>
        <Link href="/tentang-kami" className="mob-link" onClick={closeDropdown}>Tentang Kami</Link>
        
        {/* LAYANAN ACCORDION */}
        <div className="mob-accordion">
          <button 
            className={`mob-link mob-accordion-trigger ${mobileLayananOpen ? 'active' : ''}`}
            onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            Layanan
            <svg width="12" height="12" viewBox="0 0 12 12" style={{ transform: mobileLayananOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </svg>
          </button>
          
          {mobileLayananOpen && (
            <div className="mob-accordion-content" style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              
              {/* SUBCAT: LEGALITAS */}
              <div className="mob-sub-accordion">
                <button 
                  className="mob-sub-trigger"
                  onClick={() => toggleMobileSubcat('legalitas')}
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-mid)', border: 'none', background: 'none', textAlign: 'left' }}
                >
                  Legalitas Bisnis
                  <span>{activeMobileSubcat === 'legalitas' ? '−' : '+'}</span>
                </button>
                {activeMobileSubcat === 'legalitas' && (
                  <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column' }}>
                    <Link href="/pt-perorangan" className="mob-sub-link" onClick={closeDropdown}>PT Perorangan</Link>
                    <Link href="/pendirian-cv" className="mob-sub-link" onClick={closeDropdown}>Pendirian CV</Link>
                    <Link href="/pendirian-pt" className="mob-sub-link" onClick={closeDropdown}>Pendirian PT</Link>
                    <Link href="/pendirian-yayasan" className="mob-sub-link" onClick={closeDropdown}>Pendirian Yayasan</Link>
                    <Link href="/pendirian-perkumpulan" className="mob-sub-link" onClick={closeDropdown}>Pendirian Perkumpulan</Link>
                  </div>
                )}
              </div>

              {/* SUBCAT: STANDARISASI */}
              <div className="mob-sub-accordion">
                <button 
                  className="mob-sub-trigger"
                  onClick={() => toggleMobileSubcat('standarisasi')}
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-mid)', border: 'none', background: 'none', textAlign: 'left' }}
                >
                  Standarisasi Bisnis
                  <span>{activeMobileSubcat === 'standarisasi' ? '−' : '+'}</span>
                </button>
                {activeMobileSubcat === 'standarisasi' && (
                  <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column' }}>
                    <Link href="/layanan/sertifikasi-iso" className="mob-sub-link" onClick={closeDropdown}>Sertifikasi ISO</Link>
                    <Link href="/layanan/sni" className="mob-sub-link" onClick={closeDropdown}>Standar Nasional Indonesia (SNI)</Link>
                    <Link href="/layanan/sop" className="mob-sub-link" onClick={closeDropdown}>Standarisasi SOP</Link>
                  </div>
                )}
              </div>

              {/* SUBCAT: PERIZINAN */}
              <div className="mob-sub-accordion">
                <button 
                  className="mob-sub-trigger"
                  onClick={() => toggleMobileSubcat('perizinan')}
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '8px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--text-mid)', border: 'none', background: 'none', textAlign: 'left' }}
                >
                  Perizinan Berusaha
                  <span>{activeMobileSubcat === 'perizinan' ? '−' : '+'}</span>
                </button>
                {activeMobileSubcat === 'perizinan' && (
                  <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column' }}>
                    <Link href="/layanan/nib" className="mob-sub-link" onClick={closeDropdown}>Nomor Induk Berusaha (NIB)</Link>
                    <Link href="/layanan/sertifikat-standar" className="mob-sub-link" onClick={closeDropdown}>Sertifikat Standar</Link>
                    <Link href="/layanan/perizinan-usaha" className="mob-sub-link" onClick={closeDropdown}>Perizinan Usaha</Link>
                  </div>
                )}
              </div>

              {/* OTHER SUBCATS DIRECT */}
              <Link href="/layanan/merek-haki" className="mob-sub-link" style={{ paddingLeft: '12px', fontWeight: 600 }} onClick={closeDropdown}>Perlindungan Merek &amp; HKI</Link>
              <Link href="/layanan/pemasaran-digital" className="mob-sub-link" style={{ paddingLeft: '12px', fontWeight: 600 }} onClick={closeDropdown}>Pemasaran Digital</Link>
              <Link href="/layanan/virtual-office" className="mob-sub-link" style={{ paddingLeft: '12px', fontWeight: 600 }} onClick={closeDropdown}>Virtual Office</Link>
            </div>
          )}
        </div>

        <Link href="/solusi" className="mob-link" onClick={closeDropdown}>Solusi</Link>
        <Link href="/blog" className="mob-link" onClick={closeDropdown}>Berita &amp; Artikel</Link>
        
        <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="btn-nav-primary" style={{ marginTop: '12px', textAlign: 'center' }}>
          Hubungi Kami
        </a>
      </div>
    </>
  );
}
