export type Project = {
  name: string;
  description: string;
  source: string;
  live?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: 'NepaBhasa',
    description:
      'A Flutter portal for Nepalese tourism, culture, and native-language preservation, with phrasebooks, maps, offline support, and community contributions.',
    source: 'https://github.com/theaayushdev/NepaBhasa',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
  },
  {
    name: 'Pasale',
    description:
      'A Nepali-language Flutter app for local shopkeepers to manage inventory and sales with voice input, cloud sync, and analytics.',
    source: 'https://github.com/theaayushdev/Pasale',
    stack: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    name: 'BhrastaBusters',
    description:
      'An anonymous corruption reporting platform with evidence uploads, status tracking, admin tools, and machine-learning credibility scoring.',
    source: 'https://github.com/theaayushdev/BhrastaBusters',
    stack: ['Flutter', 'Flask', 'Python', 'ML'],
  },
  {
    name: 'Pregnify',
    description:
      'A pregnancy health toolkit with tracking, appointments, profiles, secure uploads, and real-time chat.',
    source: 'https://github.com/theaayushdev/Pregnify-Pregnancy-Tool-Kit',
    stack: ['React', 'Vite', 'Tailwind', 'Python'],
  },
  {
    name: 'OSINT',
    description:
      'A mobile OSINT prototype that combines public data sources, entity resolution, risk scoring, and report export.',
    source: 'https://github.com/theaayushdev/OSINT',
    stack: ['Expo', 'React Native', 'TypeScript'],
  },
  {
    name: 'Unsaid',
    description: 'An anonymous space for sharing the words and feelings people could not send.',
    source: 'https://github.com/theaayushdev/unsaid',
    live: 'https://unsaid-coral.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
  },
  {
    name: 'Crowdfunding Analysis',
    description:
      'An analysis of 1,000 crowdfunding campaigns exploring how goals, backer counts, and categories relate to success.',
    source: 'https://github.com/theaayushdev/CrowdFunding',
    stack: ['Excel', 'Data Analysis'],
  },
  {
    name: 'Hotel System',
    description:
      'A Java Swing application for check-ins, rooms, billing, guest services, and hotel administration.',
    source: 'https://github.com/theaayushdev/Hotel-System',
    live: 'https://www.youtube.com/watch?v=WJWjYPW1qIc',
    stack: ['Java', 'Swing', 'MySQL'],
  },
];
