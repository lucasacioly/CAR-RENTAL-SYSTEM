import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  navigate_to_location_page(){
    this.route.navigate(['/location'])
  }

  navigate_to_edit_page(){
    this.route.navigate(['/editcar'])
  }

  navigate_to_add_car_page(){
    this.route.navigate(['/addcar'])
  }

  remove(){

  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;



  ngOnInit(): void {
  }

}
