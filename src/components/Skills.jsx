import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.sk__group').forEach((group) => {
        gsap.from(group.querySelectorAll('.sk__chip'), {
          opacity: 0,
          y: 12,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 85%' },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={rootRef} className="border-border/30 border-t py-32 md:py-44">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => (
            <div className="sk__group" key={category}>
              <h3 className="text-muted-foreground mb-4 text-sm tracking-wide uppercase">{category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {list.map((item) => (
                  <span
                    key={item}
                    className="sk__chip border-border text-foreground/80 hover:border-foreground hover:text-foreground rounded-full border px-4 py-2 text-sm transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
