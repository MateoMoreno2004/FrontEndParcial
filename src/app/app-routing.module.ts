import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaListComponent } from './components/clinica-list/clinica-list.component';
import { ClinicaFormComponent } from './components/clinica-form/clinica-form.component';

const routes: Routes = [
  { path: 'clinicas', component: ClinicaListComponent },
  { path: 'clinicas/nueva', component: ClinicaFormComponent },
  { path: '', redirectTo: 'clinicas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
