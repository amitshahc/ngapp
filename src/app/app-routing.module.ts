import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: '../app/customers/customers.module#CustomersModule'
  },
  {
    path: 'admin',
    loadChildren: '../app/admin/admin.module#AdminModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',    
    redirectTo: 'home',    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
