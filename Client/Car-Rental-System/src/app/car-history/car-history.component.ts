import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarType } from '../car.service';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.scss']
})
export class CarHistoryComponent implements OnInit {

  constructor(private route: Router,
    private authService: AuthService,
    private routeActivated: ActivatedRoute) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  list_cars : CarType[] = [];

  id = 0
  ngOnInit(): void {
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    if (this.id == 1){
      this.route.navigate(['/carlist/1'])
    }
    else if (this.id == 0){
      this.route.navigate(['/carlist/0'])
    }
  }

}
