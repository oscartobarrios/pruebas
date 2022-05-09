describe('test ghost', () => {
    beforeEach(()=>{
        cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
         cy.wait(2000)
         //cy.get('button').click()
     })

     Cypress.on('uncaught:exception', (err, runnable, promise) => {
        // when the exception originated from an unhandled promise
        // rejection, the promise is provided as a third argument
        // you can turn off failing the test in this case
        if (promise) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })

     it('Revocar subscripcción a un miembro', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        
        //member
        cy.wait(1000)
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        cy.wait(1000)
        cy.get("table tbody tr").eq(0).click()
        cy.wait(1000)
    

        cy.get("button[role='button']").click()
        cy.wait(500);

        cy.get('ul').contains("Delete member").click();

        cy.wait(500);
        
        cy.get('button').last().click();


        








    })

})

