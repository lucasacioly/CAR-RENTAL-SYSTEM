import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrejaoComponent } from './frejao.component';

describe('FrejaoComponent', () => {
  let component: FrejaoComponent;
  let fixture: ComponentFixture<FrejaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrejaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrejaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
