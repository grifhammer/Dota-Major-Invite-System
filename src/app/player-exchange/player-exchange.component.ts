import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerManagementService } from '../services/player-management.service';
import { PlayerInviteDisplayComponent } from '../player-invite-display'
// import { Player } from '../models/team.models'


@Component({
  moduleId: module.id,
  selector: 'player-exchange',
  directives: [PlayerInviteDisplayComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'player-exchange.component.html',
  styleUrls: ['player-exchange.component.css']
})
export class PlayerExchangeComponent implements OnInit {
  players: Observable<any>;

  constructor(public playerManagementService: PlayerManagementService) {
    this.players = playerManagementService.players;
    console.log(this.players);
  }

  ngOnInit(): void {
  }

}
