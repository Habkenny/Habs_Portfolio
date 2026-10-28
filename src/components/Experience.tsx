
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type ExperienceRole = {
  period: string
  role: string
  organisation: string
  location?: string
  details: string[]
}

const roles: ExperienceRole[] = [
  {
    period: 'Feb 2026 — Jul 2026',
    role: 'Full-Stack Developer Volunteer',
    organisation: 'The Owen Smith Charitable Trust',
    details: [
      'Contributed to web application development within a charitable organisation.',
      'Worked on frontend and backend tasks aligned with project requirements.',
      'Supported feature implementation, debugging and application functionality improvements.',
    ],
  },
  {
    period: 'Jan 2026 — Jul 2026',
    role: 'Full-Stack Developer Intern',
    organisation: 'HOPN UG',
    location: 'Remote · Germany',
    details: [
      'Contributed to full-stack development tasks within a remote team environment.',
      'Applied frontend and backend technologies to implement application features.',
      'Supported debugging and development activities to meet project requirements.',
    ],
  },
  {
    period: 'Jan 2024 — Present',
    role: 'Frontend Developer',
    organisation: 'Habtech Solutions',
    details: [
      'Develop responsive user interfaces using React, JavaScript and related frontend technologies.',
      'Build reusable UI components and connect interfaces to application data and APIs where required.',
      'Debug interface issues and improve usability, maintainability and cross-device presentation.',
    ],
  },
  {
    period: 'Jun 2023 — Dec 2023',
    role: 'Web Developer Intern',
    organisation: 'Rokkers Foundation',
    details: [
      'Developed web pages for a charitable organisation using frontend technologies.',
      'Implemented responsive layouts using HTML, CSS and JavaScript.',
      'Supported website deployment using Netlify.',
    ],
  },
  {
    period: 'Apr 2023 — Jun 2023',
    role: 'GIS Intern',
    organisation: 'Ogun State Ministry of Environment',
    details: [
      'Worked with GIS tools and field-data workflows, including ArcGIS Survey123 and QGIS.',
      'Gained practical experience with spatial data and PostgreSQL/PostGIS workflows.',
    ],
  },
  {
    period: 'Jul 2022 — May 2023',
    role: 'Data Analyst Intern',
    organisation: 'Utiva Learning',
    details: [
      'Developed practical data analysis skills using Excel, PostgreSQL and Power BI.',
      'Worked with data to support analysis, reporting and data-driven insights.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-label="Work experience and career journey"
    >
      <div className="container experience-layout">
        <Reveal>
          <SectionHeading
            eyebrow="CAREER JOURNEY"
            title="Experience that keeps me learning."
            description="My experience spans frontend and full-stack development, data analysis and geospatial technologies, shaping how I approach practical problems and build useful digital solutions."
          />
        </Reveal>

        <div className="timeline">
          {roles.map((role, index) => (
            <Reveal
              key={`${role.organisation}-${role.period}`}
              delay={index * 55}
              className="timeline-item"
            >
              <div className="timeline-period">
                {role.period}
              </div>

              <div
                className="timeline-marker"
                aria-hidden="true"
              />

              <article className="timeline-content">
                <h3>{role.role}</h3>

                <p className="timeline-org">
                  {role.organisation}
                </p>

                {role.location && (
                  <p className="timeline-location">
                    {role.location}
                  </p>
                )}

                <ul>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
