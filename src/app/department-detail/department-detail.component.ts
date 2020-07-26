import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: ` <p>department id: {{ departmentId }}</p> `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route);
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = this.route.snapshot.params['id'];
  }
}
