import { ptBR } from './locales/pt-BR'
import { enUS } from './locales/en-US'
import type { LanguageCode, Language } from './types'

const translations: Record<LanguageCode, Language> = {
  'pt-BR': ptBR,
  'en-US': enUS
}

export function getTranslation(languageCode: LanguageCode): Language {
  return translations[languageCode]
}

export type { LanguageCode, Language } from './types'
