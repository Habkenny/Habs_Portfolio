import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const principles = [
  { number: '01', title: 'User-first interfaces', text: 'Responsive layouts with accessibility and clear interactions in mind.' },
  { number: '02', title: 'Reliable foundations', text: 'Reusable components, thoughtful API integration and maintainable code.' },
  { number: '03', title: 'Continuous learning', text: 'Bringing together software engineering, data and geospatial thinking.' },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container about-layout">
        <Reveal><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building useful software, from intuitive interfaces to intelligent solutions." /></Reveal>
        <Reveal delay={100}>
          <div className="about-copy">
            <p className="about-lede">I’m a full-stack engineer who enjoys turning ideas into useful, approachable digital products.</p>
            <p>I&apos;m Habeeb Kehinde, a full-stack engineer with over three years of experience shipping responsive web applications with React, TypeScript and Node.js. I work with REST APIs, PostgreSQL and MongoDB, and I bring GIS and data-analysis experience to practical software problems. I&apos;m also exploring Tauri and AI-assisted development for useful, maintainable products.</p>
            <a className="text-link" href="#experience">Explore my experience <span aria-hidden="true">→</span></a>
          </div>
        </Reveal>
      </div>
      <div className="container principle-grid">
        {principles.map((item, index) => <Reveal key={item.number} delay={index * 70} className="principle-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}
      </div>
    </section>
  )
}
