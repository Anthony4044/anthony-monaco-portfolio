import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { profile } from '../data/resume'

const EASE_OUT = [0.23, 1, 0.32, 1]

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
]

const SOCIALS = [
  { href: profile.links.github, icon: Github, label: 'GitHub' },
  { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-8 py-4 md:px-28">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 font-bold">
          <Logo />
          {profile.name}
        </a>

        <ul className="hidden list-none items-center gap-3 text-sm text-muted-foreground md:flex">
          {LINKS.map((link, i) => (
            <li key={link.href} className="flex items-center gap-3">
              <a href={link.href} className="transition-colors duration-200 hover:text-foreground">
                {link.label}
              </a>
              {i < LINKS.length - 1 && <span className="text-muted-foreground/50">&bull;</span>}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, transform: reduce ? 'translateY(0px)' : 'translateY(-8px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          exit={{ opacity: 0, transform: reduce ? 'translateY(0px)' : 'translateY(-8px)' }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
          className="bg-background fixed inset-0 z-[200] flex flex-col px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2.5 font-bold">
              <Logo />
              {profile.name}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-foreground transition-colors duration-200 hover:text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  )
}
