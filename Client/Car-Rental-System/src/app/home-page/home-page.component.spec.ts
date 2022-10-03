import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should navigate to location page', fakeAsync((): void => {
    // observa a função de navegar para página de locação
    spyOn(component, 'navigate_to_location_page')

    // imagem que chama a função
    let image = fixture.debugElement.nativeElement.querySelector('.fix-car-red')
    image.click()
    tick()

    // espera-se que a função de navegar para página de locação seja chamada
    expect(component.navigate_to_location_page).toHaveBeenCalled()

  }))*/

  it('should navigate to car list', fakeAsync((): void => {
    // observa a função de navegar para página de car list
    spyOn(component, 'navigate_to_car_list')

    // link que chama a função
    let link = fixture.debugElement.nativeElement.querySelector('.lista')
    link.click()
    tick()

    // espera-se que a função de navegar para página de car list seja chamada
    expect(component.navigate_to_car_list).toHaveBeenCalled()

  }))
});
