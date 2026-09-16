import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLenis } from '../lib/lenis'

gsap.registerPlugin(ScrollTrigger)

const SECTIONS = [
  { id: 'top', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionRail() {
  const fillRef = useRef(null)
  const dotRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Overall page-scroll fill, connecting every dot with one continuous line.
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.set(fillRef.current, { scaleY: self.progress })
        },
      })

      // Per-section activation as each one crosses the viewport center.
      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id)
        if (!el) return

        const setActive = (active) => {
          const dot = dotRefs.current[i]
          if (!dot) return
          gsap.to(dot, {
            scale: active ? 1 : 1,
            backgroundColor: active ? 'var(--color-foreground)' : 'transparent',
            borderColor: active ? 'var(--color-foreground)' : 'var(--color-border)',
            duration: 0.4,
            ease: 'power2.out',
          })
          gsap.to(dot, { scale: active ? 1.4 : 1, duration: 0.4, ease: 'back.out(2)' })
        }

        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(true),
          onEnterBack: () => setActive(true),
          onLeave: () => setActive(false),
          onLeaveBack: () => setActive(false),
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(el, { duration: 1.2 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 md:block"
    >
      <div className="relative flex flex-col items-center gap-8 py-2">
        <div className="bg-border absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2">
          <div ref={fillRef} className="bg-foreground h-full w-full origin-top" style={{ transform: 'scaleY(0)' }} />
        </div>

        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            className="group relative z-10 flex h-3 w-3 items-center justify-center"
          >
            <span
              ref={(el) => {
                dotRefs.current[i] = el
              }}
              className="border-border h-2 w-2 rounded-full border"
              style={{ backgroundColor: 'transparent' }}
            />
            <span className="text-muted-foreground pointer-events-none absolute left-full ml-3 text-xs whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
