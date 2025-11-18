import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../models/clinica.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private apiUrl = 'http://localhost:8080/api/clinicas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.apiUrl);
  }

  create(clinica: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.apiUrl, clinica);
  }
}
