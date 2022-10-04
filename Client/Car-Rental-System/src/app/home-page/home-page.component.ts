import { Component, OnInit } from '@angular/core';
import { CarType, CarService, FeedbackType } from '../car.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private carService: CarService, private route: Router) {}

  ngOnInit(): void {}
  navigate_to_location_page(id : number){
    this.route.navigate(['/location', id])
  }

  existCar(id: number){
    this.carService.getCarById(String(id)).subscribe({
      next: () =>{
        this.navigate_to_location_page(Number(id))
      },
      error: () => {
        alert("Esse carro foi removido, desculpe pelo transtorno")
      }
    })
  }
}

