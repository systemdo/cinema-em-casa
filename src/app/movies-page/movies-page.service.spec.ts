import { TestBed } from '@angular/core/testing';

import { MoviesPageService } from './movies-page.service';

describe('MoviesPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesPageService = TestBed.get(MoviesPageService);
    expect(service).toBeTruthy();
  });
});
