import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CustomersService } from '../services/customers.service';
import { httpInterceptorProviders } from '../interceptors/barrel';
import { CustomersRoutingModule } from './customers-routing.module';
import { LoginComponent } from './login/login.component';
import { InputLowercaseDirective } from '../common/input-lowercase.directive';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { SignupComponent } from './signup/signup.component';
import { TitleCaseDirective } from '../common/title-case.directive';
import { TrimDirective } from '../common/trim.directive';
import { ProfileComponent } from './profile/profile.component';

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
    AuthService,
    CustomersService,
    httpInterceptorProviders
  ],
  declarations: [    
    LoginComponent,
    SignupComponent,
    InputLowercaseDirective,
    TitleCaseDirective,
    TrimDirective,
    ProfileComponent
  ]
})
export class CustomersModule { }
