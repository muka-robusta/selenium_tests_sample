const {Builder, By, Key, util} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();


const driver = new Builder().forBrowser("firefox").build();

async function what_is_selenium(){
	let driver = await new Builder().forBrowser("firefox").build();
	await driver.get("http://www.google.com");
	await driver.findElement(By.name("q")).sendKeys("Selenium", Key.ENTER);
}

async function check_news(){
	await driver.get("http://prm.ua/");
	await driver.wait(until.elementLocated(By.id("emailform")).parentFrame(), 10000);
	await driver.findElement(By.id("emailinput")).sendKeys("info@prm.ua", Key.ENTER);
}

async function subcribe_news() {
	await driver.get("http://sayonaraboy.com/contact/");
	await driver.findElement(By.xpath("//input[@name=\"Name\"]")).sendKeys("Petro Poroshenko");
	await driver.findElement(By.xpath("//input[@name=\"Email\"]")).sendKeys("info@prm.ua");
	await driver.findElement(By.xpath("//input[@name=\"Title\"]")).sendKeys("Армія Мова Віра");
	await driver.findElement(By.xpath("//textarea[@name=\"Message\"]")).sendKeys("Жити по новому");
	await driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();
	await driver.findElement(By.xpath("//input[@value=\"　 Send 　\"]")).click();
}

subcribe_news();

