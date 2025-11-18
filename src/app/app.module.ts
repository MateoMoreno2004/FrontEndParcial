import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClinicaListComponent } from './components/clinica-list/clinica-list.component';
import { ClinicaFormComponent } from './components/clinica-form/clinica-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicaListComponent,
    ClinicaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

