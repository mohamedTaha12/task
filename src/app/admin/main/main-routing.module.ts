import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks-admin/tasks-admin.module').then(m => m.TasksAdminModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./manage-users/manage-users.module').then(m => m.ManageUsersModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
