Feature: Como usuario quiro cambiar de contraseña

@user1 @web
Scenario: Cambiar contraseña

Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/signin"
  When I wait for 2 seconds
  When I enter email "d.castrog2@uniandes.edu.co"
  When I wait for 2 seconds
  And I enter password "PruebasA123"
  When I wait for 2 seconds
  And I click in login
  When I wait for 5 seconds
  And I go to settings page
  When I wait for 2 seconds
  And I click in Staff
  When I wait for 2 seconds
  And I choose admin user
  When I wait for 1 seconds
  And I enter old password "PruebasA123"
  And I enter new password "NPruebasA123"
  And I enter verification of new password "NPruebasA123"
  When I wait for 2 seconds
  And I click change password
  And I wait for 4 seconds
  And The new password should be old password
  When I wait for 3 seconds
  Then I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/dashboard"


