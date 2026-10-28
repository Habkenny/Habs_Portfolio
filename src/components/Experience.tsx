import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const roles = [
  { period: 'Jan 2024 — Present', role: 'Frontend Developer', organisation: 'Habtech Solutions', details: ['Build and improve responsive web interfaces with reusable components.', 'Work with modern JavaScript frameworks and connect UI workflows to application data.'] },
  { period: 'Jun 2023 — Dec 2023', role: 'Web Developer Intern', organisation: 'Rokkers Foundation', details: ['Contributed to charity website pages and clear presentation of organisational information.', 'Worked on website delivery and deployment using Netlify and web development fundamentals.'] },
  { period: 'Apr 2023 — Jun 2023', role: 'GIS Intern', organisation: 'Ogun State Ministry of Environment', details: ['Worked with GIS tools and field-data workflows, including ArcGIS Survey123, QGIS and spatial databases.'] },
  { period: 'Jul 2022 — May 2023', role: 'Data Analyst Intern', organisation: 'Utiva Learning', details: ['Developed practical data analysis skills using Excel, PostgreSQL and Power BI.'] },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container experience-layout">
        <Reveal><SectionHeading eyebrow="CAREER JOURNEY" title="Experience that keeps me learning." description="Software development, data and geospatial work have all contributed to how I solve problems." /></Reveal>
        <div className="timeline">
          {roles.map((role, index) => <Reveal key={`${role.organisation}-${role.period}`} delay={index * 55} className="timeline-item"><div className="timeline-period">{role.period}</div><div className="timeline-marker" aria-hidden="true"/><div className="timeline-content"><h3>{role.role}</h3><p className="timeline-org">{role.organisation}</p><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}
