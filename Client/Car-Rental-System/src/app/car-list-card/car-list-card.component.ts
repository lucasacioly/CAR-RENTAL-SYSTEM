import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) { }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  ngOnInit(): void {
  }

}
