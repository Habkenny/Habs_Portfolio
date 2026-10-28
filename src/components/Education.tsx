
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const education = [
  {
    level: 'POSTGRADUATE DEGREE',
    degree: 'MSc Geographic Information Systems (GIS)',
    institution: 'Sheffield Hallam University, Sheffield, United Kingdom',
    period: '2022 — 2023',
    subjects: ['GIS', 'ArcGIS', 'QGIS', 'ENVI', 'ArcMap'],
  },
  {
    level: 'UNDERGRADUATE DEGREE',
    degree: 'BSc Environmental Management & Toxicology',
    institution: 'Federal University of Agriculture, Abeokuta (FUNAAB), Nigeria',
    period: 'Graduated January 2014',
    subjects: [
      'Environmental Management',
      'Climate Change',
      'Ozone Layer Depletion',
      'Geographical Data',
    ],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad section-soft"
      aria-labelledby="education-heading"
    >
      <div className="container education-layout">
        <Reveal>
          <SectionHeading
            eyebrow="EDUCATION"
            title="A foundation in data, environment and technology."
            description="My academic background in GIS and environmental science strengthens my approach to spatial data, analytical thinking and solving practical problems through software."
          />
        </Reveal>

        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal
              key={item.degree}
              delay={index * 100}
              className="education-card"
            >
              <p className="project-type">{item.level}</p>

              <h3>{item.degree}</h3>

              <p className="education-institution">{item.institution}</p>
              <p className="education-period">{item.period}</p>

              <ul className="education-skills" aria-label="Areas of study">
                {item.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
