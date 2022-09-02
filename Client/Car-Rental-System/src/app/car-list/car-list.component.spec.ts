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

  it('should go to login page', fakeAsync((): void => {
    // observa a função de navegar para a página de login
    spyOn(component, 'navigate_to_login_page')

    // botao que navega para página de login
    let button1 = fixture.debugElement.nativeElement.querySelector('.buttonTest')
    button1.click()
    tick()

    // espera-se que a função de navegar para página de login seja chamada
    expect(component.navigate_to_login_page).toHaveBeenCalled()

  }))
});
