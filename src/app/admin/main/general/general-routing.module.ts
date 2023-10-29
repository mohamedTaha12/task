import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelppingComponent } from './helpping/helpping.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  {
    path: 'help',
    component: HelppingComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
