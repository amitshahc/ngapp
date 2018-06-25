import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CListComponent } from './c-list/c-list.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
