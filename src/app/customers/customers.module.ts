import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { InputLowercaseDirective } from '../common/input-lowercase.directive';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule    
  ],
  exports:[    
  ],
  providers:[
    AuthService
  ],
  declarations: [
    ListComponent, 
    LoginComponent,
    InputLowercaseDirective    
  ]
})
export class CustomersModule { }
