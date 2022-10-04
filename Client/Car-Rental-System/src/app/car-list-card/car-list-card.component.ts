import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AluguelType, CarService, CarType } from '../car.service';
import { EditCarPageComponent } from '../edit-car-page/edit-car-page.component';
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
  @Input() retirada!: string;
  @Input() devolucao!: string;
  @Input() pagamento!: string;
  @Input() devolvido!: string;


  constructor(private authService: AuthService,
    public route: Router,
    private carService: CarService,
    private editCarPage: EditCarPageComponent,
    private carList : CarListComponent) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;
  retiradaData = new Date();
  devolucaoData = new Date();
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
    this.retiradaData = new Date(this.retirada)
    this.devolucaoData = new Date(this.devolucao)
    this.retirada = this.retiradaData.toLocaleDateString("pt-BR")
    this.devolucao = this.devolucaoData.toLocaleDateString("pt-BR")
    this.getAllRents()
  }

  todosAlugueis : AluguelType[] = []

  getAllRents(){
    return this.carService.getAllRents().subscribe({
      next: (rents) =>{
        this.todosAlugueis = rents
      },
      error: () =>{
        alert('deu ruim')
      }
    })
  }

  alugado = false
  alertRemovAlug = false
  removeCar(id: string) {
    for(let i = 0; i < this.todosAlugueis.length; i++){
      if(+id == this.todosAlugueis[i].id){
        this.alugado = true
      }
    }
    if(!this.alugado){
    return this.carService.removeCar(id).subscribe({
      next: (message) =>{
        this.alertRemovAlug = false
        this.carList.getAllCars()
        alert('Carro removido com sucesso');
      },
      error: () => {
        alert('Carro não encontrado');
      }
    })}
    else{
      this.alertRemovAlug = true
    }
    return
  }

  editCar(id: string) {
    return this.carService.getCarById(id).subscribe({
      next: (car) =>{
        this.car = car;
        this.editCarPage.editCarFormBuilder(this.car!)
        this.route.navigate(['/editcar'])
      },
      error: () => {
        alert("Carro não encontrado")
      }
    })
  }


  goToReturn() {
    this.route.navigate(['/carreturn', this.id],{queryParams: {email: this.email, retirada: this.retirada, devolucao: this.devolucao, pagamento: this.pagamento}})
  }

  closeAlert(){
    this.alertRemovAlug = false
  }

}

