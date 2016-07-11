/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PlayerManagementService } from './player-management.service';

describe('PlayerManagement Service', () => {
  beforeEachProviders(() => [PlayerManagementService]);

  it('should ...',
      inject([PlayerManagementService], (service: PlayerManagementService) => {
    expect(service).toBeTruthy();
  }));
});
