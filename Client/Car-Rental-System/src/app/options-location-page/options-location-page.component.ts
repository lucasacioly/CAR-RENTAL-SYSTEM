import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarType, CarService } from '../car.service';

@Component({
  selector: 'app-options-location-page',
  templateUrl: './options-location-page.component.html',
  styleUrls: ['./options-location-page.component.scss']
})
export class OptionsLocationComponent implements OnInit {

  constructor(private route: Router,
    private routeActivated: ActivatedRoute,
    private carService: CarService) { }

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



  }


}
