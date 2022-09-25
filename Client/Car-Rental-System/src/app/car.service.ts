import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() {}
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
    preco: 57.00
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
    preco: 65.00
  },
  {
    id: 3,
    marca: 'Toyota', 
    nome: 'Yaris',
    ano: 2019,
    direcao: 'Elétrica',
    imagem: 'https://www.tsusho.com.br/pub/modelos/yaris-2023/Versoes/Cores-Hatch/Prata_Lua_Nova.png', 
    categoria: 'Hatch',
    totAssentos: '5',
    cambio: 'Automático',
    tipoCombustivel: 'Flex',
    tamanhoMala: 'M',
    preco: 132.00
  }]

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
      preco: preco
    })
    console.log(nome);  
  }

  removeCar(id: number) {
    this.cars = this.cars.filter(car => car.id != id)
    console.log(this.cars.length)
  }

  getCar(id: number) {
    this.carTransition = this.cars.find(car => car.id == id)
    return this.carTransition
  }

  editCar(id: number, newCar: CarType) {
    let oldCar = this.getCar(id)
    let index = this.cars.indexOf(oldCar!)
    this.cars[index] = newCar
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

}

