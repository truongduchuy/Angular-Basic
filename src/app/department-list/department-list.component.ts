import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul>
      <li [class.selected]="isSelected(department.id)" (click)="onSelectDepartment(department.id)" *ngFor="let department of departments">
        <span>{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [`
    ul li {
      list-style-type: none;
      cursor: pointer;
      margin-bottom: 10px;
      width: 100px;
    }

    ul li span {
      background: #1919b9;
      padding: 5px;
      color: white;
      display: inline-block;
    }

    ul li.selected {
      background-color: orange;
      color: white;
    }
  `]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departments = [
    {id: 1, name: 'MongoDB'},
    {id: 2, name: 'Express'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'Nodejs'},
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  onSelectDepartment(departmentId) {
    this.router.navigate(['/departments', departmentId])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'))
    })
  }

  isSelected(departmentId) {
    return departmentId === this.selectedId
  }
}
