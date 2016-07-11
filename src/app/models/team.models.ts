import { uuid } from '../util/uuid';

export class Team {
  confirmedPlayers: Player[];
  points: number;
  constructor(public name: string) {
    this.points = 0;
    this.confirmedPlayers = [];
  }
};

export class Player {
  id: string;
  invites: Invite[];
  constructor(public name: string) {
    this.invites = [];
    this.id = uuid();
  }
};

export class Invite {
  id: string;
  sourceTeam: Team;
  destPlayer: Player;
  status: InviteStatus;
  constructor(obj?: any) {
    this.id = obj && obj.id || uuid();
    this.status = obj && obj.status || InviteStatus.Pending;
    this.sourceTeam = obj && obj.team;
    this.destPlayer = obj && obj.destPlayer;
  }
}

enum InviteStatus {Accepted, Denied, Pending};
