import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { InputLowercaseDirective } from './common/input-lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,    
    //InputLowercaseDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule           
  ],
  exports:[
    //InputLowercaseDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
