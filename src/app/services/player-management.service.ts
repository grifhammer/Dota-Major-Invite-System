import { Injectable, bind } from '@angular/core';
import { Player, Invite } from '../models/team.models';
import { playerList } from '../data/playerList';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { InviteService } from '../services/invite.service';

declare var _;

interface IPlayerOperation extends Function {
  (players: Player[]): Player[];
}

@Injectable()
export class PlayerManagementService {
  newPlayers: Subject<Player> = new Subject<Player>();

  players: Observable<Player[]>;

  updates: Subject<any> = new Subject<any>();

  currentPlayer: Subject<Player> = new BehaviorSubject<Player>(new Player('test'));

  currentPlayerInvites: Observable<Invite[]>;

  //action streams
  create: Subject<Player> = new Subject<Player>();

  addPlayer(player: Player): void {
    console.log('adding player: ' + player.name);
    this.newPlayers.next(player);
  }

  setCurrentPlayer(newPlayer: Player): void {
    this.currentPlayer.next(newPlayer);
  }

  constructor(public inviteService: InviteService) {
    this.players = this.updates
      .scan( (players: Player[],
              operation: IPlayerOperation) => {
        return operation(players);
      },
        playerList)
      .startWith(playerList)
      .publishReplay(1)
      .refCount();

    this.create
      .map( function (player: Player): IPlayerOperation {
        return (players: Player[]) => {
          return players.concat(player);
        };
      })
      .subscribe(this.updates);

    this.newPlayers.subscribe(this.create);

    this.currentPlayerInvites = this.currentPlayer
      .combineLatest(inviteService.allInvites, (currentPlayer: Player, invites: Invite[]) => {
        if (currentPlayer && invites.length > 0){
          return _.chain(invites)
            .filter((invite: Invite) =>
              (invite.destPlayer.id === currentPlayer.id))
        }
      })
  }

}


export var playerManagementServiceInjectables: Array<any> = [
  bind(PlayerManagementService).toClass(PlayerManagementService)
];
