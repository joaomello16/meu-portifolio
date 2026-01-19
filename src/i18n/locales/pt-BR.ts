import type { Language } from '../types'

export const ptBR: Language = {
  hero: {
    subtitle: 'Desenvolvedor de software com experiência prática no desenvolvimento de aplicações web, com foco em backend.',
    learnMore: {
      light: 'Saiba Mais',
      dark: '/experience'
    },
    myProjects: {
      light: 'Meus Projetos',
      dark: '/my-projects'
    }
  },
  header: {
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    languageToggle: 'EN',
    themeToggleTitle: (theme: 'light' | 'dark') => `Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`
  },
  about: {
    title: {
      light: 'Sobre mim',
      dark: 'Sobre mim'
    },
    description1: 'Estudante de {degree} pela Descomplica Faculdade e desenvolvedor de software com {experience} no desenvolvimento de aplicações web.',
    description2: 'Atuei no desenvolvimento de soluções {frontend}, na criação e manutenção de aplicações web, integração e consumo de {apis}, consultas e otimização de {database} relacionais, além do apoio à integração de soluções com inteligência artificial.',
    skillsTitle: 'Habilidades',
    placeholders: {
      degree: 'Engenharia de Software',
      experience: 'experiência prática',
      frontend: 'front e back-end',
      backend: 'back-end',
      apis: 'APIs',
      database: 'bancos de dados'
    },
    skills: [
      'React / TypeScript',
      'Tailwind / Bootstrap',
      'Integração e consumo de APIs',
      'Consultas em bancos de dados relacionais',
      'Git / GitHub'
    ]
  },
  experience: {
    title: 'Experiência',
    jobs: [
      {
        company: 'Mosaic AI Agency',
        position: 'Desenvolvedor de Software',
        period: 'Jul 2025 – Jan 2026',
        location: '',
        description: 'Atuação no desenvolvimento de soluções web, criação e manutenção de aplicações front e back-end, integração e consumo de APIs, elaboração e otimização de consultas em bancos de dados relacionais e apoio à integração de soluções com IA. Trabalho em times multidisciplinares, seguindo boas práticas de desenvolvimento.'
      },
      {
        company: 'Arcos Dorados',
        position: 'Assistente',
        period: 'Mar 2022 – Dez 2022',
        location: 'Curitiba, PR · Presencial',
        description: 'Atuação em ambiente operacional e administrativo, desenvolvendo habilidades de organização, trabalho em equipe, comunicação e resolução de problemas.'
      },
      {
        company: 'ECHOA Engenharia',
        position: 'Assistente de Campo',
        period: 'Jan 2020 – Dez 2020',
        location: 'Florianópolis, SC · Presencial',
        description: 'Atuação como auxiliar de campo em inspeções técnicas realizadas no projeto Trato Pelo Rio Capivari, auxiliando na coleta de dados e suporte às atividades em campo.'
      }
    ]
  },
  projects: {
    title: 'Projetos',
    items: [
      {
        title: 'Batman Ticket Sales',
        description: 'Site de venda de ingressos para o filme do Batman com recursos contato, fotos, e avaliações',
        technologies: ['JS', 'CSS', 'HTML'],
        githubLink: 'https://github.com/joaomello16/batman-film',
        siteLink: 'https://batman-ticket.vercel.app/'
      },
      {
        title: 'Lista de Tarefas',
        description: 'Site de gerenciamento de tarefas com recursos de adicionar, editar e excluir tarefas.',
        technologies: ['JS', 'HTML', 'LocalStorage'],
        githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
        siteLink: 'https://listade-tarefas-eliti.netlify.app/'
      },
      {
        title: 'Landing Page Psicóloga',
        description: 'Site de apresentação para uma psicóloga com informações sobre serviços, especialização e contato.',
        technologies: ['React', 'TypeScript', 'lovable'],
        githubLink: 'https://github.com/joaomello16/lista-de-tarefas',
        siteLink: 'https://brunabenetti-psicologa-floripa.lovable.app/'
      }
    ]
  }
}
