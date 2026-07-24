import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <section className="section about" id="about">
      <div className="about-layout">
        <div className="about-visual" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="about-copy">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
      </div>
    </section>
  )
}
