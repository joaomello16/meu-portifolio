import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { LanguageCode } from '../i18n'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  language: LanguageCode
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Verificar localStorage
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      return saved
    }

    // 2. Padrão: dark
    return 'dark'
  })

  const [language, setLanguage] = useState<LanguageCode>(() => {
    // 1. Verificar localStorage
    const saved = localStorage.getItem('language') as LanguageCode | null
    if (saved) {
      return saved
    }

    // 2. Padrão: pt-BR
    return 'pt-BR'
  })

  useEffect(() => {
    // Atualizar o atributo no HTML
    document.documentElement.setAttribute('data-theme', theme)
    // Salvar no localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Salvar idioma no localStorage
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}
