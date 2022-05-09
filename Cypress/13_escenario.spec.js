describe('Loguearme y Crear Staff', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(1000)
       
    })
    

    it('Eliminar miembro', ()=>{
        //loguease
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
        cy.visit('https://ghost-uniandes.herokuapp.com/ghost/#/members')
        cy.wait(1000)
        
       

        //ver lista de mimbros
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        
        cy.wait(1000)
        //Selecionar el creado
        cy.contains('@hotmail.com').parent().click()
        cy.wait(1500)

        //borrar
        cy.get("header.gh-canvas-header-content").within(() => {
            cy.wait(500)
            cy.get('button[role=button]').click()
            cy.wait(500)
            cy.get('ul').within(() => {
                cy.get('li').filter(':contains("Delete member")').click()
            })
        }
        )
        //cancelar
        cy.wait(1000)
        cy.get('button').filter(':contains("Cancel")').last().click()
        cy.wait(1000)
      //  cy.get('.red').click()
       
        
    })
  })