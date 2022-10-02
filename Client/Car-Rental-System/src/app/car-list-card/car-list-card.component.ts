import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { EditCarPageComponent } from '../edit-car-page/edit-car-page.component';
import { FeedbackPageComponent } from '../feedback-page/feedback-page.component';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-car-list-card',
  templateUrl: './car-list-card.component.html',
  styleUrls: ['./car-list-card.component.scss']
})
export class CarListCardComponent implements OnInit {

  @Input() id!: string;
  @Input() nome!: string;
  @Input() imagem!: string;
  @Input() marca!: string;
  @Input() cambio!: string;
  @Input() totAssentos!: string;
  @Input() tamanhoMala!: string;
  @Input() tipoCombustivel!: string;
  @Input() preco!: string;
  @Input() qtdeCarros!: string;

  constructor(private authService: AuthService,
    public route: Router,
    private carService: CarService,
    private editCarPage: EditCarPageComponent,
    private feedbackPage: FeedbackPageComponent,
    public carList : CarListComponent) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  ngOnInit(): void {
  }

  navigate_to_edit_page(){
    this.route.navigate(['/editcar'])
  }

  navigate_to_location_page(){
    this.route.navigate(['/location'])
  }

  removeCar(id: string) {
    /*
    console.log(id);
    this.carService.removeCar(parseInt(id, 10));
    */
    return this.carService.removeCar(id).subscribe({
      next: (message) =>{
        this.carList.getAllCars()
        alert(message.message);
      },
      error: () => {
        alert('fudeu');
      }
    })
  }

  editCar(id: string) {
    console.log(id);

    this.editCarPage.editCarFormBuilder(this.carService.getCar(Number(id))!)
    this.route.navigate(['/editcar'])
  }

  feedbackCar(id: string) {
    console.log(Number(id));
    console.log(this.carService.cars);


    console.log(this.carService.getCar(Number(id))!);

    this.feedbackPage.getFeedbackCar(this.carService.getCar(Number(id))!)
    this.route.navigate(['feedback'])
  }

}
