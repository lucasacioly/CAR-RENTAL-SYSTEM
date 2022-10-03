import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarType, CarService, AluguelType } from '../car.service';

@Component({
  selector: 'app-options-location-page',
  templateUrl: './options-location-page.component.html',
  styleUrls: ['./options-location-page.component.scss']
})
export class OptionsLocationComponent implements OnInit {

  constructor(private route: Router,
    private routeActivated: ActivatedRoute,
    private carService: CarService,
    private authService: AuthService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }
  id = 0
  retirada = ''
  retiradaData: Date = new Date();
  devolucaoData: Date = new Date();
  dias = 0
  devolucao = ''
  total = 0
  email = ''

  seguros = [
    {name: 'Proteção de Vidros', value : 18},
    {name: 'Proteção de Pneus', value : 14},
    {name: 'Cobertura para Terceiros ', value : 10},
    {name : 'Seguro Premium', value : 45}
  ];

  acessorios = [
    {name: 'GPS', value : 50},
    {name: 'Wi-Fi', value : 50},
    {name: 'Limpeza do Veículo', value : 30},
    {name: 'Bebê Conforto', value : 20},
    {name: 'Assento de Elevação', value : 20}
  ]

  selectedCar: CarType = {
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

  imagem = ''

  onChange(value: number, event : any, type : string): void {
    if (type === '1') {
      if (event.target.checked) {
        this.total += value*this.dias;
      } else {
        this.total -= value*this.dias;
      }
    }
    else if (type === '2') {
      if (event.target.checked) {
        this.total += value;
      } else {
        this.total -= value;
      }
    }

  }

  getDayDiff(startDate: string, endDate: string) {
    const msInDay = 24 * 60 * 60 * 1000;
    //console.log("numero ?", Date.parse(startDate));
    //console.log("numero ?", Date.parse(endDate));

    return Math.round(Math.abs(Date.parse(endDate) - Date.parse(startDate)) / msInDay);
  }

  getCar(id: string) {
    console.log(id);
    return this.carService.getCarById(id).subscribe({
      next: (car) =>{
        this.selectedCar = car;
        console.log(car);
        this.imagem = this.selectedCar.imagem;
        this.total = this.dias*this.selectedCar.preco
      },
      error: () => {
        alert("fudeu")
      }
    })
  }

  ngOnInit(): void {
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    console.log("id: " + this.id);
    this.routeActivated.queryParams
    .subscribe(params => {
      this.retirada = params['retirada'];
      this.devolucao = params['devolucao'];
      console.log(this.retirada);
    }
   );
    this.retiradaData = new Date(this.retirada)
    this.devolucaoData = new Date(this.devolucao)
    console.log("data de retirada em Date: " + this.retiradaData);
    this.dias = this.getDayDiff(this.retirada, this.devolucao)
    console.log("dias em dias: " + this.dias);


    this.getCar(String(this.id));
    this.email = this.authService.clientEmail
  }

  createRent() {
    console.log(this.email);
    console.log(this.id);
    console.log(this.retiradaData);
    console.log(this.devolucaoData);
    
    this.carService.addRent(this.email, this.id, this.retiradaData, this.devolucaoData, this.total).subscribe({
      next: (message) =>{
        this.route.navigate([''])
        alert(message.mensagem);
      },
      error: () => {
        alert("fudeu")
      }
    })
  }


}
