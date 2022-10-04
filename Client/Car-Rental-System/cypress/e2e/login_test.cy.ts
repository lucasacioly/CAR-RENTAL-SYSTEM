import { AuthService } from "src/app/auth.service"

describe('empty spec', () => {

  let authService: AuthService;

  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="e-mail"]').type('matheus@alucar.com')
    cy.get('input[name="senha"]').type('coxinha123')
    //cy.get('.login').submit()
    cy.get('.entrar').click()
    
    //cy.get('').type('').should('')

  })
})