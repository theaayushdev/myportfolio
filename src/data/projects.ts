export type Project = {
  name: string;
  kind: string;
  description: string;
  source?: string;
  live?: string;
  liveLabel?: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'EchoTrace',
    kind: 'Research paper · 2026',
    description:
      'Ten sources saying the same thing is not ten proofs if they all come from one place. EchoTrace spots those hidden echoes, so AI research tools stop mistaking repetition for truth.',
    stack: ['Benchmark', 'Simulation', 'Python'],
    featured: true,
  },
  {
    name: 'AI Study Assistant',
    kind: 'Web app',
    description:
      'A study partner for engineering students. It learns from your own syllabus and notes, then helps you revise, practise coding, and work out what to do next.',
    source: 'https://github.com/AshreeyaKhadka/AIstudyassistant',
    stack: ['React', 'Flask', 'Gemini', 'ChromaDB'],
  },
  {
    name: 'Pasale',
    kind: 'Mobile app',
    description:
      'Your neighbourhood shopkeeper, finally with a smart notebook. Speak in Nepali to track stock and sales, and see how the shop is really doing.',
    source: 'https://github.com/theaayushdev/Pasale',
    stack: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    name: 'NepaBhasa',
    kind: 'Mobile app',
    description:
      'A travel companion that helps visitors talk with locals in Nepali and in the small local languages that are slowly fading away.',
    source: 'https://github.com/theaayushdev/NepaBhasa',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
  },
  {
    name: 'BhrastaBusters',
    kind: 'Mobile app',
    description:
      'A safe place to speak up about corruption without giving your name. Share what you saw, add proof, and follow what happens next.',
    source: 'https://github.com/theaayushdev/BhrastaBusters',
    stack: ['Flutter', 'Flask', 'Python', 'ML'],
  },
  {
    name: 'Pregnify',
    kind: 'Web app',
    description:
      'A calm companion for the nine months. Keep track of your health, your doctor visits, and your conversations with your doctor, all in one place.',
    source: 'https://github.com/theaayushdev/Pregnify-Pregnancy-Tool-Kit',
    stack: ['React', 'Vite', 'Tailwind', 'Python'],
  },
  {
    name: 'Issue Tracker',
    kind: 'Web app',
    description:
      'A shared board where a team drops its bugs, sorts out who does what, and sees how the work is going. Made for Career Climber with eSewa.',
    source: 'https://github.com/theaayushdev/issue-tracker-bug-Reporting',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    name: 'OSINT',
    kind: 'Mobile app',
    description:
      'A pocket detective that gathers what is publicly known about a person or company and tells you, in plain words, how much to trust it.',
    source: 'https://github.com/theaayushdev/OSINT',
    stack: ['Expo', 'React Native', 'TypeScript'],
  },
  {
    name: 'Unsaid',
    kind: 'Web app',
    description:
      'A quiet corner of the internet for the things you could never say out loud. Write it, let it go, and read what others have felt too. 110 people already have.',
    source: 'https://github.com/theaayushdev/unsaid',
    live: 'https://unsaid-coral.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
  },
  {
    name: 'Crowdfunding Analysis',
    kind: 'Data study',
    description:
      'A look at 1,000 crowdfunding campaigns to learn what makes people back an idea, and what makes them walk past it.',
    source: 'https://github.com/theaayushdev/CrowdFunding',
    stack: ['Excel', 'Data Analysis'],
  },
  {
    name: 'Hotel System',
    kind: 'Desktop app',
    description:
      'The front-desk software for a small hotel. Welcome guests, hand out rooms, and send the bill, without the paperwork.',
    source: 'https://github.com/theaayushdev/Hotel-System',
    live: 'https://www.youtube.com/watch?v=WJWjYPW1qIc',
    liveLabel: 'watch demo',
    stack: ['Java', 'Swing', 'MySQL'],
  },
];
