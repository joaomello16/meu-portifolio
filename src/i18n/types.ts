export type LanguageCode = 'pt-BR' | 'en-US'
export type ThemeValue = 'light' | 'dark'

export interface LanguageTexts {
  hero: {
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
    about: {
      title: Record<ThemeValue, string>
    }
}

export interface Language extends LanguageTexts {}
