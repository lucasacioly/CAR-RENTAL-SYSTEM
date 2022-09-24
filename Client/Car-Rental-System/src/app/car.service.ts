import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() {}
  
  public cars: CarType[] = []

  addCar(nome: string,
    marca: string,
    imagem: string,
    categoria: string,
    totAssentos: string,
    cambio: string,
    tipoCombustivel: string,
    tamanhoMala: string,
    preco: number) {
    this.cars.push({
      nome: nome,
      marca: marca,
      imagem: imagem,
      categoria: categoria,
      totAssentos: totAssentos,
      cambio: cambio,
      tipoCombustivel: tipoCombustivel,
      tamanhoMala: tamanhoMala,
      preco: preco
    })
  }
}

interface CarType {
  nome: string
  marca: string
  imagem: string
  categoria: string
  totAssentos: string
  cambio: string
  tipoCombustivel: string
  tamanhoMala: string
  preco: number

}






