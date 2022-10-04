import { Aluguel } from '../models/Aluguel';

export class AluguelController {
    listaAlugado: Aluguel[] = [
        {
        email: 'matheus@alucar.com',
        id: 8,
        data_retirada: new Date('2022-10-02T00:57:00.000Z'),
        data_devolucao: new Date('2022-10-04T00:57:00.000Z'),
        preco: 598,
        devolvido: false
      },

      {
        email: 'gustavo1@alucar.com',
        id: 5,
        data_retirada: new Date('2022-09-30T00:57:00.000Z'),
        data_devolucao: new Date('2022-10-02T00:57:00.000Z'),
        preco: 486,
        devolvido: false
      },

      {
        email: 'marina@gmail.com',
        id: 2,
        data_retirada: new Date('2022-09-24T00:57:00.000Z'),
        data_devolucao: new Date('2022-10-04T00:57:00.000Z'),
        preco: 1120,
        devolvido: false
      },

      {
        email: 'marina@gmail.com',
        id: 4,
        data_retirada: new Date('2022-10-03T00:57:00.000Z'),
        data_devolucao: new Date('2022-10-04T00:57:00.000Z'),
        preco: 150,
        devolvido: false
      },

      {
        email: 'matheus@alucar.com',
        id: 7,
        data_retirada: new Date('2022-09-16T00:57:00.000Z'),
        data_devolucao: new Date('2022-09-26T00:57:00.000Z'),
        preco: 1800,
        devolvido: false
      },

      {
        email: 'acioly@alucar.com',
        id: 6,
        data_retirada: new Date('2022-09-01T00:57:00.000Z'),
        data_devolucao: new Date('2022-09-03T00:57:00.000Z'),
        preco: 210,
        devolvido: false
      }

    ];

    // retorna todos os carros alugados de todos os clientes
    getAllRents() {
        return this.listaAlugado
    }

    // retorna todos os carros alugados de um email específico
    getUserRents(email: string) {
        let listaAluguelAux: Aluguel[] = []
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email) {
                listaAluguelAux.push(this.listaAlugado[i])
            }
        }
        return listaAluguelAux
    }

    // adicionar carro alugado
    addRent(email : string, id: number, data_retirada: Date, data_devolucao: Date, preco: number) {
        const newAluguel: Aluguel = {
            email: email,
            id: id,
            data_retirada: data_retirada,
            data_devolucao: data_devolucao,
            preco: preco,
            devolvido: false
        }
        this.listaAlugado.push(newAluguel);
    }

    // carro devolvido
    returnCar(email: string, id: number) {
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email && this.listaAlugado[i].id == id) {
                this.listaAlugado[i].devolvido = true;
                break
            }
        }
    }

    // retirar carro da lista de alugados (teve o feedback)
    deleteRent(email: string, id: number) {
        let deleted = false
        for (let i = 0; i < this.listaAlugado.length; i++) {
            if (this.listaAlugado[i].email == email && this.listaAlugado[i].id == id) {
                
                this.listaAlugado.splice(i, 1)
                
                deleted = true
                break
            }
        }
        if (deleted) {
            return true 
        }
        else {
            return false
        }
    }
}