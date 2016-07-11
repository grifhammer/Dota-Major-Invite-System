import {PlayerManagementService} from './player-management.service';
import {InviteService} from './invite.service';

export * from './player-management.service';
export * from './invite.service';

export var servicesInjectables: Array<any> = [
  PlayerManagementService,
  InviteService
];
