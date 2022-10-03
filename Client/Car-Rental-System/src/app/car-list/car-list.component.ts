import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AluguelType, CarService, CarType} from '../car.service';

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

  newCar: CarType = {
    id: 0,
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
    feedbacks: []
  }
  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  listaCarros : CarType[] = [];
  listaAlugueis: AluguelType[] = [];
  listaCarroEmail: [[CarType, string]] = [[this.newCar, '']];


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

  getAllRents() {
    return this.carService.getAllRents().subscribe({
      next: (rents) =>{
        this.listaAlugueis = rents;
        
        
        this.listaCarroEmail.pop()
        for (let i = 0; i < this.listaAlugueis.length; i++) {
          this.carService.getCarById(String(this.listaAlugueis[i].id)).subscribe({
            next: (car) =>{
              console.log(i);
              console.log(this.listaCarroEmail);
              
              this.listaCarroEmail.push([car, this.listaAlugueis[i].email])
              
            },
            error: () => {
              alert("fudeu")
            }
          })
        }
        return
        
      },
      error: () => {
        alert("fudeu")
      }
    })
  }

  getUserRents(email: string) {
    return this.carService.getUserRents(email).subscribe({
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
    if (this.id_page == 0) {
      this.getAllCars();
    }
    else if (this.id_page == 1 && this.isAdmin) {
      this.getAllRents();
    }

    else if (this.id_page == 1 && !this.isAdmin) {
      this.getUserRents(this.authService.clientEmail);
    }
    
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
