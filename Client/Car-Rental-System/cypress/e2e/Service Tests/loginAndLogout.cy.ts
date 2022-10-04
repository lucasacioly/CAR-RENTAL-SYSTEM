describe('empty spec', () => {

    it('passes', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('input[name="e-mail"]').type('gustavo1@alucar.com')
      cy.get('input[name="senha"]').type('revolucao')
      cy.get('.entrar').click()
      cy.url().should('eq', 'http://localhost:4200/')
      cy.get('#open').click()
      cy.get('#out').click()
      cy.url().should('eq', 'http://localhost:4200/login')
      cy.get('#open').click()
      cy.contains('Login').should('exist')
  
    })
  })