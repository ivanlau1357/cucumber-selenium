Feature: Search Google on google

  Scenario: Search Google on google
    Given I visit google homepage
    When I search for Google
    Then I should see the results
    
    