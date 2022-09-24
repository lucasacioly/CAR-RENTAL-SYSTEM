import { Component, OnInit } from '@angular/core';
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
  cars = this.carService.cars
  addCar() {
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
    this.carService.addCar(
      'New Fiesta', 
      'Ford',
      'https://morena.actfly.top/storage/2017/07/fiesta.png', 
      'Hatch',
      '5',
      'Automático',
      'Flex',
      'P',
      65.00)
  }

  ngOnInit(): void {
    this.addCar()
  }

}
