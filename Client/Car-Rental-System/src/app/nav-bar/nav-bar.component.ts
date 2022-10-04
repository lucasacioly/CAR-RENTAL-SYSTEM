import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public route: Router, private authService: AuthService) {

  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  clientName = this.authService.clientName;

  logOut(){
    [this.isClient, this.isAdmin] = this.authService.logOut();
    this.navigate_to_home_page();
  }

  ngOnInit(): void {
  }
  nav_openned = false;

  nav_onclick() {
    this.nav_openned = !this.nav_openned
  }

}
