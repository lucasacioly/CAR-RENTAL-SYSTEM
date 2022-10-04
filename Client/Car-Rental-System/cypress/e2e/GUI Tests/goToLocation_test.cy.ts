describe('go to location', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#s-class').click()
    cy.url().should('include', '/location/8')
  })
})