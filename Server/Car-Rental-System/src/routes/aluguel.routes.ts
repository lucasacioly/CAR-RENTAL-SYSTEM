import { Router } from "express";
import { AluguelController } from "../controllers/aluguel.controller";

const aluguelRouter = Router();

const aluguelController = new AluguelController();

aluguelRouter.route('/')
    .get((req, res) => {

        let aluguel = aluguelController.getAllRents()
        return res.send(aluguel);
    })

    .post((req, res) => {
        let email : string = req.body.email
        let id : number = Number(req.body.id)
        let data_retirada : Date = req.body.data_retirada
        let data_devolucao : Date = req.body.data_devolucao
        let preco : number = Number(req.body.preco)
        aluguelController.addRent(email, id, data_retirada, data_devolucao, preco)
        return res.json({ mensagem: "new ALUGUEL added"})
    })

aluguelRouter.route('/:email')
    .get((req, res) => {
        let email = req.params.email
        let aluguel = aluguelController.getUserRents(email)
        return res.send(aluguel);
    })

aluguelRouter.route('/:email/:id')
    .put((req, res) => {

        let email = req.params.email
        let id = Number(req.params.id)

        aluguelController.returnCar(email, id)
        
        return res.json({mensagem : "Carro devolvido"})
    })

    .delete((req, res) => {
        let email = req.params.email
        let id = Number(req.params.id)

        let deleted = aluguelController.deleteRent(email, id)

        if (deleted) {
            return res.status(200).json({message :"Carro teve feedback"})
        }
        else{
            return res.status(404).json({message : "Houve um erro ao realizar o feedback"})
        }
    })

export default aluguelRouter;