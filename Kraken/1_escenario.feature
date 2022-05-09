Feature: escenario 1

@user1 @web
Scenario: Hacer login, crear un nuevo miembro, ir al listado de miembros, seleccionarlo del listado y eliminarlo
  Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click login
  And I wait for 3 seconds
  And I click members
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  When I enter name member "Test Name"
  And I wait for 1 seconds
  When I enter email member "test_ghost@ghost.co"
  And I wait for 2 seconds
  Then I click save member
  And I wait for 3 seconds
  And I click members
  And I wait for 2 seconds
  And I select member by name
  And I wait for 3 seconds
  And I click options member
  And I wait for 2 seconds
  And I click delete member
  And I wait for 1 seconds
  And I click confirm delete member
  Then I wait for 3 seconds



























  
