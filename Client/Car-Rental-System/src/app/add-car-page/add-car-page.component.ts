import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.scss']
})
export class AddCarPageComponent implements OnInit {

  addCarForm = this.formBuilder.group({
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
    quantidade_disponivel: 0
  })

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private carService: CarService) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_car_list_page(){
    this.route.navigate(['/carlist'])
  }

  addCar(){
    if (this.addCarForm.value.nome! == '' || this.addCarForm.value.nome! == '' || this.addCarForm.value.marca! == '' || this.addCarForm.value.ano! == 0 || this.addCarForm.value.direcao! == '' || this.addCarForm.value.imagem! == '' || this.addCarForm.value.categoria! == '' || this.addCarForm.value.totAssentos! == '' || this.addCarForm.value.cambio! == '' || this.addCarForm.value.tipoCombustivel! == '' || this.addCarForm.value.tamanhoMala! == '') {
      alert("Preencha todos os campos")
    }
    else if (this.addCarForm.value.quantidade_disponivel! < 0) {
      alert("A quantidade de carros não pode ser negativa")
    }
    else if (this.addCarForm.value.preco! < 0) {
      alert("O preço do aluguel não pode ser negativo")
    }
    else {
      return this.carService.addCar(this.addCarForm.value.nome!,
        this.addCarForm.value.marca!,
        this.addCarForm.value.ano!,
        this.addCarForm.value.direcao!,
        this.addCarForm.value.imagem!,
        this.addCarForm.value.categoria!,
        this.addCarForm.value.totAssentos!,
        this.addCarForm.value.cambio!,
        this.addCarForm.value.tipoCombustivel!,
        this.addCarForm.value.tamanhoMala!,
        this.addCarForm.value.preco!,
        this.addCarForm.value.quantidade_disponivel!).subscribe({
        next: (message) =>{
          this.addCarForm.reset();
          this.route.navigate(['/carlist/0'])
          alert(message.mensagem);
        },
        error: () => {
          alert('Houve um erro ao adicionar o carro');
        }
      })
    }
    return
  }

  onSubmit() {
    this.addCar()
  }

  ngOnInit(): void {
  }

}
