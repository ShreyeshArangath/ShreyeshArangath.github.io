import './DesktopIcons.css'

type Section = 'about' | 'experience' | 'projects' | 'reads' | 'blog' | 'contact' | 'research'

interface DesktopIconsProps {
  onIconClick: (section: Section) => void
}

interface IconData {
  id: Section
  label: string
  icon: string
}

const icons: IconData[] = [
  { id: 'projects', label: 'Applications', icon: '📁' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'research', label: 'Research', icon: '🔬' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'reads', label: 'Reads', icon: '📚' },
  { id: 'about', label: 'readme.txt', icon: '📄' },
]

export default function DesktopIcons({ onIconClick }: DesktopIconsProps) {
  return (
    <div className="desktop-icons">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="desktop-icon"
          onClick={() => onIconClick(icon.id)}
          aria-label={icon.label}
        >
          <div className="desktop-icon-image">{icon.icon}</div>
          <div className="desktop-icon-label">{icon.label}</div>
        </button>
      ))}
    </div>
  )
}
