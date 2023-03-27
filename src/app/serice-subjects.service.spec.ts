import { TestBed } from '@angular/core/testing';

import { SericeSubjectsService } from '../../../../Desktop/ExampleAngular/Loacal_Inscriptions/ProjectInscriptions/src/app/serivce-subjects.service';


describe('SericeSubjectsService', () => {
  let service: SericeSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericeSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
