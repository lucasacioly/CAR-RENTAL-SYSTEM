import { Feedback } from "../models/feedback";


export class FeedbackController {
    feedbacks: Feedback[];
    constructor() {
        this.feedbacks = [{
            idCar: 5,
            nome: 'Gustavo',
            nota: 5,
            descricao: 'Carro muito confortável, com uma mala grande, mas com preço um pouco caro!'
          },
          {
            idCar: 5,
            nome: 'Marina',
            nota: 3,
            descricao: 'MUITO CARO!!!!! Confortável, mas não vale pelo preço'
          },
          {
            idCar: 3,
            nome: 'Gustavo Borges',
            nota: 5,
            descricao: 'Carro confortável, muito bom de dirigir, porém o ar-condicionado não esfria direito...'
          },
          {
            idCar: 3,
            nome: 'Lucas Acioly',
            nota: 3,
            descricao: 'A direção não é tão fluida, mas consome pouca gasolina.'
          },
          {
            idCar: 4,
            nome: 'Matheus Frej',
            nota: 4,
            descricao: 'Muito bom de dirigir, mas a qualidade do som não foi satisfatório.'
          },
          {
            idCar: 6,
            nome: 'Yuri',
            nota: 4,
            descricao: 'Carro muito bom, só o ar-condicionado que não esfriava muito, fora isso tudo perfeito!'
          },
          {
            idCar: 2,
            nome: 'Taina',
            nota: 3,
            descricao: 'Carro muito confortável, com uma mala grande, mas com preço um pouco caro!'
          },
          {
            idCar: 8,
            nome: 'Melo',
            nota: 3,
            descricao: 'Carro muito confortável, com uma mala grande, mas com preço um pouco caro!'
          },
          {
            idCar: 7,
            nome: 'Acioly',
            nota: 4,
            descricao: 'Gostei muito do carro, preço justo, só achei a mala um pouco pequena'
          },
          {
            idCar: 7,
            nome: 'José Lucas',
            nota: 5,
            descricao: 'Perfeito'
          },
          {
            idCar: 1,
            nome: 'Gustavo Campos',
            nota: 5,
            descricao: 'Carro muito confortável, direção boa, tudo perfeito! Nota 1000!'
          },
          {
            idCar: 2,
            nome: 'Matheus Frej',
            nota: 5,
            descricao: 'Carro muito bom de dirigir, motor potente e bancos confortáveis. Ar condicionado funcionando bem também'
          },
          {
            idCar: 3,
            nome: 'Rodrigo Mesel',
            nota: 5,
            descricao: 'Carro perfeito! Muito confortável, preço justo, mala grande, experiência maravilhosa :)'
          },
          {
            idCar: 2,
            nome: 'Artur Santos',
            nota: 2,
            descricao: 'Carro aceitável, porém tenho algumas reclamações, achei o compartimento traseiro, mais conhecido como mala, meio pequeno para o que o carro prometeu, também acho que a embreagem estava um pouco mais endurecida do que o padrão, overall achei o carro meio meh, nota 2/5 ta equivalente.'
          },
          {
            idCar: 5,
            nome: 'Matheus Frej',
            nota: 5,
            descricao: 'Um clássico. Ótimo custo benefício. Alugaria de novo.'
          },
          {
            idCar: 6,
            nome: 'Lucas Cavalcanti',
            nota: 4,
            descricao: 'Carro muito bom! Só achei o banco um pouco duro.'
          },
          {
            idCar: 4,
            nome: 'Victor Matheus',
            nota: 1,
            descricao: 'Carro muito espaçoso, difícil de entrar.'
          }
        ];
    }

    addFeedback(idCar:number, nome:string, nota: number, descricao: string){
        const newFeed: Feedback = {
            idCar : idCar,
            nome : nome,
            nota: nota,
            descricao: descricao
        }
        this.feedbacks.push(newFeed)
    }

    getCarsFeedbacks(id:number){
      let carFeedbacks: Feedback[] = [];
      for(let i = 0; i < this.feedbacks.length; i++){
        if(this.feedbacks[i].idCar == id){
          carFeedbacks.push(this.feedbacks[i])
        }
      } 
      return (carFeedbacks)
    }

    getAllFeedback() {
      return this.feedbacks
    }

}