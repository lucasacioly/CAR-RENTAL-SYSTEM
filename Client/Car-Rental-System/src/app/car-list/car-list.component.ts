import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarService, CarType} from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private route: Router, 
    private authService: AuthService, 
    private routeActivated: ActivatedRoute,
    private carService: CarService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  navigate_to_add_car_page(){
    this.route.navigate(['/addcar'])
  }


  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  listaCarros : CarType[] = [];


  getAllCars() {
    return this.carService.getAllCars().subscribe({
      next: (cars) =>{
        this.listaCarros = cars;
        console.log(this.listaCarros);
      },
      error: () => {
        alert("fudeu")
      }
    })
  }

  id_page = 0
  ngOnInit(): void {
    this.id_page = +this.routeActivated.snapshot.paramMap.get('id')!
    this.getAllCars();
  }

  ngDoCheck(){
    this.id_page = +this.routeActivated.snapshot.paramMap.get('id')!

  }

  /*
  ngDoCheck() {

    console.log(this.carService.cars);
    this.cars = this.carService.cars;
    //this.getAllCars();
  }
  */

}
