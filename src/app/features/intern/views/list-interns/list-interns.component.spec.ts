import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInternsComponent } from './list-interns.component';

describe('ListInternsComponent', () => {
  let component: ListInternsComponent;
  let fixture: ComponentFixture<ListInternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInternsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
