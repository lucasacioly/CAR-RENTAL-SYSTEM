describe('empty spec', () => {

  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="e-mail"]').type('admin@alucar.com')
    cy.get('input[name="senha"]').type('admin123')
    cy.get('.entrar').click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:4200/')
    cy.get('#open').click()
    cy.get('#nav_button_returnCar').click()
    cy.wait(1000)
    cy.url().should('include', '/carlist/1')
    cy.get('#devolver2').click()
    cy.url().should('include', '/carreturn')
    cy.get('#concluir').click()
    cy.contains('Multa ainda não calculada').should('exist')

  })
})
