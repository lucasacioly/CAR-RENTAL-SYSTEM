import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService, CarType } from '../car.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router, private carService: CarService, ) {

  }


  navigate_to_car_list(){
    this.route.navigate(['/carlist'])
  }

  ngOnInit(): void {
  }

}
