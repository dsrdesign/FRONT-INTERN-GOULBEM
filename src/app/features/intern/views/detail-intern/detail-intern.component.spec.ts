import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInternComponent } from './detail-intern.component';

describe('DetailInternComponent', () => {
  let component: DetailInternComponent;
  let fixture: ComponentFixture<DetailInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
