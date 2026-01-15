import { ProjectCard } from '../components/ProjectCard'
import '../styles/Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  siteLink?: string
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfólio Pessoal',
      description: 'Site de portfólio minimalista construído com React, TypeScript e Vite.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
      githubLink: 'https://github.com/seu-usuario/portfolio',
      siteLink: 'https://seu-portfolio.com',
    },
    {
      id: 2,
      title: 'Aplicação de Tarefas',
      description: 'App de gerenciamento de tarefas com recursos de filtro e persistência de dados.',
      technologies: ['React', 'TypeScript', 'LocalStorage'],
      githubLink: 'https://github.com/seu-usuario/todo-app',
      siteLink: 'https://seu-todo-app.com',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualizar dados com gráficos e estatísticas em tempo real.',
      technologies: ['React', 'TypeScript', 'CSS Grid'],
      githubLink: 'https://github.com/seu-usuario/dashboard',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
