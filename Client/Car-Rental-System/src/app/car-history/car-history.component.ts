import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.scss']
})
export class CarHistoryComponent implements OnInit {

  constructor(private route: Router, private carService: CarService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  cars = this.carService.cars;

  ngOnInit(): void {
  }

}
