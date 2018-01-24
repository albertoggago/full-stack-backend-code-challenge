import { TestBed, inject } from '@angular/core/testing';

import { TwitterApiInterceptor } from './twitter-api.interceptor';

describe('TwitterApiInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterApiInterceptor]
    });
  });

  it('should be created', inject([TwitterApiInterceptor], 
  	   (service: TwitterApiInterceptor) => {
                  expect(service).toBeTruthy();
  }));
});
