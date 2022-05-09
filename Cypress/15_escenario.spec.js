describe('Loguearme y reeenviar correo', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(1000)
       
    })
    

    it('Reenviar correo', ()=>{
        //loguease
        cy.get('#ember7').type('d.castrog2@uniandes.edu.co')
        cy.wait(1000)
        cy.get('#ember9').type('PruebasA123')
        cy.wait(1000)
        cy.get("button[id='ember11'] span").click()
        cy.wait(2000)
      
        
        cy.visit(' https://ghost-uniandes.herokuapp.com/ghost/#/settings/staff')
        cy.wait(1000)

       
        
        //Selecionar el creado
        
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)').click()
        cy.wait(1500)

 
       
       
       
      //  cy.get('.red').click()
       
        
    })
  })