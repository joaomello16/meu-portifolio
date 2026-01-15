import '../styles/Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = 'https://wa.me/5548998550733?text=Olá!%20Gostaria%20de%20conversar%20com%20você.'

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p>&copy; {currentYear} João Mello. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/joaomello16" target="_blank" rel="noopener noreferrer" title="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-vieira-de-mello-24a8b4268/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:joaomello16@gmail.com" title="Email">
            Email
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
