# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers screening candidates for software engineering
co-op/internship and early-career roles. They arrive to do a fast scan —
deciding whether to move Anthony forward — not a deep technical audit.

## Product Purpose

A personal portfolio for Anthony Monaco, a Software Engineering co-op student
at Concordia University. It exists to get him past the initial recruiter
screen by presenting his real work history, projects, and skills clearly and
credibly.

## Positioning

Unlike a typical CS-student portfolio built entirely around class projects,
this one leads with real production experience — an internal KPI dashboard
shipped at Airbus Canada and a year of QA work on live streaming protocols at
Matrox — positioning Anthony as someone who has already worked inside real
engineering/QA processes, not just completed assignments.

## Operating Context

Visitors arrive via a shared link (resume, LinkedIn, job application, etc.)
and scroll through in one sitting on desktop or mobile. No login, no
multi-session workflow. Content is resume-derived (`src/data/resume.js`):
education, experience, projects, skills, contact info.

## Capabilities and Constraints

- Content must stay factually accurate to Anthony's real resume — no invented
  metrics, testimonials, or job history.
- Single-page Vite + React app; no backend, no CMS.
- Contact/resume links must point to real, working destinations (email,
  phone, LinkedIn, GitHub, downloadable resume).

## Brand Commitments

Name: Anthony Monaco. Voice: direct, engineering-grounded ("production",
"shipped", "tested"), no marketing fluff. Current visual identity is a strict
monochrome design (pure black/white, one desaturated accent, Inter +
Instrument Serif italic accents) — see DESIGN.md.

## Evidence on Hand

Real resume content in `src/data/resume.js`: Concordia University (B.Eng
Software Engineering Co-op, 2027) and Vanier College (DEC CS+Math, 2023)
education; Airbus Canada (Developer, KPI Dashboard) and Matrox (QA Intern)
experience; three real projects (AI Focus Tracker, Peer Evaluation Form,
Pawfect Match Website); a defined skills list. No testimonials, case studies,
or press exist, and none should be fabricated.

## Product Principles

1. Lead with real, verifiable experience over generic self-description.
2. Every claim on the page must trace back to something real Anthony did —
   nothing invented for effect.
3. Optimize for a fast, confident recruiter scan first; deeper technical
   detail (project specifics, stack) supports a slower second read, not the
   first impression.
4. Keep the tone direct and engineering-grounded; avoid marketing language
   that would undercut credibility with a technical audience.

## Accessibility & Inclusion

No specific requirement established beyond standard web accessibility
practice (not yet audited).
