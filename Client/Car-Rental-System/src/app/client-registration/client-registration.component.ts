import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  show: boolean = false;
  show_senha() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

  register(name : string, email: string, password : string){
    this.authService.register(name, email, password);
  }

  registerForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  })

  onSubmit() {
    this.register(this.registerForm.value.name!,this.registerForm.value.email!, this.registerForm.value.password!);
    this.registerForm.reset();
  }

}
