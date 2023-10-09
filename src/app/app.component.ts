import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks';
  lang: any
  constructor(
    private translate: TranslateService
  ) {
    if ("lang" in localStorage) {
      this.lang = localStorage.getItem('lang')
      translate.use(this.lang);
    } else {
      translate.use(this.translate.defaultLang)
    }
  }
}
