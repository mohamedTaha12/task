import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthModule } from '../auth/auth.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
