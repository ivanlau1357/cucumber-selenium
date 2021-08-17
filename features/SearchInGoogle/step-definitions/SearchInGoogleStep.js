const { When, Then, After, Before, Given, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
//const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');
const { Builder, By, Key, until } = require('selenium-webdriver');
setDefaultTimeout(60 * 1000)

let driver;

Given('I visit google homepage', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
});

When('I search for Google', async () => {
  await driver.findElement(By.name('q')).sendKeys('Google' + '\n')
});

Then('I should see the results', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text)
    await driver.quit();
});
  