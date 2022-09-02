import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  navigate_to_accessories(){
    this.route.navigate(['/options'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  advance_button(){
    if(this.isClient || this.isAdmin){
      this.navigate_to_accessories()
    }
    else {
      this.navigate_to_login_page()
    }
  }

  ngOnInit(): void {
    this.PastDateTime();
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  min:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate = new Date();
    console.log(tdate);
  }
}
