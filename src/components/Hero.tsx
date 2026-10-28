
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero section-pad"
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="availability">
            <span className="status-dot" aria-hidden="true" />
            <span>
              Open to software engineering internships and job roles
            </span>
          </p>

          <p className="eyebrow">HELLO, I’M HABEEB KEHINDE</p>

          <h1 id="hero-title">
            I build full-stack products, from interface to API
            <span aria-hidden="true">.</span>
          </h1>

          <p className="hero-lede">
            I develop responsive, accessible web applications using
            React, TypeScript and Node.js. I enjoy turning practical
            problems into maintainable software, building reliable API
            integrations and exploring desktop applications and AI-powered
            features.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my projects
              <span aria-hidden="true">↘</span>
            </a>

            <a
              className="button button-secondary"
              href="https://habcvhtml.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CV (opens in a new tab)"
            >
              View CV
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/Habkenny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Habeeb Kehinde's GitHub profile (opens in a new tab)"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="meta-icon" aria-hidden="true">
                ⌖
              </span>
              Sheffield, United Kingdom
            </span>

            <span>
              <span className="meta-icon" aria-hidden="true">
                &lt;/&gt;
              </span>
              React · TypeScript · Node.js
            </span>
          </div>
        </Reveal>

        <Reveal className="hero-panel" delay={140}>
          <div className="panel-topline">
            <span>BUILD / LEARN / IMPROVE</span>
            <span className="panel-mark">HK.</span>
          </div>

          <div className="panel-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core">&lt;/&gt;</div>

            <span className="orbit-chip chip-react">React</span>
            <span className="orbit-chip chip-ts">TypeScript</span>
            <span className="orbit-chip chip-node">Node.js</span>
          </div>

          <div className="panel-bottom">
            <span>Curiosity-led engineering</span>
            <span>FULL STACK</span>
          </div>
        </Reveal>
      </div>

      <div className="container hero-scroll" aria-hidden="true">
        <span />
        Scroll to explore
      </div>
    </section>
  )
}
