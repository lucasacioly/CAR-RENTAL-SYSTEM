import { Component, OnInit } from '@angular/core';
import { ParamMap, Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarService, CarType } from '../car.service';

@Component({
  selector: 'app-car-return',
  templateUrl: './car-return.component.html',
  styleUrls: ['./car-return.component.scss']
})
export class CarReturnComponent implements OnInit {

  constructor(private route: Router,
              private carService: CarService,
              private routeActivated: ActivatedRoute) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  id = 0
  imagem = ''
  getReturnCar(car: CarType) {
    this.imagem = car.imagem
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

  ngOnInit(): void {
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    this.newCar = this.carService.getCar(this.id)!

    this.getReturnCar(this.newCar)
  }

}
