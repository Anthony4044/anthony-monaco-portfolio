import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current

      // Floor prevents a negative/zero pin distance on wide viewports where
      // the track would otherwise already fit within window.innerWidth.
      const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth + 96, 300)

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progressRef.current, { scaleX: self.progress })
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="border-border/30 overflow-hidden border-t pt-32 md:pt-44">
      <div className="container-page mb-12 flex items-center justify-between gap-8">
        <p className="text-muted-foreground text-xs tracking-[3px] uppercase">Projects</p>
        <div className="bg-border h-0.5 w-40">
          <div
            ref={progressRef}
            className="bg-foreground h-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      <div className="overflow-hidden pb-32">
        <div
          ref={trackRef}
          className="flex gap-8 pl-6 will-change-transform"
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))' }}
        >
          {projects.map((p, idx) => (
            <article
              key={p.name}
              className="bg-card border-border relative flex shrink-0 flex-col border p-8 pt-10"
              style={{ flexBasis: 'min(80vw, 480px)' }}
            >
              <span className="text-muted-foreground text-sm">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-muted-foreground absolute top-10 right-8 text-xs tracking-wide uppercase">
                {p.tag}
              </span>
              <h3 className="mt-4 mb-3 text-2xl font-semibold">{p.name}</h3>
              <p className="text-muted-foreground grow leading-relaxed">{p.description}</p>
              <div className="my-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">{p.year}</span>
            </article>
          ))}
          <div className="text-muted-foreground flex shrink-0 flex-col justify-center gap-2" style={{ flexBasis: 'min(60vw, 320px)' }}>
            <p>That's the highlight reel.</p>
            <a href="#contact" className="hover-line text-foreground">
              More on request
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
