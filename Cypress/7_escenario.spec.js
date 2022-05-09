describe('Testing Ghost  delete new post', () => {
    beforeEach(()=>{
       cy.visit('https://ghost-uniandes.herokuapp.com/ghost/')
        cy.wait(2000)
        //cy.get('button').click()
    })

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
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
        //Go to post list
        cy.get('nav.gh-nav  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').first().parent().click()
        })

        cy.wait(500)
        cy.get('div.gh-contentfilter-type ').click()
        cy.wait(500)
        cy.get('ul.ember-power-select-options').first().within(() => {
            cy.get('li').filter(':contains("All posts")').first().click()
        })

        cy.wait(1000)
        //Go to new post
        cy.get('header.gh-canvas-header-content').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/editor/post/"]').click()
        })
        

        //Fill form
        let post_title = 'New Post to Delete'
        let post_body = 'Body post to Delete'
        cy.wait(500)
        cy.get('textarea').type(post_title,{force: true})
        cy.get('div.koenig-editor__editor-wrapper > div').type(post_body,{force: true})
        cy.wait(500)

        cy.get('main.gh-main  ').within(() => {
            cy.wait(500)
            cy.get('a[href*="#/posts/"]').parent().click()
        })
       
        cy.wait(500)

        cy.get('ol').first().within(() => {
            cy.get('li').filter(':contains("New Post to Delete")').first().click()
        }) 
        
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