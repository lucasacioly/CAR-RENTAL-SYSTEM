import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      next: () =>{
        alert('Feedback adicionado com sucesso')
      },
      error: () => {
        alert('Error');
      }
    })
  }

  deleteRent(id: number, email: string) {
    this.carService.deleteRent(email, id).subscribe({
      next: () =>{
        this.navigate_to_home_page()
      },
      error: () => {
        alert('Error');
      }
    })
  }


  alertComNota = true
  onSubmit() {
    if (this.feedbackForm.value.avaliacao! == 0) {
      this.alertComNota = false
    }
    else {
      this.alertComNota = true
      let newFeedback: FeedbackType = {
        id: this.id,
        nome: this.authService.clientName,
        nota: Number(this.feedbackForm.value.avaliacao!),
        descricao: this.feedbackForm.value.descricao!
      }

      this.addFeedback(this.id, newFeedback.nome, newFeedback.nota, newFeedback.descricao)
      this.feedbackForm.reset();
      this.deleteRent(this.id, this.email)
    }
  }

  closeAlerts(){
    this.alertComNota = true
  }

}
