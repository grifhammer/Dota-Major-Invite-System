import { Component } from '@angular/core';
import { TeamRegistrationPageComponent } from './team-registration-page';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TeamRegistrationPageComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Majors Invite System!';
}
