/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InviteService } from './invite.service';

describe('Invite Service', () => {
  beforeEachProviders(() => [InviteService]);

  it('should ...',
      inject([InviteService], (service: InviteService) => {
    expect(service).toBeTruthy();
  }));
});
