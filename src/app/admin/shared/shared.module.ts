import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MainRoutingModule } from '../main/main-routing.module';
import { AdminRoutingModule } from '../admin-routing.module';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ConfirmPopupModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    // RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    AdminRoutingModule
    // RouterModule.forRoot([])

  ], exports: [
    NavBarComponent,
    SideBarComponent,

  ]
})
export class SharedModule { }
