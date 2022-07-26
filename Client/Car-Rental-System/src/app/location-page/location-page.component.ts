import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarType, CarService, FeedbackType } from '../car.service';
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


  navigate_to_home_page(){
    this.route.navigate([''])
  }

  navigate_to_login_page(){
    this.route.navigate(['/login'])
  }

  alertDatas = true
  onSubmit(){
    if(this.locationForm.value.retirada == '' || this.locationForm.value.devolucao == ''){
      this.alertDatas = false
    }
    else if(this.isClient || this.isAdmin){
      this.alertDatas = true
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
    return this.carService.getCarById(id).subscribe({
      next: (car) =>{
        this.selectedCar = car;
      },
      error: () => {
        alert("Deu ruim")
      }
    })
  }
  data = new Date();
  dia = 0;
  mes = 0;
  ano = 0;
  dataAtual = ''


  ngOnInit(): void {
    this.PastDateTime();
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    this.dataAtual = String(this.data.getDate()).padStart(2, '0');
    this.dia = Number(this.dataAtual)
    this.dataAtual = String(this.data.getMonth() + 1).padStart(2, '0');
    this.mes = Number(this.dataAtual)
    this.ano = this.data.getFullYear();
    this.dataAtual = this.dia + '/' + this.mes + '/' + this.ano;

    this.carService.getCarById(String(this.id)).subscribe({
      next: (car) =>{
        this.selectedCar = car;
      },
      error: () => {
        alert("deu ruim")
      }
    })
    this.getCarFeedbacks()
    this.getCar(String(this.id))
  }

  listaFeedback : FeedbackType[] = []

  getCarFeedbacks(){
    this.carService.getCarFeedbacks(this.id).subscribe({
      next: (feedbacks) => {
        this.listaFeedback = feedbacks
      },
      error: () => {
        alert("Não possui feedbacks")
      }
    })

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

  closeAlert(){
    this.alertDatas = true
  }
}
