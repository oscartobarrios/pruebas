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




	
    it('Eliminar post de borradores', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        
        
        cy.wait(1000)
       
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/?type=draft"]').parent().click()
        })

        cy.wait(1000)

      //  cy.get('ol').eq(1).within(() => {
        //    cy.get('li').eq(1).click({force:true})
       // }) 

       cy.get('ol').find('li').eq(1).click();
        
        cy.wait(500)

        cy.get('body > div.gh-app > div > main > button > span > svg').click()

        cy.wait(500)

        cy.get('button').filter(':contains("Delete post")').last().click()

        cy.wait(500)

        cy.get('div.modal-content').within(() => {
            cy.wait(500)
            cy.get('button').filter(':contains("Delete")').last().click()
        })
        
        cy.wait(1000)

    })
  })