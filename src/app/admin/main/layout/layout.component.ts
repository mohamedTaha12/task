import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isActive: number = 1
  isNavShow: boolean = false
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  navigateTo(id: number, route: string) {
    console.log(id)
    this.isActive = id
    this.isNavShow = false
    this.router.navigate([route])
  }
  openMenue() {
    this.isNavShow = !this.isNavShow
  }
  logout() {

  }
}
