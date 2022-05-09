describe('Testing Ghost', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(2000)
        //cy.get('button').click()
    })
    it('Escenario 2', ()=>{
        //Login
        cy.get('form').within(() => {
            cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
            cy.get('#ember9').type('PruebasA123')
            cy.get('#ember11').click()
        })
        //Redirected to dashboard
        cy.wait(1000)
        //Clikc profile options
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            //cy.get('div.pe-all').first().click()
            cy.get('#ember33').click()
        })
        cy.wait(500)
        //Click your profile
        cy.get('ul[role=menu]').within(() => {
            cy.get('li').filter(':contains("Your profile")').click()
        })
        cy.wait(500)
        cy.get('form').within(() => {
            cy.get('#user-name').clear().type('Admin test',{force: true})
            cy.get('#user-slug').clear().type('admin_slug',{force: true})
            cy.get('#user-website').clear().type('https://ghost-uniandes.herokuapp.com/',{force: true})
            cy.get('#user-facebook').clear().type('https://facebook.com/test',{force: true})
            cy.get('#user-twitter').clear().type('https://twitter.com/test',{force: true})
            cy.get('#user-bio').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit',{force: true})
        })
        cy.wait(500)
        //Save profile
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button').contains('Save').click()
        })
        cy.wait(1500)
        //Click settings
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('#ember34').click()
        })
        cy.wait(500)
        //click staff users
        cy.get('main.gh-main ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/settings/staff/"]').click()
        })
        cy.wait(1000)
        //Clikc profile options
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            //cy.get('div.pe-all').first().click()
            cy.get('#ember33').click()
        })
        //Click sign out
        cy.wait(500)
        cy.get('ul[role=menu]').within(() => {
            cy.get('li').filter(':contains("Sign out")').click()
        })
        cy.wait(1000)
    })
  })