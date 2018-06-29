import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { httpInterceptorProviders } from './interceptors/barrel';
import { HomeComponent } from './public/home/home.component';
//import { TrimDirective } from './common/trim.directive';
//import { TitleCaseDirective } from './common/title-case.directive';
//import { InputLowercaseDirective } from './common/input-lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //TrimDirective,
    //TitleCaseDirective,
    //InputLowercaseDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,    
  ],
  exports:[
    //InputLowercaseDirective    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
