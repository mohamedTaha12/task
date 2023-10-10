import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items!: MenuItem[];

  home!: MenuItem;
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.items = [{ label: 'About Featured' },];
    this.home = { icon: 'pi pi-home', routerLink: '/admin/main' };
  }
  toTasks() {
    this.router.navigate(['/admin/main/tasks/list'])
  }
}
