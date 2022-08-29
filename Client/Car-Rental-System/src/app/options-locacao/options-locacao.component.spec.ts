import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLocacaoComponent } from './options-locacao.component';

describe('OptionsLocacaoComponent', () => {
  let component: OptionsLocacaoComponent;
  let fixture: ComponentFixture<OptionsLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsLocacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
