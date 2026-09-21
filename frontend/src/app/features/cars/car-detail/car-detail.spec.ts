import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailComponent } from './car-detail';

describe('CarDetailComponent', () => {
  let component: CarDetailComponent;
  let fixture: ComponentFixture<CarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
