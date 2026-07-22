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

  const waUrl = 'https://wa.link/1c0f23';

  return (
    <div>
      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="bc-inner">
          <Link href="/">Beranda</Link>
          <span className="bc-sep">›</span>
          <Link href="/#harga">Layanan</Link>
          <span className="bc-sep">›</span>
          <span>{title}</span>
        </div>
      </div>

      {/* HERO LAYANAN */}
      <section className="lyr-hero">
        <div className="lyr-hero-inner">
          {/* LEFT */}
          <div className="lyr-left">
            <div className="lyr-badge">{badge}</div>
            <h1 className="lyr-h1">{title}</h1>

            <ul className="lyr-checklist">
              {checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="lyr-price-wrap">
              <span className="lyr-price-label">Mulai dari</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                {oldPrice && (
                  <span style={{ textDecoration: 'line-through', color: '#8FA8CC', fontSize: '20px', fontWeight: 500 }}>
                    {oldPrice}
                  </span>
                )}
                <span className="lyr-price" style={{ color: '#1565C0' }}>{price}</span>
              </div>
            </div>

            <a href={waUrl} className="lyr-cta" target="_blank" rel="noreferrer">
              {ctaText}
            </a>

            <div className="lyr-guarantee">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Konsultasi gratis sebelum memulai
            </div>

            <div className="lyr-rating">
              <span className="lyr-stars">★★★★★</span>
              <span className="lyr-rating-text">Dipercaya lebih dari <strong>2.500+ klien</strong></span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lyr-right">
            <div className="lyr-visual">
              <div className="lyr-doc-card">
                <div className="lyr-doc-header">
                  <div className="lyr-doc-ico">{docIco}</div>
                  <div className="lyr-doc-meta">
                    <strong>{docTitle}</strong>
                    <span>Resmiin • Dokumen Legalitas</span>
                  </div>
                  <span className="lyr-doc-status">✓ Terverifikasi</span>
                </div>
                <div className="lyr-doc-body">
                  <div className="lyr-step-list">
                    <div className="lyr-step done">
                      <div className="lyr-step-dot done"></div>
                      <div>
                        <span className="lyr-step-name">Konsultasi &amp; Data Pendiri</span>
                        <span className="lyr-step-info">Selesai</span>
                      </div>
                    </div>
                    <div className="lyr-step done">
                      <div className="lyr-step-dot done"></div>
                      <div>
                        <span className="lyr-step-name">Akta Notaris &amp; Pengesahan</span>
                        <span className="lyr-step-info">Selesai</span>
                      </div>
                    </div>
                    <div className="lyr-step active">
                      <div className="lyr-step-dot active"></div>
                      <div>
                        <span className="lyr-step-name">SK Kemenkumham &amp; NIB</span>
                        <span className="lyr-step-info lyr-step-progress">Dalam proses…</span>
                      </div>
                    </div>
                    <div className="lyr-step">
                      <div className="lyr-step-dot"></div>
                      <div>
                        <span className="lyr-step-name">Dokumen Complete Diserahkan</span>
                        <span className="lyr-step-info">Menunggu</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lyr-float-badge">
                  <span>⚡</span>
                  <span>Estimasi <strong>{duration}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="lyr-features-section">
        <div className="lyr-features-inner">
          <h2 className="lyr-features-heading">Kelengkapan Paket {title}</h2>
          <div className="lyr-features-grid">
            {features.map((feat, i) => (
              <div key={i} className="lyr-feat-item">
                <div className="lyr-feat-ico">{feat.ico}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="lyr-process-section">
        <div className="lyr-process-inner">
          <div className="lyr-process-left">
            <h2>Tahapan proses {title}</h2>
            <p>Proses transparan &amp; pendampingan penuh dari tim hukum Resmiin.</p>
            <a href={waUrl} target="_blank" rel="noreferrer" className="lyr-process-cta">Tanya CS Kami →</a>
          </div>
          <div className="lyr-process-steps">
            {steps.map((st, idx) => (
              <div key={idx} className="lyr-ps-item">
                <div className="lyr-ps-num">{idx + 1}</div>
                <div className="lyr-ps-content">
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="lyr-related">
        <div className="lyr-related-inner">
          <h2>Pilihan layanan legalitas lainnya</h2>
          <div className="lyr-related-grid">
            {related.map((rel, idx) => (
              <Link key={idx} href={`/${rel.slug}`} className="lyr-rel-card">
                <div className="lyr-rel-ico" style={{ background: rel.bg }}>{rel.ico}</div>
                <div className="lyr-rel-text">
                  <strong>{rel.name}</strong>
                  <span>{rel.price} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="cta-label">Mulai Hari Ini</span>
          <h2>Siap mendirikan {title}?</h2>
          <p>Hubungi tim Resmiin untuk proses pembuatan {title} yang cepat &amp; terpercaya.</p>
          <div className="cta-btns">
            <a href={waUrl} className="cta-btn-wa" target="_blank" rel="noreferrer">Chat WhatsApp</a>
            <a href="mailto:info@resmiin.com" className="cta-btn-email">Kirim Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
