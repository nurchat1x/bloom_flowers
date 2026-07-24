import { bouquets } from '../data/bouquets'
import { whatsappLink } from '../data/contact'
import { useLanguage } from '../i18n/LanguageContext'

function formatPrice(price: number, currency: string) {
  return `${price.toLocaleString('ru-RU')} ${currency}`
}

export function Catalog() {
  const { lang, t } = useLanguage()

  return (
    <section className="section catalog" id="catalog">
      <div className="section-head">
        <h2>{t.catalogTitle}</h2>
        <p>{t.catalogSubtitle}</p>
      </div>

      <div className="catalog-grid">
        {bouquets.map((item) => {
          const message = `${t.waOrderPrefix}: «${item.name[lang]}» (${formatPrice(item.price, t.currency)})`
          return (
            <article key={item.id} className="bouquet">
              <div className="bouquet-media">
                <img src={item.image} alt={item.name[lang]} loading="lazy" />
              </div>
              <div className="bouquet-body">
                <h3>{item.name[lang]}</h3>
                <p>{item.blurb[lang]}</p>
                <div className="bouquet-meta">
                  <span className="price">{formatPrice(item.price, t.currency)}</span>
                  <a
                    className="btn btn-small"
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.wantThis}
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
