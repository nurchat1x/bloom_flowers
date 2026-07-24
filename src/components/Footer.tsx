import { useLanguage } from '../i18n/LanguageContext'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from '../data/contact'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt={t.brand} className="footer-logo-img" />
          <p className="footer-city">{t.footerCity}</p>
          <p className="footer-address">
            <span aria-hidden="true">📍 </span>
            {t.address}
          </p>
        </div>

        <div className="footer-links">
          <a href={whatsappLink(t.waGeneric)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <p className="footer-note">{t.footerRights}</p>
      </div>
    </footer>
  )
}
