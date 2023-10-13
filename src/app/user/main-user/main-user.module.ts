import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-user-routing.module';
import { LayOutUserComponent } from './lay-out-user/lay-out-user.component';
import { SharedUserModule } from '../shared-user/shared-user.module';
import { MainUserComponent } from './main-user/main-user.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    LayOutUserComponent,
    MainUserComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedUserModule,
    ButtonModule,
    TranslateModule,
    // SharedModule,
    BreadcrumbModule,
    SidebarModule,
    MenubarModule
  ]
})
export class MainUserModule { }
