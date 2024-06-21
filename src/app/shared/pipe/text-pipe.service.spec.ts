import { TestBed } from '@angular/core/testing';

import { TextPipeService } from './text-pipe.service';

describe('TextPipeService', () => {
  let service: TextPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
