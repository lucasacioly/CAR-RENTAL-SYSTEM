import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarPageComponent } from './edit-car-page.component';

describe('EditCarPageComponent', () => {
  let component: EditCarPageComponent;
  let fixture: ComponentFixture<EditCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
