/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TeamManagementService } from './team-management.service';

describe('TeamManagement Service', () => {
  beforeEachProviders(() => [TeamManagementService]);

  it('should ...',
      inject([TeamManagementService], (service: TeamManagementService) => {
    expect(service).toBeTruthy();
  }));
});
