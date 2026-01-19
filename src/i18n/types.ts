export type LanguageCode = 'pt-BR' | 'en-US'
export type ThemeValue = 'light' | 'dark'

export interface LanguageTexts {
  hero: {
    subtitle: string
    learnMore: Record<ThemeValue, string>
    myProjects: Record<ThemeValue, string>
  }
  header: {
    home: string
    about: string
    experience: string
    projects: string
    contact: string
    languageToggle: string
    themeToggleTitle: (theme: ThemeValue) => string
  }
  experience: {
    title: string
    jobs: Array<{
      company: string
      position: string
      period: string
      description: string
      location?: string
    }>
  }
  projects: {
    title: string
    items: Array<{
      title: string
      description: string
      technologies: string[]
      githubLink?: string
      siteLink?: string
    }>
  }
  about: {
    title: Record<ThemeValue, string>
    description1: string
    description2: string
    skillsTitle: string
    placeholders: {
      degree: string
      experience: string
      frontend: string
      backend: string
      apis: string
      database: string
    }
    skills: string[]
  }
}

export interface Language extends LanguageTexts {}
