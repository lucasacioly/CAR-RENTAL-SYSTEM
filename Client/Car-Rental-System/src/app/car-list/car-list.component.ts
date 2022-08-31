import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_location_page(){
    this.route.navigate(['/location'])
  }

  ngOnInit(): void {
  }

}
