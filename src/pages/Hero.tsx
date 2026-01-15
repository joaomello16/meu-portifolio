import '../styles/Hero.css'

interface HeroProps {
  onNavigate: (section: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Software Engineer</h1>
          <p className="subtitle">
            Desenvolvedor de software com experiencia pratica no desenvolvimento de aplicações web.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => onNavigate('about')}
              className="btn btn-primary"
            >
              Saiba Mais
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="btn btn-secondary"
            >
              Ver Meus Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
