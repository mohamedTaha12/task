import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss']
})
export class AboutAppComponent {
  constructor(
    private router: Router
  ) {

  }
  openProject() {
    this.router.navigate(['/admin'])
  }
}
