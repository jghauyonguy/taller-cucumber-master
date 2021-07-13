package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import common.Page_Base;
import org.openqa.selenium.chrome.ChromeOptions;


import java.util.concurrent.TimeUnit;

public class Google_Home extends Page_Base {
	 
	public void launchBrowser() {
		ChromeOptions options = new ChromeOptions();
		options.setBinary("/.src/test/resources/browser/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}



	
	public void openGoogleURL() {
		driver.get("http://www.google.com");
	}
		
	public void checkSearchBoxIsDisplayed() {
		if(driver.findElement(By.name("q")).isDisplayed()) {
			System.out.println("Search text box is displayed");
		} else {
			System.out.println("Search text box is NOT displayed");
		}
	}
	
	public void checkGoogleSearchButtonIsDisplayed() {
		if(driver.findElement(By.name("btnK")).isDisplayed()) {
			System.out.println("Google Search button is displayed");
		} else {
			System.out.println("Google Search button is NOT displayed");
		}
	}
	
	public void checkImFeelingLuckyButtonIsDisplayed() {
		if(driver.findElement(By.name("btnI")).isDisplayed()) {
			System.out.println("I'm Feeling Lucky button is displayed");
		} else {
			System.out.println("I'm Feeling Lucky button is NOT displayed");
		}
	}
	
	public void closeTheBrowser() {
		driver.quit();
	}
}
