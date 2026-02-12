import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'dark' | 'light' | 'purple';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject<Theme>('dark');
  private readonly THEME_KEY = 'portfolio-theme';

  constructor() {
    // Carrega o tema salvo ou usa dark como padrão
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme && ['dark', 'light', 'purple'].includes(savedTheme)) {
      this.setTheme(savedTheme, false);
    } else {
      this.setTheme('dark', false);
    }
  }

  getCurrentTheme(): Observable<Theme> {
    return this.currentTheme$.asObservable();
  }

  getCurrentThemeValue(): Theme {
    return this.currentTheme$.value;
  }

  setTheme(theme: Theme, save: boolean = true): void {
    this.currentTheme$.next(theme);
    this.applyTheme(theme);
    if (save) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light', 'theme-purple');
    root.classList.add(`theme-${theme}`);
  }

  toggleTheme(): void {
    const themes: Theme[] = ['dark', 'light', 'purple'];
    const currentIndex = themes.indexOf(this.currentTheme$.value);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
}
