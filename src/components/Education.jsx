import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '../lib/fadeUp'
import { education } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  const sectionRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ringRef.current, {
        rotation: 40,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="relative py-32 md:py-44">
      <div
        ref={ringRef}
        className="pointer-events-none absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/[0.06]"
        aria-hidden="true"
      />

      <div className="container-page relative text-center">
        <motion.p {...fadeUp(0)} className="text-muted-foreground text-xs tracking-[3px] uppercase">
          Education
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="mt-4 text-4xl md:text-6xl">
          Where It <span className="font-serif italic">Started</span>
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 text-left sm:grid-cols-2">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              {...fadeUp(0.15 + i * 0.1)}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-foreground m-0 text-lg font-semibold">{ed.school}</h3>
                <span className="text-muted-foreground text-sm">{ed.year}</span>
              </div>
              <p className="text-muted-foreground mt-1 mb-2">{ed.detail}</p>
              <p className="text-muted-foreground/70 m-0 text-xs">
                {ed.meta} &middot; {ed.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
