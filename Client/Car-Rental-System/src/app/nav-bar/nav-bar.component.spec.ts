import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open navbar', fakeAsync((): void => {
    // observa a função de abrir navbar
    spyOn(component, 'nav_onclick')

    // botao que abre a nav-bar
    let button1 = fixture.debugElement.nativeElement.querySelector('.nav_button_toggle')
    button1.click()
    tick()

    // espera-se que a função de abrir a navbar foi chamada
    expect(component.nav_onclick).toHaveBeenCalled()

  }))

});
