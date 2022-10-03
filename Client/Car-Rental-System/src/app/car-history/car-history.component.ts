import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarListComponent } from '../car-list/car-list.component';
import { CarService, CarType } from '../car.service';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.scss']
})
export class CarHistoryComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService, private carService: CarService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  list_cars : CarType[] = [];

  ngOnInit(): void {
  }

}
