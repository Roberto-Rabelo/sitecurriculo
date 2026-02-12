import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TranslationService } from '../../services/translation.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  profile: Profile | null = null;

  constructor(
    private dataService: DataService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadProfile();
    this.translationService.getCurrentLanguage().subscribe(() => {
      this.loadProfile();
    });
  }

  loadProfile() {
    this.dataService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }
}
