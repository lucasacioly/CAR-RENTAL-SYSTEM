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
            idCar: 6,
            nome: 'Yuri',
            nota: 4,
            descricao: 'Gostei muito do carro, preço justo, só achei a mala um pouco pequena'
          }];
    }

    addFeedback(idCar:number, nome:string, nota: number, descricao: string){
        const newFeed: Feedback = {
            idCar : idCar,
            nome : nome,
            nota: nota,
            descricao: descricao
        }
        console.log(newFeed)
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