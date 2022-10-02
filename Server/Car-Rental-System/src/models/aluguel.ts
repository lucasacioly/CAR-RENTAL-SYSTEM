import { Car } from '../models/car';

export interface Aluguel {
    //cliente: User;
    email: string
    carro: Car
    data_retirada: Date
    data_devolucao: Date
    devolvido: boolean
}