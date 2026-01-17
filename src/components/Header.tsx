import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLabels } from '../hooks/useLabels'
import '../styles/Header.css'

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const { theme, toggleTheme, toggleLanguage } = useTheme()
  const { translation } = useLabels()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    onNavigate(section)
    setMobileMenuOpen(false)
  }

  const getThemeIcon = () => {
    return theme === 'light' ? '</>' : '⚙️'
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
              {translation.header.home}
            </button>
            <button onClick={() => handleNavClick('about')} className="nav-link">
              {translation.header.about}
            </button>
            <button onClick={() => handleNavClick('experience')} className="nav-link">
              {translation.header.experience}
            </button>
            <button onClick={() => handleNavClick('projects')} className="nav-link">
              {translation.header.projects}
            </button>
            <button onClick={() => handleNavClick('contact')} className="nav-link">
              {translation.header.contact}
            </button>
          </nav>
          <button
            onClick={toggleLanguage}
            className="language-toggle"
            title="Alternar idioma"
            aria-label="Language toggle"
          >
            {translation.header.languageToggle}
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={translation.header.themeToggleTitle(theme)}
            aria-label="Theme toggle"
          >
            {getThemeIcon()}
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
