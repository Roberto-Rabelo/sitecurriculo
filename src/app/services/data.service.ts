import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile, Experience, Education, Course, Project, Skill, Extracurricular } from '../models/profile.model';
import { TranslationService, Language } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private profileData: Record<Language, Profile> = {
    pt: {
      name: 'Roberto Rabelo Gonzaga Junior',
      title: 'Arquiteto de software e Desenvolvedor Full Stack ',
      location: 'Recreio dos Bandeirantes/RJ',
      maritalStatus: 'Solteiro',
      age: 27,
      email: 'roberto.junior.gonzaga@gmail.com',
      phone: '(21) 97995-6274',
      github: 'https://github.com/Roberto-Rabelo',
      portfolio: 'https://roberto-rabelo.github.io/sitecurriculo/',
      bio: 'Imerso na tecnologia desde 2014, transformo desafios em software que funciona e gera impacto real. Com background sólido em desenvolvimento Full Stack e Arquitetura de Software, foco em automação de processos e sistemas escaláveis, sempre priorizando performance e a melhor experiência para o usuário final'
    },
    en: {
      name: 'Roberto Rabelo Gonzaga Junior',
      title: 'Software Architect and Full Stack Developer',
      location: 'Recreio dos Bandeirantes/RJ - Brazil',
      maritalStatus: 'Single',
      age: 27,
      email: 'roberto.junior.gonzaga@gmail.com',
      phone: '+55 (21) 97995-6274',
      github: 'https://github.com/Roberto-Rabelo',
      portfolio: 'https://roberto-rabelo.github.io/sitecurriculo/',
      bio: 'Immersed in technology since 2014, I transform challenges into software that works and generates real impact. With a solid background in Full Stack Development and Software Architecture, I focus on process automation and scalable systems, always prioritizing performance and the best experience for the end user.'
    }
  };

  private experiences: Record<Language, Experience[]> = {
    pt: [
      {
        company: 'INFIS CONSULTORIA LTDA',
        position: 'Analista de Sistema Pleno - C#',
        period: '04/2021 – Atualmente',
        technologies: ['C#', 'Angular', 'SQL Server', 'RESTful API', 'ASP.NET ', 'MVC', 'DDD', 'TDD', 'CQRS', 'RabbitMQ', 'JWT', 'MongoDB', 'HTML', 'CSS', 'JS', 'GITHUB', 'Entity Framework'],
        description: [
          'Desenvolvimento de Aplicações com C# e Angular',
          'Administrando consulta em SQL Server',
          'RESTful API',
          'ASP.NET e C#',
          'MVC, DDD, TDD, CQRS',
          'RabbitMQ, JWT, MongoDB',
          'HTML, CSS, JS, GITHUB',
          'Gerenciamento de Projeto e task',
          'Entity Framework'
        ]
      },
      {
        company: 'ACQUAX DO BRASIL',
        position: 'Desenvolvedor JR ASP NET C#',
        period: '06/2020 – 04/2021',
        technologies: ['ASP.NET ', 'C#', 'MVC', 'Entity Framework', 'RESTful API', 'SQL SERVER', 'HTML', 'CSS', 'JS', 'Microsoft Azure'],
        description: [
          'ASP.NET e C#',
          'MVC',
          'Entity framework (EF)',
          'RESTful API',
          'Administração e consultas banco de SQL SERVER',
          'Alteração de layout e funcionalidade HTML, CSS e JS',
          'Microsoft Azure'
        ]
      },
      {
        company: 'AGENCIA 4TUNA',
        position: 'Desenvolvedor WEB (Estagiário)',
        period: '02/2020 – 04/2021',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCRUM'],
        description: [
          'Atuando com desenvolvimentos e implementação de melhorias em sistemas WEB',
          'Alteração em layout e funcionalidade do sistema WEB com HTML, CSS e JS',
          'Metodologia SCRUM',
          'Criação e reparação de ambiente para desenvolvimento e produção',
          'Administração de serviços contratados pelo cliente'
        ]
      },
      {
        company: 'Casa Da Moeda Do Brasil – CMB',
        position: 'Estagiário',
        period: '01/02/2016 – 16/12/2016',
        technologies: [],
        description: []
      }
    ],
    en: [
      {
        company: 'INFIS CONSULTORIA LTDA',
        position: 'Mid-Level System Analyst III - C#',
        period: '04/2021 – Present',
        technologies: ['C#', 'Angular', 'SQL Server', 'RESTful API', 'ASP.NET ', 'MVC', 'DDD', 'TDD', 'CQRS', 'RabbitMQ', 'JWT', 'MongoDB', 'HTML', 'CSS', 'JS', 'GITHUB', 'Entity Framework'],
        description: [
          'Application development using C# and Angular',
          'SQL Server query management',
          'RESTful API',
          'ASP.NET and C#',
          'MVC, DDD, TDD, CQRS',
          'RabbitMQ, JWT, MongoDB',
          'HTML, CSS, JS, GITHUB',
          'Project and task management',
          'Entity Framework'
        ]
      },
      {
        company: 'ACQUAX DO BRASIL',
        position: 'Junior Developer ASP.NET  C#',
        period: '06/2020 – 04/2021',
        technologies: ['ASP.NET ', 'C#', 'MVC', 'Entity Framework', 'RESTful API', 'SQL SERVER', 'HTML', 'CSS', 'JS', 'Microsoft Azure'],
        description: [
          'ASP.NET  and C#',
          'MVC',
          'Entity Framework (EF)',
          'RESTful API',
          'SQL SERVER database administration and queries',
          'HTML, CSS, and JS layout and functionality adjustments',
          'Microsoft Azure'
        ]
      },
      {
        company: 'AGENCIA 4TUNA',
        position: 'Web Developer (Intern)',
        period: '02/2020 – 04/2021',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCRUM'],
        description: [
          'Development and implementation of improvements in WEB systems',
          'WEB system layout and functionality adjustments with HTML, CSS, and JS',
          'SCRUM methodology',
          'Creation and maintenance of development and production environments',
          'Administration of services contracted by clients'
        ]
      },
      {
        company: 'Casa Da Moeda Do Brasil – CMB',
        position: 'Intern',
        period: '02/01/2016 – 12/16/2016',
        technologies: [],
        description: []
      }
    ]
  };

  private education: Record<Language, Education[]> = {
    pt: [
      {
        institution: 'FIAP',
        course: 'Pós Graduação em Arquitetura de Sistemas .Net',
        period: '2025.2',
        status: 'Cursando'
      },
      {
        institution: 'Universidade Federal Fluminense - UFF',
        course: 'Tecnologia em Sistema de Computação',
        period: '2021.1',
        status: 'Formado'
      },
      {
        institution: 'Escola Técnica do Rio de Janeiro - ETERJ',
        course: 'Médio\\Técnico em Informática',
        period: '2016.2',
        status: 'Formado'
      }
    ],
    en: [
      {
        institution: 'FIAP',
        course: '.NET Systems Architecture Postgraduate',
        period: '2025.2',
        status: 'Ongoing'
      },
      {
        institution: 'Fluminense Federal University - UFF',
        course: 'Technology in Computing Systems',
        period: '2021.1',
        status: 'Graduated'
      },
      {
        institution: 'Technical School of Rio de Janeiro - ETERJ',
        course: 'High School/Technical in IT',
        period: '2016.2',
        status: 'Graduated'
      }
    ]
  };

  private courses: Record<Language, Course[]> = {
    pt: [
      {
        institution: 'COTI',
        title: 'Formação Arquiteto de Software com C# avançado',
        period: '07.2023',
        hours: '48 horas',
        topics: ['DDD', 'TDD (XUnit e NUnit)', 'BDD (SpecFlow e Selenium WebDriver)', 'Arquitetura Hexagonal', 'SOLID', 'CQRS (MediatR e MongoDB)', 'ASP.NET 8 API', 'JWT', 'AutoMapper', 'EntityFramework', 'Dapper', 'MongoDB', 'RabbitMQ', 'Docker', 'Azure']
      },
      {
        institution: 'COTI',
        title: 'WebDeveloper em Angular (Formação Completa)',
        period: '05.2022',
        hours: '32 horas',
        topics: ['TypeScript OOP', 'Angular com Bootstrap', 'Material Design', 'SPA', 'RouterModule', 'ReactiveFormsModule', 'HttpClient', 'JWT', 'Dashboard', 'Deploy']
      },
      {
        institution: 'SENAC',
        title: 'Programador WEB',
        period: '2020',
        hours: '',
        topics: ['Desenvolvimento WEB', 'HTML', 'CSS', 'JavaScript', 'Melhores práticas']
      }
    ],
    en: [
      {
        institution: 'COTI',
        title: 'Advanced C# Software Architecture Training',
        period: '07.2023',
        hours: '48 hours',
        topics: ['DDD', 'TDD (XUnit, NUnit)', 'BDD (SpecFlow, Selenium WebDriver)', 'Hexagonal Architecture', 'SOLID principles', 'CQRS (MediatR, MongoDB)', 'ASP.NET 8 API', 'JWT', 'AutoMapper', 'EF', 'Dapper', 'MongoDB', 'RabbitMQ', 'Docker', 'Azure']
      },
      {
        institution: 'COTI',
        title: 'Complete Angular Web Developer Training',
        period: '05.2022',
        hours: '32 hours',
        topics: ['TypeScript OOP', 'Angular with Bootstrap', 'Material Design', 'SPA', 'routing', 'reactive forms', 'API consumption', 'JWT', 'dashboard creation', 'deployment']
      },
      {
        institution: 'SENAC',
        title: 'Web Programmer',
        period: '2020',
        hours: '',
        topics: ['Web development', 'HTML', 'CSS', 'JavaScript', 'Best practices']
      }
    ]
  };

  private projects: Record<Language, Project[]> = {
    pt: [
      {
        title: 'MyReinf',
        description: 'Programa facilitador para geração e transmissão dos eventos do Reinf, para as obrigações acessórias da contabilidade. A partir do preenchimento das respectivas planilhas modelo para cada evento, o MyReinf gera os eventos (arquivos .xml) e faz a transmissão para RFB. E ainda gera relatórios resumidos dos eventos enviados, facilitando suas análises.',
        technologies: ['ASP.NET ', 'C#', 'SQL Server', 'XML', 'API RFB'],
        image: 'assets/projects/myreinf.png',
        link: 'https://mysped.com.br/myreinf/'
      },
      {
        title: 'eSocial',
        description: 'Sistema de transmissão unificada de informações trabalhistas, previdenciárias e fiscais para órgãos públicos. Gerencia eventos como admissões, demissões, folha de pagamento e condições de trabalho em conformidade com obrigações legais.',
        technologies: ['C#', 'ASP.NET ', 'SQL Server', 'XML', 'RESTful API'],
        image: 'assets/projects/esocial.jpg',
        link: 'http://esocialinfis.mysped.net/'
      },
      {
        title: 'AcquaXcontrol',
        description: 'Sistema desenvolvido com intuito de levar praticidade aos clientes, visando a facilitação do acompanhamento e controle do consumo individual por parte do condômino.',
        technologies: ['ASP NET CORE', 'C#', 'RESTful API', 'SQL SERVER'],
        image: 'assets/projects/acquaxcontrol.jpg',
        link: 'https://www.acquaxcontrol.com.br/login'
      },
      {
        title: 'Atletas da Vida',
        description: 'Site de divulgação do projeto Atletas da vida, ministrada pela @atlestadavida no IG que tem como objetivo capacitar 25 atletas na modalidade do futebol feminino',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/projects/atletas.jpg',
        link: 'https://roberto-rabelo.github.io/atlesta_da_vida/'
      },
      {
        title: 'Plataforma de Hobbies',
        description: 'Plataforma online que visa unir pessoal para evoluir suas habilidade e hobby de forma 100% presencial',
        technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
        image: 'assets/projects/hobbies.jpg'
      },
      {
        title: 'E-commerce MVC',
        description: 'Prototipo criado baseado no modelo MVC, sendo um E-commerce criado totalmente do zero com HTML, CSS, JS e PHP e integração com API\'s do MAPBOX e correios. Incluindo teste de software com selenium',
        technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Selenium', 'MAPBOX API'],
        image: 'assets/projects/ecommerce.jpg'
      }
    ],
    en: [
      {
        title: 'MyReinf',
        description: 'Facilitator program for generating and transmitting Reinf events for accounting accessory obligations. From filling in the respective model spreadsheets for each event, MyReinf generates the events (.xml files) and transmits them to RFB. It also generates summary reports of sent events, facilitating your analyses.',
        technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'XML', 'RFB API'],
        image: 'assets/projects/myreinf.jpg',
        link: 'https://mysped.com.br/myreinf/'
      },
      {
        title: 'eSocial',
        description: 'Unified system for transmitting labor, social security and tax information to Brazilian public agencies. Manages events such as hiring, dismissals, payroll and working conditions in compliance with legal obligations.',
        technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'XML', 'RESTful API'],
        image: 'assets/projects/esocial.jpg',
        link: 'http://esocialinfis.mysped.net/'
      },
      {
        title: 'AcquaXcontrol',
        description: 'System developed to bring convenience to clients, aiming to facilitate monitoring and control of individual consumption by condominium residents.',
        technologies: ['ASP NET CORE', 'C#', 'RESTful API', 'SQL SERVER'],
        image: 'assets/projects/acquaxcontrol.jpg',
        link: 'https://www.acquaxcontrol.com.br/login'
      },
            {
        title: 'Atletas da Vida',
        description: 'Promotional website for the Atletas da Vida project, run by @atlestadavida on IG, which aims to train 25 athletes in women\'s football',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'assets/projects/atletas.jpg',
        link: 'https://roberto-rabelo.github.io/atlesta_da_vida/'
      },
      {
        title: 'Hobbies Platform',
        description: 'Online platform that aims to bring people together to evolve their skills and hobbies in a 100% in-person format',
        technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
        image: 'assets/projects/hobbies.jpg'
      },
      {
        title: 'MVC E-commerce',
        description: 'Prototype created based on the MVC model, an E-commerce built from scratch with HTML, CSS, JS and PHP and integration with MAPBOX and postal service APIs. Including software testing with Selenium',
        technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Selenium', 'MAPBOX API'],
        image: 'assets/projects/ecommerce.jpg'
      }
     
    ]
  };

  private skills: Record<Language, Skill[]> = {
    pt: [
      {
        category: 'Linguagens de Programação',
        items: ['C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL']
      },
      {
        category: 'Frameworks & Bibliotecas',
        items: ['Angular', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'Bootstrap', 'Material Design']
      },
      {
        category: 'Banco de Dados',
        items: ['SQL Server', 'MongoDB']
      },
      {
        category: 'Ferramentas & Tecnologias',
        items: ['Git/GitHub', 'RabbitMQ', 'Docker', 'Azure', 'JWT', 'RESTful API', 'MVC', 'DDD', 'TDD', 'CQRS']
      },
      {
        category: 'Metodologias',
        items: ['SCRUM', 'Agile', 'SOLID', 'Clean Architecture']
      }
    ],
    en: [
      {
        category: 'Programming Languages',
        items: ['C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL']
      },
      {
        category: 'Frameworks & Libraries',
        items: ['Angular', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'Bootstrap', 'Material Design']
      },
      {
        category: 'Databases',
        items: ['SQL Server', 'MongoDB']
      },
      {
        category: 'Tools & Technologies',
        items: ['Git/GitHub', 'RabbitMQ', 'Docker', 'Azure', 'JWT', 'RESTful API', 'MVC', 'DDD', 'TDD', 'CQRS']
      },
      {
        category: 'Methodologies',
        items: ['SCRUM', 'Agile', 'SOLID', 'Clean Architecture']
      }
    ]
  };

  private extracurricular: Record<Language, Extracurricular[]> = {
    pt: [
      {
        title: 'TCC - Web Scraping: Extração de Tweets com Opiniões de Medicamentos para HIV',
        description: 'Trabalho de Conclusão de Curso desenvolvido na Universidade Federal Fluminense sobre extração e análise de dados do Twitter relacionados a medicamentos para HIV, utilizando técnicas de web scraping e análise de sentimento.',
        period: '2021.1',
        achievement: 'Nota: 9,5',
        link: 'https://app.uff.br/riuff/bitstream/handle/1/30990/TCC_ALLAN_CEZAR_ALMEIDA_CHAVES_e_ROBERTO_RABELO_GONZAGA_JUNIOR.pdf?sequence=1&isAllowed=y'
      },
      {
        title: 'Mentor no HackingRio 2019',
        description: 'Orientação sobre construção do projeto, auxiliando de forma imparcial no plano de negócio e construção de software esclarecendo dúvidas e refletindo sobre a construção de um bom "Pitch".',
        period: '2019'
      },
      {
        title: 'Participante do HackingRio 2018',
        description: 'Participante da competição no Cluster de energia como programador, criando a Colaboraê um APP que alertava as distribuidoras de energia sobre danos na fiação contando com o apoio da população.',
        period: '2018',
        achievement: '2º Lugar no cluster de energia'
      },
      {
        title: 'Trabalho final ETERJ 2016',
        description: 'Criação de um software para automatização em um loja de artigo religioso tendo cadastro (criação, exclusão e alteração de produto) PDV, relatórios, Logs e controle de estoque.',
        period: '2016',
        achievement: 'Nota: 9,3'
      },
      {
        title: 'Programa MiniEmpresa Junior Achievement 2015',
        description: 'Proporcionou uma experiência prática em negócios através da organização e operação de uma empresa.',
        period: '2015',
        achievement: 'Duração: 15 semanas'
      },
      {
        title: 'Palestrante na FECIP 2014',
        description: 'Palestra de 90 min onde foi explicada a criação, origem e desenvolvimento da tecnologia impressoras 3D e como veio crescendo de forma poderosa e em diversas áreas.',
        period: '2014'
      }
    ],
    en: [
      {
        title: 'TCC - Web Scraping: Extraction of Tweets with Opinions on HIV Medications',
        description: 'Final Course Project developed at Fluminense Federal University on extraction and analysis of Twitter data related to HIV medications, using web scraping techniques and sentiment analysis.',
        period: '2021.1',
        achievement: 'Grade: 9.5',
        link: 'https://app.uff.br/riuff/bitstream/handle/1/30990/TCC_ALLAN_CEZAR_ALMEIDA_CHAVES_e_ROBERTO_RABELO_GONZAGA_JUNIOR.pdf?sequence=1&isAllowed=y'
      },
      {
        title: 'Mentor at HackingRio 2019',
        description: 'Project guidance, helped with business planning and software development, and assisted with pitch creation.',
        period: '2019'
      },
      {
        title: 'Participant at HackingRio 2018',
        description: 'Participated in the energy cluster, created the "Colaboraê" app to report electrical wiring issues, enabling utility companies to resolve problems quickly based on citizen-submitted evidence.',
        period: '2018',
        achievement: '2nd Place in energy cluster'
      },
      {
        title: 'Final Project at ETERJ 2016',
        description: 'Developed software to automate operations in a religious article store, including product registration, POS, reports, logs, and stock control.',
        period: '2016',
        achievement: 'Grade: 9.3'
      },
      {
        title: 'Junior Achievement MiniEnterprise Program 2015',
        description: 'Practical business experience through company setup and management.',
        period: '2015',
        achievement: 'Duration: 15 weeks'
      },
      {
        title: 'Speaker at FECIP 2014',
        description: 'Delivered a 90-minute talk on the creation, origin, and development of 3D printer technology and its growing impact across various sectors.',
        period: '2014'
      }
    ]
  };

  constructor(private translationService: TranslationService) {}

  getProfile(): Observable<Profile> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.profileData[lang]);
  }

  getExperiences(): Observable<Experience[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.experiences[lang]);
  }

  getEducation(): Observable<Education[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.education[lang]);
  }

  getCourses(): Observable<Course[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.courses[lang]);
  }

  getProjects(): Observable<Project[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.projects[lang]);
  }

  getSkills(): Observable<Skill[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.skills[lang]);
  }

  getExtracurricular(): Observable<Extracurricular[]> {
    const lang = this.translationService.getCurrentLanguageValue();
    return of(this.extracurricular[lang]);
  }
}
