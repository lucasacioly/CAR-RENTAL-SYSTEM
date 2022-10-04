Feature: Solicitar locação de carro informando a data de retirada e a data de devolução
 
    As a Client  
    I want to be able to order a vehicle and choose accessories
    so that it will be reserved for the date of my rental
 
    Scenario: Seleção de data e hora de locação
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na seção de "Informar data e hora de locação e devolução"
        And Existem "5" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"
        When eu confirmar a escolha das datas de locação e devolução
        Then Eu sou direcionado para sessão de "escolha de acessórios"
 
    Scenario: Escolha de acessório bem sucedida
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na sessão de "escolha de acessórios"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"       
        And o modelo selecionado foi o "volkswagen fox 2012 1.6"
        And os acessórios disponíveis são: "GPS, Wi-Fi e Seguro Premium"
        And Eu escolho apenas o "GPS"
        When eu confirmar a locação
        Then eu vejo uma menságem de confirmação de locação
        And Eu sou direcionado para a seção "Home"

    Scenario: não escolha de acessório bem sucedida
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na sessão de "escolha de acessórios"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"       
        And o modelo selecionado foi o "volkswagen fox 2012 1.6"
        And os acessórios disponíveis são: "GPS, Wi-Fi e Seguro Premium"
        And Eu escolho nenhum acessório
        When eu confirmar a locação
        Then eu vejo uma menságem de confirmação de locação
        And Eu sou direcionado para a seção "Home"
    
 
    Scenario: falha de locação por não informação dos horários de locação e devolução
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na seção de "Informar data e hora de locação e devolução"
        And Existem "5" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        And A data de locação não foi informada
        And A data de devolução não foi informada
        When eu confirmar a escolha das datas de locação e devolução
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de locação e devolução.
        And Eu permaneço na seção de "seleção de veículo"
 
    Scenario: falha de locação por não informação do horário de locação
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na seção de "Informar data e hora de locação e devolução"
        And Existem "5" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        And A data de locação não foi informada
        And A data e hora de devolução informada foi "10/08/2022 - 13:00"
        When eu confirmar a escolha das datas de locação e devolução
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de locação e devolução.
        And Eu permaneço na seção de "seleção de veículo"

    Scenario: falha de locação por não informação da data e do horário de devolução
        Given Eu estou logado com o e-mail "acioly@alucar.com" nome "Lucas Acioly" com privilégios de "cliente"
        And Eu estou na seção de "Informar data e hora de locação e devolução"
        And Existem "5" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        And A data de locação informada foi "10/08/2022 - 13:00" 
        And A data e hora de devolução não foi informada
        When eu confirmar a escolha das datas de locação e devolução
        Then Eu vejo uma mensagem de falta de preenchimento de data e hora de locação e devolução.
        And Eu permaneço na seção de "seleção de veículo"

    Scenario: falha de locação por não estar logado
        Given Eu não estou logado
        And Eu estou na seção de "Informar data e hora de locação e devolução"
        And Existem "5" "volkswagen fox 2012 1.6 vermelho" disponíveis para locação na data e hora informada.
        And Eu seleciono o "volkswagen fox 2012 1.6 vermelho"
        And A data e hora de locação informada foi "5/08/2022 - 13:00"
        And A data e hora de devolução informada foi "10/08/2022 - 13:00" 
        When eu confirmar a escolha das datas de locação e devolução
        Then Eu sou direcionado para a seção de "login"
