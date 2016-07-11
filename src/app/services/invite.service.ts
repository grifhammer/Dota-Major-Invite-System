import { Injectable } from '@angular/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
import { Invite, Player } from '../models/team.models';

let initialInvites: Invite[] = [];


interface InviteOperation extends Function {
  (invites: Invite[]): Invite[];
}

@Injectable()
export class InviteService {

  newInvites: Subject<Invite> = new Subject<Invite>();

  allInvites: Observable<Invite[]>;

  pendingInvites: Subject<Invite[]>;
  acceptedInvites: Subject<Invite[]>;
  // declinedInvites: Subject<Invite[]> = new BehaviorSubject<Invite[]>(null);

  updates: Subject<any> = new Subject<any>();

  create: Subject<Invite> = new Subject<Invite>();
  acceptInvite: Subject<any> = new Subject<any>();
  declineInvite: Subject<any> = new Subject<any>();

  public sendNewInvite(invite: Invite) : void {
    this.newInvites.next(invite);
  }

  invitesForPlayer(player: Player) : Observable<Invite> {
    return this.newInvites.filter((invite: Invite) => {
      return (invite.destPlayer.id === player.id);
    });
  }

  constructor() {
    this.allInvites = this.newInvites
      .scan((invites: Invite[],
             newInvite: Invite) => {
                return invites.concat(newInvite);
              },
            initialInvites)
      .publishReplay(1)
      .refCount();

    this.create
      .map( function(invite: Invite) : InviteOperation {
        return (invites : Invite[]) => {
          return invites.concat(invite);
        };
      })
      .subscribe(this.updates);

    this.newInvites
      .subscribe(this.create);

  }

}
