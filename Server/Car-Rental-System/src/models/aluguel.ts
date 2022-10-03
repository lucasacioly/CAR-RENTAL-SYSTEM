export interface Aluguel {
    email: string
    id: number
    data_retirada: Date
    data_devolucao: Date
    preco: number
    devolvido: boolean
}