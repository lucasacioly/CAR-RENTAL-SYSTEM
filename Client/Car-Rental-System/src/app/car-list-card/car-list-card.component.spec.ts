import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListCardComponent } from './car-list-card.component';

describe('CarListCardComponent', () => {
  let component: CarListCardComponent;
  let fixture: ComponentFixture<CarListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
