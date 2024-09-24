import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  currentLang?: string = 'ar';
  langDirection?: string = 'rtl';
  language:any


  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('ar');
    this.currentLang = 'ar'; // or any default language you prefer
  }

  ngOnInit() {
    // Subscribe to language change events
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      console.log(`Language changed to: ${this.currentLang}`);
      // Additional logic can go here
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}


