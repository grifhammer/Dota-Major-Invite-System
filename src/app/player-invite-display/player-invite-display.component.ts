import { Component, OnInit } from '@angular/core';
import { Player } from '../models/team.models';

@Component({
  moduleId: module.id,
  selector: 'player-invite-display',
  inputs: ['player'],
  templateUrl: 'player-invite-display.component.html',
  styleUrls: ['player-invite-display.component.css']
})
export class PlayerInviteDisplayComponent implements OnInit {
  player: Player;

  constructor() {
    console.log('hi');
  }

  ngOnInit() {
    console.log('initializing invites');
    console.log(this.player);
  }

}
