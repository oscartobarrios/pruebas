
Feature: Reenviar una invitacion a un miembro del staff


@user1 @web
Scenario: Loguearme y eliminar tag
    Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/"
    And I wait for 1 seconds
    When I enter email "<USUARIO>"
    And I wait for 1 seconds
    And I enter password "<CLAVE>"
    And I wait for 1 seconds
    And I click Sign in
    And I wait for 1 seconds
    And I click Configuration
    And I wait for 1 seconds
    And I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/settings"
    And I wait for 1 seconds
    And I click Staff
    And I wait for 1 seconds
    And I click Resend
    And I wait for 2 seconds
    
  