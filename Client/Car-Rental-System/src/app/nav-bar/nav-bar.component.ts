import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  nav_openned = false;
  
  nav_onclick() {
    this.nav_openned = !this.nav_openned
  }

}
