import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CarService, CarType } from '../car.service';
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
  @Input() email!: string;

  constructor(private authService: AuthService,
    public route: Router,
    private carService: CarService,
    private editCarPage: EditCarPageComponent,
    private feedbackPage: FeedbackPageComponent,
    private carList : CarListComponent) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  car : CarType = { id : 0,
                    marca: '',
                    nome: '',
                    ano: 2022,
                    direcao: '',
                    imagem: '',
                    categoria: '',
                    totAssentos: '',
                    cambio: '',
                    tipoCombustivel: '',
                    tamanhoMala: '',
                    preco: 0,
                    quantidade_disponivel: 0,
                    feedbacks : []}


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
    return this.carService.getCarById(id).subscribe({
      next: (car) =>{
        this.car = car;
        this.editCarPage.editCarFormBuilder(this.car!)
        this.route.navigate(['/editcar'])
        console.log(car);
      },
      error: () => {
        alert("fudeu")
      }
    })
  }

  feedbackCar(id: string) {/*
    console.log(Number(id));
    console.log(this.carService.cars);


    console.log(this.carService.getCar(Number(id))!);

    this.feedbackPage.getFeedbackCar(this.carService.getCar(Number(id))!)
    this.route.navigate(['feedback'])*/
  }

}
