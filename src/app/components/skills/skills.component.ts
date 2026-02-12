import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Skill } from '../../models/profile.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadSkills();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadSkills();
    });
  }

  loadSkills() {
    this.dataService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }
}
