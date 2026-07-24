import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Lang } from './translations'

type Dictionary = { [K in keyof (typeof translations)['ru']]: string }

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Lang {
  const saved = localStorage.getItem('bloom-lang')
  if (saved === 'ru' || saved === 'kk') return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('kk')) return 'kk'
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('bloom-lang', next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
