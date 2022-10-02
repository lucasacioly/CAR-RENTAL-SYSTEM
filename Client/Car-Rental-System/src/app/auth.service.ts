import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router : Router) { }

  public isClient = false;
  public isAdmin = false;
  public clientName = '';
  public clientEmail = '';

  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( (user) => {
      this.clientName = user.user?.displayName!
      this.clientEmail = email
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
      if (email == 'admin@alucar.com' && password == 'admin123') {
        this.isAdmin = true;
        this.isClient = false;
      }
      else {
        this.isClient = true;
        this.isAdmin = false;
      }
    }, err => {
      alert('Usuário ou senha inválido');
      this.router.navigate(['/login'])
    })
  }

  /*signin(type: string){
    if (type == 'admin') {
      this.isAdmin = true
    }
    else {
      this.isClient = true
      console.log(type);
      this.clientName = String(type)
    }
  }*/

  register(name : string, email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then((user) => {
      user.user?.updateProfile({displayName:name})
      alert('Conta criada com sucesso')
      this.router.navigate(['/login']);
    }, err => {
      alert('Houve um erro ao cadastrar a conta');
      this.router.navigate(['/clientregistration']);
    })
  }


  logOut(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert('Falha ao fazer logOut');
    })

    this.isClient = false;
    this.isAdmin = false;
    this.clientName = '';
    return [this.isClient, this.isAdmin];
  }
}
