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

  login(type: string, password : string){
    this.authService.login(type, password);
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
    this.login(this.loginForm.value.login!, this.loginForm.value.password!)
    this.loginForm.reset();
  }

}
