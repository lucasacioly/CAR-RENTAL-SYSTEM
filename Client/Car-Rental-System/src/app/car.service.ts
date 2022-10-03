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

  carTransition: CarType | undefined = undefined
  public cars: CarType[] = [{
    id: 1,
    marca: 'VolksWagen',
    nome: 'Fox',
    ano: 2017,
    direcao: 'Hidráulica',
    imagem: 'https://cdn.autopapo.com.br/carro/volkswagen/fox-16-16v-msi-highline-flex-2018/destaque-v1.png',
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Manual',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'P',
    preco: 57.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 2,
    marca: 'Ford',
    nome: 'New Fiesta',
    ano: 2013,
    direcao: 'Elétrica',
    imagem: 'https://morena.actfly.top/storage/2017/07/fiesta.png',
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'P',
    preco: 65.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 3,
    marca: 'Toyota',
    nome: 'Yaris',
    ano: 2019,
    direcao: 'Elétrica',
    imagem: 'https://pensecarros.com.br/cms/uploads/toyota-yaris-1-5-16v-flex-xls-multidrive-5e4dfff8a4551.png',
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'M',
    preco: 132.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 4,
    marca: 'Fiat',
    nome: 'Toro',
    ano: 2021,
    direcao: 'Elétrica',
    imagem: 'https://www.webmotors.com.br/imagens/prod/348257/FIAT_TORO_2.0_16V_TURBO_DIESEL_ULTRA_4WD_AT9_34825710532193386.webp?s=fill&w=130&h=97&q=70&t=true)',
    categoria: 'Caminhonete',
    totAssentos: '5',
    cambio: 'Manual',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'G',
    preco: 150.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 5,
    marca: 'Toyota',
    nome: 'Corolla',
    ano: 2022,
    direcao: 'Elétrica',
    imagem: 'https://www.webmotors.com.br/imagens/prod/348131/TOYOTA_COROLLA_2.0_VVTIE_FLEX_GLI_DIRECT_SHIFT_34813113414262741.webp?s=fill&w=130&h=97&q=70&t=true)',
    categoria: 'Sedan',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Gasolina',
    tamanhoMala: 'G',
    preco: 200.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 6,
    marca: 'Fiat',
    nome: 'Mobi',
    ano: 2018,
    direcao: 'Elétrica',
    imagem: 'https://www.webmotors.com.br/imagens/prod/346680/FIAT_MOBI_1.0_EVO_FLEX_LIKE._MANUAL_34668017564139829.webp?s=fill&w=130&h=97&q=70&t=true)',
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Manual',
    tipoCombustivel: 'Gasolina',
    tamanhoMala: 'P',
    preco: 60.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 7,
    marca: 'Wolkswagen',
    nome: 'T-Cross',
    ano: 2021,
    direcao: 'Elétrica',
    imagem: 'https://img2.icarros.com/dbimg/imgmodelo/2/2774_3.png',
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Gasolina',
    tamanhoMala: 'M',
    preco: 170.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
  {
    id: 8,
    marca: 'Mercedes-Benz',
    nome: 'S-Class',
    ano: 2021,
    direcao: 'Elétrica',
    imagem: 'https://di-uploads-pod5.dealerinspire.com/mercedesbenzofpalmsprings/uploads/2017/10/2018-Mercedes-Benz-S-Class-Hero.png',
    categoria: 'Sedan',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Gasolina',
    tamanhoMala: 'M',
    preco: 250.00,
    quantidade_disponivel: 5,
    feedbacks: []
  },
]
  /*
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
    preco: number) {
    let nextid = this.cars[this.cars.length-1].id + 1
    this.cars.push({
      id : nextid,
      nome: nome,
      ano: ano,
      direcao: direcao,
      marca: marca,
      imagem: imagem,
      categoria: categoria,
      totAssentos: totAssentos,
      cambio: cambio,
      tipoCombustivel: tipoCombustivel,
      tamanhoMala: tamanhoMala,
      preco: preco,
      feedbacks: []
    })
    console.log(nome);
  } */

  /*
  removeCar(id: number) {
    this.cars = this.cars.filter(car => car.id != id)
    console.log(this.cars.length)
  }*/


  getCar(id: number) {
    this.carTransition = this.cars.find(car => car.id == id)
    return this.carTransition
  }

  /*
  editCar(id: number, newCar: CarType) {/*
    let oldCar = this.getCar(id)
    let index = this.cars.indexOf(oldCar!)
    this.cars[index] = newCar
  }*/


  addFeedback(id: number, nome: string, nota: number, descricao: string) : Observable<any> {
    const feedback : any = {
      id: id,
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
  getUserRents(email: string): Observable<CarType[]> {
    return this.http.get<CarType[]>(`${environment.url}/rent/${email}`)
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