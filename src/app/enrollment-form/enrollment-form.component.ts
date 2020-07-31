import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css'],
})
export class EnrollmentFormComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Huy', 'huy@gmail.com', 3232, '', 'morning', true);
  constructor() {}

  ngOnInit(): void {}
}
