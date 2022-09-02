import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLocationComponent } from './options-location-page.component';

describe('OptionsLocationComponent', () => {
  let component: OptionsLocationComponent;
  let fixture: ComponentFixture<OptionsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
