import { Component, OnInit } from '@angular/core';
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
  listaCarroEmail: [[CarType, string, Date, Date, number, boolean]] = [[this.newCar, '', new Date(), new Date(), 0, false]];


  getAllCars() {
    return this.carService.getAllCars().subscribe({
      next: (cars) =>{
        this.listaCarros = cars;
      },
      error: () => {
        alert("deu ruim")
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
              if (this.listaAlugueis[i].devolvido == false) {
                this.listaCarroEmail.push([car, this.listaAlugueis[i].email, this.listaAlugueis[i].data_retirada, this.listaAlugueis[i].data_devolucao, this.listaAlugueis[i].preco, this.listaAlugueis[i].devolvido])
              }
            },
            error: () => {
              alert("deu ruim")
            }
          })
        }
        return

      },
      error: () => {
        alert("deu ruim")
      }
    })
  }

  getUserRents(email: string) {
    return this.carService.getUserRents(email).subscribe({
      next: (rents) =>{
        this.listaAlugueis = rents;
        this.listaCarroEmail.pop()
        for (let i = 0; i < this.listaAlugueis.length; i++) {
          this.carService.getCarById(String(this.listaAlugueis[i].id)).subscribe({
            next: (car) =>{
              this.listaCarroEmail.push([car, this.listaAlugueis[i].email, this.listaAlugueis[i].data_retirada, this.listaAlugueis[i].data_devolucao, this.listaAlugueis[i].preco, this.listaAlugueis[i].devolvido])

            },
            error: () => {
              alert("deu ruim")
            }
          })
        }
        return
      },
      error: () => {
        alert("deu ruim")
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

    else if (this.id_page == 1 && !this.isAdmin && this.isClient) {
      this.getUserRents(this.authService.clientEmail);
    }

  }

  ngDoCheck(){
    this.id_page = +this.routeActivated.snapshot.paramMap.get('id')!

  }

}
