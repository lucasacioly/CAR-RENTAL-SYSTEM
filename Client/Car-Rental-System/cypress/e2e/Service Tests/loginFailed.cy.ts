describe('empty spec', () => {

    it('passes', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('input[name="e-mail"]').type('naovaipegar@alucar.com')
      cy.get('input[name="senha"]').type('raiseerror')
      cy.get('.entrar').click()
      cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('Usuário ou senha inválido');
     })
      
  
    })
  })