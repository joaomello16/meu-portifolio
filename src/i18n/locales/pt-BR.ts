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
    }
  }
}
