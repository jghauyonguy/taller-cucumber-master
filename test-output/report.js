$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleHome.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage",
  "description": "This feature verifies the functionality on Google Homepage",
  "id": "google-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check that main elements on Google Homepage are displayed",
  "description": "",
  "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Google Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify that the page displays search text box",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the page displays Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the page displays Im Feeling Lucky button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the browser close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition_Google.i_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1632648400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Google.i_open_Google_Homepage()"
});
formatter.result({
  "duration": 502122800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Google.i_verify_that_the_page_displays_search_text_box()"
});
formatter.result({
  "duration": 27107300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Google.the_page_displays_Google_Search_button()"
});
formatter.result({
  "duration": 25123500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Google.the_page_displays_Im_Feeling_Lucky_button()"
});
formatter.result({
  "duration": 14663700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Google.the_browser_close()"
});
formatter.result({
  "duration": 666222400,
  "status": "passed"
});
});