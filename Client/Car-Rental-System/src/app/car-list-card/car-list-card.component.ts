import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list-card',
  templateUrl: './car-list-card.component.html',
  styleUrls: ['./car-list-card.component.scss']
})
export class CarListCardComponent implements OnInit {

    @Input() nome!: string;
    @Input() imagem!: string;
    @Input() marca!: string;
    @Input() cambio!: string;
    @Input() totAssentos!: string;
    @Input() tamanhoMala!: string;
    @Input() tipoCombustivel!: string;
    @Input() preco!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
