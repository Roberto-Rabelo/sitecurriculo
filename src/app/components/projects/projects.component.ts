import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Project } from '../../models/profile.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadProjects();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.dataService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
