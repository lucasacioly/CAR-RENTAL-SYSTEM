import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-car-page',
  templateUrl: './add-edit-car-page.component.html',
  styleUrls: ['./add-edit-car-page.component.scss']
})
export class AddEditCarPageComponent implements OnInit {

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
