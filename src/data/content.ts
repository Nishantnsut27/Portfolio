export const heroContent = {
  name: 'Nishant Raj',
  headline: 'Final-Year B.Tech Student | AI, ML & Full-Stack Development Enthusiast',
  tagline:
    'I build modern digital experiences by combining clean code, thoughtful design, and practical problem-solving. My work focuses on full-stack development, artificial intelligence, machine learning, and creating applications that are useful, responsive, and scalable.',
  statement:
    'Final-year B.Tech student at Netaji Subhas University of Technology (NSUT), currently learning, building, and improving my skills in software development, AI, ML, and modern web technologies.',
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
    name: 'GitHub',
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
  liveUrl: string;
  repoUrl: string;
};

export const spotlightProjects: Project[] = [
  {
    name: 'NSUT Genie',
    description:
      'Campus assistant that consolidates timetables, notices, exam updates, and campus utilities in one responsive dashboard, giving NSUT students a single source of truth for daily workflows.',
    liveUrl: 'https://nsut-genie.netlify.app/',
    repoUrl: 'https://github.com/DishantSaini55/GENIEEE'
  },
  {
    name: 'Muscle Torture Fitness',
    description:
      'Conversion-focused gym website with tailored membership funnels, trainer highlights, and instant WhatsApp onboarding that keeps leads engaged across devices.',
    liveUrl: 'https://gym-website-ten-chi.vercel.app/',
    repoUrl: 'https://github.com/Nishantnsut27/Gym-Website'
  },
  {
    name: 'Notify Music',
    description:
      'Modern full-stack music streaming platform with fast search, high-quality streaming, synchronized lyrics, and playlist management across desktop and mobile.',
    liveUrl: 'https://notify-music-player.vercel.app/',
    repoUrl: 'https://github.com/Nishantnsut27/Notify-Music-Player'
  },
  {
    name: 'LLM Arena',
    description:
      'One prompt goes to every model you pick. They answer side by side, each with its own real speed and token count, and you decide which one was actually worth it.',
    liveUrl: 'https://llmarenaai.vercel.app/',
    repoUrl: 'https://github.com/Nishantnsut27/LLM-arena'
  },
  {
    name: 'IoT Smart Intruder Detection',
    description:
      'ESP32-CAM powered surveillance stack that snaps motion-triggered footage, pushes alerts to the companion mobile app, and syncs evidence to secure storage for realtime awareness.',
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
      'Final-year B.Tech student exploring the intersection of embedded systems and modern web development.',
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
  email: 'nishant30488@gmail.com',
  phone: '9717418746',
  location: 'New Delhi, India'
};
