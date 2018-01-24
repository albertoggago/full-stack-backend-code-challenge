import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  
import { GitApiService } from './git-api.service';

describe('GitApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [GitApiService]
    });
  });

  it('should be created', inject([GitApiService], (service: GitApiService) => {
    expect(service).toBeTruthy();
  }));
});
