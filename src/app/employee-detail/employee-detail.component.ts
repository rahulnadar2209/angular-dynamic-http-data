import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeservice:EmployeeService) {}   

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data =>this.employees=data,
               error=>this.errorMsg=error)
   }

}