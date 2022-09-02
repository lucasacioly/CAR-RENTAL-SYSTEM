import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-location-page',
  templateUrl: './options-location-page.component.html',
  styleUrls: ['./options-location-page.component.scss']
})
export class OptionsLocationComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  ngOnInit(): void {
  }

}
