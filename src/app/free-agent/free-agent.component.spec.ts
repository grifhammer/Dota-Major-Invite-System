/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FreeAgentComponent } from './free-agent.component';

describe('Component: FreeAgent', () => {
  it('should create an instance', () => {
    let component = new FreeAgentComponent();
    expect(component).toBeTruthy();
  });
});
