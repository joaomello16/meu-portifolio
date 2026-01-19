import type { Language } from '../types'

export const enUS: Language = {
  hero: {
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
  }
}
