import { TestBed } from '@angular/core/testing';

import { MysqlserviceService } from './mysqlservice.service';

describe('MysqlserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysqlserviceService = TestBed.get(MysqlserviceService);
    expect(service).toBeTruthy();
  });
});
