import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReturnComponent } from './car-return.component';

describe('CarReturnComponent', () => {
  let component: CarReturnComponent;
  let fixture: ComponentFixture<CarReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
