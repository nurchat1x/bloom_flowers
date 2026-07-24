import { useLanguage } from '../i18n/LanguageContext'

export function HowToOrder() {
  const { t } = useLanguage()

  const steps = [
    { title: t.step1Title, text: t.step1Text, num: '01' },
    { title: t.step2Title, text: t.step2Text, num: '02' },
    { title: t.step3Title, text: t.step3Text, num: '03' },
  ]

  return (
    <section className="section how" id="how">
      <div className="section-head">
        <h2>{t.howTitle}</h2>
        <p>{t.howSubtitle}</p>
      </div>

      <ol className="steps">
        {steps.map((step) => (
          <li key={step.num} className="step">
            <span className="step-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
