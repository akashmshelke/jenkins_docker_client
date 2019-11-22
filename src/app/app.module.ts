import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
