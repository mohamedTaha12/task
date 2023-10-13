import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayOutUserComponent } from './lay-out-user/lay-out-user.component';
import { MainUserComponent } from './main-user/main-user.component';

const routes: Routes = [

  {
    path: '',
    component: LayOutUserComponent,
    children: [
      {
        path: 'home',
        component: MainUserComponent
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
