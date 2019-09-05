import { TestBed } from '@angular/core/testing';

import { RegistStudentService } from './regist-student.service';

describe('RegistStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistStudentService = TestBed.get(RegistStudentService);
    expect(service).toBeTruthy();
  });
});
