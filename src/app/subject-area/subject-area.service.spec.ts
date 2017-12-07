import { TestBed, inject } from '@angular/core/testing';

import { SubjectAreaService } from './subject-area.service';

describe('SubjectAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectAreaService]
    });
  });

  it('should be created', inject([SubjectAreaService], (service: SubjectAreaService) => {
    expect(service).toBeTruthy();
  }));
});
