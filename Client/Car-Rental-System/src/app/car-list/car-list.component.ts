import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService, private carService: CarService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  navigate_to_add_car_page(){
    this.route.navigate(['/addcar'])
  }


  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  cars = this.carService.cars;
  
  

  ngOnInit(): void {
    if (this.carService.cars.length != this.cars.length) {
      this.cars = this.carService.cars
    }
  }

  ngDoCheck() {
    console.log(this.carService.cars);
    this.cars = this.carService.cars;
  }


}
