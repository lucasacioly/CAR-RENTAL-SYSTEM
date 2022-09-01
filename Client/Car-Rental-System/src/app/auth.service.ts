import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isClient = false;
  public isAdmin = false;
  public clientName = 'Gustavo';

  signin(){
    this.isClient = true;
  }

  logOut(){

    this.isClient = false;
    this.isAdmin = false;
    return [this.isClient, this.isAdmin];
  }
}
