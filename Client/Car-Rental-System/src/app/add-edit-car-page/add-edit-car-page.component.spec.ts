import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCarPageComponent } from './add-edit-car-page.component';

describe('AddEditCarPageComponent', () => {
  let component: AddEditCarPageComponent;
  let fixture: ComponentFixture<AddEditCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
