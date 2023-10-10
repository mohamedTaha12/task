import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    TranslateModule,
    SharedModule,
    BreadcrumbModule
  ]
})
export class MainModule { }
