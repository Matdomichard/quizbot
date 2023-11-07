import { TestBed } from '@angular/core/testing';

import { AnswerReceptionService } from './answer-reception.service';

describe('AnswerReceptionService', () => {
  let service: AnswerReceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerReceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
