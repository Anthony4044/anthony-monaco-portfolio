export const profile = {
  name: 'Anthony Monaco',
  roles: ['Software Engineer', 'QA-Minded Builder', 'Full-Stack Developer'],
  location: 'Montreal, QC',
  phone: '514-953-0732',
  email: 'anthonymonaco4@icloud.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/anthony-monacoconcordia/',
    github: 'https://github.com/Anthony4044/',
  },
  summary:
    'Full-stack, QA, and applied ML: shipping production systems at Airbus Canada, tested the hard way at Matrox.',
}

export const education = [
  {
    school: 'Concordia University',
    detail: 'Bachelor of Engineering, Software Engineering Co-op',
    meta: 'GPA 3.66 / 4.30',
    location: 'Montreal, QC',
    year: '2027',
    note: 'Web Services & Applications · Software Architecture & Design · Software Testing, Verification & QA · Deep Learning · Computer Vision · Database Systems',
  },
  {
    school: 'Vanier College',
    detail: 'DEC in Computer Science and Mathematics',
    meta: 'Focus: Java (OOP), mathematics, analytical problem solving',
    location: 'St-Laurent, QC',
    year: '2023',
  },
]

export const experience = [
  {
    company: 'Airbus Canada',
    role: 'Developer, KPI Dashboard',
    location: 'Mirabel, QC',
    start: '2026',
    end: '2026',
    range: 'May 2026 - August 2026',
    stack: ['JavaScript', 'HTML', 'CSS', 'Palantir Foundry'],
    points: [
      'Translated business requirements from the supplier management team into technical specs, delivering features that met functional needs in production.',
      'Ran user acceptance testing with end users, rapidly diagnosing bugs and usability issues from real-time feedback.',
      'Designed, built, and hosted the application in Palantir Foundry for internal team-wide use.',
    ],
  },
  {
    company: 'Matrox',
    role: 'Software Quality Assurance Intern',
    location: 'Montreal, QC',
    start: '2025',
    end: '2025',
    range: 'January 2025 - August 2025',
    stack: ['TestRail', 'Jira', 'Networking Protocols'],
    points: [
      'Used TestRail and Jira to manage and validate software quality across features and releases.',
      'Collaborated with engineers to resolve issues in decoding, encoding, and transcoding for network streaming protocols.',
      'Supported continuous improvement in testing and defect-tracking processes for streaming systems.',
    ],
  },
]

export const projects = [
  {
    name: 'AI Focus Tracker',
    year: '2025',
    stack: ['React', 'TensorFlow.js', 'WebGazer'],
    description:
      'Real-time attention tracker using gaze and head-pose analysis to measure focus duration and distraction across varied user conditions, with dashboards surfacing attention trends.',
    tag: 'Applied ML',
  },
  {
    name: 'Peer Evaluation Form',
    year: '2024',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    description:
      'Full-stack peer evaluation platform for student and instructor workflows, with CI/CD pipelines, automated testing, SonarQube quality gates, and RESTful APIs for auth and team management.',
    tag: 'Full-Stack',
  },
  {
    name: 'Pawfect Match Website',
    year: '2024',
    stack: ['Node.js', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Hostable adoption platform with account creation, login, and animal posting/selection workflows built for an intuitive end-to-end user experience.',
    tag: 'Web App',
  },
]

export const skills = {
  Programming: ['Java', 'JavaScript', 'Node.js', 'Python', 'C', 'SQL', 'React', 'HTML', 'CSS', 'PostgreSQL'],
  Platforms: ['Foundry', 'Jira', 'TestRail', 'GitHub', 'Git', 'Google Workspace', 'Microsoft Teams'],
  Methodologies: ['Scrum', 'Agile'],
  Languages: ['English', 'French'],
}
