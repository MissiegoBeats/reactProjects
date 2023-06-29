import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Feedbacks from './components/Feedbacks'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import StarsCanvas from './components/StarsCanvas'
import Tech from './components/Tech'
import Works from './components/Works'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <NavBar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
