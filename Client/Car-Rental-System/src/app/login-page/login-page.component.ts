import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_client_registration_page(){
    this.route.navigate(['/clientregistration'])
  }

  ngOnInit(): void {
  }

  signin(){
    this.authService.signin();
    this.navigate_to_home_page();
  }


  show: boolean = false;
  show_senha() {
    this.show = !this.show;
}

}
