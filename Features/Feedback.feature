Feature: Feedback sobre o carro e o usuário

    As a Client
    I want to be able to give feedback about the car I rented to the rental company

    Scenario: Feedback sobre o carro feito com sucesso pelo cliente
        Given Eu estou logado com email "matheus@alucar.com" e senha "coxinha123"
        And Eu estou na tela de "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu preencho a nota dele e escrevo uma observação
        When Eu clico no botão de finalizar
        Then O feedback é concluído
        And Aparece uma mensagem de sucesso
        And Eu não vejo o carro "Ford New Fiesta" na tela de "Meus Aluguéis"
        And Eu vejo meu feedback na tela de locação do carro "Ford New Fiesta"

    Scenario: Feedback sobre o carro feito sem sucesso pelo cliente pela falta de nota
        Given Eu estou logado com email "matheus@alucar.com" e senha "coxinha123"
        And Eu estou na tela de "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu não preencho a nota dele
        And Eu escrevo uma observação
        When Eu clico no botão de finalizar
        Then O feedback não é concluído
        And Aparece uma mensagem de erro na tela informando a falta de dados
        And Eu clico em "OK"
        And Eu volto para a página inicial
        And Eu vou para tela "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu posso preencher o feedback novamente

    Scenario: Feedback sobre o carro feito com sucesso pelo cliente sem observação
        Given Eu estou logado com email "matheus@alucar.com" e senha "coxinha123"
        And Eu estou na tela de "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu clico para fazer o feedback dele
        And Eu preencho a nota dele
        And Eu não escrevo uma observação
        When Eu clico no botão de finalizar
        Then O feedback é concluído
        And Eu clico em "OK"
        And Eu volto para a página inicial
        And Aparece uma mensagem de sucesso
        And Eu não vejo o carro "Ford New Fiesta" na tela de "Meus Aluguéis"
        And Eu vejo meu feedback na tela de locação do carro "Ford New Fiesta" sem observação
    
    Scenario: Feedback sobre o carro feito sem sucesso pelo cliente pois o carro não foi devolvido
        Given Eu estou logado com email "matheus@alucar.com" e senha "coxinha123"
        And Eu estou na tela de "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem opção de feedback
        When Eu tento fazer o feedback dele
        Then Eu não sou redirecionado para tela de feedback
        And Eu volto para a página inicial
        And Eu vou para tela "Meus Aluguéis"
        And Eu vejo o carro "Ford New Fiesta" sem feedback feito
        And Eu não posso preencher o feedback
