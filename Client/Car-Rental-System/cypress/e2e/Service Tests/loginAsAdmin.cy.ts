describe('empty spec', () => {
  
    it('passes', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('input[name="e-mail"]').type('admin@alucar.com')
      cy.get('input[name="senha"]').type('admin123')
      cy.get('.entrar').click()
      cy.url().should('eq', 'http://localhost:4200/')
      cy.get('#open').click()
      cy.contains('admin').should('exist')
  
    })
  })