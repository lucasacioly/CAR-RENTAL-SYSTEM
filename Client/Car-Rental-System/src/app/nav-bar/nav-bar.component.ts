import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) {

  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  navigate_to_car_list(){
    this.route.navigate(['/carlist'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_feedback_page(){
    this.route.navigate(['/feedback'])
  }

  ngOnInit(): void {
  }
  nav_openned = false;

  nav_onclick() {
    this.nav_openned = !this.nav_openned
  }

}
