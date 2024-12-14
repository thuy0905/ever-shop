const { test, expect } = require('@playwright/test');
const allure = require('allure-js-commons');

async function inputTextByLable(label,value,page){
  let inputXpath =`(//label[./text()[normalize-space()='${label}']]/following::input)[1]`;
  await page.locator(inputXpath).fill(value);

}

test('Verify admin login successfully', async ({ page }) => {
  await page.goto("http://localhost:3000/admin/login");
  await expect(page).toHaveTitle("Admin Login");
  await inputTextByLable("Email","test@with.me",page);
  await inputTextByLable("Password","123456",page);
  let signInButtonXpath= "//button[.//text()[normalize-space()='SIGN IN']]";
  await page.locator(signInButtonXpath).click();
  let logoTextXpath="//div[contains(concat(' ',@class,' '),' logo ') and .//text()[normalize-space()='EVERSHOP']]";
  await expect(page.locator(logoTextXpath)).toBeVisible();
});

