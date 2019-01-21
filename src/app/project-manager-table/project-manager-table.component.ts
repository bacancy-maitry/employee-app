import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeInterface } from '../employee-interface';
import { filter,map } from 'rxjs/operators';
import { RoleType } from '../role-type.enum';

@Component({
  selector: 'app-project-manager-table',
  templateUrl: './project-manager-table.component.html',
  styleUrls: ['./project-manager-table.component.css']
})
export class ProjectManagerTableComponent implements OnInit {

  projectManagerArray: EmployeeInterface[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.setEmployeeData().pipe(
      filter(data => data.roleType.toString() == RoleType[0])
      ).subscribe(employeeData => this.projectManagerArray.push(employeeData));
  }

}
