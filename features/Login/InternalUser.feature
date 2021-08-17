Feature: Internal User Login In
  
  Scenario Outline: Internal User can login or not
    Given I am on login page
    Given I am clicking the Internal User Login button
    And I enter "<name>" as login name
    And I enter "<password>" as login password
    When I click the login-btn button
    Then I should redirect to rating and review page

Examples:  
  | name              | password |
  | COMMS_CES         | cs123456 |
  | COMMS_ADMIN       | cs123456 |
  | COMMS_QA          | cs123456 |
  | COMMS_READONLY    | cs123456 |
  