import { TestBed } from '@angular/core/testing';

import { SendItemService } from './send-item.service';

describe('SendItemService', () => {
  let service: SendItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
