import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl+"data"}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+"data"}/${id}`);
  }

  addEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl+"data"}`, employee);
  }

  editSrvEmployee(id:number,employee: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl+"data"}/${id}`, employee);
  }

  deleteSrvEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl+"data"}/${id}`);
  }
}