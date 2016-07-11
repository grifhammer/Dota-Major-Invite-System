import { Component } from '@angular/core';
import { TeamRegistrationPageComponent } from './team-registration-page';
import { PlayerManagementPageComponent } from './player-management-page';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TeamRegistrationPageComponent, PlayerManagementPageComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Majors Invite System!';
}
