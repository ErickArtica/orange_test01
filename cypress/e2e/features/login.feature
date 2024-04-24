Feature: Orange Main Page
  I want to open Orange page and login

  @focus
  Scenario: Opening a search Orange page
    Given I open Orange page
    When I write username and password
      | username | password |
      | Admin    | admin123 |
    Then I click on the button login
