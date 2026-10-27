import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const groups = [
  {
    title: 'Frontend',
    description: 'Interfaces, design systems and client-side state',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'React Router',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Motion for React',
      'Responsive UI',
      'Accessibility', 'Figma',
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Application logic, security and integration',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Integration',
      'Authentication Concepts',
      'JWT',
      'Input Validation',
      'Error Handling',
      'Middleware',
      'Form Handling'
    ]
  },
  {
    title: 'Data & databases',
    description: 'Data modelling, querying and analysis',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'SQL',
      'Database Schema Design',
      'Python Basics',
      'Pandas Basics',
      'Power BI',
      'PostGIS'
    ]
  },
  {
    title: 'Tools & workflow',
    description: 'Development, testing and deployment',
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'Vitest',
      'React Testing Library',
      'Playwright',
      'Postman',
      'ESLint',
      'Prettier',
      'npm',
      'Netlify',
      'Vercel',
      'CI/CD Basics',
      'QGIS',
      'ArcGIS'
    ]
  },
  {
    title: 'Desktop & AI engineering',
    description: 'Cross-platform applications and intelligent software',
    skills: [
      'Tauri',
      'Python for AI',
      'AI API Integration',
      'Prompt Engineering'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-soft">
      <div className="container">
        <Reveal><SectionHeading eyebrow="TOOLKIT" title="The tools I use to build." description="A practical mix of frontend, backend, data and delivery skills. The list reflects tools used across my projects and experience." /></Reveal>
        <div className="skills-grid">
          {groups.map((group, index) => <Reveal key={group.title} delay={index * 60} className="skill-card"><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span aria-hidden="true" className="skill-arrow">↗</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Reveal>)}
        </div>
      </div>
    </section>
  )
}
