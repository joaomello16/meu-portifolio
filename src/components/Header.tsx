import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import '../styles/Header.css'

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    onNavigate(section)
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>João Mello</h1>
        </div>
        <div className="header-actions">
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => handleNavClick('home')} className="nav-link">
              Início
            </button>
            <button onClick={() => handleNavClick('about')} className="nav-link">
              Sobre
            </button>
            <button onClick={() => handleNavClick('experience')} className="nav-link">
              Experiência
            </button>
            <button onClick={() => handleNavClick('projects')} className="nav-link">
              Projetos
            </button>
            <button onClick={() => handleNavClick('contact')} className="nav-link">
              Contato
            </button>
          </nav>
          <button onClick={toggleTheme} className="theme-toggle" title={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
