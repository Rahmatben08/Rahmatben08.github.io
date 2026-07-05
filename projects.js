const projectsData = [
  {
    id: "fincorp-enterprise",
    githubUrl: "https://github.com/Rahmatben08/fincorp-enterprise",
    title: "Sistem Keuangan Enterprise & Portal Karyawan - PT Expro Gio Nusantara",
    role: "Full-Stack & DevOps Engineer",
    category: "web",
    techStack: ["React", "Java Spring Boot", "Go", "PostgreSQL", "Keycloak SSO", "Docker"],
    shortDescription: "Sistem ERP keuangan & payroll terintegrasi skala enterprise untuk PT Expro Gio Nusantara dengan arsitektur microservices, Keycloak SSO, dan Docker.",
    fullDescription: "Sistem ERP keuangan terintegrasi berskala enterprise yang dirancang untuk PT Expro Gio Nusantara guna mengotomatisasi operasional finansial internal, payroll karyawan, invoicing, dan approval transaksi. Aplikasi ini mengimplementasikan arsitektur microservices terdistribusi yang memisahkan core business logic (Java Spring Boot), modul penggajian (Go Payroll Service), dan otentikasi tunggal (Keycloak SSO), diorkestrasi menggunakan Docker Compose.",
    features: [
      "Integrasi Single Sign-On (SSO) menggunakan Keycloak terenkripsi OAuth2/OIDC untuk otentikasi terpusat.",
      "Arsitektur Microservices yang memisahkan API core (Java Spring Boot) dan payroll engine (Go Payroll Service) untuk performa modular.",
      "Sistem Multi-Role Approval di mana pengeluaran operasional besar (> Rp50 juta) wajib disetujui Manajer secara real-time.",
      "Manajemen Payroll terotomatisasi berdasarkan rekam kehadiran, tunjangan divisi, potongan BPJS, dan visualisasi capaian target KPI.",
      "Audit Trail & Logging terstruktur yang melacak dan mencatat kronologi aksi pengguna secara real-time untuk keperluan transparansi audit.",
      "Kontainerisasi penuh menggunakan Docker Compose untuk mengorkestrasi PostgreSQL, Keycloak, Spring Boot, Go, dan React."
    ],
    architecture: "Menggunakan pola arsitektur Microservices terdistribusi dengan API Gateway. Validasi token JWT dilakukan secara terdesentralisasi di setiap service via Keycloak Identity Provider. PostgreSQL bertindak sebagai database relasional utama dengan skema relasi yang terindeks."
  },
  {
    id: "spk-konseling-pkbi",
    githubUrl: "https://github.com/Rahmatben08/spk-konseling-pkbi",
    title: "Sistem Pendukung Keputusan (SPK) Konseling PKBI Sumatera Selatan",
    role: "Web Developer",
    category: "web",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "CSS3"],
    shortDescription: "Aplikasi SPK berbasis web full-stack untuk penentuan prioritas antrean konseling di PKBI Sumatera Selatan.",
    fullDescription: "Aplikasi web full-stack ini dirancang untuk mendigitalisasi layanan konseling di PKBI Sumatera Selatan. Dilengkapi dengan algoritma perhitungan otomatis untuk menentukan prioritas antrean konseling berdasarkan tingkat urgensi masalah klien. Aplikasi ini menyederhanakan administrasi konseling dengan antarmuka yang modern dan responsif.",
    features: [
      "Algoritma perhitungan otomatis penentu prioritas antrean konseling berdasarkan data input klien.",
      "Sistem Role Based Access Control (RBAC) lengkap untuk 3 jenis portal pengguna: Admin, Klien, dan Konselor.",
      "Manajemen jadwal konseling yang dinamis dan fleksibel.",
      "Pengisian kuesioner mandiri oleh klien sebelum sesi konseling dimulai.",
      "Rekam jejak riwayat konseling (logbook) yang terstruktur dan aman.",
      "Dashboard pelaporan otomatis dengan tampilan analitik ringkas.",
      "Desain antarmuka responsif dengan efek transisi & animasi scroll reveal modern."
    ],
    architecture: "Aplikasi ini memisahkan logika backend menggunakan OOP PHP dengan routing yang terstruktur, dikombinasikan dengan database MySQL relasional menggunakan Foreign Key Constraints untuk menjamin integritas data. Proteksi XSS dan SQL Injection diterapkan menggunakan Prepared Statements (PDO)."
  },
  {
    id: "website-mi-polsri",
    githubUrl: "https://github.com/Rahmatben08/website-mi-polsri",
    title: "Website Jurusan Manajemen Informatika POLSRI",
    role: "Web Developer",
    category: "web",
    techStack: ["PHP 8", "MySQL", "JavaScript ES6+", "Bootstrap 5", "CSS3"],
    shortDescription: "Website profil resmi Jurusan Manajemen Informatika Politeknik Negeri Sriwijaya.",
    fullDescription: "Website profil lengkap untuk Jurusan Manajemen Informatika POLSRI. Menyediakan informasi profil, kurikulum, galeri kegiatan, struktur organisasi interaktif, serta chatbot pintar berbasis aturan untuk menjawab pertanyaan calon mahasiswa.",
    features: [
      "Panel Admin CRUD lengkap untuk mengelola konten, berita, galeri, dan kurikulum.",
      "Desain responsif yang dilengkapi dengan transisi animasi liquid yang halus.",
      "Bagan organisasi interaktif (Interactive Org Chart) yang dapat diklik dan diexpand.",
      "Informasi kurikulum dan silabus interaktif per semester.",
      "Fitur pencarian berita & dokumen secara live (Live Search) menggunakan AJAX.",
      "Chatbot internal berbasis aturan (Rule-based Chatbot) untuk layanan FAQ otomatis.",
      "Sistem manajemen dokumen & galeri terintegrasi."
    ],
    architecture: "Dibangun dengan arsitektur MVC berbasis OOP PHP 8. Keamanan web menjadi fokus utama dengan penerapan token CSRF pada formulir, perlindungan XSS, serta penggunaan PDO Prepared Statements untuk menangkal serangan SQL Injection."
  },
  {
    id: "pos-kopi-miring",
    githubUrl: "https://github.com/Rahmatben08/pos-kopi-miring",
    title: "Sistem B2B Inventory & POS 'Kopi Miring'",
    role: "Full-Stack Developer",
    category: "web",
    techStack: ["PHP 8", "Laravel 11", "SQLite", "MySQL", "Alpine.js", "Tailwind CSS"],
    shortDescription: "Aplikasi web manajemen inventaris dan POS (Point of Sale) skala B2B untuk bisnis kopi.",
    fullDescription: "Sistem B2B komprehensif untuk bisnis Kopi Miring yang mengintegrasikan pencatatan kasir (POS) dan manajemen gudang. Aplikasi ini mendukung optimasi rantai pasokan dari bahan baku, produksi, alokasi stok ke gerai, hingga penanganan retur barang.",
    features: [
      "Sistem otentikasi 5 tingkat Role Based Access Control (RBAC): Super Admin, Admin Operasional, Manajer, Produksi, dan Seller.",
      "Dashboard analitik real-time yang memantau performa penjualan harian, tren produk terlaris, dan tingkat stok gudang.",
      "Manajemen stok end-to-end yang melacak pergerakan bahan baku, proses produksi kopi, alokasi ke gerai, hingga barang retur.",
      "Audit logging otomatis menggunakan Laravel Observer Pattern untuk mencatat semua tindakan sensitif (penghapusan data, transaksi, perubahan stok).",
      "Custom web sharing integration untuk berbagi laporan penjualan atau bukti transaksi langsung ke WhatsApp dan media sosial.",
      "Penanganan Race Condition pada pembaruan stok menggunakan teknik Pessimistic Locking (lockForUpdate) pada database."
    ],
    architecture: "Arsitektur web dibangun di atas Laravel 11 dengan struktur MVC yang sangat rapi. Frontend menggunakan gabungan Tailwind CSS dan Alpine.js untuk performa reaktif yang ringan. Dilengkapi proteksi CSRF bawaan, rate limiting, dan ORM Eloquent dengan relasi data terstruktur."
  },
  {
    id: "figma-kopi-miring",
    githubUrl: "https://github.com/Rahmatben08/figma-kopi-miring",
    title: "Interactive UI & Prototype - Sistem B2B Kopi Miring",
    role: "Interactive UI & Prototype Engineer",
    category: "design",
    techStack: ["Figma", "HTML5", "CSS3", "JavaScript", "Base64 Encoding"],
    shortDescription: "Desain sistem UI/UX interaktif dan purwarupa web (prototype) untuk B2B Kopi Miring.",
    fullDescription: "Merancang wireframe, alur pengguna, dan prototype interaktif yang komprehensif untuk sistem manajemen B2B Kopi Miring. Desain diuji dan diubah menjadi kode HTML DOM agar kompatibel 100% dengan mesin impor desain Figma.",
    features: [
      "Merancang wireframe dan alur pengguna interaktif (user flow) mencakup 58 layar desain beresolusi tinggi di Figma.",
      "Menerapkan design system terstandarisasi dengan token tema kustom Tailwind CSS (warna, tipografi, jarak, border radius).",
      "Modifikasi struktur DOM HTML agar 100% kompatibel saat diimpor balik dengan mesin plugin Figma (seperti html.to.design).",
      "Injeksi media gambar dan aset grafis langsung ke format Base64 untuk memastikan portabilitas aset tanpa dependensi eksternal.",
      "Membangun prototipe web interaktif mandiri yang memiliki sidebar navigasi global dwibahasa, modal manajemen user, dan alur simulasi batch produksi baru."
    ],
    architecture: "Desain ini menggunakan konsep modular komponen di Figma yang selaras dengan komponen HTML. Struktur DOM bersih disiapkan menggunakan Vanilla CSS modern untuk rendering layout yang identik antara desain figma dan implementasi web."
  },
  {
    id: "cbt-trakindo",
    githubUrl: "https://github.com/Rahmatben08/cbt-trakindo",
    title: "Aplikasi Web Manajemen Inventaris & Pelacakan Transaksi Suku Cadang PT Trakindo Utama Palembang",
    role: "Web Developer",
    category: "web",
    techStack: ["PHP 8", "CodeIgniter 4", "MySQL", "MariaDB", "Vanilla CSS", "PhpSpreadsheet"],
    shortDescription: "Sistem manajemen stok suku cadang alat berat dan logistik pergudangan di PT Trakindo Utama Palembang.",
    fullDescription: "Aplikasi web manajemen inventarisasi dan pelacakan transaksi barang masuk/keluar untuk kebutuhan operasional pergudangan suku cadang PT Trakindo Utama cabang Palembang. Memudahkan pemantauan stok suku cadang bernilai tinggi secara real-time dan transparan.",
    features: [
      "Dashboard analitik visual yang menyajikan grafik pergerakan stok harian, distribusi barang per kategori, dan grafik pengeluaran per Cost Center.",
      "Formulir pelacakan logistik terstruktur yang wajib mencantumkan nama pemohon, otorisasi atasan, nomor SO/Job Cost, serta Cost Center.",
      "Sistem peringatan stok menipis (threshold alert) otomatis untuk mendeteksi suku cadang yang mendekati batas minimum stok.",
      "Modul laporan instan (ekspor Excel) berbasis pustaka PhpSpreadsheet untuk rekapitulasi data harian/bulanan.",
      "Penerapan relasi database yang ketat berbasis Foreign Key constraints pada MySQL/MariaDB untuk model integritas data yang kokoh.",
      "Optimalisasi query agregasi database (SUM, COUNT) guna menghasilkan performa data grafik real-time yang optimal.",
      "Pengamanan rute halaman menggunakan Session-based Authentication Middleware."
    ],
    architecture: "Dikembangkan menggunakan arsitektur MVC (Model-View-Controller) murni dari CodeIgniter 4 dengan pemisahan folder logic dan tampilan yang sangat modular dan bersih. Semua query diproses melalui Query Builder CI4 dengan parameter sanitasi otomatis."
  },
  {
    id: "mobile-bimbingan-skripsi",
    githubUrl: "https://github.com/Rahmatben08/mobile-bimbingan-skripsi",
    title: "Aplikasi Bimbingan Akademik & Pendaftaran Sidang Skripsi",
    role: "Android Developer",
    category: "mobile",
    techStack: ["Kotlin", "Android SDK", "Jetpack Compose", "Node.js", "Firebase", "REST API"],
    shortDescription: "Aplikasi Android Native untuk bimbingan skripsi online dan pendaftaran sidang mahasiswa.",
    fullDescription: "Aplikasi mobile native Android yang memfasilitasi komunikasi bimbingan skripsi antara dosen pembimbing dan mahasiswa secara daring, serta pendaftaran sidang tugas akhir secara digital.",
    features: [
      "Fitur bimbingan online interaktif (chatting real-time, logbook bimbingan, dan upload draf berkas skripsi).",
      "Notifikasi push (Firebase Cloud Messaging) ketika ada chat baru atau persetujuan draf dari dosen.",
      "Sistem integrasi REST API dengan backend Node.js untuk autentikasi dan sinkronisasi data.",
      "State management modern di Android menggunakan Kotlin StateFlow dan LiveData.",
      "Desain UI minimalis dan responsif menggunakan toolkit UI deklaratif Jetpack Compose & Material Design 3.",
      "Modul upload file dokumen draf skripsi langsung dari penyimpanan eksternal handphone."
    ],
    architecture: "Mengikuti pedoman Android Architecture Guidelines dengan pola Clean Architecture (MVVM - Model-View-ViewModel). Pemisahan data layer, domain layer, dan UI layer menjamin kode aplikasi mudah dipelihara dan diuji."
  },
  {
    id: "mobile-jadwal-kuliah",
    githubUrl: "https://github.com/Rahmatben08/mobile-jadwal-kuliah",
    title: "Aplikasi Penjadwalan Kuliah Interaktif",
    role: "Android Developer",
    category: "mobile",
    techStack: ["Kotlin", "Android SDK", "SQLite", "Room Database", "Material 3"],
    shortDescription: "Aplikasi Android Native pengelola jadwal kuliah dengan pengingat otomatis.",
    fullDescription: "Aplikasi mobile yang membantu mahasiswa dalam mencatat, melihat, dan mengelola jadwal perkuliahan secara interaktif. Menyertakan widget homescreen dan push notification pengingat jam kuliah.",
    features: [
      "Penyimpanan jadwal offline menggunakan Room Database (sistem wrapper SQLite bawaan Android).",
      "Widget layar utama (Homescreen Widget) yang menampilkan jadwal kuliah hari ini secara real-time.",
      "Sistem pengingat alarm/push notification (menggunakan AlarmManager Android) sebelum jam kuliah dimulai.",
      "Tampilan kalender perkuliahan interaktif (dynamic calendar view) yang intuitif.",
      "Desain UI modern dengan dukungan Mode Gelap (Dark Mode) otomatis mengikuti setelan sistem operasi HP."
    ],
    architecture: "Menggunakan pola arsitektur MVVM dengan Android Architecture Components (Room Database, ViewModel, dan Repository Pattern). Hubungan antartabel SQLite diatur menggunakan relasi entitas Room yang aman."
  },
  {
    id: "mobile-bioguard",
    githubUrl: "https://github.com/Rahmatben08/mobile-bioguard",
    title: "BIO-GUARD: Aplikasi IoT & Pelacakan Rantai Dingin (Mobile PKM-KC)",
    role: "Ketua Tim & Pengembang Full-Stack (Mobile)",
    category: "mobile",
    techStack: ["Kotlin", "Android SDK", "Room DB", "IoT Integration", "Material 3"],
    shortDescription: "Aplikasi mobile native Android untuk kurir logistik vaksin/obat termolabil, terintegrasi sensor IoT dengan arsitektur Offline-First.",
    fullDescription: "BIO-GUARD adalah inovasi sistem siber-fisik yang dirancang untuk menjaga integritas dan stabilitas suhu obat termolabil (seperti vaksin) selama proses distribusi. Sistem ini mengintegrasikan perangkat IoT cerdas dengan aplikasi mobile untuk kurir dan dashboard web untuk fasilitas kesehatan. Inovasi utama sistem ini mencakup arsitektur Offline-First dengan mekanisme Store-and-Forward yang mencegah hilangnya data rekam jejak suhu saat armada melewati area tanpa sinyal seluler. Selain itu, proyek ini memanfaatkan Machine Learning untuk memprediksi risiko kerusakan produk berdasarkan sisa jarak tempuh dan kondisi kemacetan lalu lintas.",
    features: [
      "Arsitektur Offline-First dengan mekanisme Store-and-Forward untuk mencegah data hilang di area blank spot seluler.",
      "Sinkronisasi data suhu & kelembapan real-time dari sensor IoT termolabil via Bluetooth/REST API.",
      "Pelacakan lokasi kurir secara real-time dan notifikasi peringatan suhu kritis di jalan.",
      "Pemberian tanda tangan digital (digital signature pad) dan bukti foto penyerahan vaksin/obat.",
      "State management modern Android menggunakan Kotlin Flow dan LiveData."
    ],
    architecture: "Menerapkan Clean Architecture (MVVM) dengan Room Database sebagai local cache untuk mendukung penyimpanan data rekam jejak secara andal saat offline."
  },
  {
    id: "web-bioguard",
    githubUrl: "https://github.com/Rahmatben08/web-bioguard",
    title: "BIO-GUARD: Dashboard Pemantauan Suhu Rantai Dingin (Web PKM-KC)",
    role: "Ketua Tim & Pengembang Full-Stack (Web)",
    category: "web",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript ES6+", "Machine Learning"],
    shortDescription: "Dashboard pemantauan terpusat untuk memvisualisasikan data suhu logistik, sisa jarak tempuh, dan prediksi risiko kerusakan produk.",
    fullDescription: "BIO-GUARD adalah inovasi sistem siber-fisik yang dirancang untuk menjaga integritas dan stabilitas suhu obat termolabil (seperti vaksin) selama proses distribusi. Sistem ini mengintegrasikan perangkat IoT cerdas dengan aplikasi mobile untuk kurir dan dashboard web untuk fasilitas kesehatan. Inovasi utama sistem ini mencakup arsitektur Offline-First dengan mekanisme Store-and-Forward yang mencegah hilangnya data rekam jejak suhu saat armada melewati area tanpa sinyal seluler. Selain itu, proyek ini memanfaatkan Machine Learning untuk memprediksi risiko kerusakan produk berdasarkan sisa jarak tempuh dan kondisi kemacetan lalu lintas.",
    features: [
      "Visualisasi dashboard real-time data logistik rantai dingin (suhu, kelembapan, status armada).",
      "Integrasi Machine Learning untuk estimasi prediksi risiko kerusakan produk berdasarkan kemacetan & sisa jarak tempuh.",
      "Grafik data analitik suhu sensor IoT (IoT sensor charts) menggunakan Chart.js/Canvas.",
      "Sistem alarm peringatan dini via notifikasi web jika terjadi anomali suhu vaksin.",
      "Ekspor laporan data rekam jejak suhu sesuai kepatuhan standar logistik farmasi."
    ],
    architecture: "Backend web berbasis Laravel dengan REST API untuk menerima data logistik dari aplikasi Android kurir, dikombinasikan dengan database MySQL untuk retensi data jangka panjang."
  },
  {
    id: "ml-bioguard",
    githubUrl: "https://github.com/Rahmatben08/ml-bioguard",
    title: "BIO-GUARD: Model Machine Learning Prediksi Kerusakan Produk (PKM-KC)",
    role: "AI / Machine Learning Engineer",
    category: "web",
    techStack: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "Machine Learning"],
    shortDescription: "Model prediksi risiko kerusakan produk termolabil berbasis Machine Learning menggunakan estimasi jarak tempuh dan kondisi kemacetan.",
    fullDescription: "BIO-GUARD adalah inovasi sistem siber-fisik yang dirancang untuk menjaga integritas dan stabilitas suhu obat termolabil (seperti vaksin) selama proses distribusi. Sub-proyek ini berfokus pada pengembangan model Machine Learning yang memprediksi risiko degradasi/kerusakan produk secara real-time. Model menganalisis variabel sisa jarak tempuh, perkiraan waktu tempuh (ETA), riwayat fluktuasi suhu sensor IoT, dan tingkat kemacetan lalu lintas jalan raya untuk meminimalkan kegagalan pengiriman rantai dingin.",
    features: [
      "Pengembangan algoritma prediksi risiko kerusakan produk termolabil menggunakan model klasifikasi biner dan regresi tingkat risiko.",
      "Preprocessing data mentah logistik rantai dingin (suhu sensor harian, kelembapan, kelelahan armada).",
      "Feature engineering untuk estimasi sisa jarak tempuh dan data kemacetan lalu lintas real-time.",
      "Evaluasi kinerja model ML menggunakan metrik Accuracy, Precision, Recall, dan F1-Score.",
      "Ekspor model ke format terkompresi (joblib/pickle) untuk diintegrasikan ke REST API dashboard Laravel."
    ],
    architecture: "Model dikembangkan menggunakan Python dengan pustaka Scikit-Learn untuk algoritma klasifikasi (seperti Random Forest / Gradient Boosting), Pandas/NumPy untuk data manipulation, serta diintegrasikan via REST API dashboard Laravel."
  },
  {
    id: "roccaspace-automation",
    title: "Automasi Ekstraksi & Sinkronisasi Data Admin RoccaSpace ke Google Sheets",
    role: "Backend Developer",
    category: "web",
    techStack: ["Python", "Selenium", "Google Sheets API", "Cron Jobs", "Data Scraping"],
    shortDescription: "Script otomatisasi backend untuk mengekstraksi data admin RoccaSpace dan menyinkronkannya ke Google Sheets.",
    fullDescription: "Script otomatisasi backend yang dirancang untuk mempercepat proses rekapitulasi data operasional RoccaSpace. Mengotomatiskan login ke panel admin, penarikan data registrasi kelas, informasi member, hingga pengunggahan langsung ke Google Sheets menggunakan Google API, menggantikan proses rekap manual harian.",
    features: [
      "Ekstraksi otomatis terjadwal data transaksi, registrasi member, dan jadwal kelas olahraga dari panel admin RoccaSpace.",
      "Integrasi Google Sheets API untuk sinkronisasi data instan ke spreadsheet tujuan.",
      "Modul pembersihan data (data cleaning) otomatis sebelum diunggah ke Google Sheets.",
      "Penanganan autentikasi session-cookie dan error-recovery yang kuat untuk kestabilan script.",
      "Sistem penjadwalan otomatis menggunakan Cron Jobs."
    ],
    architecture: "Script backend berbasis Python menggunakan library Selenium untuk penelusuran web (headless mode), dikombinasikan dengan Google API client library untuk penulisan batch data ke Google Sheets."
  }
];
