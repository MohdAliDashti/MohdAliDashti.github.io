import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {

    let data = [
      {
        id: 1,
        employee_name: "Tiger Nixon",
        employee_salary: 320800,
        employee_age: 61
      },
      {
        id: 2,
        employee_name: "Garrett Winters",
        employee_salary: 170750,
        employee_age: 63
      },
      {
        id: 3,
        employee_name: "Ashton Cox",
        employee_salary: 86000,
        employee_age: 66
      },
      {
        id: 4,
        employee_name: "Cedric Kelly",
        employee_salary: 433060,
        employee_age: 22
      },
      {
        id: 5,
        employee_name: "Airi Satou",
        employee_salary: 162700,
        employee_age: 33
      }
    ];

    return { data };

  }
}
