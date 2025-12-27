import { useEffect, useRef } from 'react'
import './CommandPalette.css'

interface CommandPaletteProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
  onClose: () => void
}

export default function CommandPalette({
  value,
  onChange,
  onSubmit,
  onClose,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit(value)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          type="text"
          className="command-palette-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter command (e.g., :about, :help)"
          spellCheck={false}
        />
      </div>
    </div>
  )
}
