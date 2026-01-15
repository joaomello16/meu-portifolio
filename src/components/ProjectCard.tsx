import '../styles/ProjectCard.css'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  siteLink?: string
  image?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  siteLink,
  image,
}: ProjectCardProps) {
  return (
    <div className="project-card">


        {/* PREVIEW */}
          {image && (
            <div className="project-preview">
              <img src={image} alt={`Preview do projeto ${title}`} />
            </div>
          )}
      {/* CONTEÚDO */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="technologies">
          {technologies.map((tech) => (
              <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>


        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
