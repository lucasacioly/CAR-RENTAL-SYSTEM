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

Scenario 7: Novo cliente quer se cadastrar no sistema

    Given Eu estou na "página de login"
    And Eu não sou um usuário cadastrado
    And Eu sou um cliente
    When Eu pressiono em "Cadastre-se"
    Then Eu devo estar na "página de cadastro"
    And Eu devo ver "campo de nome"
    And Eu vejo "campo de idade e gênero"
    And Eu vejo "campo de endereço"
    And Eu vejo "campo de telefones"
    And Eu vejo "campo de e-mail"
    When Eu preencho todos os campos
    And Eu pressiono em "Próximo"
    Then Eu devo ser redirecionado para a segunda página do cadastro
    And Eu devo ver o "campo login"
    And Eu vejo o "campo senha" e "confirmar senha"
    When Eu preencho um login válido e único
    And Eu preencho uma senha válida
    And Eu pressiono "Cadastrar!"
    Then Eu devo ver uma mensagem de sucesso "Cadastro realizado com sucesso! Verifique e confirme seu e-mail."
    And Eu estou logado
    And Eu sou redirecionado para página "meu perfil" dentro do sistema
