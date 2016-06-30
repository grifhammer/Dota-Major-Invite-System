import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES,
         FORM_DIRECTIVES,
         FormBuilder,
         ControlGroup,
         AbstractControl,
         Control,
         Validators
       } from '@angular/common';

@Component({
  selector: 'team-registration-form',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <form [ngFormModel]="teamForm"
          (ngSubmit)="onSubmit(teamForm.value)"
          class="ui form">
        <div class="field"
             [class.error]="!teamName.valid && teamName.touched">
            <label for="teamName">Team Name</label>
            <input type="text" 
                   id="teamName"
                   placeholder="Team Name"
                   [ngFormControl]="teamName">
            <div *ngIf="!teamName.valid"
                 class="ui error message">Team Name is invalid</div>
            <div *ngIf="teamName.hasError('shortName')" class="ui error message">Team Name must be at least 3 characters long.</div>
        </div>
        <div class="field">
            <label for="newPlayer">Player</label>
            <input type="text"
                   id="newPlayer"
                   placeholder="Player"
                   [ngFormControl]="">
        </div>
        <button type="submit" class="submit">Submit Team</button>
    </form>
  </div>`
})
class teamRegistrationForm {
  teamForm: ControlGroup;
  teamName: AbstractControl;
  playerName: AbstractControl;

  constructor(fb: FormBuilder){

    function uniqueTeam(control: Control): {[s: string]: boolean } {
      if(control.value.length < 3){
        return { shortName: true }
      }
    };

    this.teamForm = fb.group({
      teamName: ['', Validators.compose([Validators.required, uniqueTeam])],
      teamMembers: [[], Validators.required]
    });

    this.teamName = this.teamForm.controls['teamName'];

    this.teamName.valueChanges.subscribe((value: string) => {
      console.log('team name changed to: ', value);
    });
  }
  onSubmit(formData: any): void{
    console.log(formData);
    formData.teamName = '';
  }
}

@Component({
  moduleId: module.id,
  selector: 'team-registration-page',
  directives: [teamRegistrationForm],
  templateUrl: 'team-registration-page.component.html',
  styleUrls: ['team-registration-page.component.css']
})
export class TeamRegistrationPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
