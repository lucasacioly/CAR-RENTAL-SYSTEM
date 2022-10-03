import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAllCars(): Observable<CarType[]>{
    return this.http.get<CarType[]>(`${environment.url}/car`);
  }

  addCar(nome: string,
    marca: string,
    ano: number,
    direcao: string,
    imagem: string,
    categoria: string,
    totAssentos: string,
    cambio: string,
    tipoCombustivel: string,
    tamanhoMala: string,
    preco: number,
    quantidade_disponivel: number) : Observable<any> {

      const newCar : any = {nome : nome,
        marca : marca,
        ano : ano,
        direcao : direcao,
        imagem : imagem,
        categoria : categoria,
        totAssentos : totAssentos,
        cambio : cambio,
        tipoCombustivel : tipoCombustivel,
        tamanhoMala : tamanhoMala,
        preco : preco,
        quantidade_disponivel : quantidade_disponivel};

      return this.http.post<any>(`${environment.url}/car`, newCar)
    }

  removeCar(id : string) : Observable<any> {
    return this.http.delete<any>(`${environment.url}/car/${id}`)
  }

  getCarById(id : string) : Observable<CarType> {
    return this.http.get<CarType>(`${environment.url}/car/${id}`)
  }

  editCar(id : string,
    nome: string,
    marca: string,
    ano: number,
    direcao: string,
    imagem: string,
    categoria: string,
    totAssentos: string,
    cambio: string,
    tipoCombustivel: string,
    tamanhoMala: string,
    preco: number,
    quantidade_disponivel: number,
    feedbacks: FeedbackType[]) : Observable<any> {

    const editedCar : any = {id: id,
        nome : nome,
        marca : marca,
        ano : ano,
        direcao : direcao,
        imagem : imagem,
        categoria : categoria,
        totAssentos : totAssentos,
        cambio : cambio,
        tipoCombustivel : tipoCombustivel,
        tamanhoMala : tamanhoMala,
        preco : preco,
        quantidade_disponivel : quantidade_disponivel,
        feedbacks : feedbacks
    }
    console.log(editedCar.quantidade_disponivel)
    return this.http.put<any>(`${environment.url}/car/${id}`, editedCar)
  }

  addFeedback(idCar: number, nome: string, nota: number, descricao: string) : Observable<FeedbackType> {
    const feedback : any = {
      idCar: idCar,
      nome: nome,
      nota: nota,
      descricao: descricao
    }

    return this.http.post<FeedbackType>(`${environment.url}/feedback`, feedback);
  }

  getCarFeedbacks(id: number): Observable<FeedbackType[]>{
    return this.http.get<FeedbackType[]>(`${environment.url}/feedback/${id}`)
  }

  // Retorna todos os alugueis (admin)
  getAllRents(): Observable<AluguelType[]> {
    return this.http.get<AluguelType[]>(`${environment.url}/rent`)
  }

  // Retorna todos os alugueis de um usuário (email)
  getUserRents(email: string): Observable<AluguelType[]> {
    return this.http.get<AluguelType[]>(`${environment.url}/rent/${email}`)
  }

  // Novo aluguel
  addRent(email : string, id: number, data_retirada: Date, data_devolucao: Date, preco: number): Observable<any> {
    const rent : any = {
      email: email,
      id: id,
      data_retirada: data_retirada,
      data_devolucao: data_devolucao,
      preco: preco
    }
    console.log(rent);

    return this.http.post<any>(`${environment.url}/rent`, rent);
  }

  //  Devolução de um carro
  returnCar(email: string, id: number, data_retirada: Date, data_devolucao: Date, preco: number): Observable<any>{
    let editRent: any = {email: email,
                         id: id,
                         data_retirada: data_retirada,
                         data_devolucao: data_devolucao,
                         preco: preco,
                         devolvido: false}
    return this.http.put<any>(`${environment.url}/rent/${email}/${id}`, editRent)
  }

  // feedback foi feito de um carro
  deleteRent(email: string, id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}/rent/${email}/${id}`)
  }
}

export interface CarType {
  id: number
  ano: number
  direcao: string
  nome: string
  marca: string
  imagem: string
  categoria: string
  totAssentos: string
  cambio: string
  tipoCombustivel: string
  tamanhoMala: string
  preco: number
  quantidade_disponivel: number
  feedbacks: FeedbackType[]

}

export interface FeedbackType {
  id: number
  nome: string
  nota: number
  descricao: string
}

export interface AluguelType {
  email: string
  id: number
  data_retirada: Date
  data_devolucao: Date
  preco: number
  devolvido: boolean
}
