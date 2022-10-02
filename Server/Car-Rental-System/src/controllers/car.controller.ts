import { Car } from '../models/Car';
import { Feedback } from '../models/Feedback';

export class CarController {

    cars: Car[];

    constructor() {
        this.cars = [{
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
          }];
    }

    getAllCars(): Car[] {
        return this.cars;
    }

    getCarById(id: number): Car {
        return this.cars.find(car => car.id == id)
        
    }

    addCar(marca: string,
        nome: string,
        ano: number,
        direcao: string,
        imagem: string,
        categoria: string,
        totAssentos: string,
        cambio: string,
        tipoCombustivel: string,
        tamanhoMala: string,
        preco: number,
        quantidade_disponivel: number): void {
        
        let nextid = 0
        if (this.cars.length === 0) {
            nextid = 1
        }
        else {
            nextid = this.cars[this.cars.length-1].id + 1
        }
        

        const newCar : Car = {id : nextid,
            marca: marca,
            nome: nome,
            ano: ano,
            direcao: direcao,
            imagem: imagem,
            categoria: categoria,
            totAssentos: totAssentos,
            cambio: cambio,
            tipoCombustivel: tipoCombustivel,
            tamanhoMala: tamanhoMala,
            preco: preco,
            quantidade_disponivel: quantidade_disponivel,
            feedbacks : []};

        this.cars.push(newCar);
    }

    editCar(id: number, 
        marca: string,
        nome: string,
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
        feedbacks: Feedback[]) : boolean {
        
        let car =  this.cars.find(c => c.id == id)

        if (!car){
            return false;
        }
        else{
            const newCar : Car = {id : id,
                marca: marca,
                nome: nome,
                ano: ano,
                direcao: direcao,
                imagem: imagem,
                categoria: categoria,
                totAssentos: totAssentos,
                cambio: cambio,
                tipoCombustivel: tipoCombustivel,
                tamanhoMala: tamanhoMala,
                preco: preco,
                quantidade_disponivel: quantidade_disponivel,
                feedbacks : feedbacks};

        let oldCar = this.getCarById(id)
        let index = this.cars.indexOf(oldCar!)
        this.cars[index] = newCar
        }
    }

    deleteCar(id: number): boolean {
        let car =  this.cars.find(c => c.id == id)

        if (!car){
            return false;
        }
        else{
            let index = this.cars.indexOf(car)
            this.cars.splice(index, 1)
            return true
        }
    }
}

