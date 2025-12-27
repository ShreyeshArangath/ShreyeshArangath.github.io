export interface BlogPost {
  id: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'hello-world',
    title: 'Hello, World',
    date: '2025-01-15',
    tags: ['meta', 'systems'],
    excerpt: 'First post. A brief introduction to this space and what to expect.',
    content: `
# Hello, World

Welcome to my corner of the internet.

This is where I'll share thoughts on distributed systems, data infrastructure, performance optimization, and the occasional deep dive into technical problems worth solving.

## What to Expect

Writing here serves a few purposes:

1. **Clarifying thinking** - Writing forces precision. If I can't explain something clearly, I don't understand it well enough.
2. **Sharing learnings** - Working on large-scale systems surfaces interesting problems. Some are worth documenting.
3. **Building in public** - Experiments, benchmarks, and investigations that might be useful to others.

## Topics

Expect posts on:

- **Distributed systems**: Patterns, pitfalls, and production learnings
- **Data infrastructure**: Spark, SQL optimization, execution frameworks
- **Performance**: Profiling, bottleneck analysis, and acceleration techniques
- **Cost optimization**: Doing more with less at scale
- **Developer experience**: Tools and workflows that actually matter

## Philosophy

Keep it practical. Skip the fluff. Focus on what works in production, not just in theory.

If you're interested in these topics, feel free to reach out. Always happy to discuss systems, trade notes, or debug thorny problems.

More soon.

---

*P.S. Yes, this site has Vim-inspired navigation. Press \`:\` to open the command palette. Use \`h/l\` to switch tabs. Because why not.*
    `.trim(),
  },
]
