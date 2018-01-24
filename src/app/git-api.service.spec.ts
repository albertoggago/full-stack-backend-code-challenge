import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  
import { GitApiService } from './git-api.service';
import {GitInformation} from './interfaces/git-information.interface';

describe('GitApiService', () => {
  let fixture : ComponentFixture<GitApiService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [GitApiService]
    });
  });

  it('should be created', inject([GitApiService], (service:GitApiService) => {
    expect(service).toBeTruthy();
  }));

});
