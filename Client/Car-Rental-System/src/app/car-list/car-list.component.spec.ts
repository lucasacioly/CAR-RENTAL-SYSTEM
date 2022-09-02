import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to location page', fakeAsync((): void => {
    // observa a função de navegar para a página de locação
    spyOn(component, 'navigate_to_location_page')

    // botao que navega para página de locação
    let button1 = fixture.debugElement.nativeElement.querySelector('.buttonTest')
    button1.click()
    tick()

    // espera-se que a função de navegar para página de locação seja chamada
    expect(component.navigate_to_location_page).toHaveBeenCalled()

  }))
});
