import {Feedback} from '../models/feedback'

export interface Car {
    id: number
    marca: string
    nome: string
    ano: number
    direcao: string
    imagem: string
    categoria: string
    totAssentos: string
    cambio: string
    tipoCombustivel: string
    tamanhoMala: string
    preco: number
    quantidade_disponivel: number
    feedbacks: Feedback[]

}

