Feature: Autenticação de usuário

    As a user
    I want to login the car rental system
    So that I can use the services offers by the system

Scenario: Login de admin

    Given Eu estou na "página de login"
    And Eu sou o "admin"
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu pressiono "Entrar"
    Then Eu devo estar na "página inicial" com acesso de admin
    And Eu vejo "admin" na parte inferior da "nav-bar"

Scenario: Login de usuário

    Given Eu estou na "página de login"
    And Eu sou um cliente
    When Eu preencho o "campo de login"
    And Eu preencho o "campo de senha"
    And Eu pressiono "Entrar"
    Then Eu devo estar na "página inicial" sem acesso de admin
    And Eu vejo o "nome do cliente" na parte inferior da "nav-bar"

Scenario: Novo cliente quer se cadastrar no sistema

    Given Eu estou na "página de login"
    And Eu não sou um usuário cadastrado
    And Eu sou um cliente
    When Eu pressiono em "Cadastre-se"
    Then Eu devo estar na "página de cadastro"
    And Eu devo ver "campo de nome"
    And Eu vejo "campo CPF"
    And Eu vejo "campo de idade e gênero"
    And Eu vejo "campo de endereço"
    And Eu vejo "campo de telefone"
    And Eu vejo "campo de e-mail"
    And Eu vejo o "campo senha"
    When Eu preencho um login válido e único
    And Eu preencho uma senha válida
    And Eu preencho todos os campos
    And Eu pressiono em "Confirmar"
    Then Eu devo ver uma mensagem de sucesso "Cadastro realizado com sucesso!"
    And Eu sou redirecionado para a página de login

Scenario: Falha no cadastro de cliente já cadastrado

    Given Eu estou na "página de cadastro"
    And Eu sou um cliente cadastrados
    When Eu preencho todos os campos
    And Eu preenchi o "e-mail" com um e-mail já cadastrado
    And Eu pressiono "Próximo"
    Then Eu devo ver uma mensagem de erro "E-mail já cadastrado"
    And Eu permaneço na "página de cadastro"
    And Eu vejo todos os campos em branco novamente
    
Scenario: Falha no acesso ao sistema por senha incorreta

    Given Eu estou na "página de login"
    And Eu sou um usuário
    When Eu preencho o "campo de e-mail"
    And Eu preencho o "campo de senha"
    And A senha está incorreta
    And Eu pressiono "Entrar"
    Then Eu devo ver uma mensagem de erro "E-mail ou senha incorreto(a)"
    And Eu permaneço na "página de login"
    And Os campos de "e-mail e senha" estão em branco