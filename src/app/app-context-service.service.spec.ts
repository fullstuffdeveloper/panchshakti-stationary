import { TestBed } from '@angular/core/testing';

import { AppContextServiceService } from './app-context-service.service';

describe('AppContextServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppContextServiceService = TestBed.get(AppContextServiceService);
    expect(service).toBeTruthy();
  });
});
