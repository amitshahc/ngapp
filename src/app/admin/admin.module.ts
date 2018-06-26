import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CListComponent } from './c-list/c-list.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CDetailsComponent } from './c-details/c-details.component';
import { MessageService } from '../services/message.service';
import { CustomersService } from '../services/customers.service';
import { UserService } from '../abstract/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  declarations: [CListComponent, CDetailsComponent],
  providers:[
    MessageService,
    CustomersService,
    UserService
  ]
})
export class AdminModule { }
