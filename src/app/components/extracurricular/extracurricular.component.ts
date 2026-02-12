import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Extracurricular } from '../../models/profile.model';

@Component({
  selector: 'app-extracurricular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extracurricular.component.html',
  styleUrl: './extracurricular.component.scss'
})
export class ExtracurricularComponent implements OnInit {
  activities: Extracurricular[] = [];

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadActivities();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadActivities();
    });
  }

  loadActivities() {
    this.dataService.getExtracurricular().subscribe(activities => {
      this.activities = activities;
    });
  }
}
