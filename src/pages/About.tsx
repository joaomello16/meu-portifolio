import '../styles/About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Estudante de Engenharia de Software pela Descomplica Faculdade
              e desenvolvedor de software com experiência prática no desenvolvimento de
              aplicações web.
            </p>
            <p>
              Atuei no desenvolvimento de soluções front e back-end,
               na criação
              e manutenção de aplicações web, integração e consumo de APIs, consultas e
              otimização de bancos de dados relacionais, além do apoio à integração de
              soluções com inteligência artificial.
            </p>
          </div>
          <div className="skills">
            <h3>Habilidades</h3>
            <ul className="skills-list">
              <li>React / TypeScript</li>
              <li>Tailwind / Bootstrap</li>
              <li>Integração e consumo de APIs</li>
              <li>Consultas em bancos de dados relacionais</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
