import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AluguelType, CarService, CarType } from '../car.service';
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
  @Input() retirada!: string;
  @Input() devolucao!: string;
  @Input() pagamento!: string;
  @Input() devolvido!: string;


  constructor(private authService: AuthService,
    public route: Router,
    private carService: CarService,
    private editCarPage: EditCarPageComponent,
    private feedbackPage: FeedbackPageComponent,
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
    console.log("teste", this.nome);
    this.retiradaData = new Date(this.retirada)
    this.devolucaoData = new Date(this.devolucao)
    this.retirada = this.retiradaData.toLocaleDateString("pt-BR")
    this.devolucao = this.devolucaoData.toLocaleDateString("pt-BR")
    this.getAllRents()
    console.log(this.qtdeCarros)
  }

  navigate_to_edit_page(){
    this.route.navigate(['/editcar'])
  }

  navigate_to_location_page(){
    this.route.navigate(['/location'])
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

  removeCar(id: string) {
    for(let i = 0; i < this.todosAlugueis.length; i++){
      if(+id == this.todosAlugueis[i].id){
        //&& this.todosAlugueis[i].devolvido == false
        this.alugado = true
      }
    }
    if(!this.alugado){
    return this.carService.removeCar(id).subscribe({
      next: (message) =>{
        this.carList.getAllCars()
        alert(message.message);
      },
      error: () => {
        alert('deu ruim');
      }
    })}
    else{
      alert("Não é possível excluir um carro que está alugado")
    }
    return
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
        alert("deu ruim")
      }
    })
  }


  goToReturn() {
    console.log("retirada: ",this.retirada);
    console.log("devolucao: ",this.devolucao);

    this.route.navigate(['/carreturn', this.id],{queryParams: {email: this.email, retirada: this.retirada, devolucao: this.devolucao, pagamento: this.pagamento}})
  }

}
