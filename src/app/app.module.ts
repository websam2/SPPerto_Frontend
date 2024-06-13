import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SecretariasComponent } from './secretarias/secretarias.component';
import { SppertoComponent } from './spperto/spperto.component';


@NgModule({
  declarations: [
    AppComponent,
    SecretariasComponent,
    SppertoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
