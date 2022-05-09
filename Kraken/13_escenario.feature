
Feature: Tratar de eliminar un miembro y cancelar al final


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
    And I click Members
    And I wait for 1 seconds
    And I click first member
    And I wait for 1 seconds
    And I click configuration member
    And I wait for 1 seconds
    And I click delete member
    And I wait for 1 seconds
    And I click cancel delete member
    And I wait for 2 seconds
    And I click Members
    And I wait for 2 seconds
    
  