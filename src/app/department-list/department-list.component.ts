import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul>
      <li (click)="onSelectDepartment(department.id)" *ngFor="let department of departments">
        <span>{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [`
    ul li {
      list-style-type: none;
      cursor: pointer;
      margin-bottom: 10px;
    }

    ul li span {
      background: #1919b9;
      padding: 5px;
      color: white;
      display: inline-block;
    }
  `]
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    {id: 1, name: 'MongoDB'},
    {id: 2, name: 'Express'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'Nodejs'},
  ]
  constructor(private route: Router) { }

  onSelectDepartment(departmentId) {
    this.route.navigate(['/departments', departmentId])
  }

  ngOnInit(): void {
  }

}
