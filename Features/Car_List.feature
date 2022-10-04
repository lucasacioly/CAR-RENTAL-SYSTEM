Feature: Lista de carros disponíveis para locação

    Scenario: Opções de carros disponível para locação satisfez o cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "Carros"
        When Eu seleciono o Toyota Yaris
        And Existem 3 Toyota Yaris disponíveis
        And Possui 5 assentos e o aluguel dele custa 132 reais por dia
        Then Eu fico interessado no modelo e tenho interesse de alugá-lo
        And Clico no botão de 'Alugar' para realizar o processo de locação
        
    Scenario: Opções de carros disponível para locação não satisfez o cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "Carros"
        When Eu seleciono o Fiat Toro
        And Existem 4 Fiat Toro disponíveis
        And Possui 5 assentos e o aluguel dele custa 150 reais por dia
        Then Vejo que não tenho interesse de alugá-lo
        And Passo a opção do Fiat Toro e volto a procurar um modelo

    Scenario: Adição de opções na lista de carros disponível 
        Given Eu estou logado como "admin" no site
        And Estou na seção de "Carros"
        When Eu seleciono o botão de adicionar veículo
        And Como modelo coloco o Toyota Corolla
        And Coloco 2 Toyota Corolla disponíveis
        And Digo que possui 5 assentos e o aluguel dele custa 200 reais por dia
        And Preencho os requisitos adicionais
        Then Clico no botão de Adicionar
        And Verifico no site que já está disponível o Toyota Corolla
        

    Scenario: Não possui a opção de carro procurada pelo cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "Carros"
        When Eu seleciono o Fiat Toro
        And Existem 0 Fiat Toro disponíveis
        And Possui 5 assentos e o aluguel dele custa dos 150 reais por dia
        Then Eu fico interessado no modelo e tenho interesse de alugá-lo
        And Vejo que o botão de alugar está como indisponível
        And Passo a opção do Fiat Toro e volto a procurar um modelo
