import { useLanguage } from '../i18n/LanguageContext'
import { whatsappLink } from '../data/contact'

export function Perks() {
  const { t } = useLanguage()

  const items = [
    { icon: '💐', text: t.perkFresh },
    { icon: '🎁', text: t.perkBudget },
    { icon: '📸', text: t.perkPhoto },
    { icon: '📲', text: t.perkPick },
    { icon: '📍', text: t.address },
  ]

  return (
    <section className="section perks" id="perks" aria-labelledby="perks-title">
      <div className="section-head">
        <h2 id="perks-title">{t.perksTitle}</h2>
      </div>

      <ul className="perks-list">
        {items.map((item) => (
          <li key={item.text} className="perk-item">
            <span className="perk-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <a
        className="btn btn-primary perks-cta"
        href={whatsappLink(t.waGeneric)}
        target="_blank"
        rel="noreferrer"
      >
        {t.ctaWhatsapp}
      </a>
    </section>
  )
}
