import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'team-registration-form',
  templateUrl: 'team-registration-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['team-registration-form.component.css']
})
export class TeamRegistrationFormComponent implements OnInit {
  teamForm: FormGroup;
  teamName: AbstractControl;
  playerName: AbstractControl;

  constructor(fb: FormBuilder) {

    function uniqueTeamValidator(control: FormControl): {[s: string]: boolean } {
      if (control.value.length < 3) {
        return { shortName: true };
      }
    };

    this.teamForm = fb.group({
      teamName: ['', Validators.compose([Validators.required, uniqueTeamValidator])],
      teamMembers: [[], Validators.required]
    });

    this.teamName = this.teamForm.controls['teamName'];

    this.teamName.valueChanges.subscribe((value: string) => {
      console.log('team name changed to: ', value);
    });
  }
  onSubmit(formData: any): void {
    console.log(formData);
    formData.teamName = '';
  }

  ngOnInit() {
  }

}
