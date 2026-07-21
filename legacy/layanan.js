/* ============================================
   LAYANAN.JS — Official Resmiin Services Data
   URL: layanan.html?s=pt-perorangan
   ============================================ */

/* ===== OFFICIAL SERVICES DATA ===== */
const SERVICES = {
  'pt-perorangan': {
    badge: 'Layanan Terjangkau',
    title: 'PT Perorangan',
    checklist: [
      'SK Kemenkumham',
      'NPWP Badan Perusahaan',
      'NIB (Nomor Induk Berusaha)',
    ],
    price: 'Rp 1.000.000',
    oldPrice: null,
    isPromo: false,
    cta: 'Pesan PT Perorangan',
    docTitle: 'PT Perorangan',
    docIco: '👤',
    duration: '3–5 hari kerja',
    features: [
      { ico: '📜', title: 'SK Kemenkumham', desc: 'Pengesahan resmi pendirian PT Perorangan dari Kementerian Hukum dan HAM.' },
      { ico: '💳', title: 'NPWP Perusahaan', desc: 'Nomor Pokok Wajib Pajak Badan atas nama PT Perorangan.' },
      { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Izin usaha resmi dari OSS yang siap digunakan untuk operasional.' },
      { ico: '⚡', title: 'Proses Cepat', desc: 'Pendirian praktis tanpa perlu sekutu/mitra lain.' },
    ],
    steps: [
      { title: 'Konsultasi & Pengumpulan Data', desc: 'Kirimkan data pendiri (KTP, NPWP) dan nama PT Perorangan yang diinginkan.' },
      { title: 'Pernyataan Pendirian', desc: 'Penyusunan format Pernyataan Pendirian sesuai ketentuan Kemenkumham.' },
      { title: 'Penerbitan SK Kemenkumham', desc: 'Pendaftaran resmi dan pengesahan di sistem Kemenkumham.' },
      { title: 'Pengurusan NPWP & NIB', desc: 'Penerbitan NPWP Badan dan NIB melalui OSS RBA.' },
      { title: 'Penyerahan Dokumen', desc: 'Dokumen legalitas resmi diserahkan dalam bentuk digital dan cetak.' },
    ],
    faq: [
      {
        q: 'Apa itu PT Perorangan?',
        a: 'PT Perorangan adalah badan hukum yang didirikan oleh 1 (satu) orang saja untuk skala Usaha Mikro dan Kecil (UMK) sesuai UU Cipta Kerja.',
      },
      {
        q: 'Apakah PT Perorangan mendapat SK Kemenkumham?',
        a: 'Ya, PT Perorangan mendapatkan SK Kemenkumham resmi, NPWP, dan NIB.',
      },
    ],
    related: ['pendirian-pt', 'pendirian-cv', 'merek-haki'],
  },

  'pendirian-cv': {
    badge: '🔥 HARGA PROMO',
    title: 'Pendirian CV',
    checklist: [
      'Salinan Akta Pendirian CV',
      'SK Kemenkumham',
      'NPWP Badan Perusahaan',
      'NIB (Nomor Induk Berusaha)',
      'Pembukaan Rekening BCA / Mandiri',
    ],
    price: 'Rp 3.000.000',
    oldPrice: 'Rp 4.500.000',
    isPromo: true,
    cta: 'Pesan Pendirian CV (Promo)',
    docTitle: 'Pendirian CV',
    docIco: '📋',
    duration: '3–5 hari kerja',
    features: [
      { ico: '📜', title: 'Salinan Akta Pendirian CV', desc: 'Akta notaris pendirian CV resmi yang disahkan.' },
      { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Surat Keputusan pendaftaran CV di Kemenkumham RI.' },
      { ico: '💳', title: 'NPWP Perusahaan', desc: 'NPWP Badan Usaha CV terdaftar di Ditjen Pajak.' },
      { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Identitas dan izin usaha resmi melalui OSS.' },
      { ico: '🏦', title: 'Buka Rekening BCA/Mandiri', desc: 'Pendampingan prioritas pembukaan rekening giro perusahaan di Bank BCA atau Mandiri.' },
    ],
    steps: [
      { title: 'Konsultasi & Pengisian Form', desc: 'Diskusikan nama CV, bidang usaha (KBLI), dan data para persero.' },
      { title: 'Pembuatan Akta Notaris', desc: 'Penandatanganan dan penerbitan Salinan Akta Pendirian CV di Notaris.' },
      { title: 'Pengesahan Kemenkumham', desc: 'Pendaftaran CV ke AHU Online Kemenkumham RI.' },
      { title: 'Pengurusan NIB & NPWP', desc: 'Penerbitan NPWP Badan dan NIB melalui OSS RBA.' },
      { title: 'Buka Rekening Bank', desc: 'Bantuan pembukaan rekening giro atas nama CV di BCA atau Mandiri.' },
    ],
    faq: [
      {
        q: 'Apa yang didapatkan dalam paket Pendirian CV?',
        a: 'Paket mencakup Salinan Akta Pendirian CV, SK Kemenkumham, NPWP, NIB, dan pendampingan pembukaan rekening bank BCA/Mandiri.',
      },
      {
        q: 'Berapa lama promo paket CV ini berlangsung?',
        a: 'Harga promo Rp 3.000.000 (dari Rp 4.500.000) berlaku terbatas untuk bulan ini.',
      },
    ],
    related: ['pendirian-pt', 'pt-perorangan', 'merek-haki'],
  },

  'pendirian-pt': {
    badge: '⭐ PALING POPULER · HARGA PROMO',
    title: 'Pendirian PT',
    checklist: [
      'Salinan Akta Pendirian PT',
      'SK Kemenkumham',
      'NPWP Badan Perusahaan',
      'NIB (Nomor Induk Berusaha)',
      'Pembukaan Rekening BCA / Mandiri',
    ],
    price: 'Rp 4.500.000',
    oldPrice: 'Rp 6.000.000',
    isPromo: true,
    cta: 'Pesan Pendirian PT (Promo)',
    docTitle: 'Pendirian PT',
    docIco: '🏢',
    duration: '5–7 hari kerja',
    features: [
      { ico: '📜', title: 'Salinan Akta Pendirian PT', desc: 'Akta pendirian Perseroan Terbatas resmi dari Notaris berlisensi.' },
      { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Pengesahan Badan Hukum PT dari Menteri Hukum dan HAM RI.' },
      { ico: '💳', title: 'NPWP Perusahaan', desc: 'Nomor Pokok Wajib Pajak Badan atas nama PT.' },
      { ico: '🔖', title: 'NIB (Nomor Induk Berusaha)', desc: 'Izin usaha resmi terintegrasi via sistem OSS RBA.' },
      { ico: '🏦', title: 'Buka Rekening BCA/Mandiri', desc: 'Fasilitas pendampingan pembukaan rekening giro bank BCA atau Mandiri.' },
    ],
    steps: [
      { title: 'Konsultasi Data Perusahaan', desc: 'Pengecekan nama PT, penetapan modal, struktur direksi & komisaris.' },
      { title: 'Pembuatan Akta Notaris', desc: 'Pembuatan dan penandatanganan Akta Pendirian PT oleh Notaris.' },
      { title: 'Pengesahan Kemenkumham', desc: 'Penerbitan SK pengesahan badan hukum dari Kementerian Hukum & HAM.' },
      { title: 'Pengurusan NIB & NPWP', desc: 'Penerbitan NPWP PT dan NIB OSS RBA.' },
      { title: 'Pembukaan Rekening Bank', desc: 'Pendampingan pembukaan rekening perusahaan di BCA / Mandiri.' },
    ],
    faq: [
      {
        q: 'Berapa modal yang dibutuhkan untuk membuat PT?',
        a: 'Berdasarkan UU Cipta Kerja, tidak ada batasan minimal modal disetor untuk PT (sesuai kesepakatan para pendiri).',
      },
      {
        q: 'Apakah harga promo Rp 4.500.000 sudah bersih?',
        a: 'Ya, harga promo promo Rp 4.500.000 (dari Rp 6.000.000) sudah bersih mencakup Notaris, Kemenkumham, NIB, NPWP, dan Buka Rekening.',
      },
    ],
    related: ['pt-perorangan', 'pendirian-cv', 'merek-haki'],
  },

  'pendirian-yayasan': {
    badge: '🔥 HARGA PROMO ORGANISASI',
    title: 'Pendirian Yayasan',
    checklist: [
      'Salinan Pendirian Yayasan',
      'SK Kemenkumham',
    ],
    price: 'Rp 3.000.000',
    oldPrice: 'Rp 5.000.000',
    isPromo: true,
    cta: 'Pesan Pendirian Yayasan (Promo)',
    docTitle: 'Pendirian Yayasan',
    docIco: '🏛️',
    duration: '7–10 hari kerja',
    features: [
      { ico: '📜', title: 'Salinan Pendirian Yayasan', desc: 'Akta pendirian yayasan resmi dari Notaris berwenang.' },
      { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Pengesahan badan hukum yayasan dari Kementerian Hukum & HAM.' },
      { ico: '📋', title: 'Anggaran Dasar Resmi', desc: 'Penyusunan AD/ART yayasan sesuai UU Yayasan.' },
      { ico: '🤝', title: 'Legalitas Kegiatan Nirlaba', desc: 'Legalitas untuk kegiatan sosial, keagamaan, dan kemanusiaan.' },
    ],
    steps: [
      { title: 'Konsultasi Struktur Organisasi', desc: 'Penetapan nama yayasan, Pembina, Pengurus, dan Pengawas.' },
      { title: 'Akta Pendirian Notaris', desc: 'Pembuatan Salinan Pendirian Yayasan oleh Notaris.' },
      { title: 'SK Pengesahan Kemenkumham', desc: 'Proses pengesahan badan hukum yayasan di Kemenkumham.' },
      { title: 'Penyerahan Berkas', desc: 'Seluruh berkas legalitas yayasan diserahkan siap pakai.' },
    ],
    faq: [
      {
        q: 'Apa saja syarat pendirian yayasan?',
        a: 'Persyaratan meliput KTP & NPWP Pembina, Pengurus, dan Pengawas, serta nama yayasan dan kekayaan awal yang dipisahkan.',
      },
    ],
    related: ['pendirian-perkumpulan', 'pendirian-pt', 'merek-haki'],
  },

  'pendirian-perkumpulan': {
    badge: '🔥 HARGA PROMO PERKUMPULAN',
    title: 'Pendirian Perkumpulan',
    checklist: [
      'Salinan Akta Perkumpulan',
      'SK Kemenkumham',
    ],
    price: 'Rp 3.000.000',
    oldPrice: 'Rp 5.000.000',
    isPromo: true,
    cta: 'Pesan Pendirian Perkumpulan (Promo)',
    docTitle: 'Pendirian Perkumpulan',
    docIco: '🤝',
    duration: '7–10 hari kerja',
    features: [
      { ico: '📜', title: 'Salinan Akta Perkumpulan', desc: 'Akta pendirian perkumpulan/asosiasi resmi dari Notaris.' },
      { ico: '🏛️', title: 'SK Kemenkumham', desc: 'Pengesahan badan hukum perkumpulan dari Kemenkumham RI.' },
      { ico: '👥', title: 'Organisasi Berbadan Hukum', desc: 'Wadah resmi berbasis anggota untuk komunitas, asosiasi, atau himpunan.' },
    ],
    steps: [
      { title: 'Konsultasi Nama & Anggota', desc: 'Menentukan nama perkumpulan, Anggaran Dasar, dan pengurus.' },
      { title: 'Pembuatan Akta Notaris', desc: 'Penerbitan Salinan Akta Perkumpulan oleh Notaris.' },
      { title: 'Pengesahan Kemenkumham', desc: 'Pengajuan SK pengesahan badan hukum di Kemenkumham.' },
      { title: 'Penyerahan Dokumen', desc: 'Dokumen diserahkan dalam kondisi lengkap.' },
    ],
    faq: [
      {
        q: 'Apa bedanya perkumpulan dan yayasan?',
        a: 'Perkumpulan berbasis keanggotaan (member-based), sedangkan yayasan berbasis pemisahan kekayaan untuk tujuan sosial/kemanusiaan.',
      },
    ],
    related: ['pendirian-yayasan', 'pendirian-cv', 'merek-haki'],
  },

  'merek-haki': {
    badge: '🔥 HARGA PROMO HAKI',
    title: 'Merek & HAKI',
    checklist: [
      'Bukti Pendaftaran HAKI',
    ],
    price: 'Rp 3.500.000',
    oldPrice: 'Rp 4.500.000',
    isPromo: true,
    cta: 'Daftarkan Merek (Promo)',
    docTitle: 'Merek & HAKI',
    docIco: '🛡️',
    duration: '1–2 hari kerja (Bukti Terbit)',
    features: [
      { ico: '📝', title: 'Bukti Pendaftaran HAKI', desc: 'Surat Bukti Penerimaan Pendaftaran Merek resmi dari DJKI Kemenkumham.' },
      { ico: '🔍', title: 'Pengecekan Penelusuran Merek', desc: 'Pengecekan potensi kesamaan merek sebelum didaftarkan.' },
      { ico: '🛡️', title: 'Perlindungan Hak Cipta & Merek', desc: 'Perlindungan hukum atas nama brand, logo, atau karya bisnis Anda.' },
    ],
    steps: [
      { title: 'Analisis & Penelusuran Merek', desc: 'Tim melakukan pengecekan ketersediaan nama & logo merek di pangkalan data DJKI.' },
      { title: 'Penyiapan Etiket Merek & Berkas', desc: 'Penyusunan kelas barang/jasa dan berkas pendaftaran.' },
      { title: 'Pengajuan Resmi ke DJKI', desc: 'Pendaftaran merek ke Direktorat Jenderal Kekayaan Intelektual.' },
      { title: 'Penerbitan Bukti Pendaftaran', desc: 'Penyerahan Tanda Terima / Bukti Pendaftaran Merek resmi HAKI.' },
    ],
    faq: [
      {
        q: 'Berapa lama bukti pendaftaran HAKI keluar?',
        a: 'Bukti Pendaftaran Merek resmi diterbitkan DJKI dalam waktu 1-2 hari kerja setelah pengajuan.',
      },
    ],
    related: ['pendirian-pt', 'pt-perorangan', 'pendirian-cv'],
  },
};

/* ===== SERVICE LABEL MAP ===== */
const SERVICE_LABELS = {
  'pt-perorangan':         { name: 'PT Perorangan',        ico: '👤', bg: '#EBF5FF', price: 'Rp 1.000.000' },
  'pendirian-cv':          { name: 'Pendirian CV',         ico: '📋', bg: '#F0FDF4', price: 'Rp 3.000.000 (Promo)' },
  'pendirian-pt':          { name: 'Pendirian PT',         ico: '🏢', bg: '#EBF5FF', price: 'Rp 4.500.000 (Promo)' },
  'pendirian-yayasan':     { name: 'Pendirian Yayasan',    ico: '🏛️', bg: '#FFF7ED', price: 'Rp 3.000.000 (Promo)' },
  'pendirian-perkumpulan': { name: 'Pendirian Perkumpulan',ico: '🤝', bg: '#F5F3FF', price: 'Rp 3.000.000 (Promo)' },
  'merek-haki':            { name: 'Merek & HAKI',         ico: '🛡️', bg: '#EBF5FF', price: 'Rp 3.500.000 (Promo)' },
};

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('s');

  // Dedicated HTML redirect map
  const REDIRECT_MAP = {
    'pt-perorangan': 'pt-perorangan.html',
    'pendirian-cv': 'pendirian-cv.html',
    'pendirian-pt': 'pendirian-pt.html',
    'pendirian-yayasan': 'pendirian-yayasan.html',
    'pendirian-perkumpulan': 'pendirian-perkumpulan.html',
    'merek-haki': 'merek-haki.html'
  };

  if (key && REDIRECT_MAP[key]) {
    window.location.href = REDIRECT_MAP[key];
    return;
  }

  const activeKey = key || 'pendirian-pt';
  const data = SERVICES[activeKey] || SERVICES['pendirian-pt'];

  // Page title & meta
  document.getElementById('page-title').textContent = `${data.title} – Resmiin`;
  document.getElementById('page-desc').content = `${data.title}: ${data.checklist.join(', ')}`;

  // Breadcrumb
  document.getElementById('bc-current').textContent = data.title;

  // Hero
  document.getElementById('lyr-badge').textContent = data.badge;
  document.getElementById('lyr-h1').textContent = data.title;
  
  // Render Price with old price if exists
  const priceElem = document.getElementById('lyr-price');
  if (data.oldPrice) {
    priceElem.innerHTML = `<span style="text-decoration: line-through; color: #8FA8CC; font-size: 20px; font-weight: 500; margin-right: 10px;">${data.oldPrice}</span> <span style="color: #1565C0;">${data.price}</span>`;
  } else {
    priceElem.textContent = data.price;
  }

  document.getElementById('lyr-cta').textContent = data.cta;
  document.getElementById('lyr-doc-title').textContent = data.docTitle;
  document.getElementById('lyr-doc-ico').textContent = data.docIco;
  document.getElementById('lyr-duration').textContent = data.duration;

  // Checklist
  const cl = document.getElementById('lyr-checklist');
  cl.innerHTML = data.checklist.map(t => `<li>${t}</li>`).join('');

  // Features
  const fg = document.getElementById('lyr-features-grid');
  fg.innerHTML = data.features.map(f => `
    <div class="lyr-feat-item">
      <div class="lyr-feat-ico">${f.ico}</div>
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  // Process steps
  const ps = document.getElementById('lyr-process-steps');
  ps.innerHTML = data.steps.map((s, i) => `
    <div class="lyr-ps-item">
      <div class="lyr-ps-num">${i + 1}</div>
      <div class="lyr-ps-content">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  // FAQ
  const fl = document.getElementById('lyr-faq-list');
  if (fl && data.faq) {
    fl.innerHTML = data.faq.map(f => `
      <div class="lyr-faq-item">
        <div class="lyr-faq-q">
          <span>${f.q}</span>
          <span class="lyr-faq-icon">+</span>
        </div>
        <div class="lyr-faq-a"><p>${f.a}</p></div>
      </div>
    `).join('');

    // FAQ toggle
    fl.querySelectorAll('.lyr-faq-item').forEach(item => {
      item.querySelector('.lyr-faq-q').addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        fl.querySelectorAll('.lyr-faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // Related services
  const rg = document.getElementById('lyr-related-grid');
  if (rg) {
    rg.innerHTML = (data.related || []).map(rel => {
      const lbl = SERVICE_LABELS[rel];
      if (!lbl) return '';
      return `
        <a href="layanan.html?s=${rel}" class="lyr-rel-card">
          <div class="lyr-rel-ico" style="background:${lbl.bg};">${lbl.ico}</div>
          <div class="lyr-rel-text">
            <strong>${lbl.name}</strong>
            <span>${lbl.price} →</span>
          </div>
        </a>
      `;
    }).join('');
  }

  // Highlight active nav link
  document.querySelectorAll('.mega-item').forEach(item => {
    if (item.href && item.href.includes(key)) {
      item.style.background = 'var(--blue-pale)';
    }
  });
});
