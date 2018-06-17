import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { InputLowercaseDirective } from './common/input-lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,    
    //InputLowercaseDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  exports:[
    //InputLowercaseDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
