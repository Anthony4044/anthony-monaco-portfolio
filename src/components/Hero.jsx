import { motion } from 'framer-motion'
import { fadeUp } from '../lib/fadeUp'
import { profile } from '../data/resume'
import VantaHaloBackground from './VantaHaloBackground'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <VantaHaloBackground className="absolute inset-0 z-0 h-full w-full" />

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t to-transparent" />

      <div className="container-page relative z-10 flex flex-col items-center pt-28 text-center md:pt-32">
        <motion.div {...fadeUp(0)} className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="bg-accent h-1.5 w-1.5 rounded-full" />
          Open to opportunities &middot; {profile.location}
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-medium tracking-[-2px] text-5xl md:text-7xl lg:text-8xl"
        >
          Anthony <span className="font-serif font-normal italic">Monaco</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-hero-subtitle mt-6 max-w-xl text-lg">
          {profile.summary}
        </motion.p>
      </div>
    </section>
  )
}
