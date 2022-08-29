import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHoraLocacaoComponent } from './data-hora-locacao.component';

describe('DataHoraLocacaoComponent', () => {
  let component: DataHoraLocacaoComponent;
  let fixture: ComponentFixture<DataHoraLocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHoraLocacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataHoraLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
