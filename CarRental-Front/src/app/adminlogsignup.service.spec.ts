import { TestBed } from '@angular/core/testing';

import { AdminlogsignupService } from './adminlogsignup.service';

describe('AdminlogsignupService', () => {
  let service: AdminlogsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminlogsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
