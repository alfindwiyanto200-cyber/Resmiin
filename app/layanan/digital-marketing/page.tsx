import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Profesional | Resmiin',
  description: 'Layanan Digital Marketing Resmiin meliputi SEO, Google Ads, Meta Ads, Social Media Marketing, Content Marketing, dan Website Optimization untuk meningkatkan penjualan bisnis Anda.',
};

export default function DigitalMarketingPage() {
  return (
    <div style={{ background: '#FAFBFD', color: '#0D1B2A', fontFamily: 'var(--font-jakarta, sans-serif)', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/A_premium_iridescent_holographbn.gif)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        color: '#0D1B2A', 
        padding: '160px 24px 120px 24px', 
        overflow: 'hidden' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span style={{ background: 'rgba(21, 101, 192, 0.1)', color: '#1565C0', fontSize: '13px', fontWeight: 700, padding: '8px 16px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '20px' }}>
              🚀 Growth &amp; Pemasaran Digital
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px', color: '#0D1B2A' }}>
              Tingkatkan Omzet Bisnis Anda Melalui Strategi Digital Marketing yang Tepat
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#1C2D42', lineHeight: 1.6, marginBottom: '36px', fontWeight: 400 }}>
              Resmiin membantu bisnis berkembang pesat melalui strategi digital terintegrasi yang terukur, transparan, dan berbasis data. Dapatkan jangkauan pasar yang luas dan konversi maksimal.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" style={{ background: '#00C98D', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '16px 32px', borderRadius: '100px', boxShadow: '0 4px 14px rgba(0,201,141,0.3)', transition: 'transform 0.2s', display: 'inline-block' }}>
                Konsultasi Gratis
              </a>
              <a href="#pricing" style={{ background: 'transparent', color: '#1565C0', border: '2px solid #1565C0', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '100px', transition: 'all 0.2s', display: 'inline-block' }}>
                Lihat Paket Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KENAPA MEMILIH RESMIIN */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kenapa Memilih Kami</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
            Mengapa Layanan Kami Berbeda?
          </h2>
          <p style={{ color: '#637B96', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
            Kami mengkombinasikan keahlian industri terbaik dengan teknologi data terkini untuk menjamin campaign bisnis Anda berhasil.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { ico: '🏆', title: 'Tim Profesional', desc: 'Dikelola oleh tim spesialis periklanan bersertifikasi resmi Google, Meta, dan ahli SEO berpengalaman.' },
            { ico: '📊', title: 'Strategi Berbasis Data', desc: 'Setiap keputusan, kata kunci, dan penargetan iklan didasarkan pada riset data analitis yang mendalam.' },
            { ico: '📋', title: 'Laporan Berkala', desc: 'Kami menyediakan laporan bulanan komprehensif, transparan, dan mudah dipahami berisi metrik penting bisnis Anda.' },
            { ico: '🎯', title: 'ROI Terukur', desc: 'Fokus kampanye kami adalah memberikan tingkat pengembalian investasi (ROAS) dan konversi setinggi mungkin.' },
            { ico: '🤝', title: 'Pendampingan Penuh', desc: 'Tim konsultan kami siap mendampingi dan memberikan rekomendasi operasional berkala untuk pertumbuhan bisnis Anda.' },
            { ico: '⚡', title: 'Support Cepat', desc: 'Layanan komunikasi prioritas via grup WhatsApp khusus untuk kemudahan koordinasi harian.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 30px rgba(13,27,42,0.02)', transition: 'all 0.3s' }}>
              <div style={{ fontSize: '38px', marginBottom: '20px' }}>{item.ico}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0D1B2A', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14.5px', color: '#637B96', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: LAYANAN DIGITAL MARKETING */}
      <section style={{ padding: '80px 24px', background: '#F4F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solusi Pemasaran</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
              Cakupan Layanan Digital Marketing Kami
            </h2>
            <p style={{ color: '#637B96', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
              Pilih pilar pemasaran digital yang Anda butuhkan untuk mendominasi pasar industri Anda saat ini.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              {
                title: 'SEO (Search Engine Optimization)',
                desc: 'Dominasi halaman pertama pencarian Google untuk mendatangkan jutaan traffic organik tertarget.',
                features: ['Optimasi Website', 'Technical SEO & Speed Audit', 'Local SEO & Google Maps', 'On-Page & Off-Page SEO', 'Google Business Profile']
              },
              {
                title: 'Google Ads',
                desc: 'Muncul langsung di depan audiens siap beli menggunakan penempatan pencarian & iklan Display Google.',
                features: ['Search Ads (Iklan Kata Kunci)', 'Display Ads (Iklan Banner)', 'Performance Max (Campaign All-In-One)', 'Remarketing Campaign (Iklan Pengingat)', 'Optimasi Budget Iklan']
              },
              {
                title: 'Meta Ads',
                desc: 'Jangkau jutaan pelanggan potensial di Instagram & Facebook dengan iklan visual yang interaktif.',
                features: ['Facebook Ads', 'Instagram Feed & Stories Ads', 'Lead Generation Campaign', 'Conversion & Catalog Campaign', 'Custom & Lookalike Audience Builder']
              },
              {
                title: 'Social Media Marketing',
                desc: 'Membangun komunitas brand yang setia di media sosial dengan konten kreatif and terjadwal.',
                features: ['Manajemen Akun Instagram & TikTok', 'Penyusunan Content Planning & Calendar', 'Pembuatan Copywriting Konten', 'Analisis Kompetitor & Riset Tren', 'Desain Feed Visual Estetik']
              },
              {
                title: 'Content Marketing',
                desc: 'Kembangkan hubungan emosional yang erat dengan prospek melalui konten bernilai edukasi tinggi.',
                features: ['Pembuatan Artikel SEO Kualitas Tinggi', 'Copywriting Landing Page', 'Penyusunan Konten Blog', 'Video Script Writing (Reels/TikTok)', 'Email Marketing Newsletter']
              },
              {
                title: 'Website Optimization',
                desc: 'Pastikan website Anda siap mengubah traffic pengunjung menjadi leads and pembeli aktif.',
                features: ['Desain Landing Page Konversi Tinggi', 'Optimasi Kecepatan Loading Web', 'Conversion Rate Optimization (CRO)', 'Perbaikan UI/UX Desain', 'Google Analytics 4 & Tag Tracking']
              }
            ].map((srv, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', justifyItems: 'stretch', boxShadow: '0 4px 20px rgba(13,27,42,0.01)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0D1B2A', marginBottom: '14px' }}>{srv.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#637B96', lineHeight: 1.6, marginBottom: '24px' }}>{srv.desc}</p>
                <div style={{ borderTop: '1px solid #EAEEF4', paddingTop: '20px', flexGrow: 1 }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0 }}>
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#3A526A', fontWeight: 500 }}>
                        <span style={{ color: '#00C98D', fontWeight: 'bold' }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROSES KERJA */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Alur Kerja Kami</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
            Bagaimana Kami Bekerja?
          </h2>
          <p style={{ color: '#637B96', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
            Setiap proses kerja kami dirancang secara sistematis untuk menjamin transparansi, kontrol kualitas, dan hasil optimal.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', position: 'relative' }}>
          {[
            { step: '1', title: 'Analisis Bisnis', desc: 'Mempelajari karakteristik bisnis, model pendapatan, and demografi target pasar utama Anda.' },
            { step: '2', title: 'Riset Kompetitor', desc: 'Menganalisis strategi digital kompetitor, riset kata kunci potensial, serta peluang pertumbuhan.' },
            { step: '3', title: 'Strategi Marketing', desc: 'Menyusun rancangan strategi marketing yang komprehensif, estimasi budget, dan KPI target.' },
            { step: '4', title: 'Eksekusi Campaign', desc: 'Membuat landing page, copywriting iklan, mempersiapkan aset visual, serta mengaktifkan iklan.' },
            { step: '5', title: 'Monitoring & Optimasi', desc: 'Memantau kinerja harian iklan, a/b testing asset, dan melakukan optimasi budget alokasi.' },
            { step: '6', title: 'Laporan Bulanan', desc: 'Menyerahkan laporan tertulis dan mengadakan sesi evaluasi performa kampanye berkala.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '20px', padding: '30px', textAlign: 'center', position: 'relative' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EBF5FF', color: '#1565C0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: 800, fontSize: '18px' }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0D1B2A', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '13.5px', color: '#637B96', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: MENGAPA DIGITAL MARKETING PENTING */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC', borderTop: '1px solid #EAEEF4', borderBottom: '1px solid #EAEEF4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Urgensi Bisnis</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Mengapa Pemasaran Digital Sangat Krusial Bagi Bisnis Anda?
            </h2>
            <p style={{ fontSize: '15px', color: '#3A526A', lineHeight: 1.7, marginBottom: '20px' }}>
              Di era digital saat ini, memiliki produk bagus saja tidak cukup. Pelanggan Anda menghabiskan sebagian besar waktu mereka di mesin pencari dan media sosial. Jika bisnis Anda tidak hadir di sana, Anda sedang menyerahkan pangsa pasar kepada kompetitor secara sukarela.
            </p>
            <p style={{ fontSize: '15px', color: '#3A526A', lineHeight: 1.7 }}>
              Pemasaran digital terstruktur memungkinkan Anda menjangkau target pasar secara presisi, mengukur pengeluaran iklan hingga satuan rupiah terkecil, dan mengoptimalkan hasil dengan cepat.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { title: 'Meningkatkan Penjualan', desc: 'Mengarahkan traffic pengunjung dengan intensi membeli tinggi ke produk/jasa Anda.' },
              { title: 'Brand Awareness', desc: 'Meningkatkan visibilitas brand Anda agar selalu diingat oleh target audiens.' },
              { title: 'Menjangkau Target Market', desc: 'Menargetkan demografi, minat, dan perilaku spesifik pembeli.' },
              { title: 'Menghemat Biaya Promosi', desc: 'Biaya iklan yang jauh lebih efektif and murah dibandingkan media offline.' },
              { title: 'Meningkatkan Leads', desc: 'Mengumpulkan prospek data calon klien (nama, whatsapp, email) secara konsisten.' },
              { title: 'Meningkatkan Kepercayaan', desc: 'Profil digital, review bintang, dan website profesional membangun otoritas.' }
            ].map((box, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(13,27,42,0.01)' }}>
                <strong style={{ fontSize: '15px', color: '#0D1B2A', display: 'block', marginBottom: '6px' }}>{box.title}</strong>
                <p style={{ fontSize: '12.5px', color: '#637B96', lineHeight: 1.5 }}>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PAKET LAYANAN */}
      <section id="pricing" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pilihan Paket</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
            Paket Layanan Fleksibel &amp; Transparan
          </h2>
          <p style={{ color: '#637B96', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
            Pilih paket yang paling sesuai dengan skala operasional dan sasaran bisnis perusahaan Anda.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* STARTER */}
          <div style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', justifyItems: 'stretch', boxShadow: '0 10px 30px rgba(13,27,42,0.01)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#7A90A8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Starter</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0D1B2A', margin: '8px 0 20px' }}>Paket Bertumbuh</h3>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '16px', color: '#637B96', fontWeight: 500 }}>Mulai dari</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <strong style={{ fontSize: '32px', color: '#1565C0', fontWeight: 800 }}>Hubungi CS</strong>
              </div>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', flexGrow: 1, paddingLeft: 0 }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Riset Target Keyword &amp; Audien</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Setup &amp; Optimasi Iklan Meta (FB &amp; IG)</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Pembuatan Copywriting Iklan</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> 1x Landing Page Konversi</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Laporan Performa Bulanan</li>
            </ul>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" style={{ background: '#EBF5FF', color: '#1565C0', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '100px', textAlign: 'center', transition: 'all 0.2s' }}>
              Pesan Paket Starter
            </a>
          </div>

          {/* PROFESSIONAL */}
          <div style={{ background: '#fff', border: '2px solid #1565C0', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', justifyItems: 'stretch', boxShadow: '0 15px 40px rgba(21,101,192,0.06)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#1565C0', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Paling Populer
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Professional</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0D1B2A', margin: '8px 0 20px' }}>Paket Kredibel</h3>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '16px', color: '#637B96', fontWeight: 500 }}>Mulai dari</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <strong style={{ fontSize: '32px', color: '#1565C0', fontWeight: 800 }}>Hubungi CS</strong>
              </div>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', flexGrow: 1, paddingLeft: 0 }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A', fontWeight: 600 }}><span>✓</span> Semua Benefit Paket Starter</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Setup &amp; Optimasi Iklan Google (Search &amp; Display)</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Optimasi SEO &amp; Kecepatan Website</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Custom Content Planning (Sosmed)</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Pemasangan Tracking GA4 &amp; Google Tag Manager</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Biweekly Meeting Review &amp; Diskusi</li>
            </ul>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" style={{ background: '#1565C0', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '100px', textAlign: 'center', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(21,101,192,0.3)' }}>
              Pesan Paket Professional
            </a>
          </div>

          {/* ENTERPRISE */}
          <div style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', justifyItems: 'stretch', boxShadow: '0 10px 30px rgba(13,27,42,0.01)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#7A90A8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enterprise</span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0D1B2A', margin: '8px 0 20px' }}>Paket Korporasi</h3>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '16px', color: '#637B96', fontWeight: 500 }}>Mulai dari</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <strong style={{ fontSize: '32px', color: '#1565C0', fontWeight: 800 }}>Hubungi CS</strong>
              </div>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', flexGrow: 1, paddingLeft: 0 }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A', fontWeight: 600 }}><span>✓</span> Semua Benefit Paket Professional</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Pengelolaan Pemasaran Omnichannel (Google, Meta &amp; TikTok Ads)</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Optimasi SEO Skala Nasional &amp; Content Hub</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Advanced Data Attribution &amp; ROI Analytics</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Dedicated Account Manager &amp; Weekly Review</li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#3A526A' }}><span>✓</span> Kontrak SLA Tingkat Layanan Premium</li>
            </ul>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" style={{ background: '#EBF5FF', color: '#1565C0', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '100px', textAlign: 'center', transition: 'all 0.2s' }}>
              Hubungi Sales Kami
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: PORTFOLIO GRID */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC', borderTop: '1px solid #EAEEF4', borderBottom: '1px solid #EAEEF4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Portofolio Kami</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
              Karya Pilihan &amp; Studi Kasus Sukses
            </h2>
            <p style={{ color: '#637B96', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
              Bukti nyata dedikasi dan hasil pekerjaan pemasaran digital tim Resmiin bagi para klien kami.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { type: 'SEO & Content', title: 'Peningkatan 300% Traffic Organik Toko Online', details: 'Optimasi kata kunci komersial, perbaikan sitemap, serta konten edukatif berkualitas tinggi.' },
              { type: 'Google Ads Campaign', title: 'ROAS 5.2x Kampanye Iklan Properti B2C', details: 'Setup target demografi profesional, monitoring budget harian, serta A/B testing aset iklan.' },
              { type: 'Social Media & Branding', title: 'Scale-Up Akun Kuliner Hingga 50K Followers', details: 'Penyusunan konten calendar yang konsisten, konten visual menarik, dan optimasi reels.' },
              { type: 'Landing Page & CRO', title: 'Rasio Konversi Landing Page Naik 4.8%', details: 'Redesign UI/UX landing page dengan struktur copywriting persuasif dan optimasi speed loading.' },
              { type: 'Facebook & IG Ads', title: 'Campaign Penjualan Retail dengan Biaya CPC Rendah', details: 'Implementasi lookalike audiens dan remarketing terarah untuk efisiensi budget.' },
              { type: 'Web & Analytics Integration', title: 'Setup Advanced tracking E-Commerce', details: 'Pemasangan server-side tracking, Google Tag Manager, dan visualisasi dashboard Looker Studio.' }
            ].map((p, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 30px rgba(13,27,42,0.02)' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>{p.type}</span>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B2A', marginBottom: '12px', letterSpacing: '-0.01em' }}>{p.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#637B96', lineHeight: 1.6 }}>{p.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONI */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Testimoni</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
            Apa Kata Mitra Bisnis Kami?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { text: 'Sejak menggunakan jasa SEO dari Resmiin, traffic website kami naik drastis dan kami mendapatkan leads berkualitas setiap harinya secara organik tanpa biaya iklan tambahan.', name: 'Diana Santoso', pos: 'Marketing Manager, PT Diana Retail', rating: '★★★★★' },
            { text: 'Pengelolaan Google and Meta Ads oleh tim Resmiin sangat transparan. ROAS kami meningkat stabil di angka 4.5x, menghemat budget trial error kami sebelumnya.', name: 'Rudi Wijaya', pos: 'CEO, Wijaya Furniture', rating: '★★★★★' },
            { text: 'Landing page buatan Resmiin memiliki tampilan sangat premium and performa loading sangat cepat. Rasio konversi leads kami melonjak signifikan semenjak dilaunching.', name: 'Fiona Lestari', pos: 'Founder, Lestari Beauty', rating: '★★★★★' }
          ].map((t, idx) => (
            <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 30px rgba(13,27,42,0.02)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#FFB800', fontSize: '20px', marginBottom: '14px' }}>{t.rating}</div>
              <p style={{ fontSize: '14px', color: '#3A526A', lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1, marginBottom: '24px' }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid #EAEEF4', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1565C0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                  {t.name[0]}
                </div>
                <div>
                  <strong style={{ fontSize: '14px', color: '#0D1B2A', display: 'block' }}>{t.name}</strong>
                  <span style={{ fontSize: '12px', color: '#637B96' }}>{t.pos}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC', borderTop: '1px solid #EAEEF4' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#1565C0', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tanya Jawab</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0D1B2A', marginTop: '12px', letterSpacing: '-0.02em' }}>
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Apa itu SEO dan bagaimana cara kerjanya?', a: 'SEO (Search Engine Optimization) adalah serangkaian optimasi teknis and konten agar website Anda muncul di peringkat atas hasil pencarian organik Google untuk kata kunci relevan.' },
              { q: 'Berapa lama hasil optimasi SEO mulai terlihat?', a: 'Pekerjaan SEO adalah investasi jangka panjang. Hasil awal berupa kenaikan impresi and ranking kata kunci biasanya mulai terlihat dalam 3–6 bulan sejak optimasi aktif.' },
              { q: 'Apakah Google Ads cocok untuk skala bisnis UMKM?', a: 'Sangat cocok. Google Ads memungkinkan Anda mengatur anggaran harian minimal (misal Rp 50.000/hari) dan hanya membayar ketika calon pembeli mengklik iklan Anda (Pay-Per-Click).' },
              { q: 'Apa perbedaan mendasar antara SEO dan Google Ads?', a: 'SEO mendatangkan pengunjung secara gratis/organik tetapi butuh waktu proses bulanan. Google Ads adalah iklan berbayar instan yang memunculkan website Anda di posisi teratas secara instan selama saldo iklan Anda aktif.' },
              { q: 'Berapa biaya jasa Digital Marketing di Resmiin?', a: 'Biaya jasa bervariasi bergantung pada paket dan kompleksitas taktik pemasaran. Silakan hubungi CS Resmiin untuk mendapatkan penawaran harga sesuai kebutuhan bisnis Anda.' },
              { q: 'Apakah anggaran/budget iklan sudah termasuk biaya jasa?', a: 'Tidak. Biaya yang dibayarkan ke Resmiin adalah murni fee jasa pengelolaan operasional. Anggaran saldo iklan (ad spend) Google/Meta Ads dibayarkan terpisah sesuai budget bulanan Anda.' },
              { q: 'Bagaimana cara menentukan platform iklan terbaik (Google vs Meta)?', a: 'Iklan Google cocok untuk produk/jasa yang sering dicari aktif (misal: jasa sedot wc, service AC, legalitas). Iklan Meta (FB/IG) cocok untuk produk visual atau edukatif yang mengandalkan daya tarik visual (fashion, kuliner, e-commerce).' },
              { q: 'Apakah Resmiin menjamin penjualan pasti naik?', a: 'Kami menjamin optimasi kampanye secara profesional berdasarkan data terbaik, riset audiens presisi, dan landing page konversi tinggi. Namun, keputusan akhir pembelian dipengaruhi oleh harga produk, kualitas layanan CS Anda, and persaingan pasar.' },
              { q: 'Bagaimana mekanisme pelaporan bulanan yang diberikan?', a: 'Setiap akhir bulan, kami mengirimkan laporan analitis tertulis yang memuat metrik utama: impresi iklan, jumlah klik, biaya per klik (CPC), jumlah leads konversi, and rekomendasi strategi optimasi bulan berikutnya.' },
              { q: 'Bagaimana cara memulai kerja sama dengan Resmiin?', a: 'Sangat mudah. Anda hanya perlu mengklik tombol "Konsultasi Gratis" di website ini untuk terhubung langsung dengan tim growth consultant kami via WhatsApp.' }
            ].map((f, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid #EAEEF4', borderRadius: '14px', padding: '24px', boxShadow: '0 4px 12px rgba(13,27,42,0.01)' }}>
                <strong style={{ fontSize: '15px', color: '#0D1B2A', display: 'block', marginBottom: '10px' }}>Q: {f.q}</strong>
                <p style={{ fontSize: '13.5px', color: '#637B96', lineHeight: 1.6, margin: 0, paddingLeft: '16px', borderLeft: '2px solid #1565C0' }}>
                  A: {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1565C0 100%)', color: '#fff', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '36px', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Konsultasikan kebutuhan kampanye pemasaran digital perusahaan Anda bersama konsultan ahli Resmiin sekarang. Bebas biaya konsultasi awal!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.link/1c0f23" target="_blank" rel="noreferrer" style={{ background: '#00C98D', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '16px 32px', borderRadius: '100px', boxShadow: '0 4px 14px rgba(0,201,141,0.3)', transition: 'all 0.2s', display: 'inline-block' }}>
              Konsultasi Gratis via WhatsApp
            </a>
            <a href="mailto:adm.resmiin@gmail.com" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '100px', transition: 'all 0.2s', display: 'inline-block' }}>
              Hubungi via Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
