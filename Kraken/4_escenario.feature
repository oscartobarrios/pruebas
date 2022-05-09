Feature: escenario 4

@user1 @web
Scenario: Hacer login, ir a listado de tags, crer uno nuevo, ver que aparezca en el listado y seleccionarlo para ver el detalle.
  Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I click tags
  And I wait for 1 seconds
  And I click new tag
  And I wait for 2 seconds
  When I enter tag name "Pruebas Automatizadas Tag"
  And I wait for 1 seconds
  When I enter tag slug
  And I wait for 1 seconds
  When I enter tag description "Lorem ipsum dolor sit amet"
  And I wait for 1 seconds
  Then I click save tag
  And I wait for 3 seconds
  And I click tags
  And I wait for 1 seconds
  And I select tag by name
  Then I wait for 3 seconds


























  
