import '../styles/Experience.css'

interface Job {
  company: string
  position: string
  period: string
  description: string
    location?: string
}

export function Experience() {
  const jobs: Job[] = [
    {
      company: 'Mosaic AI Agency',
      position: 'Desenvolvedor de Software',
      period: 'Jul 2025 – Jan 2026',
      location: 'Florianópolis, SC · Híbrido',
      description:
        'Atuação no desenvolvimento de soluções web, participando de todo o ciclo de implementação de sistemas. Criação e manutenção de aplicações front-end e back-end, integração e consumo de APIs, elaboração e otimização de consultas em bancos de dados relacionais e apoio à integração de soluções com inteligência artificial. Trabalho em conjunto com times multidisciplinares, seguindo boas práticas de desenvolvimento e versionamento de código.',
    },
    {
      company: 'Arcos Dorados',
      position: 'Assistente',
      period: 'Mar 2022 – Dez 2022',
      location: 'Curitiba, PR · Presencial',
      description:
        'Atuação em ambiente operacional e administrativo, desenvolvendo habilidades de organização, trabalho em equipe, comunicação e resolução de problemas.',
    },
    {
      company: 'ECHOA Engenharia',
      position: 'Assistente de Campo',
      period: 'Jan 2020 – Dez 2020',
      location: 'Florianópolis, SC · Presencial',
      description:
        'Atuação como auxiliar de campo em inspeções técnicas realizadas no projeto Trato Pelo Rio Capivari, auxiliando na coleta de dados e suporte às atividades em campo.',
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experiência</h2>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{job.position}</h3>
                <p className="company">{job.company}</p>
                <p className="period">{job.period}</p>
                {job.location && <p className="location">{job.location}</p>}
                <p className="description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
