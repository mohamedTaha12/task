import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthModule } from './admin/auth/auth.module';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { CoreModule } from './admin/core/core.module';
import { AboutAppComponent } from './about-app/about-app.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule,
    AuthModule,
    ButtonModule,
    NgxSpinnerModule,
    CoreModule,
    CardModule
  ],
  providers: [ToastModule, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
