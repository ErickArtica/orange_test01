Feature: Update my info
  I want to see my info and update

  @focus
  Scenario: Login and update my info
    Given I open Orange page
    When I write "Admin" and "admin123"
    Then I click on the button login
    When I click on the menu my info
    And I write full name "Erick","Artica","Ambrosio"
    And I write employee information "neozone","8956821"
    And I write Driver's License Number "547264" and select when it expire "12-08-2025"
    And I select Nationality "American" and Marital Status "Married"
    And I select Date of Birth "28-09-1997" and Gender
    And I select Blood Type "O+" and write Test_Field "777"
    And I click in the button add
    And I click in the button browse to up a file
    Then I click in the button save and add the file