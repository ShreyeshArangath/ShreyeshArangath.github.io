export interface ReadItem {
  title: string
  author: string
  note: string
  category: string
}

export const reads: ReadItem[] = [
  // Distributed Systems / Data
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    note: 'Essential reading for anyone building distributed systems at scale',
    category: 'Distributed Systems',
  },
  {
    title: 'Database Internals',
    author: 'Alex Petrov',
    note: 'Deep dive into storage engines and distributed data systems',
    category: 'Distributed Systems',
  },
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

  // Engineering Craft
  {
    title: 'A Philosophy of Software Design',
    author: 'John Ousterhout',
    note: 'Practical wisdom on managing complexity in software',
    category: 'Engineering Craft',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    note: 'Timeless advice for building better software',
    category: 'Engineering Craft',
  },
  {
    title: 'Staff Engineer',
    author: 'Will Larson',
    note: 'Navigating the path beyond senior IC roles',
    category: 'Engineering Craft',
  },

  // Thinking / Classics
  {
    title: 'Thinking in Systems',
    author: 'Donella H. Meadows',
    note: 'Understanding leverage points and feedback loops',
    category: 'Thinking',
  },
  {
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    note: 'Classic lessons on software project management',
    category: 'Thinking',
  },
  {
    title: 'How to Solve It',
    author: 'George Pólya',
    note: 'Timeless problem-solving heuristics',
    category: 'Thinking',
  },
]
