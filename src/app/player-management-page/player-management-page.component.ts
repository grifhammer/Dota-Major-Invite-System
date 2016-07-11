import { Component, OnInit } from '@angular/core';
import { Player } from '../models/team.models';
import { PlayerExchangeComponent } from '../player-exchange';
import { PlayerManagementService } from '../services/player-management.service';

@Component({
  moduleId: module.id,
  selector: 'player-management-page',
  directives: [PlayerExchangeComponent],
  templateUrl: 'player-management-page.component.html',
  styleUrls: ['player-management-page.component.css']
})
export class PlayerManagementPageComponent implements OnInit {

  constructor(public playerManagementService: PlayerManagementService){
  }

  addPlayer(form: any): void{
    this.playerManagementService.addPlayer(new Player(form.playerName));
  }

  ngOnInit() {
  }

}
