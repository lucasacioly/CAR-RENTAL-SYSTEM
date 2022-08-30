import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router) {

  }

  navigate_to_car_list(){
    this.route.navigate(['/carlist'])
  }

  navigate_to_location_page(){
    this.route.navigate(['/location'])
  }

  ngOnInit(): void {
  }

}
