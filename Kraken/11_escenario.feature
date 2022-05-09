
Feature: Crear Staff


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
    And I click Invite People
    And I wait for 1 seconds
    And I write email staff
    And I wait for 1 seconds
    And I click send invitation
    And I wait for 2 seconds
    
  