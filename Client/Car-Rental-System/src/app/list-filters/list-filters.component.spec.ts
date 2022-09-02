import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ListFiltersComponent } from './list-filters.component';

describe('ListFiltersComponent', () => {
  let component: ListFiltersComponent;
  let fixture: ComponentFixture<ListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open filter-bar', fakeAsync((): void => {
    // observa a funcao de abrir filter-bar
    spyOn(component, 'filter_onclick')

    // botao que chama a função
    let button = fixture.debugElement.nativeElement.querySelector('.call_filter_onclick')
    button.click()
    tick()

    // espera-se que a função de abrir filter-bar foi chamada
    expect(component.filter_onclick).toHaveBeenCalled()

  }))
});
