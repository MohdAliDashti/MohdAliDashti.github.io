import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";
import {CustomFormatterPipe} from "./formatter.pipe"
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeTableComponent,
    CustomFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [CustomFormatterPipe,CurrencyPipe,DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
