import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login as admin', fakeAsync((): void => {
    //entrando como admin
    service.login('admin@alucar.com', 'admin123')
    tick()


    // espera-se que esteja logado como admin
    expect(service.isAdmin).toBeTruthy()

  }))

  it('should login as client', fakeAsync((): void => {

    //entrando como cliente
    service.login('matheus@alucar.com', 'coxinha123')
    tick()


    // Checando se foi logado como cliente
    expect(service.isClient).toBeTruthy()
    // Nome de cliente tenha sido trocado
    expect(service.clientName).toBe('Gustavo')
    // Não tenha logado como admin
    expect(service.isAdmin).toBeFalse()

  }))

  it('should logout', fakeAsync((): void => {

    // Entrar como admin
    service.login('admin@alucar.com', 'admin123')
    tick()
    // Dar logout
    service.logOut()
    tick()


    // espera-se que você não esteja logado como admin
    expect(service.isAdmin).toBeFalse()

  }))
});
