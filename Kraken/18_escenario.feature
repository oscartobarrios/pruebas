Feature: Como administrador quiero eliminar un post que se encuentra en borradores

@user1 @web
Scenario Outline: Eliminar post in borradores

Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/signin"
  When I wait for 2 seconds
  When I enter email "d.castrog2@uniandes.edu.co"
  When I wait for 2 seconds
  And I enter password "PruebasA123"
  When I wait for 2 seconds
  And I click in login
  When I wait for 5 seconds
And I go to Drafs page
When I wait for 2 seconds
And I pick the first post of the list
When I wait for 2 seconds
And I click settings post
And I click delete post
When I wait for 2 seconds
And I click confirm delete post
When I wait for 2 seconds
Then I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/posts?type=draft"
And I wait for 5 seconds