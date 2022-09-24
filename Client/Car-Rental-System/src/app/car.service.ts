import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() {}

  public cars: CarType[] = [{
    id: 1,
    marca: 'Fox', 
    nome: 'VolksWagen', 
    imagem: 'https://cdn.autopapo.com.br/carro/volkswagen/fox-16-16v-msi-highline-flex-2018/destaque-v1.png', 
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Manual',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'P',
    preco: 57.00
  },
  {
    id: 2,
    marca: 'New Fiesta', 
    nome: 'Ford',
    imagem: 'https://morena.actfly.top/storage/2017/07/fiesta.png', 
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'P',
    preco: 65.00 
  }]

  addCar(nome: string,
    marca: string,
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
      marca: marca,
      imagem: imagem,
      categoria: categoria,
      totAssentos: totAssentos,
      cambio: cambio,
      tipoCombustivel: tipoCombustivel,
      tamanhoMala: tamanhoMala,
      preco: preco
    })
    console.log(nome);  
  }

  removeCar(id: number) {
    this.cars = this.cars.filter(car => car.id != id)
    console.log(this.cars.length)
  }

}

interface CarType {
  id: number
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

