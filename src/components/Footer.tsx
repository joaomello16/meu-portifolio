import '../styles/Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} João Mello. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/joaomello16" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-vieira-de-mello-24a8b4268/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:joaomello16@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
