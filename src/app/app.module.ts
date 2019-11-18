import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
