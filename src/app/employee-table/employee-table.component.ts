import { Observable, of } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {filter , map} from 'rxjs/operators';
import {CustomFormatterPipe} from '../formatter.pipe'

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.css"]
})
export class EmployeeTableComponent implements OnInit {
  employees: Observable<Employee[]>;
  employeesSafeData: Observable<Employee[]>

  constructor(private employeeService: EmployeeService,
  private router: Router, private customFormatter:CustomFormatterPipe) {}
  public searchText:string;

  // Implementation od Search in the table. Enter a vlue and press enter to search. Press enter with empty field to reload the table. 
  
  public search(searchText:string){
    console.log(searchText)
    this.employees= this.employeesSafeData.pipe(map(value=>{
      let data=value.filter((item)=>{
        if(!searchText){
          return item
        }
        else{
          if(item.employee_name.includes(searchText)||item.employee_age===parseInt(searchText)||item.employee_salary===parseInt(searchText))
          return item
        }
      })
      return data
    }))
  }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees= this.employeeService.getEmployeesList();
    this.employeesSafeData=this.employees
  }

  editEmployee(id: number) {
    this.router.navigate(['edit/'+id])
  }

  // Implmentation of Delete

  deleteEmployee(id: number) {
    this.employeeService.deleteSrvEmployee(id)
      .subscribe(
        (ret) => {
          console.log(ret);
          this.reloadData();
        },
        error => console.log(error));
  }

}
