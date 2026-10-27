
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const certificates = [
  {
    id: 'git-github',
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM / Coursera',
    date: 'October 2026',
    image: '',
    pdf: '/certificates/Coursera%20405KKPF1O7PD-Git_Github.pdf',
    credentialUrl: '',
  },
  {
    id: 'career-guide-coursera',
    title: 'Software Developer Career Guide and Interview Preparation',
    issuer: 'IBM / Coursera',
    date: 'October 2026',
    image: '',
    pdf: '/certificates/Coursera%20M7RCIAHFENQU.pdf',
    credentialUrl: '',
  },
  {
    id: 'html-css-js-coursera',
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'IBM / Coursera',
    date: 'April 2026',
    image: '',
    pdf: '/certificates/Coursera%20RHVWN66FZIO1.pdf',
    credentialUrl: '',
  },
  {
    id: 'frontend-development',
    title: 'Getting Started with Front-End and Web Development',
    issuer: 'IBM / Coursera',
    date: 'May 2026',
    image: '',
    pdf: '/certificates/Coursera%20M7RCIAHFENQU.pdf',
    credentialUrl: '',
  },
  {
    id: 'software-engineering-intro',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM / Coursera',
    date: 'August 2026',
    image: '',
    pdf: '/certificates/Coursera%20SZHPXC6D4VIG.pdf',
    credentialUrl: '',
  },
  {
    id: 'chatgpt-code',
    title: 'Software Development with ChatGPT: Generating Code with AI',
    issuer: 'IBM / Coursera',
    date: 'April 2026',
    image: '',
    pdf: '/certificates/Coursera%20TTMT4Y5JDOW0.pdf',
    credentialUrl: '',
  },
  {
    id: 'ibm-web-development',
    title: 'Developing Sites for the Web',
    issuer: 'IBM SkillsBuild',
    date: 'February 2025',
    image: '',
    pdf: '/certificates/IBM_dev_for_Web.pdf',
    credentialUrl: '',
  },
  {
    id: 'javascript-edureka',
    title: 'What Is JavaScript? JavaScript Tutorial for Beginners | Edureka',
    issuer: 'IBM SkillsBuild',
    date: 'February 2025',
    image: '',
    pdf: '/certificates/Ibm_JS.pdf',
    credentialUrl: '',
  },
  {
    id: 'web-development-basics',
    title: 'Web Development Basics',
    issuer: 'IBM SkillsBuild',
    date: 'February 2025',
    image: '',
    pdf: '/certificates/IBM_Webdev.pdf',
    credentialUrl: '',
  },
  {
    id: 'html-css-js-ibm',
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'IBM / Coursera',
    date: 'April 2026',
    image: '',
    pdf: '/certificates/IBMDesign20260414-31-x4oc73.pdf',
    credentialUrl: '',
  },
  {
    id: 'uiux-ibm',
    title: 'Designing User Interfaces and Experiences (UI/UX)',
    issuer: 'IBM / Coursera',
    date: 'October 2026',
    image: '',
    pdf: '/certificates/IBMDesign20261021-21-zxnlrr.pdf',
    credentialUrl: '',
  },
  {
    id: 'career-guide-ibm',
    title: 'Software Developer Career Guide and Interview Preparation',
    issuer: 'IBM / Coursera',
    date: 'October 2026',
    image: '',
    pdf: '/certificates/IBMDesign20261026-20-sfz8h6.pdf',
    credentialUrl: '',
  },
  {
    id: 'bsc-environmental',
    title: 'BSc Environmental Management & Toxicology',
    issuer: 'Federal University of Agriculture, Abeokuta (FUNAAB), Nigeria',
    date: 'January 2014',
    image: '',
    pdf: '/certificates/Kehinde_BScCert.pdf',
    credentialUrl: '',
  },
  {
    id: 'software-engineering-essentials',
    title: 'Software Engineering Essentials',
    issuer: 'IBM / Coursera',
    date: 'April 2026',
    image: '/certificates/software-engineering-essentials.png',
    pdf: '',
    credentialUrl: '',
  },
  {
    id: 'uiux-coursera',
    title: 'Designing User Interfaces and Experiences (UI/UX)',
    issuer: 'IBM / Coursera',
    date: 'October 2026',
    image: '',
    pdf: '/certificates/UIUX_Coursera%20BRJDM5X3P358.pdf',
    credentialUrl: '',
  },
  {
    id: 'msc-gis',
    title: 'MSc Geographical Information System (GIS)',
    issuer: 'Sheffield Hallam University, Sheffield, United Kingdom',
    date: 'October 2023',
    image: '/certificates/MSc_Cert.jpg',
    pdf: '',
    credentialUrl: '',
  },
  {
    id: 'html-css-js-badge',
    title: 'Introduction to HTML, CSS, and JavaScript',
    issuer: 'IBM',
    date: 'Skill badge',
    image: '/certificates/introduction-to-html-css-javascript.png',
    pdf: '',
    credentialUrl: '',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="CONTINUED LEARNING"
            title="Certificates & professional development."
            description="A selection of verified credentials highlighting my continuous learning and professional development."
          />
        </Reveal>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <Reveal key={certificate.id}>
              <article className="certificate-card">
                <div className="certificate-content">
                  <h3>{certificate.title}</h3>

                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  <p className="certificate-date">
                    {certificate.date}
                  </p>

                  <div className="credential-actions">
                    {certificate.pdf && (
                      <a
                        className="certificate-link"
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View PDF certificate: ${certificate.title}`}
                      >
                        <span aria-hidden="true">📄 </span>
                        View PDF certificate
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    )}

                    {certificate.image && (
                      <a
                        className="certificate-link"
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View image certificate: ${certificate.title}`}
                      >
                        <span aria-hidden="true">🖼 </span>
                        View image certificate
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    )}

                    {certificate.credentialUrl && (
                      <a
                        className="certificate-link"
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify credential
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
