import { Component, OnInit } from '@angular/core';
import { TeamRegistrationFormComponent } from '../team-registration-form';


@Component({
  moduleId: module.id,
  selector: 'team-registration-page',
  directives: [TeamRegistrationFormComponent],
  templateUrl: 'team-registration-page.component.html',
  styleUrls: ['team-registration-page.component.css']
})
export class TeamRegistrationPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
