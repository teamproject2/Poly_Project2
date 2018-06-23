import { TestBed, inject } from '@angular/core/testing';

import { LoaigiayService } from './loaigiay.service';

describe('LoaigiayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaigiayService]
    });
  });

  it('should be created', inject([LoaigiayService], (service: LoaigiayService) => {
    expect(service).toBeTruthy();
  }));
});
