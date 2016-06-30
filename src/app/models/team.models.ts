import { uuid } from '../util/uuid';

export class Team{
  confirmedPlayers: Player[];
  points: number;
  
  constructor(public name: string, public invitedPlayers: Player[]){
    this.points = 0;
    this.confirmedPlayers = [];
  }
};

export class Player{
  id: string;
  hasTeam: boolean;
  invites: Invite[];
  constructor(public name: string){
    this.invites = [];
    this.id = uuid();
  }
};

export class Invite{
  sourceTeam: Team[];
  destPlayer: Player;
  status: InviteStatus;
}

enum InviteStatus {Accepted, Denied, Pending};
