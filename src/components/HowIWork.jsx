import { motion } from 'framer-motion'
import { Code2, Cpu, ShieldCheck } from 'lucide-react'
import { fadeUp } from '../lib/fadeUp'

const PILLARS = [
  {
    icon: Code2,
    name: 'Full-Stack Delivery',
    description: 'React, Java/Spring Boot, Node.js, PostgreSQL. From database to interface, shipped end to end.',
  },
  {
    icon: ShieldCheck,
    name: 'Quality Assurance',
    description: 'A year validating streaming protocols at Matrox. Testing isn’t an afterthought, it’s the job.',
  },
  {
    icon: Cpu,
    name: 'Applied ML',
    description: 'TensorFlow.js and computer vision put to work on real problems, not just coursework.',
  },
]

export default function HowIWork() {
  return (
    <section className="pt-32 pb-6 text-center md:pt-40 md:pb-9">
      <div className="container-page">
        <motion.h2 {...fadeUp(0)} className="text-5xl md:text-7xl lg:text-8xl">
          Ideas are cheap. <span className="font-serif italic">Execution</span> isn&apos;t.
        </motion.h2>

        <motion.p {...fadeUp(0.1)} className="text-muted-foreground mx-auto mt-6 mb-24 max-w-2xl text-lg">
          I care less about buzzwords and more about whether the thing ships, holds up, and
          actually works for the people using it.
        </motion.p>

        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div key={pillar.name} {...fadeUp(0.15 + i * 0.1)} className="flex flex-col items-center">
              <div className="border-border mb-6 flex h-24 w-24 items-center justify-center rounded-full border">
                <pillar.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold">{pillar.name}</h3>
              <p className="text-muted-foreground mt-2 max-w-[240px] text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-sm">
          If it doesn&apos;t ship, it doesn&apos;t count.
        </motion.p>
      </div>
    </section>
  )
}
