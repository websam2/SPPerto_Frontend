import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SecretariaService } from './api.service';
import { SecretariasComponent } from './secretarias/secretarias.component';
import { SppertoComponent } from './spperto/spperto.component';
//import { ApiService } from './api.service';

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
  providers: [SecretariaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
