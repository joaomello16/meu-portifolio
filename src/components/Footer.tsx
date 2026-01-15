import '../styles/Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:seu.email@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
