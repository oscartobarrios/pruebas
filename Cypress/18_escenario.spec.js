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

     it('Cambiar contraseña', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        
        
        cy.wait(1000)
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/"]').click()
        })
        cy.wait(1000)
        cy.get("#staff_svg__Regular").click()
        cy.wait(1000)

        cy.get(".apps-card-meta").contains("Admin test").click();
        cy.wait(1000)

        cy.get("#user-password-old").type("PruebasA123");
        cy.wait(500);
        cy.get("#user-password-new").type("NPruebasA123");
        cy.wait(500);
        cy.get("#user-new-password-verification").type("NPruebasA123");
        cy.wait(500);
        cy.get(".form-group").contains("Change Password").click()

        cy.wait(1000)


        cy.get("#user-password-old").type("NPruebasA123");
        cy.wait(500);
        cy.get("#user-password-new").type("PruebasA123");
        cy.wait(500);
        cy.get("#user-new-password-verification").type("PruebasA123");
        cy.wait(500);
        cy.get(".form-group").contains("Change Password").click()





        
        
    




    })

})

