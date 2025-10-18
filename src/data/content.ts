export const heroContent = {
  name: 'Nishant Raj',
  headline: 'I build immersive interfaces that stay fast, accessible, and reliable.',
  tagline: 'Electronics engineer turning complex ideas into polished web products.',
  statement:
    "I make things. Sometimes they work, sometimes they do not. I keep going anyway, hoping it adds up to something meaningful.",
  primaryCta: {
    label: 'View Projects',
    href: '#projects'
  },
  secondaryCta: {
    label: 'Get in Touch',
    href: '#contact'
  }
};

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/nishantnsut27'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nishant-raj-nsut27/'
  },
  {
    label: 'X',
    href: 'https://x.com/nishant30488'
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nishant.ofii'
  }
];

export type Fact = {
  label: string;
  value: string;
};

export const quickFacts: Fact[] = [
  { label: 'Location', value: 'New Delhi, India' },
  { label: 'Education', value: 'Electronics & Communication, NSUT' },
  { label: 'Focus', value: 'Full Stack Product Experiences' },
  { label: 'Goal', value: 'Software Development Engineer' },
  { label: 'Interests', value: 'IoT, Hardware + Software Fusion' },
  { label: 'Availability', value: 'Open to internships & freelance' }
];

export type Skill = {
  name: string;
  icon:
    | 'react'
    | 'nextjs'
    | 'javascript'
    | 'typescript'
    | 'python'
    | 'cpp'
    | 'nodejs'
    | 'tailwind'
    | 'git'
    | 'arduino';
  category: string;
  description: string;
  highlights: string[];
};

export const skills: Skill[] = [
  {
    name: 'React',
    icon: 'react',
    category: 'Frontend',
    description: 'Component-first UI with concurrency-ready state patterns.',
    highlights: ['Hooks & concurrent features', 'Design systems and Storybook']
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    category: 'Full-Stack Web',
    description: 'App Router builds with edge-ready rendering and server actions.',
    highlights: ['Hybrid rendering strategies', 'Vercel & edge deployments']
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    category: 'Core Language',
    description: 'ESNext, async flows, and testing-focused architecture.',
    highlights: ['State machines & observers', 'Vitest and Playwright coverage']
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'Core Language',
    description: 'Type-safe APIs with advanced inference and schema-first flows.',
    highlights: ['Advanced inference patterns', 'Zod + tRPC alignment']
  },
  {
    name: 'Python',
    icon: 'python',
    category: 'Backend & Automation',
    description: 'FastAPI microservices and automation tooling for data tasks.',
    highlights: ['FastAPI & asyncio tooling', 'Data wrangling scripts']
  },
  {
    name: 'C++',
    icon: 'cpp',
    category: 'Systems & IoT',
    description: 'Low-level firmware and performance-critical modules.',
    highlights: ['Embedded firmware on ESP32', 'Optimised algorithms & memory care']
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    category: 'Backend & Automation',
    description: 'REST and GraphQL services with queues and background jobs.',
    highlights: ['Express & Fastify stacks', 'Queues, schedulers, and observability']
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    category: 'Frontend',
    description: 'Utility-first design systems, typography, and responsive polish.',
    highlights: ['Multi-theme token systems', 'Responsive animation recipes']
  },
  {
    name: 'Git',
    icon: 'git',
    category: 'Tooling & Workflow',
    description: 'Collaboration, automation, and CI-ready branching flows.',
    highlights: ['Trunk-based delivery', 'Code review playbooks']
  },
  {
    name: 'Arduino',
    icon: 'arduino',
    category: 'Hardware Interfaces',
    description: 'IoT prototyping with sensor fusion and serial comms.',
    highlights: ['Sensor & actuator integration', 'Telemetry and remote control']
  }
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};

export const spotlightProjects: Project[] = [
  {
    name: 'NSUT Genie',
    description:
      'Campus assistant that consolidates timetables, notices, exam updates, and campus utilities in one responsive dashboard, giving NSUT students a single source of truth for daily workflows.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://nsut-genie.netlify.app/',
    repoUrl: 'https://github.com/nishantnsut27/nsut-genie'
  },
  {
    name: 'Muscle Torture Fitness',
    description:
      'Conversion-focused gym website with tailored membership funnels, trainer highlights, and instant WhatsApp onboarding that keeps leads engaged across devices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    liveUrl: 'https://gym-website-ten-chi.vercel.app/',
    repoUrl: 'https://github.com/nishantnsut27/muscle-torture-fitness'
  },
  {
    name: 'Notify Music Player',
    description:
      'Jamendo-backed music experience with curated playlists, search, adaptive theming, and offline-friendly playback so listeners can stay immersed without losing context.',
    technologies: ['React', 'Jamendo API', 'CSS'],
    liveUrl: 'https://notify-music-player.vercel.app/',
    repoUrl: 'https://github.com/nishantnsut27/notify-music-player'
  },
  {
    name: 'Netflix Clone',
    description:
      'Pixel-precise Netflix recreation with hero carousels, hover previews, and responsive navigation that mirrors the real browsing flow across breakpoints.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://netflix-clone-nishant.vercel.app/',
    repoUrl: 'https://github.com/nishantnsut27/netflix-clone-nishant'
  },
  {
    name: 'IoT Smart Intruder Detection',
    description:
      'ESP32-CAM powered surveillance stack that snaps motion-triggered footage, pushes alerts to the companion mobile app, and syncs evidence to secure storage for realtime awareness.',
    technologies: ['ESP32-CAM', 'IoT', 'C++', 'Mobile App'],
    liveUrl: '',
    repoUrl: 'https://github.com/Nishantnsut27/Smart-intruder-system'
  }
];

export type Education = {
  title: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
};

export const educationHistory: Education[] = [
  {
    title: 'B.Tech · Electronics and Communication Engineering',
    institution: 'Netaji Subhas University of Technology',
    location: 'New Delhi, India',
    period: '2023 – 2027',
    highlights: [
      'Third-year student exploring the intersection of embedded systems and modern web development.',
      'Strengthening fundamentals across electronics, signal processing, and communication networks.',
      'Translating hardware-first thinking into disciplined, performant software builds.'
    ]
  },
  {
    title: 'Jawahar Navodaya Vidyalaya',
    institution: 'CBSE Residential School',
    location: 'Jaffarpur Kalan, New Delhi',
    period: '2015 – 2022',
    highlights: [
      'Completed secondary education (class 6–12) here.',
      'Selected through the JNVST national entrance with an all-round academic focus.',
      'Boarding environment that honed adaptability, teamwork, and leadership.',
      'Built early passion for mathematics and technology through competitions and projects.'
    ]
  }
];

export const contactInfo = {
  email: 'nishantraj30488@gmail.com',
  phone: '9717418746',
  location: 'New Delhi, India'
};
