describe('Try to rent without login', () => {

  it('no login rent', () => {
    cy.visit('http://localhost:4200')
    cy.wait(1000)
    cy.get('#open').click()
    cy.get('#nav_button_carlist').click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:4200/carlist/0')
    cy.visit('http://localhost:4200/location/1')

    /* colocar data */


    cy.get('#submit').click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:4200/login')
  })
})
