import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  lang: any = ''
  isActive: number = 1
  isNavShow: boolean = false
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private translateService: TranslateService
  ) {
    this.lang = this.translateService.currentLang
  }
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

  logout(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to logout?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        localStorage.removeItem('token')
        this.router.navigate(['admin/login'])
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logout successfuly' });
      }
    });
  }
  changeLang() {
    if (this.lang == 'en') {
      localStorage.setItem('lang', 'ar')
    }
    else {
      localStorage.setItem('lang', 'en')
    }
    window.location.reload()
  }
}
