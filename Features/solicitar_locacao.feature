Feature: Solicitar locação de carro informando a data de retirada e a data de devolução 

    As a Client  
    I want to be able to order a vehicle and accessories
    so that it will be reserved for the date of my rental

    Scenario: Seleção de carro disponível para locação 
        Given Eu estou logado com privilégios de "cliente"
        And Eu estou na seção de "locação de veículo"
        And Existem 3 Honda fit prata disponíveis
        When Eu seleciono o Honda fit prata
        Then Eu sou direcionado para seção de "seleção de acessórios"

    Scenario: falha na seleção de carro por indisponibilidade do veículo
        Given Eu estou logado com privilégios de "cliente"
        And Eu estou na seção de "locação de veículo"
        And Existem 0 Honda fit prata disponíveis
        When Eu seleciono o Honda fit prata
        Then Eu vejo uma mensagem de erro
        And Eu permaneço na pagina de seleção de veículo

    Scenario: falha de locação por não informação dos horários de locação e devolução
        Given Eu estou logado com privilégios de "cliente"
        And Eu selecionei para locação o Honda fit prata
        And nenhum acessório foi selecionado
        And A data de entrega e devolução não foi informada
        When Eu finaizar a reserva
        Then Eu vejo uma menságem de falta de preenchimento de data e hora de locação e devolução.
        And Eu sou redirecionado para a seção de declaração de data e hora de locação e devolução

    Scenario: finalização de solicitação de locação bem sucedida 
        Given Eu estou logado com privilégios de "cliente"
        And Eu estou na seção de "solicitação de locação"
        And A data e hora de devolução informada foi 10/08/2022 - 13:00
        And A data e hora de locação informada foi 5/08/2022 - 13:00         
        And o modelo selecionado foi o Honda fit 
        And não foi escolhido acessório extra
        When Eu confirmar a locação
        Then Eu vejo uma menságem de confirmação de solicitação
        And Eu sou direcionado para a página inicial. 

    
    Scenario: falha de locação por não informação do modelo do veículo
        Given Eu estou logado com privilégios de "cliente"
        And A data e hora de locação informada foi 5/08/2022 - 13:00 
        And A data e hora de devolução informada foi 10/08/2022 - 13:00
        And Eu não informo o modelo do veículo
        And foi selecionado GPS como acessório extra
        When Eu confirmar a locação 
        Then Eu vejo uma menságem de erro por "não informação do modelo desejado"
        And Eu sou redrecionado para a seção de "seleção de modelo do veículo"