describe('empty spec', () => {

    it('passes', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('input[name="e-mail"]').type('admin@alucar.com')
      cy.get('input[name="senha"]').type('admin123')
      cy.get('.entrar').click()
      cy.url().should('eq', 'http://localhost:4200/')
      cy.get('#test').click()
      cy.url().should('include', '/carlist/0')
      cy.get('#edit1').click()
      cy.url().should('include', '/editcar')
      cy.get('[formControlName="nome"]').type('Civic')
      cy.get('[formControlName="preco"]').type('2')
      cy.get('[formControlName="disponiveis"]').type('2')
      cy.wait(1000)
      cy.get('#button-confirm').click()
      cy.wait(1000)
      cy.url().should('eq', 'http://localhost:4200/carlist/0')
      cy.contains('Civic').should('exist')

    })
  })
