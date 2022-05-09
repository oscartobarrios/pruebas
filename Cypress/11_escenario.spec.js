describe('Loguearme y Crear Staff', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(1000)
       
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

    it('Create an user and login', ()=>{
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        cy.visit(' https://ghost-uniandes.herokuapp.com/ghost/#/settings/staff')
        cy.wait(1000)
       
       
        cy.contains('Invite people').click()
        cy.wait(1000)
        cy.get("#new-user-email").type('otobar1@hotmail.com')
        cy.wait(1000)
        cy.contains('Send invitation now').click()
       
         //ver lista de miembros
         cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        //seleccionar nuevo miembro
        cy.wait(1000)
        
        
    })
  })