import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage$ = new BehaviorSubject<Language>('pt');
  
  private translations: Record<Language, any> = {
    pt: {
      nav: {
        about: 'Sobre mim',
        experience: 'Experiências',
        education: 'Formação',
        projects: 'Projetos',
        skills: 'Habilidades',
        extracurricular: 'Extracurriculares',
        contact: 'Contato'
      },
      profile: {
        title: 'Desenvolvedor Full Stack',
        bio: 'Um desenvolvedor apaixonado por tecnologia e desde cedo motivado em criar e desenvolver soluções. Buscando sempre aprimorar meu conhecimento na área Full Stack por meio de cursos e projetos pessoais. Procurando me aprofundar nesse universo visando sempre entregar a melhor experiência para o usuário.',
        location: 'Rio de Janeiro/RJ',
        maritalStatus: 'Solteiro',
        age: '27 anos',
        contact: 'Contato',
        downloadCV: 'Baixar Currículo'
      },
      sections: {
        about: 'Sobre Mim',
        experience: 'Experiências Profissionais',
        education: 'Formação',
        projects: 'Projetos Trabalhados',
        skills: 'Habilidades Estudadas',
        extracurricular: 'Atividades Extracurriculares',
        contact: 'Entre em Contato'
      }
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills',
        extracurricular: 'Extracurricular',
        contact: 'Contact'
      },
      profile: {
        title: 'Full Stack Developer',
        bio: 'A developer passionate about technology and motivated from an early age to create and develop solutions. Always seeking to improve my knowledge in the Full Stack area through courses and personal projects. Looking to deepen my knowledge in this universe, always aiming to deliver the best experience for the user.',
        location: 'Rio de Janeiro/RJ - Brazil',
        maritalStatus: 'Single',
        age: '27 years old',
        contact: 'Contact',
        downloadCV: 'Download Resume'
      },
      sections: {
        about: 'About Me',
        experience: 'Professional Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills',
        extracurricular: 'Extracurricular Activities',
        contact: 'Get in Touch'
      }
    }
  };

  constructor() {}

  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguage$.asObservable();
  }

  getCurrentLanguageValue(): Language {
    return this.currentLanguage$.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage$.next(lang);
  }

  translate(key: string): string {
    const lang = this.currentLanguage$.value;
    const keys = key.split('.');
    let value = this.translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  getTranslations(): any {
    return this.translations[this.currentLanguage$.value];
  }
}
