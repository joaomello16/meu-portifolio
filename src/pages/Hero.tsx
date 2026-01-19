import '../styles/Hero.css'
import { useLabels } from '../hooks/useLabels'

interface HeroProps {
  onNavigate: (section: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const { translation } = useLabels()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>João Mello</h1>
          <p className="subtitle">
            {translation.hero.subtitle}
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => onNavigate('about')}
              className="btn btn-primary"
            >
              {translation.hero.learnMore['light']}
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="btn btn-secondary"
            >
              {translation.hero.myProjects['light']}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
