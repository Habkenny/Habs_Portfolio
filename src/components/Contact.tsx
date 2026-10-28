
import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !subject || !message) {
      setStatus('Please complete all fields before continuing.')
      return
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n')

    const mailto = [
      `mailto:Habkenny2@gmail.com`,
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(body)}`,
    ].join('')

    setStatus(
      'Your email application should open with your message ready to review and send.',
    )

    window.location.href = mailto
  }

  return (
    <section
      id="contact"
      className="section-pad contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-layout">
        <div className="contact-intro">
          <Reveal>
            <SectionHeading
              headingId="contact-title"
              eyebrow="GET IN TOUCH"
              title="Have a role or project in mind?"
              description="I’m open to software engineering opportunities, collaborations and interesting web projects. Send me a message and let’s connect."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="contact-links">
              <a
                className="contact-row"
                href="mailto:Habkenny2@gmail.com"
              >
                <span>
                  <small>EMAIL</small>
                  <strong>Habkenny2@gmail.com</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="contact-row"
                href="https://github.com/Habkenny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <small>GITHUB</small>
                  <strong>github.com/Habkenny</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="contact-row"
                href="https://linkedin.com/in/habeeb-kehinde-b53740103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <small>LINKEDIN</small>
                  <strong>Habeeb Kehinde</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Alex Smith"
                maxLength={100}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Job opportunity, project..."
                maxLength={150}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me how we can work together..."
                maxLength={5000}
                required
              />
            </div>

            

            {status && (
              <p className="form-status" role="status" aria-live="polite">
                {status}
              </p>
            )}

            <button className="contact-submit" type="submit">
              Send message
              <span aria-hidden="true"> ↗</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
