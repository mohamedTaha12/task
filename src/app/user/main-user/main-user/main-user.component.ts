import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {
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
    this.router.navigate(['/user/main/tasks/list'])
  }
}
