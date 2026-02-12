import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Education } from '../../models/profile.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  courses: any[] = [];

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadData();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.dataService.getEducation().subscribe(education => {
      this.education = education;
    });
    this.dataService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
