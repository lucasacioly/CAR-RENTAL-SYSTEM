import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.scss']
})
export class AddCarPageComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_car_list_page(){
    this.route.navigate(['/carlist'])
  }

  ngOnInit(): void {
  }

}
