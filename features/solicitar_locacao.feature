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

    Scenario: falha de locação por não informação dos horários de locação e devolução
        Given Eu estou logado com privilégios de "cliente"
        And Eu selecionei para locação o Honda fit prata
        And Eu não selecionei qualquer acessório
        And Eu não especifiquei data de entrega e devolução
        When Eu finaizar a reserva
        Then Eu vejo uma menságem de falta de preencimento de data e hora de locação e devolução.
        And Eu sou redirecionado para a seção de declaração de data e hora de locação e devolução
