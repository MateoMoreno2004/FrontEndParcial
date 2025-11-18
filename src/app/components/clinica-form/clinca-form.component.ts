import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicaService } from '../../services/clinica.service';

@Component({
  selector: 'app-clinica-form',
  templateUrl: './clinica-form.component.html',
  styleUrls: ['./clinica-form.component.css']
})
export class ClinicaFormComponent {

  clinicaForm: FormGroup;

  constructor(private fb: FormBuilder, private clinicaService: ClinicaService) {
    this.clinicaForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      cantidadCamas: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      fechaCreacion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.clinicaForm.valid) {
      this.clinicaService.create(this.clinicaForm.value).subscribe(() => {
        alert('Clínica creada exitosamente');
        this.clinicaForm.reset();
      });
    }
  }
}
