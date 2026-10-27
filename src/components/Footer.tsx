
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a
          className="brand"
          href="#home"
          aria-label="HK — back to homepage"
        >
          HK<span aria-hidden="true">.</span>
        </a>

        <p>Designed and built with care.</p>

        <a className="footer-top-link" href="#home">
          Back to top
          <span aria-hidden="true"> ↑</span>
        </a>

        <span className="footer-copyright">
          © {currentYear} Habeeb Kehinde
        </span>
      </div>
    </footer>
  )
}
