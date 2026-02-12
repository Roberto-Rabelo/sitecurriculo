import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../services/translation.service';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentLanguage: Language = 'pt';
  currentTheme: Theme = 'dark';
  isMenuOpen = false;
  isScrolled = false;
  isThemeMenuOpen = false;

  constructor(
    public translationService: TranslationService,
    public themeService: ThemeService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-selector')) {
      this.isThemeMenuOpen = false;
    }
  }

  ngOnInit() {
    this.translationService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.translationService.setLanguage(newLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
  }

  scrollToSection(sectionId: string) {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.closeMenu();
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      this.closeMenu();
    }
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
    this.isThemeMenuOpen = false;
  }

  toggleThemeMenu() {
    this.isThemeMenuOpen = !this.isThemeMenuOpen;
  }

  getThemeIcon(theme: Theme): string {
    switch(theme) {
      case 'dark': return '🌙';
      case 'light': return '☀️';
      case 'purple': return '💜';
      default: return '🌙';
    }
  }
  asTheme(val: any): Theme {
  return val as Theme;
}

  getThemeName(theme: Theme): string {
    switch(theme) {
      case 'dark': return this.currentLanguage === 'pt' ? 'Escuro' : 'Dark';
      case 'light': return this.currentLanguage === 'pt' ? 'Claro' : 'Light';
      case 'purple': return this.currentLanguage === 'pt' ? 'Roxo' : 'Purple';
      default: return 'Dark';
    }
  }
}
