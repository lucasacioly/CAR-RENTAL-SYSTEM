Feature: Solicitar locação de carro informando a data de retirada e a data de devolução
 
    As a Client  
    I want to be able to order a vehicle and choose accessories
    so that it will be reserved for the date of my rental
 
    Scenario: Seleção de carro disponível para locação
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And Eu estou na seção de "seleção de veículo"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"
        And Existem "3" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        When eu finalizar a escolha do veículo
        Then Eu sou direcionado para sessão de "escolha de acessórios"
 
    Scenario: Escolha de acessório bem sucedida
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And Eu estou na sessão de "escolha de acessórios"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"       
        And o modelo selecionado foi o "volkswagen fox 2012 1.6"
        And os acessórios disponíveis são: "GPS, Wi-Fi e Seguro Premium"
        And Eu escolho apenas o "GPS"
        When eu confirmar a escolha dos acessórios
        Then Eu sou direcionado para a seção de "pagamento"
        
 
    Scenario: finalização de pagamento bem sucedida
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And Eu estou na seção de "pagamento"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"  
        And o modelo selecionado foi o "volkswagen fox 2012 1.6 vermelho"
        And não foi escolhido acessório extra
        And o valor informado para a locação foi de "R$750,00"
        When Eu confirmar o pagamento
        Then Eu vejo uma mensagem de confirmação de solicitação
        And Eu sou direcionado para a página inicial.
 
    Scenario: falha na seleção de carro por indisponibilidade do veículo
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And eu estou na seção de "seleção de veículo"
        And Existem 0 Honda fit prata disponíveis
        When Eu seleciono o Honda fit prata
        Then Eu vejo uma mensagem de erro
        And Eu permaneço na página de "seleção de veículos"
 
    Scenario: falha de locação por não informação dos horários de locação e devolução
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And eu estou na seção de "seleção de veículo"
        And Eu selecionei para locação o "volkswagen fox 2012 1.6 vermelho"
        And A data de locação não foi informada
        And A data de devolução não foi informada
        When eu finalizar a escolha do veículo
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de locação e devolução.
        And Eu permaneço na seção de "seleção de veículo"
 
    Scenario: falha de locação por não informação do horário de locação
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And eu estou na seção de "seleção de veículo"
        And Eu selecionei para locação o "volkswagen fox 2012 1.6 vermelho"
        And A data de locação não foi informada
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"
        When eu finalizar a escolha do veículo
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de locação.
        And Eu permaneço na seção de "seleção de veículo"
 
    Scenario: falha de locação por não informação da data e do horário de devolução
        Given Eu estou logado com o CPF "111.999.888-88" nome "José da Silva" com privilégios de "cliente"
        And eu estou na seção de "seleção de veículo"
        And Eu selecionei para locação o "volkswagen fox 2012 1.6 vermelho"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"
        And A data e hora de devolução não foi informada
        When eu finalizar a escolha do veículo
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de devolução.
        And Eu permaneço na seção de "seleção de veículo"
