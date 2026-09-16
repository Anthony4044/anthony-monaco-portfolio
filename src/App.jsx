import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initSmoothScroll, destroySmoothScroll } from './lib/lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionRail from './components/SectionRail'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const progressRef = useRef(null)

  useEffect(() => {
    initSmoothScroll()

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.set(progressRef.current, { scaleX: self.progress })
      },
    })

    return () => {
      trigger.kill()
      destroySmoothScroll()
    }
  }, [])

  return (
    <>
      <div
        ref={progressRef}
        className="bg-foreground fixed top-0 left-0 z-[100] h-0.5 w-full origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
      <Nav />
      <SectionRail />
      <main>
        <Hero />
        <HowIWork />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
