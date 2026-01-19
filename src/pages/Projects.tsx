import { ProjectCard } from '../components/ProjectCard'
import '../styles/Projects.css'
import { useLabels } from '../hooks/useLabels'
import batmanproject from '../assets/projects/batman-project.png'
import listadetarefas from '../assets/projects/listadetarefas.png'
import sitepsicologa from '../assets/projects/sitepsicologa.png'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  siteLink?: string
  image?: string
}

export function Projects() {
  const { translation } = useLabels()

  const projectImages = [batmanproject, listadetarefas, sitepsicologa]

  const projects: Project[] = translation.projects.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    technologies: item.technologies,
    githubLink: item.githubLink,
    siteLink: item.siteLink,
    image: projectImages[index],
  }))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>{translation.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
