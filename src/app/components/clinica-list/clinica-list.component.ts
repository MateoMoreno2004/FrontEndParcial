import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../../services/clinica.service';
import { Clinica } from '../../models/clinica.model';

@Component({
  selector: 'app-clinica-list',
  templateUrl: './clinica-list.component.html',
  styleUrls: ['./clinica-list.component.css']
})
export class ClinicaListComponent implements OnInit {

  clinicas: Clinica[] = [];

  constructor(private clinicaService: ClinicaService) {}

  ngOnInit(): void {
    this.clinicaService.getAll().subscribe(data => {
      this.clinicas = data;
    });
  }
}
