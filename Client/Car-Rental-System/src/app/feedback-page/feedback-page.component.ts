import { Component, Injectable, OnInit } from '@angular/core';
import { ParamMap, Route, ActivatedRoute, Router } from '@angular/router';
import { CarService, CarType, FeedbackType } from '../car.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class FeedbackPageComponent implements OnInit {

  constructor(private route: Router,
    private carService: CarService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routeActivated: ActivatedRoute) { }
  notas: number[] = [1,2,3,4,5]
  imagem = 'assets/carro2.png'
  navigate_to_home_page(){
    this.route.navigate([''])

  }
  feedbackForm = this.formBuilder.group({
    avaliacao: 0,
    descricao: ''
  })

  getFeedbackCar(car: CarType) {
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

  id = 0
  email = this.authService.clientEmail
  ngOnInit(): void {
    this.id = +this.routeActivated.snapshot.paramMap.get('id')!
    this.carService.getCarById(String(this.id)).subscribe({
      next: (car) =>{
        this.newCar = car;
        console.log(car);
        this.getFeedbackCar(this.newCar)
      },
      error: () => {
        alert("Deu ruim")
      }
    })
  }

  isClient = this.authService.isClient;
  isAdmin = this.authService.isAdmin;

  addFeedback(idCar: number, nome: string, nota: number, descricao: string){
    this.carService.addFeedback(idCar, nome, nota, descricao).subscribe({
      next: (feedbacks) =>{
        //this.newFeedback.reset();
        console.log(feedbacks);


      },
      error: () => {
        alert('Error');
      }
    })
  }

  deleteRent(id: number, email: string) {
    this.carService.deleteRent(email, id).subscribe({
      next: (message) =>{
        this.navigate_to_home_page()
        //alert(message.mensagem);
      },
      error: () => {
        alert('Error');
      }
    })
  }

  onSubmit() {
    if (this.feedbackForm.value.avaliacao! == 0) {
      alert("É preciso informar uma nota")
    } 
    else {
      let newFeedback: FeedbackType = {
        id: this.id,
        nome: this.authService.clientName,
        nota: Number(this.feedbackForm.value.avaliacao!),
        descricao: this.feedbackForm.value.descricao!
      }
      console.log("id:",this.id);

      this.addFeedback(this.id, newFeedback.nome, newFeedback.nota, newFeedback.descricao)
      this.feedbackForm.reset();
      this.deleteRent(this.id, this.email)
    }
  }

}
