import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT/crudemployee';
  constructor(private http: HttpClient) { }

  getEmployee(url: string) {
    return this.http.get(url);
  }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }
}
