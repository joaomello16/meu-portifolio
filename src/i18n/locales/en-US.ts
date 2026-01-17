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
      }
    }
}
