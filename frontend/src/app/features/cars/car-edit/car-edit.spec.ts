import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditComponent } from './car-edit';

describe('CarEditComponent', () => {
  let component: CarEditComponent;
  let fixture: ComponentFixture<CarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarEditComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
