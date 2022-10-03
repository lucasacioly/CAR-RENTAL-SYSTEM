import { Router, Request, Response } from 'express';
import { FeedbackController } from '../controllers/feedback.controller';
import carRouter from './car.routes';

const feedbackRouter = Router();

const feedbackController = new FeedbackController();

feedbackRouter.route('/')
    .get((req, res)=>{
        let feedback = feedbackController.getAllFeedback()
        return res.send({feedback})
        })

    .post((req, res) =>{
            let idCar : number = Number(req.body.idCar)
            let nome : string = req.body.nome
            let nota: number = Number(req.body.nota)
            let descricao: string = req.body.descricao
            
            feedbackController.addFeedback(idCar, nome, nota, descricao)
            let feedback = feedbackController.getAllFeedback()
            return res.json(feedback)
        }
    )

feedbackRouter.route('/:id')
    .get((req, res) =>{
        let id = Number(req.params.id)

        let feedbacks = feedbackController.getCarsFeedbacks(id)

        if (!feedbacks){
            return res.status(404).send("Feedback or Car not found")
        }
        else{
            return res.send(feedbacks)
        }
    })


export default feedbackRouter
