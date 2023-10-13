import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MainModule } from './admin/main/main.module';
import { SharedModule } from './admin/shared/shared.module';
import { MainUserModule } from './user/main-user/main-user.module';
import { SharedUserModule } from './user/shared-user/shared-user.module';
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
    CardModule,
    MainModule,
    SharedModule,
    SharedUserModule,
    MainUserModule,
    ConfirmDialogModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], exports: [
    SharedModule
  ],
  providers: [ToastModule, MessageService, ConfirmationService],
  bootstrap: [AppComponent]

})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
