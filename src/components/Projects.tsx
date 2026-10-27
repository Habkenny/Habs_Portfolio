import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Accent = 'mint' | 'sand' | 'blue' | 'rose'

type Visual =
  | 'taskflow'
  | 'rokkers'
  | 'maths'
  | 'restaurant'

type Project = {
  number: string
  name: string
  type: string
  description: string
  stack: string[]
  live?: string
  repo: string
  accent: Accent
  visual?: Visual
}

const projects: Project[] = [
  {
    number: '01',
    name: 'Job Board Website',
    type: 'Web Application',
    description:
      'A job board interface for discovering opportunities, navigating listings, and managing job-search workflows.',
    stack: [
      'React 19',
      'Tailwind CSS',
      'React Router',
      'TanStack Query',
      'Vite',
    ],
    live: 'https://habkenny.github.io/JobBoardWebsite/',
    repo: 'https://github.com/Habkenny/JobBoardWebsite',
    accent: 'blue',
  },
  {
    number: '02',
    name: 'The Blessed Union',
    type: 'Wedding Website',
    description:
      'An elegant wedding website designed to present event information through a polished, responsive experience.',
    stack: [
      'React 19',
      'Vite',
      'React Router',
      'Framer Motion',
      'Bootstrap 5',
    ],
    live: 'https://msk-maryam-wedding.vercel.app/',
    repo: 'https://github.com/Habkenny/MSKNikaahPage',
    accent: 'rose',
  },
  {
    number: '03',
    name: 'Iron Forge Gym',
    type: 'Landing Page',
    description:
      'A fitness-focused landing page presenting a gym brand through clear sections and responsive layouts.',
    stack: ['React 19', 'Vite', 'CSS'],
    live: 'https://gymrepos.netlify.app/',
    repo: 'https://github.com/Habkenny/GymRepo',
    accent: 'sand',
  },
  {
    number: '04',
    name: 'Wedding Invitation Card',
    type: 'Digital Invitation',
    description:
      'A digital wedding invitation built with a simple, focused design for sharing important event details.',
    stack: ['HTML5', 'CSS3'],
    live: 'https://mskmweddingcard.netlify.app/',
    repo: 'https://github.com/Habkenny/MSKMWeddingCard',
    accent: 'rose',
  },
  {
    number: '05',
    name: 'Vue SaaS Analytics Dashboard',
    type: 'Analytics Dashboard',
    description:
      'A SaaS analytics dashboard project combining a typed frontend with a modern backend technology stack.',
    stack: [
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Prisma',
    ],
    live: 'https://vue-saa-s-analytics-dashboard.vercel.app/',
    repo: 'https://github.com/Habkenny/VueSaaSAnalyticsDashboard',
    accent: 'blue',
  },
  {
    number: '06',
    name: 'Real Estate E-Commerce',
    type: 'E-Commerce',
    description:
      'A real-estate commerce interface exploring property presentation, responsive grids, and interactive data visualisation.',
    stack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'D3.js',
      'Framer Motion',
      'Vitest',
    ],
    live: 'https://real-estate-ecommerce-grid.vercel.app/',
    repo: 'https://github.com/Habkenny/RealEstateEcommerceGrid',
    accent: 'mint',
  },
  {
    number: '07',
    name: 'IRI Platform',
    type: 'Web Application',
    description:
      'A responsive web platform built with React and TypeScript, with an emphasis on reusable interface elements.',
    stack: [
      'React',
      'TypeScript',
      'Bootstrap',
      'JavaScript',
      'Responsive Design',
    ],
    live: 'https://iri-website.vercel.app/',
    repo: 'https://github.com/Habkenny/iri-website',
    accent: 'blue',
  },
  {
    number: '08',
    name: 'DataSync Pro',
    type: 'SaaS Landing Page',
    description:
      'A B2B SaaS landing-page concept focused on presenting a product clearly and guiding visitors through its value proposition.',
    stack: ['React', 'TypeScript', 'Vite', 'ESLint'],
    live: 'https://b2-b-saa-s-landing-page-conversion.vercel.app/',
    repo: 'https://github.com/Habkenny/B2BSaaSLandingPageConversionLab',
    accent: 'mint',
  },
  {
    number: '09',
    name: 'Saalify',
    type: 'E-Commerce PWA',
    description:
      'A responsive e-commerce experience featuring progressive web app functionality and browser-based local storage.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PWA',
      'LocalStorage',
      'Responsive Design',
    ],
    live: 'https://saalify-modern-e-commerce-platform.vercel.app/',
    repo: 'https://github.com/Habkenny/Saalify---Modern-E-Commerce-Platform',
    accent: 'sand',
  },
  {
    number: '10',
    name: 'ShopEase',
    type: 'E-Commerce',
    description:
      'A shopping interface designed around responsive product presentation and a straightforward browsing experience.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Responsive Design',
    ],
    live: 'https://shopeasecommerc.netlify.app/',
    repo: 'https://github.com/Habkenny/E_Commerce_LP',
    accent: 'rose',
  },
  {
    number: '11',
    name: 'TaskFlow Landing Page',
    type: 'Landing Page',
    description:
      'A product landing page for a task-management concept, with structured content and responsive presentation.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Animations',
    ],
    live: 'https://taskflowlp.netlify.app/',
    repo: 'https://github.com/Habkenny/TaskFlow_Landing_Page',
    accent: 'mint',
  },
  {
    number: '12',
    name: 'HabTech Blog',
    type: 'Blog Application',
    description:
      'A React-based blog application exploring content presentation, Markdown rendering, and browser-based persistence.',
    stack: [
      'React 18',
      'Vite',
      'React Markdown',
      'CSS3',
      'LocalStorage',
    ],
    live: 'https://habkenny.github.io/BlogAppWithCursorAI/',
    repo: 'https://github.com/Habkenny/BlogAppWithCursorAI',
    accent: 'blue',
  },
  {
    number: '13',
    name: 'Task Manager',
    type: 'Web Application',
    description:
      'A task-management interface built with React, providing a practical foundation for organising everyday work.',
    stack: ['React 18', 'Vite', 'CSS3', 'LocalStorage'],
    live: 'https://habkenny.github.io/TaskMAnagerApp/',
    repo: 'https://github.com/Habkenny/TaskMAnagerApp',
    accent: 'mint',
  },
  {
    number: '14',
    name: 'Fliprly',
    type: 'Landing Page',
    description:
      'A responsive marketplace landing-page concept focused on clear content hierarchy and accessible layouts.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Responsive Design',
    ],
    live: 'https://habkenny.github.io/Flrpy_LP_demo/',
    repo: 'https://github.com/Habkenny/Fliprly',
    accent: 'sand',
  },
  {
    number: '15',
    name: 'Rokkers Foundation',
    type: 'Charity Website',
    description:
      'A charity website designed to communicate the foundation’s work and provide visitors with a clear, responsive experience.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'SEO',
      'Responsive Design',
    ],
    live: 'https://rokkers-foundation-charity.vercel.app/',
    repo: 'https://github.com/Habkenny/Rokkers_Foundation_Charity',
    accent: 'sand',
    visual: 'rokkers',
  },
  {
    number: '16',
    name: 'PhD Application Form',
    type: 'Form Application',
    description:
      'A responsive application form demonstrating structured inputs, client-side validation, and form-focused UX.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Form Validation',
      'Responsive Design',
    ],
    live: 'https://habkenny.github.io/PhD-Application-Form/',
    repo: 'https://github.com/Habkenny/PhD-Application-Form',
    accent: 'blue',
  },
  {
    number: '17',
    name: 'TaskFlow PWA',
    type: 'Progressive Web App',
    description:
      'A task-management PWA with calendar and due-date features, notifications, and offline support.',
    stack: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'LocalStorage',
      'Service Workers',
      'PWA',
    ],
    live: 'https://habkenny.github.io/Habtech-To_Do_List/',
    repo: 'https://github.com/Habkenny/Habtech-To_Do_List',
    accent: 'mint',
    visual: 'taskflow',
  },
  {
    number: '18',
    name: 'Birthday Message Generator',
    type: 'Web Application',
    description:
      'A lightweight web application for generating personalised birthday messages with a responsive interface.',
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'UI/UX',
    ],
    live: 'https://habkenny.github.io/Birthday_Card_Generator/',
    repo: 'https://github.com/Habkenny/Birthday_Card_Generator',
    accent: 'rose',
  },
  {
    number: '19',
    name: 'Maths Adventure',
    type: 'Educational PWA · In Development',
    description:
      'A child-friendly Year 2 maths learning app with interactive quizzes, progressive challenges, feedback, and learning progress.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'PWA',
      'IndexedDB',
      'Accessibility',
    ],
    repo: 'https://github.com/Habkenny/Maths-Adventure-for-Year-2',
    accent: 'blue',
    visual: 'maths',
  },
  {
    number: '20',
    name: 'Adesola Restaurant',
    type: 'Restaurant Website · In Development',
    description:
      'A restaurant website project designed to present the business and support an instant-confirmation reservation experience.',
    stack: [
      'React',
      'TypeScript',
      'Responsive Design',
      'Accessibility',
      'Netlify',
    ],
    repo: 'https://github.com/Habkenny/adesola-restaurant',
    accent: 'sand',
    visual: 'restaurant',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual) {
    const visualContent: Record<Visual, { eyebrow: string; title: string; lines: string[] }> = {
      taskflow: {
        eyebrow: 'PLAN YOUR DAY',
        title: 'Make room for what matters.',
        lines: ['Today’s tasks', 'Upcoming deadlines'],
      },
      rokkers: {
        eyebrow: 'COMMUNITY · IMPACT',
        title: 'Building a better future together.',
        lines: ['Our mission', 'Get involved'],
      },
      maths: {
        eyebrow: 'LEARN · PLAY · GROW',
        title: 'Maths can be an adventure!',
        lines: ['Choose a challenge', 'Earn your stars'],
      },
      restaurant: {
        eyebrow: 'ADESOLA RESTAURANT',
        title: 'Discover a world of flavour.',
        lines: ['Explore the experience', 'Plan your visit'],
      },
    }

    const content = visualContent[project.visual]

    return (
      <div className={`project-visual project-visual--${project.visual}`}>
        <div className="project-visual__top">
          <span className="project-visual__dot" />
          <span className="project-visual__dot" />
          <span className="project-visual__dot" />
          <span className="project-visual__label">{content.eyebrow}</span>
        </div>

        <div className="project-visual__body">
          <span className="project-visual__eyebrow">{project.type}</span>
          <strong>{content.title}</strong>

          <div className="project-visual__items">
            {content.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`project-visual project-visual--generic project-visual--${project.accent}`}>
      <div className="project-visual__top">
        <span className="project-visual__dot" />
        <span className="project-visual__dot" />
        <span className="project-visual__dot" />
        <span className="project-visual__label">{project.type}</span>
      </div>

      <div className="project-visual__body">
        <span className="project-visual__eyebrow">SELECTED PROJECT</span>
        <strong>{project.name}</strong>

        <div className="project-visual__lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="project-visual__blocks" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Projects built to solve real problems."
            description="A selection of web applications, responsive websites, and learning projects exploring thoughtful interfaces and practical engineering."
          />
        </Reveal>

        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article
                className={`project-card project-card--${project.accent}`}
              >
                <div className="project-card__visual">
                  <ProjectVisual project={project} />
                  <span className="project-card__number">
                    {project.number}
                  </span>
                </div>

                <div className="project-card__content">
                  <p className="project-card__type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <ul
                    className="project-card__stack"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <div className="project-card__links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View live ${project.name} project`}
                      >
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="projects-footer">
            <p>Want to explore more of my work?</p>
            <a
              href="https://github.com/Habkenny"
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
