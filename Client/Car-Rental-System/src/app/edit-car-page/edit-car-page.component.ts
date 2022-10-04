import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
     private authService: AuthService,
     private routeActivated: ActivatedRoute) { }

    Marca:String[] = ["Ford", "Fiat", "Toyota", "Wolkswagen", "Mercedez", "Chevrolet", "Honda", "Nissan", "Hyundai", "Jeep", "BMW", "Audi"]
    Direcao:String[] = ["Elétrica", "Hidráulica", "Mecânica"]
    Combustivel:String[] = ["Gasolina", "Etanol", "Flex", "Elétrico", "Híbrido"]
    Bagageiro:String[] = ["P", "M", "G"]
    Categoria:String[] = ["Hatch", "Sedan", "SUV", "Caminhonete"]
    Cambio:String[] = ["Automático", "Manual"]
    Assentos:String[] = ["2", "5", "7+"]


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
    quantidade_disponivel: 0,
    feedbacks: []
  }

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

  id = 0

  ngOnInit(): void {
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    this.carService.getCarById(String(this.id)).subscribe({
      next: (car) =>{
        this.selectedCar = car
        this.editCarFormBuilder(this.selectedCar)
      },
      error: () => {
        alert("deu ruim")
      }
    })
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
    disponiveis: 0,
    preco: 0
  })


  carroId = 0

  editCarFormBuilder(car: CarType) {

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
    this.editCarForm.controls['disponiveis'].setValue(car.quantidade_disponivel)
    this.editCarForm.controls['preco'].setValue(car.preco)

  }

  alertTodosCampos = false
  alertPrecoNeg = false
  alertCarrosNeg = false
  alertErro = false

  editCar(){
    if (this.editCarForm.value.nome! == '' || this.editCarForm.value.nome! == '' || this.editCarForm.value.marca! == '' || this.editCarForm.value.ano! == 0 || this.editCarForm.value.direcao! == '' || this.editCarForm.value.imagem! == '' || this.editCarForm.value.categoria! == '' || this.editCarForm.value.totAssentos! == '' || this.editCarForm.value.cambio! == '' || this.editCarForm.value.tipoCombustivel! == '' || this.editCarForm.value.tamanhoMala! == '') {
      this.alertTodosCampos = true
      this.alertCarrosNeg = false
      this.alertPrecoNeg = false
    }
    else if (this.editCarForm.value.disponiveis! < 0) {
      this.alertCarrosNeg = true
      this.alertTodosCampos = false
      this.alertPrecoNeg = false
    }
    else if (this.editCarForm.value.preco! < 0) {
      this.alertPrecoNeg = true
      this.alertTodosCampos = false
      this.alertCarrosNeg = false
    }
    else {
      this.alertTodosCampos = false
      this.alertCarrosNeg = false
      this.alertPrecoNeg = false
      return this.carService.editCar(String(this.carroId), this.editCarForm.value.nome!,
      this.editCarForm.value.marca!,
      this.editCarForm.value.ano!,
      this.editCarForm.value.direcao!,
      this.editCarForm.value.imagem!,
      this.editCarForm.value.categoria!,
      this.editCarForm.value.totAssentos!,
      this.editCarForm.value.cambio!,
      this.editCarForm.value.tipoCombustivel!,
      this.editCarForm.value.tamanhoMala!,
      this.editCarForm.value.preco!,
      this.editCarForm.value.disponiveis!,
      this.selectedCar.feedbacks).subscribe({
        next: () =>{
          this.alertErro = false
          this.editCarForm.reset()
          this.route.navigate(['/carlist/0'])
          alert("Carro editado com sucesso");
        },
        error: () => {
          this.alertErro = true
          alert('Deu ruim');
        }
      })
    }
    return
  }

  onSubmit() {
    this.editCar()

  }

  closeAlerts(){
    this.alertTodosCampos = false
    this.alertPrecoNeg = false
    this.alertCarrosNeg = false
    this.alertErro = false
  }

}
