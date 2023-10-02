import { TestBed } from '@angular/core/testing';

import { NewsStoriesService } from './newsstories.service';

describe('NewsStoriesService', () => {
  let service: NewsStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
