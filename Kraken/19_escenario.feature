Feature: Como administrador quiero revocar la subscripcion a un miembro

@user1 @web
Scenario Outline: Revocar subscripción

Given I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/signin"
  When I wait for 2 seconds
  When I enter email "d.castrog2@uniandes.edu.co"
  When I wait for 2 seconds
  And I enter password "PruebasA123"
  When I wait for 2 seconds
  And I click in login
  When I wait for 5 seconds
And I go to Members page
When I wait for 2 seconds
And I pick the first member of the list
When I wait for 2 seconds
And I click configuration member
And I click delete member
When I wait for 2 seconds
And I click confirm delete member
Then I navigate to page "https://ghost-uniandes.herokuapp.com/ghost/#/members"
And I wait for 5 seconds


