import { LanguageProvider } from './i18n/LanguageContext'
import { SakuraPetals } from './components/SakuraPetals'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Perks } from './components/Perks'
import { Catalog } from './components/Catalog'
import { HowToOrder } from './components/HowToOrder'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <SakuraPetals />
        <Header />
        <main>
          <Hero />
          <Perks />
          <Catalog />
          <HowToOrder />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
