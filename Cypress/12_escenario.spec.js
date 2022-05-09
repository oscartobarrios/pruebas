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
        
        //crear usuario de prueba
        let member_name = 'miembro de XX'
        let member_email = 'prueba1@unidandes.edu.co'
        cy.wait(500)
        cy.get('a[href*="#/members/new/"]').click()
        cy.wait(500)
        cy.get('form').within(() => {
            cy.get('#member-name').type(member_name,{force: true})
            cy.get('#member-email').type(member_email,{force: true})
        })
        
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('button[type=button]').click()
        })
        cy.wait(1500)

        //ver lista de mimbros
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/members/"]').parent().click()
        })
        
        cy.wait(1000)
        //Selecionar el creado
        cy.get('table').within(() => {
            cy.get('tr').filter(`:contains(${member_name})`).click()
        })
        cy.wait(1500)

 
        cy.get("header.gh-canvas-header-content").within(() => {
            cy.wait(500)
            cy.get('button[role=button]').click()
            cy.wait(500)
            cy.get('ul').within(() => {
                cy.get('li').filter(':contains("Delete member")').click()
            })
        }
        )
        
        cy.wait(1000)
        cy.get('button').filter(':contains("Delete member")').last().click()
        cy.wait(1000)
      //  cy.get('.red').click()
       
        
    })
  })