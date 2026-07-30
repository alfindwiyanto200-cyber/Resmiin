import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami – Resmiin',
  description: 'Kenali lebih dekat Resmiin sebagai Business Infrastructure Partner terpercaya Anda di Indonesia. Temukan keunggulan, visi, misi, dan klien yang memercayai kami.',
};

export default function TentangKamiPage() {
  const keunggulan = [
    { ico: '⚡', title: 'Proses Cepat & Transparan', desc: 'Kami memahami waktu Anda berharga. Seluruh proses pengurusan dokumen dilakukan dengan cepat, efisien, dan dapat dipantau perkembangannya.' },
    { ico: '👨‍💼', title: 'Tim Profesional', desc: 'Didukung oleh para ahli hukum, notaris, konsultan pajak, dan praktisi bisnis berpengalaman yang siap memberikan solusi terbaik.' },
    { ico: '🏷️', title: 'Harga Kompetitif', desc: 'Harga transparan dan terjangkau tanpa biaya tersembunyi. Kami menawarkan paket lengkap yang sesuai dengan skala usaha Anda.' },
    { ico: '🤝', title: 'Pendampingan Penuh', desc: 'Kami tidak hanya mengurus dokumen, tetapi juga mendampingi dan memberikan konsultasi bisnis berkelanjutan untuk scale-up bisnis Anda.' }
  ];

  const clients = [
    { name: 'PT ABC Indonesia', logo: '🏢' },
    { name: 'PT Nusantara Digital', logo: '🌐' },
    { name: 'PT Global Teknologi', logo: '💻' },
    { name: 'PT Maju Bersama', logo: '🤝' },
    { name: 'PT Sinergi Capital', logo: '📈' },
    { name: 'PT Kreatif Nusantara', logo: '🎨' },
    { name: 'PT Prima Logistik', logo: '📦' },
    { name: 'PT Sentosa Abadi', logo: '🛡️' }
  ];

  const testimonials = [
    {
      name: 'Diana Wijaya',
      company: 'Direktur, CV Wijaya Makmur',
      quote: 'Proses pendirian PT sangat cepat, dalam 5 hari kerja semua SK Kemenkumham, NIB, dan NPWP sudah lengkap. Rekening BCA juga langsung dibantu!',
      photo: 'https://ui-avatars.com/api/?name=Diana+Wijaya&background=00695C&color=fff&size=80&rounded=true'
    },
    {
      name: 'Rino Pratama',
      company: 'Entrepreneur, Pratama Group',
      quote: 'Konsultasi gratis yang diberikan sangat membantu saya memahami struktur bisnis yang tepat. Mereka memberikan solusi terbaik, bukan yang paling mahal.',
      photo: 'https://ui-avatars.com/api/?name=Rino+Pratama&background=6D28D9&color=fff&size=80&rounded=true'
    },
    {
      name: 'Linda Santoso',
      company: 'CEO, PT Linda Kreasi',
      quote: 'Dari pendirian PT hingga pengurusan perizinan, Resmiin selalu memberikan hasil yang memuaskan. Tim mereka sangat kompeten dan komunikatif.',
      photo: 'https://ui-avatars.com/api/?name=Linda+Santoso&background=0284C7&color=fff&size=80&rounded=true'
    }
  ];

  return (
    <div style={{ background: '#FAFBFD', color: '#0D1B2A', paddingBottom: '80px' }}>
      
      {/* HEADER BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)',
        padding: '100px 24px 80px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Tentang Resmiin</h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, fontWeight: 400 }}>
            Mengenal lebih dekat visi, misi, dan keunggulan Resmiin sebagai mitra strategis infrastruktur bisnis tepercaya di Indonesia.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(41,182,246,0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="bc-inner">
          <a href="/">Beranda</a>
          <span className="bc-sep">›</span>
          <span>Tentang Kami</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* SECTION 1: MENGAPA MEMILIH RESMIIN */}
        <section style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="why-label">Keunggulan Kami</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '12px' }}>
              Mengapa Memilih Resmiin?
            </h2>
            <p style={{ color: '#637B96', fontSize: '15.5px', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
              Kami menghadirkan standar baru dalam pelayanan perizinan dan manajemen legalitas bisnis.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {keunggulan.map((item, idx) => (
              <div key={idx} className="why-item" style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.ico}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#637B96', lineHeight: 1.6, flexGrow: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PROFIL PERUSAHAAN */}
        <section style={{
          padding: '60px 0',
          borderTop: '1px solid #EAEEF4'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="why-label">Profil Perusahaan</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '12px 0 20px' }}>
                Partner Terpercaya Pertumbuhan Bisnis Anda
              </h2>
              <p style={{ fontSize: '15px', color: '#3A526A', lineHeight: 1.75, marginBottom: '16px' }}>
                Resmiin adalah <strong>Business Infrastructure Partner</strong> paling terpercaya di Indonesia. Kami berdedikasi untuk mempermudah operasional dan legalitas bisnis bagi para pengusaha, mulai dari startup, UMKM, hingga korporasi besar.
              </p>
              <p style={{ fontSize: '15px', color: '#3A526A', lineHeight: 1.75 }}>
                Dengan mengintegrasikan teknologi modern dan keahlian hukum, Resmiin memberikan kepastian hukum, transparansi biaya, dan kenyamanan dalam setiap pengurusan dokumen pendirian badan usaha, sertifikasi standar, hak kekayaan intelektual, hingga pemasaran digital.
              </p>
            </div>
            <div style={{
              background: '#fff',
              border: '1px solid #EAEEF4',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(13,27,42,0.04)'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1565C0', marginBottom: '12px' }}>Fokus Kami</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0, listStyle: 'none' }}>
                {[
                  'Pendirian PT / CV / PT Perorangan Resmi',
                  'Penyusunan Perizinan Berusaha & NIB Lengkap',
                  'Sertifikasi Standar Industri & ISO Mutu',
                  'Perlindungan Merek Dagang & Hak Kekayaan Intelektual',
                  'Penyediaan Virtual & Private Office Strategis',
                  'Akselerasi Pertumbuhan melalui Pemasaran Digital'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', fontWeight: 500, color: '#3A526A' }}>
                    <span style={{ color: '#00C98D', fontWeight: 'bold' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: VISI & MISI */}
        <section style={{
          padding: '60px 0',
          borderTop: '1px solid #EAEEF4'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="why-label">Visi &amp; Misi</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '12px' }}>
              Komitmen Jangka Panjang Kami
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* VISI */}
            <div style={{
              background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)',
              color: '#fff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(13,27,42,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ fontSize: '38px' }}>🎯</div>
              <h3 style={{ fontSize: '22px', fontWeight: 700 }}>Visi</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                Menjadi <strong>Business Infrastructure Partner</strong> paling terpercaya di Indonesia yang membantu perusahaan membangun fondasi yang kuat, bertumbuh secara berkelanjutan, dan memberikan dampak positif bagi perekonomian bangsa.
              </p>
            </div>

            {/* MISI */}
            <div style={{
              background: '#fff',
              border: '1px solid #EAEEF4',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(13,27,42,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ fontSize: '38px' }}>🚀</div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0D1B2A' }}>Misi</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0 }}>
                {[
                  'Menyediakan layanan profesional yang terintegrasi untuk mendukung setiap tahap perjalanan bisnis, mulai dari pendirian, operasional, pengembangan, hingga ekspansi perusahaan.',
                  'Membangun standar layanan yang transparan, akurat, tepat waktu, dan berorientasi pada solusi sehingga setiap klien memperoleh kepastian dalam setiap proses bisnisnya.',
                  'Mengembangkan tim profesional dengan kompetensi multidisiplin, integritas tinggi, dan pola pikir sebagai mitra strategis bagi setiap klien.'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#1565C0',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></span>
                    <p style={{ fontSize: '14px', color: '#3A526A', lineHeight: 1.6, margin: 0 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: CLIENT KAMI */}
        <section style={{
          padding: '60px 0',
          borderTop: '1px solid #EAEEF4'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="why-label">Mitra Bisnis</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '12px' }}>
              Dipercaya oleh Perusahaan Terkemuka
            </h2>
            <p style={{ color: '#637B96', fontSize: '15px', marginTop: '8px' }}>
              Berikut adalah beberapa dari ribuan perusahaan yang mempercayakan legalitas &amp; infrastruktur bisnis mereka kepada Resmiin.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {clients.map((client, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #EAEEF4',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 4px 12px rgba(13,27,42,0.02)',
                transition: 'all 0.2s ease'
              }}>
                <span style={{ fontSize: '24px' }}>{client.logo}</span>
                <strong style={{ fontSize: '14px', color: '#2C4360' }}>{client.name}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: TESTIMONI (SLIDER CAROUSEL STYLE) */}
        <section style={{
          padding: '60px 0',
          borderTop: '1px solid #EAEEF4'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="why-label">Testimoni Klien</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '12px' }}>
              Apa Kata Klien Resmiin?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {testimonials.map((testi, idx) => (
              <div key={idx} className="testi-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
                <p className="testi-quote" style={{ fontSize: '14px', lineHeight: 1.7, flexGrow: 1 }}>{testi.quote}</p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', borderTop: '1px solid #EAEEF4', paddingTop: '16px' }}>
                  <img src={testi.photo} alt={testi.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: '#0D1B2A', display: 'block' }}>{testi.name}</strong>
                    <span style={{ fontSize: '12px', color: '#637B96' }}>{testi.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          color: '#fff',
          marginTop: '60px',
          boxShadow: '0 12px 40px rgba(13,27,42,0.15)'
        }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, marginBottom: '14px' }}>Siap Memulai Bisnis Resmi Anda?</h2>
          <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Konsultasikan kebutuhan pendirian perusahaan, sertifikasi, perizinan, dan merek Anda bersama spesialis kami tanpa biaya.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" className="cta-btn-wa" style={{ border: 'none', background: '#fff', color: '#0D1B2A' }}>
              Chat Konsultan WhatsApp
            </a>
            <a href="mailto:adm.resmiin@gmail.com" className="cta-btn-email" style={{ border: '2px solid rgba(255,255,255,0.5)' }}>
              Kirim Email
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
