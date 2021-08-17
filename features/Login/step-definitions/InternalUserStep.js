const { When, Then, After, Before, Given, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
// const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');
const { Builder, By, Key, until } = require('selenium-webdriver');
setDefaultTimeout(60 * 1000)

let driver;

Given('I am on login page', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/login');
});

Given('I am clicking the Internal User Login button', async () => {
  await driver.findElement(By.id('internalUserLogin-btn')).click();
});

Given('I enter {string} as login name', async (name) => {
  await driver.findElement(By.id('login-name')).sendKeys(name);
});

Given('I enter {string} as login password', async (password) => {
  await driver.findElement(By.id('login-password')).sendKeys(password);
});

When('I click the login-btn button', async () => {
  await driver.findElement(By.id('login-btn')).click();
});

Then('I should redirect to rating and review page', async () => {
  await driver.wait(until.urlContains('ratings_review'));
  const currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).contain('ratings_review');
  await driver.quit();
});