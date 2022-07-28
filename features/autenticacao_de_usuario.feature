Feature: Autenticação de usuário

    As a user
    I want to login the car rental system
    So that I can use the services offers by the system

Scenario 1: Login de funcionário no acesso para Clientes 

    Given Eu estou na "página de login"
    And Eu sou um funcionário
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu seleciono o campo "Clientes"
    And Eu pressiono "Entrar"
    Then Eu devo estar na "página inicial para Clientes"
    And Eu devo ver uma mensagem alerta "Você está logado como Cliente"

Scenario 2: Login de cliente no acesso para Clientes

    Given Eu estou na "página de login"
    And Eu sou um cliente
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu seleciono o campo "Clientes"
    And Eu pressiono "Entrar"
    Then Eu devo estar na "página inicial para Clientes"

Scenario 3: Login de funcionário no acesso para Funcionários

    Given Eu estou na "página de login"
    And Eu sou um funcionário
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu seleciono o campo "Funcionários"
    And Eu pressiono "Entrar"
    Then Eu devo estar na "página inicial para Funcionários"
    And Eu devo ver uma mensagem "Você está logado como Funcionário"

Scenario 4: Login de cliente no acesso para Funcionários

    Given Eu estou na "página de login"
    And Eu sou um cliente
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu seleciono o campo "Funcionários"
    And Eu pressiono "Entrar"
    Then Eu devo ver uma mensagem de erro "Você não é Funcionário"
    And Eu devo voltar para a "página de login"

Scenario 5: Falha no acesso ao sistema para Funcionários

    Given Eu estou na "página de login"
    And Eu sou um funcionário
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu pressiono "Entrar"
    Then Eu devo ver uma mensagem de erro "Você não selecionou a opção cliente/funcionário"
    And Eu sou redirecionado para a "página de login"
    And Os campos estão em branco

Scenario 6: Falha no acesso ao sistema por senha incorreta

    Given Eu estou na "página de login"
    And Eu sou um usuário
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And A senha está incorreta
    And Eu seleciono uma opção no campo cliente/funcionário
    And Eu pressiono "Entrar"
    Then Eu devo ver uma mensagem de erro "Login ou senha incorreto(a)"
    And Eu sou redirecionado para a "página de login"
    And Os campos estão em branco