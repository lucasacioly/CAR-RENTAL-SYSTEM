Scenario: Car return without delay
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I fill the informations of the day of the return
    Then the system show me that there was no delay
    And and shows me that there is no need to apply a fine

Scenario: Car return with delay
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I fill the informations of the day of the return
    Then the system show me that there was delay
    And and shows me the price of the fine that will be charged to the customer


Scenario: Car return as client
    Given I am loggen as "client"
    And I am at the "Car return" page
    When I select the button "Register car return"
    Then I go to the "Error" page
    And it shows "permission denied"

Scenario: Car return without all informations
    Given I am logged as "admin"
    And I am at the "Car return" page
    When I select the button "Register car return"
    And I don't fill all of the informations of the day of the return
    Then I go to the "Error" page
    And It shows "all the informations are required"