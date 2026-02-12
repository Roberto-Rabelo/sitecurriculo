import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Experience } from '../../models/profile.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadExperiences();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadExperiences();
    });
  }

  loadExperiences() {
    this.dataService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    });
  }
}
