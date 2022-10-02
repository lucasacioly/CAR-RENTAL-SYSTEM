import { Router, Request, Response } from 'express';
import{ CarController } from '../controllers/car.controller'

const carRouter = Router();

const carController = new CarController();

carRouter.route('/')
    .get((req, res) => {

        let cars = carController.getAllCars()
        return res.send(cars);
    })

    .post((req, res) => {
        let marca : string = req.body.marca
        let nome : string = req.body.nome
        let ano : number = Number(req.body.ano)
        let direcao : string = req.body.direcao
        let imagem : string = req.body.imagem
        let categoria : string = req.body.categoria
        let totAssentos : string = req.body.totAssentos
        let cambio : string = req.body.cambio
        let tipoCombustivel : string = req.body.tipoCombustivel
        let tamanhoMala : string = req.body.tamanhoMala
        let preco : number = Number(req.body.preco)
        let quantidade_disponnivel: number = Number(req.body.quantidade_disponnivel)

        carController.addCar(marca,
            nome,
            ano, 
            direcao, 
            imagem, 
            categoria, 
            totAssentos, 
            cambio, 
            tipoCombustivel, 
            tamanhoMala, 
            preco,
            quantidade_disponnivel)
            
        return res.json({ mensagem: "new CAR added"})
    })

carRouter.route('/:id')
    .get((req, res) => {

        let id = Number(req.params.id)

        let car = carController.getCarById(id)

        if (!car){
            return res.status(404).send("CAR not found");
        }
        else{
            return res.send(car)
        }
    })

    .put((req, res) => {

        let id = Number(req.params.id)

        let marca : string = req.body.marca
        let nome : string = req.body.nome
        let ano : number = Number(req.body.ano)
        let direcao : string = req.body.direcao
        let imagem : string = req.body.imagem
        let categoria : string = req.body.categoria
        let totAssentos : string = req.body.totAssentos
        let cambio : string = req.body.cambio
        let tipoCombustivel : string = req.body.tipoCombustivel
        let tamanhoMala : string = req.body.tamanhoMala
        let preco : number = Number(req.body.preco)
        let quantidade_disponnivel: number = Number(req.body.quantidade_disponnivel)

        carController.editCar(id,  
            marca,
            nome, 
            ano, 
            direcao,
            imagem,
            categoria,
            totAssentos, 
            cambio, 
            tipoCombustivel, 
            tamanhoMala, 
            preco,
            quantidade_disponnivel)
        
        return res.send("CAR modified")
    })

    .delete((req, res) => {
        let id = Number(req.params.id)

        let deleted = carController.deleteCar(id)

        if (deleted) {
            return res.status(200).send("CAR deleted")
        }
        else{
            return res.status(404).send("CAR not found")
        }
    })
export default carRouter;