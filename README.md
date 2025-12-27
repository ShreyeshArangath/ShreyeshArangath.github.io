# Shreyesh Arangath - Portfolio

A minimalist retro operating system / terminal-inspired personal website built with React + Vite + TypeScript. Features a teal desktop environment with Vim-influenced keyboard navigation.

## ✨ Features

- **Retro OS Aesthetic**: Teal desktop, orange striped window title bars, classic UI elements
- **Vim-Inspired Navigation**: Command palette, keyboard shortcuts (`:`, `h`, `l`, `j`, `k`)
- **Fully Responsive**: Desktop and mobile-friendly
- **Zero-Config GitHub Pages Deployment**: HashRouter + GitHub Actions workflow included
- **Fast & Modern**: Built with Vite + React + TypeScript
- **Accessible**: Full keyboard navigation, focus management, reduced-motion support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
├── src/
│   ├── components/
│   │   └── desktop/
│   │       ├── Desktop.tsx          # Main desktop component
│   │       ├── TopBar.tsx           # Top status bar
│   │       ├── DesktopIcons.tsx     # Right-side icons
│   │       ├── Dock.tsx             # Bottom dock
│   │       ├── Window.tsx           # Main window with tabs
│   │       └── CommandPalette.tsx   # Vim-style command input
│   ├── windows/
│   │   ├── AboutWindow.tsx          # About section
│   │   ├── ExperienceWindow.tsx     # Work experience
│   │   ├── ProjectsWindow.tsx       # Projects showcase
│   │   ├── ReadsWindow.tsx          # Reading list
│   │   ├── BlogWindow.tsx           # Blog posts
│   │   └── ContactWindow.tsx        # Contact info
│   ├── content/
│   │   ├── reads.ts                 # Curated reading list
│   │   └── blog.ts                  # Blog posts
│   ├── styles/
│   │   ├── index.css                # Global styles
│   │   └── App.css                  # App-level styles
│   ├── App.tsx                      # Root component
│   └── main.tsx                     # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Pages deployment
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎮 Keyboard Navigation

### Command Palette

- Press `:` to open the command palette
- Type commands like `:about`, `:experience`, `:projects`, `:reads`, `:blog`, `:contact`
- Press `Esc` to close the command palette
- Type `:help` for full command list

### Navigation Shortcuts

- `h` / `l` - Switch between tabs (left/right)
- `j` / `k` - Navigate items in lists (down/up)

## 📝 Customization

### Update Personal Information

1. **About Section**: Edit `src/windows/AboutWindow.tsx`
   - Update name, title, location, bio
   - Update social links (email, GitHub, LinkedIn)

2. **Experience**: Edit `src/windows/ExperienceWindow.tsx`
   - Update the `experiences` array with your work history

3. **Projects**: Edit `src/windows/ProjectsWindow.tsx`
   - Update the `projects` array with your work

4. **Contact**: Edit `src/windows/ContactWindow.tsx`
   - Update email and social links

### Add Blog Posts

Edit `src/content/blog.ts` and add new entries to the `blogPosts` array:

```typescript
{
  id: 'unique-slug',
  title: 'Your Post Title',
  date: '2025-01-15',
  tags: ['tag1', 'tag2'],
  excerpt: 'Brief summary of the post',
  content: `
# Full Content

Your blog post content here.
Supports basic markdown-like syntax:
- Headers: # H1, ## H2, ### H3
- Lists: numbered and bullet points
- Inline code: \`code\`
- Emphasis: *italic*
  `.trim(),
}
```

### Add Books to Reading List

Edit `src/content/reads.ts` and add entries to the `reads` array:

```typescript
{
  title: 'Book Title',
  author: 'Author Name',
  note: 'Your one-line note about the book',
  category: 'Distributed Systems', // or 'Engineering Craft', 'Thinking'
}
```

### Customize Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --desktop-bg: #5eb3b3;           /* Desktop background */
  --window-title-bar: #e8833a;     /* Orange title bar */
  --topbar-bg: #c0c0c0;            /* Top bar and buttons */
  --window-content-bg: #fafafa;    /* Window content area */
  --dock-bg: #d4d4d4;              /* Bottom dock */
}
```

## 🌐 GitHub Pages Deployment

### For User Pages (username.github.io)

1. **Repository Setup**:
   - Repository name must be `username.github.io` (replace `username` with your GitHub username)
   - The site will be available at `https://username.github.io`

2. **Configure Base Path** (already configured for user pages):
   ```typescript
   // vite.config.ts
   base: '/'
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Source: **GitHub Actions**

4. **Deploy**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

   The GitHub Actions workflow will automatically build and deploy your site.

### For Project Pages (username.github.io/repo-name)

If you're deploying to a project repository (not `username.github.io`):

1. **Update Base Path** in `vite.config.ts`:
   ```typescript
   base: '/repo-name/'  // Replace with your actual repo name
   ```

2. **Repository name** can be anything (e.g., `portfolio`, `personal-site`)

3. **The site will be available at**: `https://username.github.io/repo-name/`

4. Follow steps 3-4 from "User Pages" above

### Verify Deployment

1. Go to repository **Actions** tab to see workflow status
2. Once completed, visit your site URL
3. Any push to `main` branch triggers automatic redeployment

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Routing**: React Router (HashRouter for GitHub Pages)
- **Styling**: Vanilla CSS with CSS Variables
- **Deployment**: GitHub Actions → GitHub Pages

## 🎨 Design Philosophy

- **Minimalist**: Clean, focused, no distractions
- **Retro**: Classic OS aesthetic with modern sensibilities
- **Functional**: Keyboard-first navigation, accessibility built-in
- **Fast**: Static site, minimal dependencies, optimized builds

## 📄 License

MIT License - feel free to fork and customize for your own use!

## 🤝 Acknowledgments

Inspired by classic operating systems and terminal environments, with a modern web twist.
