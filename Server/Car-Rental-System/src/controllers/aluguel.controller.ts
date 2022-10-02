import { Car } from '../models/Car';
import { Aluguel } from '../models/Aluguel';

export class AluguelController {
    listaAlugado: Aluguel[];

    // retorna todos os carros alugados de todos os clientes
    getAllRents() {
        let listaCarrosAux: Car[] = []
        for (let i = 0; i < this.listaAlugado.length; i++) {
            listaCarrosAux.push(this.listaAlugado[i].carro)
        }
        return listaCarrosAux
    }

    // retorna todos os carros alugados de um email específico
    getUserRents(email: string) {
        let listaCarrosAux: Car[] = []
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email) {
                listaCarrosAux.push(this.listaAlugado[i].carro)
            }
        }
        return listaCarrosAux
    }

    // adicionar carro alugado
    addRent(email : string, carro: Car, data_retirada: Date, data_devolucao: Date) {
        let newAluguel = {
            email: email,
            carro: carro,
            data_retirada: data_retirada,
            data_devolucao: data_devolucao,
            devolvido: false
        }
        this.listaAlugado.push(newAluguel)
    }

    // carro devolvido
    returnCar(email: string, carro: Car) {
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email && this.listaAlugado[i].carro.id == carro.id) {
                this.listaAlugado[i].devolvido = true;
                break
            }
        }
    }

    // retirar carro da lista de alugados (teve o feedback)
    deleteRent(email: string, carro: Car) {
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email && this.listaAlugado[i].carro.id == carro.id) {
                this.listaAlugado.splice(i)
            }
        }
    }
}