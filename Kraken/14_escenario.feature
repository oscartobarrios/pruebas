
Feature: Eliminar un TAG


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
    And I click Tags
    And I wait for 2 seconds
    And I click primer tag
    And I wait for 2 seconds
    And I click Delete tag
    And I wait for 2 seconds
    And I click Delete botton
    And I wait for 2 seconds
  


