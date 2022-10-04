Feature: Confirmar a devolução de um carro

Scenario: Car return without delay
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I select the option of "no delay"
    Then the system show that there is no need to apply a fine
    And and shows the confirmation of the return of the car

Scenario: Car return with delay
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I select the option of "with 1 week delay"
    Then the system show the price of the fine to be charged
    And and shows the confirmation of the return of the car

Scenario: Car return without all informations
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I don't fill all of the informations of a hipotetical fine
    Then I a warning appears
    And It shows "all the informations are required"
    And It asks me again the informations

Scenario: Car damaged
    Given Im am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I select the button "Car damaged"
    Then the system show me that there was no delay
    And show me the price of the fine to be charged to the client for damage to the car
