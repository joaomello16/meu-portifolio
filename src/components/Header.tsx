import '../styles/Header.css'

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>João Mello</h1>
        </div>
        <nav className="nav">
          <button onClick={() => onNavigate('home')} className="nav-link">
            Início
          </button>
          <button onClick={() => onNavigate('about')} className="nav-link">
            Sobre
          </button>
          <button onClick={() => onNavigate('experience')} className="nav-link">
            Experiência
          </button>
          <button onClick={() => onNavigate('projects')} className="nav-link">
            Projetos
          </button>
          <button onClick={() => onNavigate('contact')} className="nav-link">
            Contato
          </button>
        </nav>
      </div>
    </header>
  )
}
