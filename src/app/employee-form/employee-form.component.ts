import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../employee-interface';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  roleTypeArray: Array<any> = []
  employeeInstance: EmployeeInterface;

  employeeObj = {
    firstName:null,
    lastName:null,
    contactNo:null,
    roleType:null,
  }

  addEmployee(): void{
    this.employeeInstance = {
      firstName: this.employeeObj.firstName,
      lastName: this.employeeObj.lastName,
      contactNo: this.employeeObj.contactNo,
      roleType: this.employeeObj.roleType,
    }
    this.employeeService.getEmployeeData(this.employeeInstance);
  }

  constructor(private employeeService: EmployeeService) {
    this.roleTypeArray = [
      {
        type: "ProjectManager",
      },
      {
        type: "Developer",
      },
      {
        type: "Designer",
      }
    ]
   }

  ngOnInit() {
  }

}
