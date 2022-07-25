Feature: Solicitar locação de carro informando a data de retirada e a data de devolução 

    As a Client  
    I want to be able to order a vehicle and accessories
    so that it will be reserved for the date of my rental

    Scenario: Seleção de carro disponível para locação 
        Given Eu estou logado com privilégios de "cliente" 
        And Existem 3 Honda fit prata disponíveis
        When Eu seleciono o Honda fit prata
        Then Eu sou direcionado para seção de "seleção de acessórios"


    Scenario: falha na seleção de carro por indisponibilidade do veículo
        Given Eu estou logado com privilégios de "cliente"
        And Existem 0 Honda fit prata disponíveis
        When Eu seleciono o Honda fit prata
        Then Eu vejo uma mensagem de erro
        And Eu permaneço na pagina de seleção de veículo
        