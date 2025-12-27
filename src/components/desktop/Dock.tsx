import './Dock.css'

type Section = 'about' | 'experience' | 'projects' | 'reads' | 'blog' | 'contact' | 'research'

interface DockProps {
  onIconClick: (section: Section) => void
}

interface DockIconData {
  id: Section
  label: string
  icon: string
}

const dockIcons: DockIconData[] = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'research', label: 'Research', icon: '🔬' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'reads', label: 'Reads', icon: '📚' },
  { id: 'blog', label: 'Blog', icon: '✍️' },
  { id: 'contact', label: 'Contact', icon: '📧' },
]

export default function Dock({ onIconClick }: DockProps) {
  return (
    <div className="dock">
      <div className="dock-inner">
        {dockIcons.map((icon) => (
          <button
            key={icon.id}
            className="dock-icon"
            onClick={() => onIconClick(icon.id)}
            aria-label={icon.label}
            title={icon.label}
          >
            <span className="dock-icon-emoji">{icon.icon}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
