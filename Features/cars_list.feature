Feature: Lista de carros disponíveis para locação

    Scenario: Opções de carros disponível para locação satisfez o cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "opção de veículo"
        When Eu seleciono o Toyota Etios
        And Existem 3 Toyota Etios disponíveis
        And Tem 2 opções de 'Sedan', 1 de 'Hatch', 0 'SUVs' e 0 'Caminhonetes'
        And Possui 5 assentos e o aluguel dele está na faixa dos 70-80 reais diários
        Then Eu fico interessado no modelo e tenho interesse de alugá-lo
        And Clico no botão de 'Locação de veículo' para realizar o processo
        
    Scenario: Opções de carros disponível para locação não satisfez o cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "opção de veículo"
        When Eu seleciono o Fiat Toro
        And Existem 4 Fiat Toro disponíveis
        And Tem 0 opções de 'Sedan', 0 de 'Hatch', 1 'SUVs' e 3 'Caminhonetes'
        And Possui 5 assentos e o aluguel dele está na faixa dos 110-140 reais diários
        Then Vejo que não tenho interesse de alugá-lo
        And Fecho a opção do Fiat Toro e volto a procurar um modelo

    Scenario: Adição de opções na lista de carros disponível 
        Given Eu estou logado como "admin" no site
        And Estou na seção de "opção de veículo"
        When Eu seleciono o botão de adicionar veículo
        And Aparece a opção de eu modificar um já existente ou adicionar um novo
        Then Escolho adicionar um novo
        And Como modelo coloco o Toyota Corolla
        And Coloco 2 Toyota Corolla disponíveis
        And Tem 2 opções de 'Sedan', 0 de 'Hatch', 0 'SUVs' e 0 'Caminhonetes'
        And Digo que possui 5 assentos e o aluguel dele está na faixa dos 120-140 reais diários
        Then Clico em concluir Adição
        And Verifico no site que já está disponível o Toyota Corolla

    Scenario: Não possui a opção de carro procurada pelo cliente
        Given Eu estou logado como "cliente" no site
        And Estou na seção de "opção de veículo"
        When Eu seleciono o Fiat Palio
        And Existem 0 Fiat Toro disponíveis
        And Tem 0 opções de 'Sedan', 0 de 'Hatch', 0 'SUVs' e 0 'Caminhonetes'
        And Possui 5 assentos e o aluguel dele está na faixa dos 60-80 reais diários
        Then Eu fico interessado no modelo e tenho interesse de alugá-lo
        And Clico no botão de 'Locação de veículo' para realizar o processo
        And Recebo a mensagem 'Modelo não disponível no momento'
        And Sou redirecionado de volta para a lista de opções de veículo


    Scenario: Tentativa de adição deu um carro já disponível 
        Given Eu estou logado como "admin" no site
        And Estou na seção de "opção de veículo"
        When Eu seleciono o botão de adicionar veículo
        And Aparece a opção de eu modificar um já existente ou adicionar um novo
        Then Escolho adicionar um novo
        And Como modelo coloco o Toyota Corolla
        And Coloco 2 Toyota Corolla disponíveis
        And Tem 2 opções de 'Sedan', 0 de 'Hatch', 0 'SUVs' e 0 'Caminhonetes'
        And Digo que possui 5 assentos e o aluguel dele está na faixa dos 120-140 reais diários
        Then Clico em concluir Adição
        And Recebo a mensagem 'Toyota Corolla já existe na lista'
        And Sou redirecionado de volta para a lista de opções de veículo





    