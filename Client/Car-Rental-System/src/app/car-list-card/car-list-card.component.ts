import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

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

  constructor(private authService: AuthService, public route: Router, private carService: CarService) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  ngOnInit(): void {
  }

  removeCar(id: string) {
    console.log(id);
    this.carService.removeCar(parseInt(id, 10));
  }

}
