import { test, expect } from '@playwright/test';

test('duckduckgo', async ({ page }) => {

  // Go to https://duckduckgo.com/
  await page.goto('https://duckduckgo.com/');
  //await page.goto('https://duckduckgo.com/?natb=v338-1ja&cp=atbhc');//css path

  await page.waitForTimeout(1000);

  // Click [placeholder="Search without being tracked"]
  //await page.locator('xpath=//*[@id="searchbox_input"]').fill('playwright');
 //await page.waitForTimeout(1000);

  // Fill [placeholder="Search without being tracked"]
  //await page.locator('xpath=//*[@id="searchbox_input"]').fill('playwright');
  //await page.waitForTimeout(1000);

  // Press Enter
  //await page.locator('xpath=//*[@id="searchbox_input"]').press('Enter');
  //await expect(page).toHaveURL('https://duckduckgo.com/?va=j&t=hb&q=playwright');
  //await page.waitForTimeout(1000);
 //await page.locator('.btn.btn--primary.atb-button--faq.ddg-extension-hide').click();//(CSS Path for 2 nd URL)
 await page.locator('button', { hasText: 'See How It Works' }).click();//text selector
 
 await page.waitForTimeout(2000);



});
