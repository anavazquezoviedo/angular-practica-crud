import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
