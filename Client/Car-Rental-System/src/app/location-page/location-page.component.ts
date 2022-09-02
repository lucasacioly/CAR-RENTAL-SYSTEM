import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_accessories(){
    this.route.navigate(['/options'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  ngOnInit(): void {
    this.PastDateTime();
  }

  min:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate = new Date();
    console.log(tdate);
  }
}
