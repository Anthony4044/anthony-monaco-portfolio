import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const rootRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        },
      )

      gsap.utils.toArray('.xp__item').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 82%' },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={rootRef} className="border-border/30 border-t py-32 md:py-44">
      <div className="container-page">
        <div className="relative pl-10">
          <div className="bg-border absolute top-1.5 bottom-1.5 left-0 w-px">
            <div
              ref={lineRef}
              className="bg-foreground h-full w-full origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col gap-16">
            {experience.map((job) => (
              <article className="xp__item relative" key={job.company}>
                <div className="border-foreground bg-background absolute top-1.5 -left-[2.6rem] h-2.5 w-2.5 rounded-full border" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }} className="m-0 font-semibold">
                    {job.role}
                  </h3>
                  <span className="text-muted-foreground text-sm">{job.range}</span>
                </div>
                <p className="text-foreground/80 my-2">
                  {job.company} &middot; {job.location}
                </p>
                <ul className="text-muted-foreground mt-0 mb-5 list-disc pl-5 leading-relaxed">
                  {job.points.map((p) => (
                    <li className="mb-1.5" key={p}>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
