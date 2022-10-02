import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CarService, CarType } from '../car.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-car-page',
  templateUrl: './edit-car-page.component.html',
  styleUrls: ['./edit-car-page.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class EditCarPageComponent implements OnInit {

  constructor(private route: Router,
     private formBuilder: FormBuilder,
     private carService: CarService,
     private authService: AuthService) { }

  navigate_to_car_list_page(){
    this.route.navigate(['/carlist'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

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
    quantidade_disponivel: 5,
    feedbacks: []
  }

  ngOnInit(): void {
    console.log(this.carroId);
    this.newCar = this.carService.carTransition!
    console.log("aaa" + this.carService.carTransition!.marca);
    this.editCarFormBuilder(this.newCar)


  }

  ngDoCheck(): void{
    this.isAdmin = this.authService.isAdmin;
    if(!this.isAdmin){
      this.navigate_to_login_page()
    }
  }

  editCarForm = this.formBuilder.group({
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
    preco: 0
  })


  carroId = 0

  editCarFormBuilder(car: CarType) {
    console.log('entrou');
    console.log(car);

    this.carroId = car.id
    this.editCarForm.controls['id'].setValue(car.id)
    this.editCarForm.controls['marca'].setValue(car.marca)
    this.editCarForm.controls['nome'].setValue(car.nome)
    this.editCarForm.controls['ano'].setValue(car.ano)
    this.editCarForm.controls['direcao'].setValue(car.direcao)
    this.editCarForm.controls['imagem'].setValue(car.imagem)
    this.editCarForm.controls['categoria'].setValue(car.categoria)
    this.editCarForm.controls['totAssentos'].setValue(car.totAssentos)
    this.editCarForm.controls['cambio'].setValue(car.cambio)
    this.editCarForm.controls['tipoCombustivel'].setValue(car.tipoCombustivel)
    this.editCarForm.controls['tamanhoMala'].setValue(car.tamanhoMala)
    this.editCarForm.controls['preco'].setValue(car.preco)
    console.log(this.editCarForm.value.marca!);


  }

  onSubmit() {
    let newCar = {
      id: this.carroId,
      marca: this.editCarForm.value.marca!,
      nome: this.editCarForm.value.nome!,
      ano: this.editCarForm.value.ano!,
      direcao: this.editCarForm.value.direcao!,
      imagem: this.editCarForm.value.imagem!,
      categoria: this.editCarForm.value.categoria!,
      totAssentos: this.editCarForm.value.totAssentos!,
      cambio: this.editCarForm.value.cambio!,
      tipoCombustivel: this.editCarForm.value.tipoCombustivel!,
      tamanhoMala: this.editCarForm.value.tamanhoMala!,
      preco: this.editCarForm.value.preco!,
      quantidade_disponivel: 5,
      feedbacks: this.carService.carTransition!.feedbacks
    }
    console.log(newCar);

    this.carService.editCar(this.carroId, newCar)
    this.editCarForm.reset()
    this.route.navigate(['/carlist'])
  }

}
