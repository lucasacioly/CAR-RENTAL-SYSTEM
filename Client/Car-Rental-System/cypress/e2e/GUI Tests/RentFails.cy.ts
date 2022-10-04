describe('failure to rent', () => {

  it('no date selection', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="e-mail"]').type('acioly@alucar.com')
    cy.get('input[name="senha"]').type('123456')
    cy.get('.entrar').click()
    cy.wait(1000)
    cy.get('#open').click()
    cy.get('#nav_button_carlist').click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:4200/carlist/0')
    cy.visit('http://localhost:4200/location/1')
    cy.get('#submit').click()
    cy.url().should('eq', 'http://localhost:4200/location/1')
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Preencha todos os campos das datas');
   })
  })
})
