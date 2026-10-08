export interface ProjectItem {
  id: string;
  name: string;
  label: string;
  role: string;
  date: string;
  description: string;
  contributions: string[];
  techStack: string[];
  deviceType: 'phone' | 'tv' | 'dual-phone';
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  placeholderText: string;
  highlightBadge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'commercial' | 'learning' | 'tool';
    badge?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  step: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  period: string;
  grade: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mark Emad Sidhom',
    title: 'Mobile Application Developer',
    subtitle: 'Flutter & Dart | Android | Kotlin & Jetpack Compose',
    bioHero:
      "I'm Mark Emad — a Mobile Application Developer focused on Flutter and Dart, with hands-on experience building real-world applications and expanding into Native Android development with Kotlin and Jetpack Compose.",
    aboutHeadline: "I build mobile apps,\nnot just interfaces.",
    aboutStory: [
      'Mobile Application Developer with 1+ years of hands-on experience building and shipping cross-platform apps using Flutter and Dart, including commercial products such as an Android TV digital-signage system and a smart pharmacy inventory tool.',
      'Comfortable owning features end-to-end — from UI implementation to REST API integration and local persistence. Experienced in managing state with BLoC and GetX, handling complex API communication with Dio, and ensuring reliable data caching with SharedPreferences.',
      "I'm currently expanding into Native Android development with Kotlin and Jetpack Compose, with a strong interest in clean architecture and scalable application design."
    ],
    status: 'Open to Internship & Junior Opportunities',
    location: 'Cairo, Egypt',
    email: 'markemad74@gmail.com',
    phone: '+20 120 467 1792',
    socialLinks: {
      github: 'https://github.com/markemad74',
      linkedin: 'https://www.linkedin.com/in/mark-emad',
      email: 'mailto:markemad74@gmail.com',
      cv: `${import.meta.env.BASE_URL}Mark_Emad_CV.pdf`
    },
    skillProgression: [
      { name: 'Flutter', status: 'verified', note: 'Commercial experience' },
      { name: 'Dart', status: 'verified', note: 'Commercial experience' },
      { name: 'REST APIs & Dio', status: 'verified', note: 'Commercial experience' },
      { name: 'BLoC & GetX', status: 'verified', note: 'State architecture' },
      { name: 'Android SDK', status: 'verified', note: 'Platform features' },
      { name: 'Kotlin', status: 'expanding', note: 'Currently developing' },
      { name: 'Jetpack Compose', status: 'expanding', note: 'Modern Android UI' }
    ]
  },

  skills: [
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications and native Android foundations.',
      iconName: 'Smartphone',
      skills: [
        { name: 'Flutter', level: 'commercial', badge: 'Core' },
        { name: 'Dart', level: 'commercial', badge: 'Core' },
        { name: 'Android SDK', level: 'commercial' },
        { name: 'Kotlin', level: 'learning', badge: 'Learning ↗' },
        { name: 'Jetpack Compose', level: 'learning', badge: 'Learning ↗' }
      ]
    },
    {
      title: 'Architecture & State',
      description: 'Structured state management, separation of concerns, and clean flow.',
      iconName: 'Layers',
      skills: [
        { name: 'BLoC', level: 'commercial', badge: 'Primary' },
        { name: 'Provider', level: 'commercial' },
        { name: 'GetX', level: 'commercial' },
        { name: 'MVVM', level: 'commercial' },
        { name: 'Clean Architecture', level: 'commercial' }
      ]
    },
    {
      title: 'Networking & Data',
      description: 'API communication, serialization, local persistence, and caching.',
      iconName: 'Database',
      skills: [
        { name: 'REST APIs', level: 'commercial' },
        { name: 'Dio', level: 'commercial' },
        { name: 'Retrofit', level: 'commercial' },
        { name: 'Firebase', level: 'commercial' },
        { name: 'Hive', level: 'commercial' },
        { name: 'Room', level: 'learning', badge: 'Android' },
        { name: 'SharedPreferences', level: 'commercial' }
      ]
    },
    {
      title: 'Developer Tools',
      description: 'Daily workflow, debugging suites, and collaboration tools.',
      iconName: 'Wrench',
      skills: [
        { name: 'Android Studio', level: 'tool' },
        { name: 'VS Code', level: 'tool' },
        { name: 'Postman', level: 'tool' },
        { name: 'Git & GitHub', level: 'tool' },
        { name: 'Figma (Basic)', level: 'tool' }
      ]
    },
    {
      title: 'Engineering Practices',
      description: 'Core software engineering mindset and reliable development standards.',
      iconName: 'Cpu',
      skills: [
        { name: 'Problem Solving', level: 'commercial' },
        { name: 'Debugging', level: 'commercial' },
        { name: 'API Integration', level: 'commercial' },
        { name: 'OOP', level: 'commercial' },
        { name: 'Error Handling', level: 'commercial' }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'rx-medecia',
      name: 'RX-Medecia',
      label: 'Smart Pharmacy Inventory System',
      role: 'Flutter Developer',
      date: 'Aug 2024 – Jun 2025',
      description:
        'An intelligent pharmacy inventory application designed to help pharmacists manage stock by active ingredient and dispense medication against prescriptions.',
      contributions: [
        'Developed intelligent inventory management based on active ingredients rather than trade names alone',
        'Built prescription-based medication dispensing workflows to prevent errors',
        'Designed and implemented relational data models linking patient records, active ingredients, symptoms, and dispensed drugs',
        'Engineered seamless REST API integration using Dio with robust error handling and token management',
        'Configured local persistence via SharedPreferences for offline caching and fast retrieval',
        'Architected predictable, testable state management using Flutter BLoC pattern'
      ],
      techStack: ['Flutter', 'Dart', 'BLoC', 'REST API', 'Dio', 'SharedPreferences'],
      deviceType: 'phone',
      links: {
        github: 'https://github.com/markemad74/rx-medecia'
      },
      placeholderText: 'PROJECT SCREENSHOTS\nReplace with actual RX-Medecia screenshots',
      highlightBadge: 'Smart Healthcare Inventory'
    },
    {
      id: 'diggitsy',
      name: 'Diggitsy',
      label: 'Digital Signage for Android TV',
      role: 'Flutter Developer — Freelance',
      date: '2024',
      description:
        'A Flutter-based digital signage application for Android TV devices that connects securely to a cloud backend and displays dynamic content tied to a unique device identifier.',
      contributions: [
        'Engineered responsive Flutter layouts specifically adapted for 16:9 Android TV screens and D-pad remote navigation',
        'Built cloud backend integration connecting screens securely via device pairing codes',
        'Implemented device-based content delivery and caching to ensure continuous display during network drops',
        'Designed real-time dynamic content display routines for schedules, playlists, and multimedia signage',
        'Integrated resilient REST API networking with Dio and local cache via SharedPreferences'
      ],
      techStack: ['Flutter', 'Dart', 'Android TV', 'REST API', 'Dio', 'SharedPreferences'],
      deviceType: 'tv',
      links: {
        live: 'https://diggitsy.com',
        github: 'https://github.com/markemad74/diggitsy'
      },
      placeholderText: 'DIGGITSY ANDROID TV SIGNAGE\nReplace with actual Diggitsy screenshots',
      highlightBadge: 'Android TV & Cloud Signage'
    },
    {
      id: 'cravio',
      name: 'Cravio.ai',
      label: 'Online Ordering System',
      role: 'Flutter Developer — Startup',
      date: 'Feb 2025 – Oct 2025',
      description:
        'A commercial online ordering system consisting of synchronized customer-facing and restaurant-management applications.',
      contributions: [
        'Redesigned multiple UI screens across both customer and restaurant apps, improving visual consistency and overall UX',
        'Engineered a background thermal-printing feature that automatically prints order receipts on arrival, removing manual staff intervention',
        'Delivered workflow-specific features tailored to fast-paced kitchen operations and order dispatching',
        'Integrated real-time order status endpoints using Dio and responsive reactive state management with GetX',
        'Optimized order list rendering and receipt formatting protocols for thermal ESC/POS printers'
      ],
      techStack: ['Flutter', 'Dart', 'REST API', 'Dio', 'GetX', 'Thermal Printing'],
      deviceType: 'dual-phone',
      links: {
        live: 'https://cravio.ai'
      },
      placeholderText: 'CUSTOMER APP & RESTAURANT APP\nReplace with actual Cravio.ai screenshots',
      highlightBadge: 'Commercial Food-Tech System'
    }
  ] as ProjectItem[],

  experience: [
    {
      id: 'debi',
      step: '01',
      role: 'Mobile Application Developer Trainee',
      company: 'DEBI',
      type: 'Professional Training Program',
      period: 'Nov 2025 – Aug 2026 (Expected)',
      description:
        'Intensive professional training program advancing core software engineering, scalable mobile application architecture, and collaborative team practices.',
      highlights: [
        'Advanced software engineering methodologies and architectural design patterns',
        'Mobile application architecture (Clean Architecture, reactive patterns)',
        'Professional Git/GitHub workflows, code reviews, and trunk-based development',
        'UI/UX design principles and platform-specific human interface guidelines',
        'Collaborative development practices in cross-functional agile teams'
      ]
    },
    {
      id: 'cravio',
      step: '02',
      role: 'Flutter Developer',
      company: 'Cravio.ai',
      type: 'Startup',
      period: 'Feb 2025 – Oct 2025',
      link: 'https://cravio.ai',
      description:
        'Commercial online ordering system spanning customer and restaurant operations.',
      highlights: [
        'Redesigned multiple UI screens across customer and restaurant applications, improving visual polish and ordering flow',
        'Built automated background thermal receipt printing feature upon order arrival, eliminating manual staff steps',
        'Delivered functional enhancements tailored to restaurant workflow and kitchen dispatching',
        'Connected end-to-end REST API services using Dio and GetX state management'
      ],
      technologies: ['Flutter', 'Dart', 'Dio', 'GetX', 'REST API', 'Thermal Printing']
    },
    {
      id: 'diggitsy',
      step: '03',
      role: 'Flutter Developer',
      company: 'Diggitsy',
      type: 'Freelance',
      period: '2024',
      link: 'https://diggitsy.com',
      description:
        'Cloud-connected digital signage platform targeting smart displays and Android TV hardware.',
      highlights: [
        'Built Flutter-based Android TV application adapted for television displays and remote navigation',
        'Implemented secure cloud backend device pairing and heartbeat verification',
        'Delivered device-specific content delivery and dynamic playlist scheduling',
        'Integrated local storage caching to maintain signage playback during network flickers'
      ],
      technologies: ['Flutter', 'Dart', 'Android TV', 'Dio', 'SharedPreferences', 'REST API']
    }
  ] as ExperienceItem[],

  currentlyLearning: {
    heading: "What's next.",
    subtitle:
      "I'm expanding my mobile development skills beyond cross-platform development and deeper into Native Android.",
    primaryFocus: [
      {
        name: 'Kotlin',
        title: 'Native Android Development',
        tagline: 'Modern, expressive language for Android',
        description:
          'Deepening fluency in Kotlin language features, coroutines, type safety, and Android SDK internals.',
        status: 'Expanding Into',
        topics: ['Coroutines & Flow', 'Object-Oriented & Functional Patterns', 'Android SDK Foundations', 'Clean Code in Kotlin']
      },
      {
        name: 'Jetpack Compose',
        title: 'Modern Android UI',
        tagline: 'Declarative UI toolkit for native Android',
        description:
          'Building reactive, declarative interfaces with Compose state hoisting, themes, layouts, and reusable composables.',
        status: 'Expanding Into',
        topics: ['Declarative Composables', 'State Management & Hoisting', 'Material 3 Theming', 'Compose Navigation']
      }
    ],
    architectureTargets: [
      { name: 'MVVM Pattern', description: 'Structured separation of UI, ViewModel, and Model layers' },
      { name: 'Room Database', description: 'Robust local SQLite persistence with compile-time verification' },
      { name: 'Jetpack Navigation', description: 'Deep-linking and safe args navigation graphs' },
      { name: 'Clean Architecture', description: 'Domain-driven decoupling and testable repositories' }
    ]
  },

  education: {
    degree: 'B.Sc. in Computer Science',
    institution: 'El Shorouk Academy',
    faculty: 'Faculty of Computer and Information Technology',
    period: 'Sep 2021 – Sep 2025',
    grade: 'Very Good'
  }
};
