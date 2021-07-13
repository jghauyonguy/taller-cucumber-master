Feature: Training Selenium Automation using Cucumber

  Scenario Outline: Filling Data using Cucumber

    Given User launch the Chrome browser
    When I open Google Homepage
    Then I fill out my <FirstName> and <LastName>





    Examples:
    |FirstName|LastName|Date|
    |         |        |    |

