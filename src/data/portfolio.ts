import portraitImage from '../assets/images/regenerated_image_1795245506938.jpg';

export const PORTRAIT_IMAGE_URL = portraitImage;

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  {id: 'hero', label: 'PORTFOLIO'},
  {id: 'story', label: 'STORY'},
  {id: 'experience', label: 'EXPERIENCE'},
  {id: 'education', label: 'EDUCATION'},
  {id: 'skills', label: 'SKILLS'},
  {id: 'contact', label: 'CONTACT'},
];

export const MARQUEE_ITEMS: string[] = [
  'HI! I AM AN INFORMATICS STUDENT, MOHAMMAD MAFTULLAH SAERAN',
  'TEAMWORK & COMMUNICATION',
  'INSTITUT TEKNOLOGI PLN',
  'S1 TEKNIK INFORMATIKA',
  'READY TO COLLABORATE',
];

export interface StoryHighlight {
  kicker: string;
  title: string;
  subtitle: string;
}

export const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    kicker: '01 / CAMPUS',
    title: 'IT-PLN',
    subtitle: 'S1 Teknik Informatika',
  },
  {
    kicker: '02 / MINDSET',
    title: 'TEAMWORK',
    subtitle: 'Collaborative & Adaptable',
  },
  {
    kicker: '03 / FOCUS',
    title: 'ACTIVE',
    subtitle: 'Committee & Public Talk',
  },
];

export interface BiodataRow {
  label: string;
  value: string;
  isLocation?: boolean;
}

export const BIODATA_ROWS: BiodataRow[] = [
  {label: 'Nama Lengkap', value: 'Mohammad Maftullah Saeran'},
  {label: 'Tempat, Tanggal Lahir', value: 'Gorontalo, 24 November 2007'},
  {label: 'Jenis Kelamin', value: 'Laki-laki'},
  {label: 'Status', value: 'Belum Menikah'},
  {label: 'Kewarganegaraan', value: 'Indonesia'},
  {label: 'Domisili Sekarang', value: 'Jakarta Barat, DKI Jakarta', isLocation: true},
];

export interface ExperienceItem {
  category: string;
  period: string;
  title: string;
  bullets: string[];
  footerLabel: string;
  icon: 'verified' | 'rocket';
  highlightPeriod?: boolean;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    category: 'ACADEMIC & SCHOOL',
    period: '2020 – 2026',
    title: 'Kegiatan Akademik dan Sekolah',
    bullets: [
      'Terbiasa bekerja sama dalam kelompok secara proaktif untuk menyelesaikan tugas akademik tepat waktu.',
      'Berpartisipasi aktif dalam berbagai kegiatan sekolah, workshop, dan agenda akademik terstruktur.',
      'Mampu beradaptasi dengan cepat terhadap dinamika lingkungan baru serta kepribadian anggota tim yang beragam.',
      'Menjalankan tanggung jawab penuh, disiplin, dan teliti dalam menuntaskan instruksi yang diberikan.',
    ],
    footerLabel: 'TRACK RECORD',
    icon: 'verified',
  },
  {
    category: 'CAMPUS READINESS',
    period: '2026 – MENDATANG',
    title: 'Fokus & Target Kontribusi Kampus',
    bullets: [
      'Siap berkontribusi aktif dalam kepanitiaan acara dan divisi relasi/kreatif kampus Institut Teknologi PLN.',
      'Antusias bergabung dalam organisasi kemahasiswaan dan himpunan mahasiswa Teknik Informatika.',
      'Membangun kolaborasi solid dalam proyek teknologi inovatif, riset dasar, serta pengabdian masyarakat.',
      'Mengasah kapasitas kepemimpinan, negosiasi, dan koordinasi tim secara berkesinambungan.',
    ],
    footerLabel: 'FUTURE COMMITMENT',
    icon: 'rocket',
    highlightPeriod: true,
  },
];

export interface EducationNode {
  badge: string;
  period: string;
  institution: string;
  major?: string;
  location: string;
  current?: boolean;
}

export const EDUCATION_TIMELINE: EducationNode[] = [
  {
    badge: 'CURRENT',
    period: '2026 – Sekarang',
    institution: 'Institut Teknologi PLN',
    major: 'S1 Teknik Informatika',
    location: 'Jakarta Barat, DKI Jakarta',
    current: true,
  },
  {
    badge: 'SEKOLAH MENENGAH ATAS',
    period: '2023 – 2026',
    institution: 'SMA Negeri 8 Kota Ternate',
    location: 'Kota Ternate, Maluku Utara',
  },
  {
    badge: 'SEKOLAH MENENGAH PERTAMA',
    period: '2020 – 2023',
    institution: 'SMP IT Nurul Hasan Ternate',
    location: 'Kota Ternate, Maluku Utara',
  },
  {
    badge: 'SEKOLAH DASAR',
    period: '2014 – 2020',
    institution: 'SD Al Irsyad Kota Gorontalo',
    location: 'Kota Gorontalo, Gorontalo',
  },
];

export interface SkillCard {
  number: string;
  title: string;
  description: string;
  icon: 'users' | 'message' | 'clock' | 'brain' | 'wrench' | 'mic' | 'shield';
  wide?: boolean;
}

export const SKILLS: SkillCard[] = [
  {
    number: '01',
    title: 'Teamwork & Collaboration',
    description:
      'Mampu berkoordinasi dan bekerja sinergis secara efektif dalam kelompok demi mencapai tujuan bersama dengan solid.',
    icon: 'users',
  },
  {
    number: '02',
    title: 'Communication',
    description:
      'Menyampaikan gagasan, ide, dan informasi secara runut, empatik, serta mampu memfasilitasi diskusi tim yang konstruktif.',
    icon: 'message',
  },
  {
    number: '03',
    title: 'Time Management',
    description:
      'Cermat mengatur prioritas jadwal akademik, tugas kelompok, dan kepanitiaan secara disiplin serta tepat waktu.',
    icon: 'clock',
  },
  {
    number: '04',
    title: 'Adaptability',
    description:
      'Cepat beradaptasi terhadap perubahan situasi, kultur lingkungan perkuliahan baru, serta berbagai karakter rekan tim.',
    icon: 'brain',
  },
  {
    number: '05',
    title: 'Problem Solving',
    description:
      'Menganalisis kendala secara kritis serta merumuskan alternatif solusi yang aplikatif dan efisien dalam dinamika kerja.',
    icon: 'wrench',
  },
  {
    number: '06',
    title: 'Public Speaking Dasar',
    description:
      'Percaya diri dalam menyampaikan presentasi materi kuliah, mengemukakan argumen di forum rapat, dan memandu acara.',
    icon: 'mic',
  },
  {
    number: '07',
    title: 'Kemauan Bertanggung Jawab',
    description:
      'Berkomitmen teguh untuk menyelesaikan setiap amanah, proyek, dan peran kepanitiaan hingga tuntas dengan dedikasi prima.',
    icon: 'shield',
    wide: true,
  },
];

export const CONTACT_INFO = {
  email: 'afidsaeran2411@gmail.com',
  whatsappDisplay: '+62 813 2181 8404',
  whatsappHref: 'https://wa.me/6281321818404',
  instagramHandle: '@m0hmaftullahh',
  instagramHref: 'https://instagram.com/m0hmaftullahh',
  location: 'Jakarta Barat, DKI Jakarta, Indonesia',
};
