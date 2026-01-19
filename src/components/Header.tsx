import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLabels } from '../hooks/useLabels'
import '../styles/Header.css'
import laptopDark from '../assets/button/backend-laptop.png'
import laptopLight from '../assets/button/frontend-laptop-real.png'
import ReactCountryFlag from "react-country-flag";

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const { theme, toggleTheme, toggleLanguage, language } = useTheme()
  const { translation } = useLabels()
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
            title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
            aria-label={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
          >
            <ReactCountryFlag
              svg
              countryCode={language === 'pt-BR' ? 'US' : 'BR'}
              className="flag-svg"
            />
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={translation.header.themeToggleTitle(theme)}
            aria-label="Theme toggle"
          >
            <img
              src={theme === 'light' ? laptopDark : laptopLight}
              alt="Theme illustration"
              className="theme-icon"
            />
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
