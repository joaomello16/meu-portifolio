import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './pages/Hero'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import './styles/globals.css'
import './App.css'

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App
