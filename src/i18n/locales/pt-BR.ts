import type { Language } from '../types'

export const ptBR: Language = {
  hero: {
    learnMore: {
      light: 'Saiba Mais',
      dark: '/experience'
    },
    myProjects: {
      light: 'Meus Projetos',
      dark: '/my-projects'
    }
  },
  header: {
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    languageToggle: 'EN',
    themeToggleTitle: (theme: 'light' | 'dark') => `Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`
  },
  about: {
    title: {
      light: 'Sobre mim',
      dark: 'Sobre mim'
    },
    description1: 'Estudante de {degree} pela Descomplica Faculdade e desenvolvedor de software com {experience} no desenvolvimento de aplicações web.',
    description2: 'Atuei no desenvolvimento de soluções {frontend}, na criação e manutenção de aplicações web, integração e consumo de {apis}, consultas e otimização de {database} relacionais, além do apoio à integração de soluções com inteligência artificial.',
    skillsTitle: 'Habilidades',
    placeholders: {
      degree: 'Engenharia de Software',
      experience: 'experiência prática',
      frontend: 'front e back-end',
      backend: 'back-end',
      apis: 'APIs',
      database: 'bancos de dados'
    },
    skills: [
      'React / TypeScript',
      'Tailwind / Bootstrap',
      'Integração e consumo de APIs',
      'Consultas em bancos de dados relacionais',
      'Git / GitHub'
    ]
  }
}
