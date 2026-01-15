import { ProjectCard } from '../components/ProjectCard'
import '../styles/Projects.css'
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
  const projects: Project[] = [
    {
      id: 1,
      title: 'Batman Ticket Sales ',
      description: 'Site de venda de ingressos para o filme do Batman com recursos contato, fotos, e avaliações',
      technologies: ['JS', 'CSS', 'HTML', ],
      image: batmanproject,
      githubLink: 'https://github.com/joaomello16/batman-film',
      siteLink: 'https://batman-ticket.vercel.app/',
    },
    {
      id: 2,
      title: 'Lista de Tarefas',
      description: 'Site de gerenciamento de tarefas com recursos de adicionar, editar e excluir tarefas.',
      technologies: ['JS', 'HTML', 'LocalStorage'],
      image: listadetarefas,
      githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
      siteLink: 'https://listade-tarefas-eliti.netlify.app/',
    },
    {
      id: 3,
      title: 'Landinng Page Psicóloga',
      description: 'Site de apresentação para uma psicóloga com informações sobre serviços, especialização e contato.',
      image: sitepsicologa,
      technologies: ['React', 'TypeScript', 'lovable'],
      githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
      siteLink: 'https://brunabenetti-psicologa-floripa.lovable.app/',
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
