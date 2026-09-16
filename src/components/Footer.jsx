import { profile } from '../data/resume'

const LINKS = [
  { href: profile.links.github, label: 'GitHub' },
  { href: profile.links.linkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-8 py-12 text-sm sm:flex-row md:px-28">
      <span className="text-muted-foreground">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </span>
      <div className="text-muted-foreground flex items-center gap-6">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
