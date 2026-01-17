import { useTheme } from '../context/ThemeContext'
import { getTranslation } from '../i18n'

export function useLabels() {
  const { theme, language } = useTheme()
  const translation = getTranslation(language)

  return {
    translation,
    theme
  }
}
