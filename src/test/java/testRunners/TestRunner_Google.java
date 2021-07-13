package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features="./src/test/resources/features",
		glue={"stepDefinitions"},
		plugin =  {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class TestRunner_Google {
 
}
