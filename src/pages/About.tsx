import '../styles/About.css'
import { useLabels } from '../hooks/useLabels'
import { parsePlaceholders } from '../utils/parsePlaceholders'

export function About() {
  const { translation, theme } = useLabels()

  const description1Content = parsePlaceholders(
    translation.about.description1,
    translation.about.placeholders
  )

  const description2Content = parsePlaceholders(
    translation.about.description2,
    translation.about.placeholders
  )

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{translation.about.title[theme]}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{description1Content}</p>
            <p>{description2Content}</p>
          </div>
          <div className="skills">
            <h3>{translation.about.skillsTitle}</h3>
            <ul className="skills-list">
              {translation.about.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
