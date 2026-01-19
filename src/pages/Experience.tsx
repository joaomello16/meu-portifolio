import '../styles/Experience.css'
import { useLabels } from '../hooks/useLabels'

interface Job {
  company: string
  position: string
  period: string
  description: string
  location?: string
}

export function Experience() {
  const { translation } = useLabels()

  const jobs: Job[] = translation.experience.jobs

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>{translation.experience.title}</h2>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{job.position}</h3>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
                {job.location && <p className="location">{job.location}</p>}
                <p className="description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
