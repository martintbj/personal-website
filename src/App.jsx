import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsEnhanced from './components/ProjectsEnhanced'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation scrolled={scrolled} />
      <BackToTop />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsEnhanced />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
