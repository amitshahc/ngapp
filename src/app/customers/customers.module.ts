import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { InputLowercaseDirective } from '../common/input-lowercase.directive';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { SignupComponent } from './signup/signup.component';
import { TitleCaseDirective } from '../common/title-case.directive';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpModule,
    AngularFontAwesomeModule,
    HttpClientModule    
  ],
  exports:[    
  ],
  providers:[
    AuthService
  ],
  declarations: [
    ListComponent, 
    LoginComponent,
    SignupComponent,
    InputLowercaseDirective,
    TitleCaseDirective
  ]
})
export class CustomersModule { }
