import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-car-page',
  templateUrl: './edit-car-page.component.html',
  styleUrls: ['./edit-car-page.component.scss']
})
export class EditCarPageComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_car_list_page(){
    this.route.navigate(['/carlist'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  ngOnInit(): void {
  }

}
