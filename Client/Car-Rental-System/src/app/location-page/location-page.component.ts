import { Component, OnInit } from '@angular/core';
import { ParamMap, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarType, CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  constructor(private route: Router,
    private authService: AuthService,
    private routeActivated: ActivatedRoute,
    private carService: CarService,
    private formBuilder: FormBuilder) { }

  navigate_to_accessories(){
    this.route.navigate(['/options'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  onSubmit(){
    if(this.isClient || this.isAdmin){
      console.log(this.locationForm.value.retirada!);

      this.route.navigate(['/options', this.id],{queryParams: {retirada: this.locationForm.value.retirada!, devolucao: this.locationForm.value.devolucao!}})
      this.locationForm.reset();

    }
    else {
      this.navigate_to_login_page()
    }
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

  locationForm = this.formBuilder.group({
    retirada: '',
    devolucao: ''
  })


  getCar(id: string) {
    console.log(id);
    return this.carService.getCarById(id).subscribe({
      next: (car) =>{
        this.selectedCar = car;
        console.log(car);
      },
      error: () => {
        alert("fudeu")
      }
    })
  }

  ngOnInit(): void {
    this.PastDateTime();
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    this.getCar(String(this.id))
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  min_date:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate:any = new Date();
    var date:any = tdate.getDate();
    if (date < 10) {
      date = '10' + date;
    }
    var month:any = tdate.getMonth();
    if (month < 10) {
      month = '10' + month + 1;
    }
    var year:any = tdate.getFullYear();
    var hours:any = tdate.getHours();
    var minutes:any = tdate.getMinutes();

    this.min_date = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;
  }

  values:any;
  onChange(value:any){
    var todate:any = new Date();
    var selectDate:any = new Date();
    if(todate > selectDate){
      this.values="";
      alert("Please, select a valid date and time");
    }


  }
}
