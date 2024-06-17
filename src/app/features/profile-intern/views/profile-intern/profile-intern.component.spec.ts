import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInternComponent } from './profile-intern.component';

describe('ProfileInternComponent', () => {
  let component: ProfileInternComponent;
  let fixture: ComponentFixture<ProfileInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
