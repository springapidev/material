import { TestBed } from '@angular/core/testing';

import { VarService } from './var.service';

describe('VarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VarService = TestBed.get(VarService);
    expect(service).toBeTruthy();
  });
});
