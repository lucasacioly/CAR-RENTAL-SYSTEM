import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_client_registration_page(){
    this.route.navigate(['/clientregistration'])
  }

  ngOnInit(): void {
  }

  signin(type: string){
    this.authService.signin(type);
    this.navigate_to_home_page();
  }


  show: boolean = false;
  show_senha() {
    this.show = !this.show;
  }

  loginForm = this.formBuilder.group({
    login: '',
    password: ''
  })

  onSubmit() {
    if ((this.loginForm.value.login == 'admin') && (this.loginForm.value.password == 'admin')) {
      this.signin('admin')
    }
    else {
      this.signin(String(this.loginForm.value.login))
    }
    this.loginForm.reset();
  }

}
