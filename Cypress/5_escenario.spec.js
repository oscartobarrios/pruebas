describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(2000)
        //cy.get('button').click()
    })
    it('Escenario 5', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })

        cy.wait(500)
        //click general settings
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/general/"]').click()
        })
        cy.wait(500)
        //Section Title & description, click expand
        cy.get('div.gh-expandable-block').first().within(() => {
            cy.wait(500)
            cy.get('button[type=button]').contains('Expand').click()
        })
        cy.wait(500)
        //Clean input/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input[1]
        cy.get('#ember115').click().focused().clear({force: true}).type('MISO 2022',{force: true})
        
        //Click save changes
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        
        cy.wait(1000)
        cy.visit('https://ghost-uniandes.herokuapp.com/')
        cy.wait(1500)



    })
  })