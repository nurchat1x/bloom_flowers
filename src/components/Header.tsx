import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const switchLang = (next: Lang) => {
    setLang(next)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt={t.brand} className="logo-img" />
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          <a href="#catalog" onClick={closeMenu}>
            {t.navCatalog}
          </a>
          <a href="#how" onClick={closeMenu}>
            {t.navHow}
          </a>
          <a href="#about" onClick={closeMenu}>
            {t.navAbout}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t.navContact}
          </a>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t.langLabel}>
            <button
              type="button"
              className={lang === 'ru' ? 'is-active' : ''}
              onClick={() => switchLang('ru')}
            >
              RU
            </button>
            <button
              type="button"
              className={lang === 'kk' ? 'is-active' : ''}
              onClick={() => switchLang('kk')}
            >
              KK
            </button>
          </div>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
