import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  show: boolean = false;
  show_senha() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
