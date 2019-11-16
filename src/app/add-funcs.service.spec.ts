import { TestBed, inject } from '@angular/core/testing';

import { AddFuncsService } from './add-funcs.service';

describe('AddFuncsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFuncsService]
    });
  });

  it('should be created', inject([AddFuncsService], (service: AddFuncsService) => {
    expect(service).toBeTruthy();
  }));
});
