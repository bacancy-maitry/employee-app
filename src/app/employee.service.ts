import { Injectable } from '@angular/core';
import { EmployeeInterface } from './employee-interface';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeVar: Subject<EmployeeInterface> = new Subject<EmployeeInterface>();

  constructor() { }

  getEmployeeData(employeeInstance: EmployeeInterface): void{
    this.employeeVar.next(employeeInstance);
  }

  setEmployeeData():Subject<EmployeeInterface>{
    return this.employeeVar;
  }
}
