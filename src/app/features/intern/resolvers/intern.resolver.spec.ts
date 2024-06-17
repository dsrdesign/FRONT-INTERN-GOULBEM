import { TestBed } from '@angular/core/testing';

import { InternResolver } from './intern.resolver';

describe('InternResolver', () => {
  let resolver: InternResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InternResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
