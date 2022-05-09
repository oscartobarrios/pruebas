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

     it('Edit tag', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        
        //tag
        cy.wait(1000)
        cy.get("#ember29").click()
        cy.wait(1000)
        cy.get("h3[class='gh-tag-list-name']:first").click()
        cy.wait(1000)
        cy.get("#tag-name")
        .clear()
        cy.wait(1000)
        cy.get("#tag-name").type("usuario5", {force:true})

        cy.wait(1000)

        cy.get("button[role='button']").contains("Save").click()

        cy.get("#tag-name").should("have.value", "usuario5");
        








    })

})

