import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>department id: {{ departmentId }}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
      <button (click)="gotoDepartments()">back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.departmentId = parseInt(params.get('id')))
    );
  }

  goPrevious() {
    this.router.navigate(['../', this.departmentId - 1], {relativeTo: this.route});
  }

  goNext() {
    this.router.navigate(['../', this.departmentId + 1], {relativeTo: this.route});
  }

  gotoDepartments() {
    this.router.navigate(['../', { id: this.departmentId }], {
      relativeTo: this.route,
    });
  }
}
