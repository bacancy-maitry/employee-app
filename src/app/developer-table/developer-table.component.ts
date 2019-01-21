import { Component, OnInit, Input } from '@angular/core';
import { EmployeeInterface } from '../employee-interface';
import { EmployeeService } from '../employee.service';
import { filter,map } from 'rxjs/operators';
import { RoleType } from '../role-type.enum';

@Component({
  selector: 'app-developer-table',
  templateUrl: './developer-table.component.html',
  styleUrls: ['./developer-table.component.css']
})
export class DeveloperTableComponent implements OnInit {

  developerArray: Array<EmployeeInterface> = [];

  constructor(private employeeService: EmployeeService) { }

  displayEmployeeData(){
    this.employeeService.setEmployeeData().pipe(
      filter( data => data.roleType.toString() == RoleType[1])
    ).subscribe(employeeData => this.developerArray.push(employeeData));
  }

  ngOnInit() {
    this.displayEmployeeData();
  }

}
