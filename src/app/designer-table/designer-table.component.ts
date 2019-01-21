import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../employee-interface';
import { EmployeeService } from '../employee.service';
import { filter } from 'rxjs/operators';
import { RoleType } from '../role-type.enum';

@Component({
  selector: 'app-designer-table',
  templateUrl: './designer-table.component.html',
  styleUrls: ['./designer-table.component.css']
})
export class DesignerTableComponent implements OnInit {

  designerArray: EmployeeInterface[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.setEmployeeData().pipe(
      filter(data => data.roleType.toString() == RoleType[2])
    ).subscribe(employeeData => this.designerArray.push(employeeData));
  }

}
