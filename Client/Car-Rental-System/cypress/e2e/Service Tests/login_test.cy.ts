describe('Login test', () => {

  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="e-mail"]').type('matheus@alucar.com')
    cy.get('input[name="senha"]').type('coxinha123')
    //cy.get('.login').submit()
    cy.get('.entrar').click()
    cy.url().should('eq', 'http://localhost:4200/')
    cy.get('#open').click()
    cy.contains('Matheus').should('exist')

  })
})
