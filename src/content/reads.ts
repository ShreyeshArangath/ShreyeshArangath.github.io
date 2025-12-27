export interface ReadItem {
  title: string
  author: string
  note: string
  category: string
}

export const reads: ReadItem[] = [
  // Distributed Systems / Data
  {
    title: 'The Google File System',
    author: 'Ghemawat, Gobioff, Leung',
    note: 'Foundational paper on distributed storage',
    category: 'Distributed Systems',
  },
  {
    title: 'MapReduce: Simplified Data Processing',
    author: 'Dean & Ghemawat',
    note: 'The paper that sparked the big data revolution',
    category: 'Distributed Systems',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    note: 'OFC. Essential reading for anyone building distributed systems at scale',
    category: 'Distributed Systems',
  },
  {
    title: 'Database Internals',
    author: 'Alex Petrov',
    note: 'Deep dive into storage engines and distributed data systems',
    category: 'Distributed Systems',
  },
   // Thinking / Classics
   {
    title: 'Essentialism: The Disciplined Pursuit of Less',
    author: 'Greg McKeown',
    note: 'A framework for focusing on what truly matters and eliminating the non-essential',
    category: 'Thinking',
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    note: 'Contrarian thinking on startups, innovation, and creating new value',
    category: 'Thinking',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    note: 'Stoic reflections on discipline, impermanence, and inner control',
    category: 'Thinking',
  },
]
