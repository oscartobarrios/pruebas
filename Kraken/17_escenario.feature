Feature: Como usuario quiro editar un Tag

  @user1 @web
  Scenario: Editar tag
  Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/signin"
  When I wait for 2 seconds
  When I enter email "d.castrog2@uniandes.edu.co"
  When I wait for 2 seconds
  And I enter password "PruebasA123"
  When I wait for 2 seconds
  And I click in login
  When I wait for 5 seconds
  And I go to Tags and click on it
  And Search the first tag on the list
  When I wait for 2 seconds
  And Change the name of the tag for "$name_1"
  And I click in button save
  Then I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/tags"
  And I wait for 3 seconds


