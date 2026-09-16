import { motion } from 'framer-motion'
import { fadeUp } from '../lib/fadeUp'
import { profile } from '../data/resume'
import HeroVideo from './HeroVideo'
import Logo from './Logo'
import Button from './Button'

// Set to an .m3u8 URL you own the rights to. Left empty until a real,
// properly-licensed stream is available — the section reads fine without it.
const CTA_VIDEO_SRC = ''

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-border/30 relative overflow-hidden border-t py-32 md:py-44"
    >
      <HeroVideo src={CTA_VIDEO_SRC} className="absolute inset-0 z-0 h-full w-full object-cover" />
      <div className="bg-background/45 absolute inset-0 z-[1]" aria-hidden="true" />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <motion.div {...fadeUp(0)}>
          <Logo size="lg" className="mb-6" />
        </motion.div>

        <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-6xl">
          Let&apos;s build <span className="font-serif italic">something</span>.
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-muted-foreground mt-4 max-w-md">
          Full-stack, QA, and applied ML. Let&apos;s talk about what you&apos;re building.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10">
          <Button href={`mailto:${profile.email}`} shape="lg">
            Email Me
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
