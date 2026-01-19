import type { Language } from '../types'

export const enUS: Language = {
  hero: {
    subtitle: 'Software developer with practical experience in developing web applications, with a focus on backend.',
    learnMore: {
      light: 'Learn More',
      dark: '/experience'
    },
    myProjects: {
      light: 'My Projects',
      dark: '/my-projects'
    }
  },
  header: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    languageToggle: 'PT',
    themeToggleTitle: (theme: 'light' | 'dark') => `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`
  },
    about: {
      title: {
        light: 'About Me',
        dark: 'About Me'
    },
    description1: ' {degree} student from  Descomplica Faculdade and software developer with {experience} in web application development.',
    description2: 'I worked in developing {frontend} solutions, creating and maintaining web applications, integrating and consuming {apis}, querying and optimizing {database}, as well as supporting the integration of artificial intelligence solutions.',
    skillsTitle: 'Skills',
    placeholders: {
      degree: ' Software Engineering',
      experience: 'practical experience',
      frontend: 'front and back-end',
      backend: 'back-end',
      apis: 'APIs',
      database: 'relational databases'
    },
    skills: [
      'React / TypeScript',
      'Tailwind / Bootstrap',
      'API integration and consumption',
      'Relational database queries',
      'Git / GitHub'
    ]
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Mosaic AI Agency',
        position: 'Software Developer',
        period: 'Jul 2025 – Jan 2026',
        location: '',
        description: 'Development of web solutions, creation and maintenance of front and back-end applications, integration and consumption of APIs, preparation and optimization of queries in relational databases and support for the integration of AI solutions. Work in multidisciplinary teams, following development best practices.'
      },
      {
        company: 'Arcos Dorados',
        position: 'Assistant',
        period: 'Mar 2022 – Dec 2022',
        location: 'Curitiba, PR · On-site',
        description: 'Work in an operational and administrative environment, developing skills in organization, teamwork, communication and problem solving.'
      },
      {
        company: 'ECHOA Engenharia',
        position: 'Field Assistant',
        period: 'Jan 2020 – Dec 2020',
        location: 'Florianópolis, SC · On-site',
        description: 'Work as a field assistant in technical inspections carried out in the Trato Pelo Rio Capivari project, assisting in data collection and support for field activities.'
      }
    ]
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'Batman Ticket Sales',
        description: 'Ticket sales site for the Batman movie with contact, photos, and reviews features',
        technologies: ['JS', 'CSS', 'HTML'],
        githubLink: 'https://github.com/joaomello16/batman-film',
        siteLink: 'https://batman-ticket.vercel.app/'
      },
      {
        title: 'Task List',
        description: 'Task management site with features to add, edit and delete tasks.',
        technologies: ['JS', 'HTML', 'LocalStorage'],
        githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
        siteLink: 'https://listade-tarefas-eliti.netlify.app/'
      },
      {
        title: 'Psychologist Landing Page',
        description: 'Presentation site for a psychologist with information about services, specialization and contact.',
        technologies: ['React', 'TypeScript', 'lovable'],
        githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
        siteLink: 'https://brunabenetti-psicologa-floripa.lovable.app/'
      }
    ]
  }
}
