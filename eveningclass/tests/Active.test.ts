import test, { chromium } from "@playwright/test";


test("TODO Demo", async() => {

const browser = await chromium.launch({
  headless : false
});
const context = await browser.newContext();//doesnt store cookies cache ans sessions will not be carry forward
const page = await browser.newPage();//new tab in a page
await page.goto("https://demo.playwright.dev/todomvc");
await page.waitForTimeout(1000);
await page.locator('xpath=/html/body/section/div/header/input').fill("buy some cheese");
//await page.locator('.new-todo').fill("buy some cheese");
await page.locator('.new-todo').press('Enter');
await page.waitForTimeout(1000);
await page.locator('.new-todo').fill("feed the cat");
await page.locator('.new-todo').press('Enter');
await page.waitForTimeout(1000);
//await page.locator('.filters >> text=Active').click();
await page.locator('xpath=/html/body/section/div/footer/ul/li[2]/a').click();
await page.waitForTimeout(1000);





//await page.fill("/html/body/section/div/header/input","buy some cheese");
})
