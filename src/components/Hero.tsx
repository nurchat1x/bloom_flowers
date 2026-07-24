import { useLanguage } from '../i18n/LanguageContext'
import { INSTAGRAM_URL, whatsappLink } from '../data/contact'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="hero-image"
        />
        <div className="hero-veil" />
      </div>

      <div className="hero-content">
        <p className="hero-tag reveal">{t.heroTag}</p>
        <h1 className="hero-title reveal delay-1">
          <img src="/logo.png" alt={t.heroTitle} className="hero-logo" />
        </h1>
        <p className="hero-subtitle reveal delay-2">{t.heroSubtitle}</p>
        <div className="hero-cta reveal delay-3">
          <a
            className="btn btn-primary"
            href={whatsappLink(t.waGeneric)}
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaWhatsapp}
          </a>
          <a
            className="btn btn-ghost"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaInstagram}
          </a>
        </div>
      </div>
    </section>
  )
}
