Feature: Feedback sobre o carro e o usuário

    As an Employee
    I want to be able to give feedback about the car that was rented
    and the client that rented it
    As a Client
    I want to be able to give feedback about the car I rented to the rental company

    Scenario: Feedback sobre o cliente feito com sucesso pelo "administrador"
        Given Eu estou logado como "administrador"
        And Eu estou na tela de clientes
        And Eu vejo o cliente "João da Silva" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu preencho todas as informações do formulário
        When Clico no botão de finalizar
        Then O feedback é concluído
        And Aparece uma mensagem de sucesso
        And Eu clico em "OK"
        And Eu vejo o cliente "João da Silva" com feedback feito

    Scenario: Feedback sobre o carro feito com sucesso pelo "administrador"
        Given Eu estou logado como "administrador"
        And Eu estou na tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito pelo "administrador"
        And Eu clico para fazer o feedback dele
        And Eu preencho todas as informações do formulário
        When Clico no botão de finalizar
        Then O feedback é concluído
        And Aparece uma mensagem de sucesso
        And Eu clico em "OK"
        And Eu vejo o carro "Ford New Fiesta" com feedback feito

    Scenario: Feedback sobre o carro feito com sucesso pelo cliente
        Given Eu estou logado como "cliente"
        And Eu estou na tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito pelo "cliente"
        And Eu clico para fazer o feedback dele
        And Eu preencho todas as informações do formulário
        When Clico no botão de finalizar
        Then O feedback é concluído
        And Aparece uma mensagem de sucesso
        And Eu clico em "OK"
        And Eu vejo o carro "Ford New Fiesta" com feedback feito

    Scenario: Feedback sobre o cliente feito sem sucesso pelo "administrador"
        Given Eu estou logado como "administrador"
        And Eu estou na tela de clientes
        And Eu vejo o cliente "João da Silva" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu não preencho a categoria "Cuidado com o veículo"
        And Eu não preencho a categoria "Entrega no prazo"
        When Clico no botão de finalizar
        Then O feedback não é concluído
        And Aparece uma mensagem de erro na tela informando a falta de dados
        And Eu clico em "OK"
        And Eu volto para a tela de clientes
        And Eu vejo o cliente "João da Silva" sem feedback feito

    Scenario: Feedback sobre o carro feito sem sucesso pelo "administrador"
        Given Eu estou logado como "administrador"
        And Eu estou na tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu não preencho a categoria "Estado dos assentos"
        And Eu não preencho a categoria "Estado do Pneu"
        When Clico no botão de finalizar
        Then O feedback não é concluído
        And Aparece uma mensagem de erro na tela informando a falta de dados
        And Eu clico em "OK"
        And Eu volto para a tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito

    Scenario: Feedback sobre o carro feito sem sucesso pelo "cliente"
        Given Eu estou logado como "cliente"
        And Eu estou na tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu não preencho a categoria "Estado dos assentos"
        And Eu não preencho a categoria "Estado do Pneu"
        When Clico no botão de finalizar
        Then O feedback não é concluído
        And Aparece uma mensagem de erro na tela informando a falta de dados
        And Eu clico em "OK"
        And Eu volto para a tela de carros
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu posso preencher o feedback novamente