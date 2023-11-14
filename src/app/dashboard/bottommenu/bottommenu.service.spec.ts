import { TestBed } from '@angular/core/testing';

import { BottommenuService } from './bottommenu.service';

describe('BottommenuService', () => {
  let service: BottommenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottommenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
