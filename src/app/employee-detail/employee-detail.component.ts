import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <p>{{ errorMessage }}</p>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
  styles: [],
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMessage;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employees) => (this.employees = employees),
      (error) => (this.errorMessage = error)
    );
  }
}
