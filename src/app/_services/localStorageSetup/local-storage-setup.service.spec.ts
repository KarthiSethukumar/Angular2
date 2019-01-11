import { TestBed } from '@angular/core/testing';

import { LocalStorageSetupService } from './local-storage-setup.service';

describe('LocalStorageSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageSetupService = TestBed.get(LocalStorageSetupService);
    expect(service).toBeTruthy();
  });
});
