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

  'sertifikasi-iso': {
    badge: '🏅 STANDARISASI INTERNASIONAL',
    title: 'Sertifikasi ISO',
    checklist: [
      'Sertifikat ISO 9001:2015 (Manajemen Mutu)',
      'Sertifikat ISO 14001:2015 (Sistem Lingkungan)',
      'Sertifikat ISO 45001:2018 (Manajemen K3)',
      'Pendampingan audit &amp; dokumentasi penuh',
    ],
    price: 'Rp 12.500.000',
    oldPrice: 'Rp 15.000.000',
    cta: 'Ajukan Sertifikasi ISO',
    docTitle: 'Sertifikat ISO Resmi',
    docIco: '🏅',
    duration: '3–4 minggu',
    features: [
      { ico: '🎖️', title: 'Sertifikasi ISO Terakreditasi', desc: 'Sertifikat ISO resmi yang dikeluarkan oleh badan sertifikasi nasional maupun internasional yang terakreditasi KAN/IAS.' },
      { ico: '📝', title: 'Penyusunan Manual Mutu &amp; Prosedur', desc: 'Pembuatan manual mutu, instruksi kerja, dan kebijakan perusahaan sesuai klausul standar ISO.' },
      { ico: '🕵️', title: 'Internal Audit &amp; Review Manajemen', desc: 'Pendampingan pelaksanaan audit internal serta rapat tinjauan manajemen untuk kesiapan audit eksternal.' },
    ],
    steps: [
      { title: 'Gap Analysis &amp; Diagnosa Awal', desc: 'Menganalisis kesiapan sistem operasional perusahaan saat ini dibandingkan standar ISO.' },
      { title: 'Perancangan Sistem &amp; Dokumentasi', desc: 'Menyusun prosedur kerja (SOP), instruksi kerja, formulir, dan manual mutu.' },
      { title: 'Implementasi &amp; Audit Internal', desc: 'Menerapkan sistem baru secara operasional dan melatih tim internal untuk audit.' },
      { title: 'Audit Badan Sertifikasi (Stage 1 &amp; 2)', desc: 'Pendampingan penuh saat audit eksternal oleh auditor dari badan sertifikasi pilihan hingga sertifikat diterbitkan.' },
    ],
    faq: [
      { q: 'Berapa lama masa berlaku Sertifikat ISO?', a: 'Sertifikat ISO berlaku selama 3 tahun dengan kewajiban audit pengawasan (surveillance audit) setiap tahun.' },
      { q: 'Apa saja dokumen yang harus disiapkan?', a: 'Legalitas perusahaan (Akta, NIB), profil organisasi, serta komitmen pimpinan untuk menerapkan sistem manajemen mutu.' }
    ],
    related: ['sop', 'pendirian-pt', 'sni']
  },

  'sni': {
    badge: '🛡️ SERTIFIKASI MUTU NASIONAL',
    title: 'Sertifikasi SNI',
    checklist: [
      'Sertifikat SPPT SNI dari LSPro Terakreditasi',
      'Pengujian Laboratorium terakreditasi KAN',
      'Pendampingan Audit Sistem Manajemen Mutu (SMM)',
      'Registrasi Nomor Pendaftaran Barang (NPB)',
    ],
    price: 'Rp 25.000.000',
    oldPrice: 'Rp 30.000.000',
    cta: 'Ajukan Sertifikasi SNI',
    docTitle: 'Sertifikat SPPT SNI',
    docIco: '🛡️',
    duration: '2–3 bulan',
    features: [
      { ico: '🔬', title: 'Pengujian Laboratorium KAN', desc: 'Melakukan pengujian kesesuaian fisik, kimia, dan mekanis sampel produk di laboratorium penguji terakreditasi.' },
      { ico: '🏭', title: 'Audit Pabrik &amp; LSPro', desc: 'Pendampingan penuh audit proses produksi di pabrik oleh Lembaga Sertifikasi Produk (LSPro) resmi.' },
      { ico: '🏷️', title: 'Tanda SNI &amp; NPB', desc: 'Penerbitan Nomor Pendaftaran Barang (NPB) dan hak penempelan tanda SNI di kemasan produk.' },
    ],
    steps: [
      { title: 'Identifikasi Skema &amp; Parameter SNI', desc: 'Menentukan apakah SNI produk wajib/sukarela dan menganalisis parameter pengujian.' },
      { title: 'Persiapan Dokumen &amp; SMM Pabrik', desc: 'Menyusun manual mutu pabrik dan melengkapi berkas administrasi importir/produsen.' },
      { title: 'Audit LSPro &amp; Sampling Produk', desc: 'Petugas LSPro melakukan audit lapangan ke fasilitas produksi dan mengambil sampel acak.' },
      { title: 'Pengujian Laboratorium &amp; Terbit SNI', desc: 'Menunggu hasil pengujian laboratorium dan sidang panel LSPro hingga SPPT SNI diterbitkan.' },
    ],
    faq: [
      { q: 'Apakah semua produk wajib memiliki SNI?', a: 'Tidak semua, ada produk dengan SNI Wajib (seperti Helm, Air Mineral, Baja, dll.) dan ada yang SNI Sukarela.' },
      { q: 'Berapa biaya pengujian laboratorium?', a: 'Biaya pengujian lab bervariasi bergantung pada jenis produk dan parameter uji yang dipersyaratkan.' }
    ],
    related: ['sertifikasi-iso', 'merek-haki', 'sop']
  },

  'sop': {
    badge: '⚙️ OPERASIONAL EFEKTIF',
    title: 'Standarisasi SOP',
    checklist: [
      'Buku Dokumen SOP Departemen Lengkap',
      'Flowchart Visual &amp; Bagan Alur Kerja',
      'Deskripsi Pekerjaan (Job Descriptions) Jelas',
      'Template Formulir Kerja &amp; KPI Pendukung',
    ],
    price: 'Rp 6.000.000',
    oldPrice: 'Rp 8.000.000',
    cta: 'Ajukan Pembuatan SOP',
    docTitle: 'Buku Dokumen SOP',
    docIco: '⚙️',
    duration: '2–3 minggu',
    features: [
      { ico: '📊', title: 'Pemetaan Proses Bisnis', desc: 'Menganalisis dan menyusun ulang alur kerja divisi keuangan, HRD, pemasaran, dan operasional inti agar lebih ramping.' },
      { ico: '🗺️', title: 'Flowchart Visual Terstruktur', desc: 'Pembuatan diagram alir visual untuk mempermudah karyawan memahami tanggung jawab masing-masing.' },
      { ico: '📈', title: 'KPI &amp; Form Evaluasi Kerja', desc: 'Penyusunan indikator kinerja utama (KPI) serta formulir harian/mingguan untuk memantau disiplin tim.' },
    ],
    steps: [
      { title: 'Wawancara &amp; Pemetaan Bisnis', desc: 'Tim melakukan wawancara dengan manajemen &amp; kepala divisi untuk memetakan kondisi saat ini (As-Is).' },
      { title: 'Penyusunan Draf Prosedur (SOP)', desc: 'Menulis draf tertulis berisi alur kerja, penanggung jawab, input, dan output proses.' },
      { title: 'Review &amp; Diskusi Bersama (FGD)', desc: 'Melakukan Focus Group Discussion bersama manajemen untuk meninjau kecocokan draf SOP.' },
      { title: 'Finalisasi &amp; Pelatihan Sosialisasi', desc: 'Penyelesaian dokumen akhir, pembuatan diagram visual, dan sesi sosialisasi kepada karyawan.' },
    ],
    faq: [
      { q: 'Mengapa bisnis memerlukan SOP?', a: 'SOP menjaga konsistensi kualitas pelayanan, mencegah kesalahan operasional, dan mempermudah onboarding karyawan baru.' },
      { q: 'Apakah SOP disesuaikan dengan alur kerja kami?', a: 'Ya, tim kami merancang SOP kustom berdasarkan wawancara mendalam mengenai bisnis spesifik Anda.' }
    ],
    related: ['sertifikasi-iso', 'pendirian-pt', 'nib']
  },

  'nib': {
    badge: '📄 IDENTITAS BERUSAHA RESMI',
    title: 'Nomor Induk Berusaha (NIB)',
    checklist: [
      'Dokumen NIB OSS RBA Terbit Resmi',
      'Penentuan Kode KBLI 2020 yang Akurat',
      'Username &amp; Password Akun OSS Perusahaan',
      'Hak Akses Ekspor-Impor Dasar (API-U/API-P)',
    ],
    price: 'Rp 1.000.000',
    oldPrice: 'Rp 1.500.000',
    cta: 'Ajukan Pembuatan NIB',
    docTitle: 'Dokumen NIB OSS',
    docIco: '📄',
    duration: '1–2 hari kerja',
    features: [
      { ico: '🔑', title: 'Akses OSS Terintegrasi', desc: 'Pembuatan akun resmi di OSS RBA dengan hak akses penuh diserahkan kembali kepada Anda.' },
      { ico: '🏷️', title: 'Klasifikasi KBLI Tepat', desc: 'Konsultasi kode KBLI yang cocok agar bisnis Anda beroperasi sesuai lingkup hukum yang berlaku.' },
      { ico: '⚙️', title: 'Satu Nomor untuk Semua', desc: 'NIB berlaku juga sebagai Tanda Daftar Perusahaan (TDP), Angka Pengenal Importir (API), dan Akses Kepabeanan.' },
    ],
    steps: [
      { title: 'Persiapan Data Pengurus', desc: 'Mengumpulkan KTP, NPWP, dan Akta Perusahaan (bila ada) sebagai syarat awal.' },
      { title: 'Pemetaan Lokasi &amp; KBLI', desc: 'Menganalisis kode KBLI yang sesuai serta koordinat lokasi usaha untuk izin tata ruang.' },
      { title: 'Input Sistem OSS RBA', desc: 'Mengisi formulir modal disetor, jumlah karyawan, dan rencana kegiatan usaha di portal OSS.' },
      { title: 'Penerbitan Dokumen NIB', desc: 'NIB diterbitkan secara elektronik dan file asli PDF resmi dikirimkan langsung kepada Anda.' },
    ],
    faq: [
      { q: 'Apakah perorangan bisa membuat NIB?', a: 'Ya, NIB bisa dibuat untuk perorangan (Usaha Mikro Kecil) maupun badan usaha seperti PT atau CV.' },
      { q: 'Apakah NIB berlaku selamanya?', a: 'Ya, NIB berlaku selama pelaku usaha menjalankan kegiatan usahanya sesuai ketentuan.' }
    ],
    related: ['pendirian-pt', 'sertifikat-standar', 'perizinan-usaha']
  },

  'sertifikat-standar': {
    badge: '📜 PERSETUJUAN STANDAR USAHA',
    title: 'Sertifikat Standar',
    checklist: [
      'Sertifikat Standar Disetujui/Terverifikasi OSS',
      'Dokumen Pernyataan Mandiri Kepatuhan Standar',
      'Draf Dokumen Kriteria Teknis &amp; Sarana Usaha',
      'Pengawalan Proses Verifikasi Sektoral Kementerian',
    ],
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    cta: 'Urus Sertifikat Standar',
    docTitle: 'Sertifikat Standar OSS',
    docIco: '📜',
    duration: '5–10 hari kerja',
    features: [
      { ico: '🔍', title: 'Penyelarasan Risiko KBLI', desc: 'Membantu pemenuhan standar bagi kegiatan usaha kategori risiko Menengah-Rendah &amp; Menengah-Tinggi.' },
      { ico: '📄', title: 'Penyusunan Berkas Teknis', desc: 'Menyusun berkas dokumen persyaratan standar sarana, struktur organisasi, dan panduan mutu.' },
      { ico: '🤝', title: 'Kombinasi Izin Tata Ruang', desc: 'Memastikan KKPR (Kesesuaian Kegiatan Pemanfaatan Ruang) dan izin tata ruang terintegrasi.' },
    ],
    steps: [
      { title: 'Verifikasi Risiko KBLI Usaha', desc: 'Mengecek tingkat risiko KBLI 2020 dan menganalisis kewajiban Sertifikat Standar.' },
      { title: 'Pengisian Pernyataan Mandiri', desc: 'Mengisi pernyataan kesanggupan pemenuhan standar di platform OSS RBA.' },
      { title: 'Penyusunan &amp; Upload Bukti Teknis', desc: 'Mengunggah draf persyaratan sarana usaha/sistem manajemen ke dinas teknis sektoral.' },
      { title: 'Persetujuan &amp; Penerbitan Sertifikat', desc: 'Memantau verifikasi instansi pemerintah daerah/pusat hingga status Sertifikat Standar dinyatakan disetujui.' },
    ],
    faq: [
      { q: 'Apa beda NIB dan Sertifikat Standar?', a: 'NIB adalah identitas dasar pelaku usaha, sedangkan Sertifikat Standar adalah legalitas pemenuhan standar operasional untuk usaha risiko menengah.' },
      { q: 'Siapa yang melakukan verifikasi?', a: 'Verifikasi dilakukan oleh Dinas Teknis daerah (misalnya Dinas Pariwisata, Kesehatan, Perdagangan) sesuai dengan jenis usaha Anda.' }
    ],
    related: ['nib', 'pendirian-pt', 'sertifikasi-iso']
  },

  'perizinan-usaha': {
    badge: '🔑 IZIN SEKTORAL &amp; OPERASIONAL',
    title: 'Perizinan Usaha',
    checklist: [
      'Konfirmasi KKPR (Tata Ruang / Izin Lokasi)',
      'Persetujuan Lingkungan (SPPL / UKL-UPL)',
      'Perizinan Menunjang Kegiatan Usaha (PB-UMKU)',
      'Izin Khusus Sektoral Kementerian Teknis',
    ],
    price: 'Hubungi Kami',
    oldPrice: null,
    cta: 'Hubungi Konsultan Kami',
    docTitle: 'Perizinan Usaha Khusus',
    docIco: '🔑',
    duration: '14–30 hari kerja',
    features: [
      { ico: '🗺️', title: 'Izin Tata Ruang (KKPR)', desc: 'Pengecekan kesesuaian zonasi RDTR daerah dan pengurusan KKPR otomatis/darat di platform OSS.' },
      { ico: '🍀', title: 'Persetujuan Lingkungan', desc: 'Pembuatan dokumen lingkungan SPPL atau UKL-UPL sesuai dengan jenis industri dan skala dampak operasional.' },
      { ico: '🏢', title: 'PB-UMKU &amp; Izin Sektoral', desc: 'Membantu pengurusan izin edar, sertifikat produksi, izin impor/ekspor, dan izin komersial sektoral lainnya.' },
    ],
    steps: [
      { title: 'Konsultasi RDTR &amp; Zonasi', desc: 'Menganalisis peruntukan ruang lokasi kantor/pabrik sesuai rencana tata ruang daerah.' },
      { title: 'Pengajuan KKPR Elektronik', desc: 'Mengajukan KKPR di OSS dan mengawal pembayaran PNBP (jika ada) hingga terbit.' },
      { title: 'Drafting Dokumen Lingkungan', desc: 'Menyusun dokumen UKL-UPL atau SPPL untuk diserahkan ke Dinas Lingkungan Hidup.' },
      { title: 'Penerbitan Izin Operasional', desc: 'Pengajuan izin khusus komersial (PB-UMKU) di OSS RBA hingga terverifikasi instansi kementerian terkait.' },
    ],
    faq: [
      { q: 'Apa itu PB-UMKU?', a: 'PB-UMKU adalah Perizinan Berusaha Untuk Menunjang Kegiatan Usaha, yaitu izin operasional khusus di luar NIB (misalnya Izin Edar, Izin Apotek, dll.).' },
      { q: 'Apakah biaya KKPR sama di setiap daerah?', a: 'Sesuai aturan PNBP tata ruang, tarif KKPR dihitung berdasarkan luas lahan, nilai investasi, dan koefisien peruntukan tata ruang.' }
    ],
    related: ['nib', 'sertifikat-standar', 'pendirian-pt']
  },

  'pemasaran-digital': {
    badge: '📈 GROWTH &amp; PEMASARAN',
    title: 'Digital Marketing',
    checklist: [
      'Optimasi SEO Website (Target Halaman Pertama Google)',
      'Setup &amp; Optimasi Google Ads &amp; Meta Ads (FB &amp; IG)',
      'Pengelolaan Content Marketing &amp; Social Media Manajemen',
      'Landing Page Profesional dengan Konversi Tinggi',
      'Analisis Data &amp; Tracking Dashboard Analytics Terintegrasi',
    ],
    price: 'Rp 5.000.000',
    oldPrice: 'Rp 7.500.000',
    cta: 'Mulai Pemasaran Digital',
    docTitle: 'Strategi Marketing',
    docIco: '📈',
    duration: '2–4 minggu',
    features: [
      { ico: '🔍', title: 'SEO &amp; Landing Page Kinerja Tinggi', desc: 'Meningkatkan lalu lintas organik website Anda di mesin pencari Google dan membuat landing page berkecepatan tinggi yang dioptimalkan untuk penjualan.' },
      { ico: '📣', title: 'Google Ads &amp; Meta Ads Tertarget', desc: 'Mengelola kampanye iklan berbayar (PPC) di Google Search/Display serta Instagram, Facebook, dan TikTok Ads untuk menjangkau pembeli potensial secara langsung.' },
      { ico: '📊', title: 'Content Marketing &amp; Analytics', desc: 'Pembuatan konten media sosial kreatif yang relevan disertai pemasangan tracking pixel, Google Analytics, dan laporan performa berkala.' },
    ],
    steps: [
      { title: 'Riset Audiens &amp; Kompetitor', desc: 'Menganalisis kata kunci berkonversi tinggi, tren pencarian kompetitor, dan menentukan profil target pelanggan bisnis Anda.' },
      { title: 'Pembuatan Landing Page &amp; Tracking', desc: 'Mendesain landing page penawaran produk/jasa dan memasang tracking pixel serta kode analitik untuk mengukur data konversi.' },
      { title: 'Peluncuran Campaign &amp; Konten', desc: 'Menulis copywriting iklan yang menarik, mendesain aset visual, menyetel parameter target demografis, dan meluncurkan kampanye iklan.' },
      { title: 'Optimasi Harian &amp; Laporan Bulanan', desc: 'Memantau biaya per klik (CPC), rasio konversi (ROAS), dan mengirimkan laporan analitik bulanan yang transparan kepada Anda.' },
    ],
    faq: [
      { q: 'Berapa lama iklan digital mulai membuahkan hasil?', a: 'Iklan Google/Meta Ads dapat menghasilkan lalu lintas pengunjung dan prospek leads dalam waktu 24–48 jam setelah aktif.' },
      { q: 'Apakah paket ini termasuk anggaran beriklan?', a: 'Harga paket adalah fee jasa pengelolaan dari Resmiin. Anggaran saldo iklan (ad spend) ditentukan dan dibayarkan secara terpisah oleh klien.' }
    ],
    related: ['pendirian-pt', 'merek-haki', 'sop']
  },

  'virtual-office': {
    badge: '🏢 ALAMAT BISNIS STRATEGIS',
    title: 'Virtual Office',
    checklist: [
      'Alamat Bisnis Prestisius &amp; Zonasi Perkantoran Komersial',
      'Layanan Pengelolaan Surat Menyurat &amp; Paket Masuk',
      'Resepsionis Profesional (Handling Telpon Klien Anda)',
      'Gratis Penggunaan Meeting Room &amp; Akses Coworking Space',
      'Surat Perjanjian Sewa Resmi (PKS) untuk Domisili &amp; PKP',
      'Tersedia Opsi Sewa Harian/Bulanan Private Office',
    ],
    price: 'Rp 3.500.000',
    oldPrice: 'Rp 4.500.000',
    cta: 'Sewa Virtual Office',
    docTitle: 'Perjanjian Sewa Kantor',
    docIco: '🏢',
    duration: '1–2 hari kerja',
    features: [
      { ico: '📍', title: 'Alamat Prestisius &amp; Legalitas PKP', desc: 'Lokasi di gedung perkantoran komersial utama yang lolos verifikasi zonasi untuk syarat pendirian PT/CV dan pengajuan Pengusaha Kena Pajak (PKP).' },
      { ico: '📞', title: 'Layanan Resepsionis &amp; Surat', desc: 'Resepsionis profesional siap menangani panggilan telepon masuk atas nama perusahaan Anda dan meneruskan info surat/paket masuk secara instan.' },
      { ico: '🛋️', title: 'Meeting Room &amp; Private Office', desc: 'Akses gratis ke meeting room berfasilitas lengkap, area coworking space yang dinamis, serta opsi peningkatan ke ruang kantor fisik (Private Office).' },
    ],
    steps: [
      { title: 'Pilih Alamat Gedung &amp; Paket', desc: 'Memilih lokasi gedung kantor virtual strategis yang diinginkan sesuai domisili target pasar Anda.' },
      { title: 'Lengkapi Data Penyewa', desc: 'Mengisi form pemesanan dan mengirimkan fotokopi KTP &amp; NPWP penanggung jawab perusahaan.' },
      { title: 'Penyusunan Surat Perjanjian Sewa', desc: 'Menandatangani PKS (Perjanjian Kerjasama) sewa kantor yang sah secara hukum.' },
      { title: 'Pengiriman Berkas Domisili', desc: 'Surat Keterangan Domisili diserahkan dalam bentuk PDF dan cetak untuk siap digunakan sebagai domisili resmi perusahaan.' },
    ],
    faq: [
      { q: 'Apakah sewa Virtual Office bisa untuk PKP?', a: 'Ya, alamat Virtual Office kami berzonasi perkantoran komersial resmi yang memenuhi syarat kelayakan survei PKP kantor pajak.' },
      { q: 'Apakah ada batasan waktu penggunaan meeting room?', a: 'Ya, setiap paket memiliki jatah kuota jam meeting room gratis per bulan (biasanya 4–8 jam per bulan).' }
    ],
    related: ['pendirian-pt', 'pendirian-cv', 'nib']
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
  'sertifikasi-iso':     { name: 'Sertifikasi ISO',      ico: '🏅', bg: '#FDF2F8', price: 'Rp 12.500.000' },
  'sni':                 { name: 'Sertifikasi SNI',      ico: '🛡️', bg: '#ECFDF5', price: 'Rp 25.000.000' },
  'sop':                 { name: 'Standarisasi SOP',     ico: '⚙️', bg: '#F3F4F6', price: 'Rp 6.000.000' },
  'nib':                 { name: 'NIB OSS',              ico: '📄', bg: '#F0FDF4', price: 'Rp 1.000.000' },
  'sertifikat-standar':  { name: 'Sertifikat Standar',   ico: '📜', bg: '#FEF3C7', price: 'Rp 2.500.000' },
  'perizinan-usaha':     { name: 'Perizinan Usaha',      ico: '🔑', bg: '#FFF1F2', price: 'Hubungi Kami' },
  'pemasaran-digital':   { name: 'Digital Marketing',    ico: '📈', bg: '#EEF2F6', price: 'Rp 5.000.000' },
  'virtual-office':      { name: 'Virtual Office',       ico: '🏢', bg: '#F5F3FF', price: 'Rp 3.500.000' },
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
