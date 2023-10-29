import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { HelppingComponent } from './helpping/helpping.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [
    HelppingComponent,
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
