import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { id: 1, name: 'Andrew', age: 30 },
      { id: 2, name: 'Brandon', age: 22 },
      { id: 3, name: 'Andrew', age: 15 },
    ]
  }
}
