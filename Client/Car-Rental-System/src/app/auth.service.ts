import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isClient = false;
  public isAdmin = false;
  public clientName = '';

  signin(type: string){
    if (type == 'admin') {
      this.isAdmin = true
    }
    else {
      this.isClient = true
      console.log(type);
      this.clientName = String(type)
    }
  }

  logOut(){

    this.isClient = false;
    this.isAdmin = false;
    return [this.isClient, this.isAdmin];
  }
}
