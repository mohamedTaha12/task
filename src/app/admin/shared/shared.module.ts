import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ConfirmPopupModule
  ], exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
