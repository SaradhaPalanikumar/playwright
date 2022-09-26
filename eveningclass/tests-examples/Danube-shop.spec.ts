import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://danube-web.shop/');
});

test ('click on elements', async ({page}) =>
{
    

    await page.click('#login');


    await page.type('[placeholder="Email"]', "user@gmail.com");

    await page.type('#n-password2', "password");

    await page.click('#goto-signin-btn');

    await expect(page.locator(".error-message")).
    toContainText('The email and/or password you have provided is incorrect')

    //await page.pause();
   
})
test('click on SIGN-UP', async ({page}) =>
{

    await page.click("#signup");
    await page.type('#s-name', "Saradha Mohan");
    await page.type('[placeholder="Surname"]', "Saradha");
    await page.type('#s-email', "palsardarsh@gmail.com");
    await page.type('#s-password2', "password");
    await page.type('[placeholder="Company (optional)"]', "SSR");
    await page.locator('#myself').check();
    await page.locator('xpath=//*[@id="privacy-policy"]').click();
    await page.waitForTimeout(3000);
    await page.click("#register-btn");
    //await page.locator('xpath=//*[@id="privacy-policy"]').click();
    //await page.click("#privacy-policy");
    
    

})
test('Add to Cart', async ({page}) =>
{
    await page.locator('text=Haben oder haben').click();
    await page.locator('text=add to cart').click();
    await expect(page.locator('xpath=//*[@id="app-content"]/div/div/ul/li')).toContainText("1x, Haben oder haben, Fric Eromm, $9.95")
   
    await page.locator('text=Checkout').click();
    await page.type('#s-name', "Saradha Mohan"); 
    await page.type('[placeholder="Surname"]', "Saradha");
    await page.waitForTimeout(1000);
    await page.type('#s-address', "G-1,ABC Appartment,cantonment"); 
    await page.waitForTimeout(2000);
    await page.type('#s-zipcode',"620001");
    await page.waitForTimeout(2000);
    await page.type('#s-city',"Chennai");
    await page.waitForTimeout(2000);
    await page.type('[placeholder="Company (optional)"]',"SSR");
    await page.waitForTimeout(1000);
    await page.locator('#asap').check();
    await page.waitForTimeout(2000);
    //await page.locator('#billing-different').check();
    await page.locator('xpath=//*[@id="app-content"]/div/div/button').click();


   
    //await page.type('[placeholder="Company (optional)]',"SSR");
    //await page.waitForTimeout(2000);*/

})
    


  // await page.waitForTimeout(3000);
   
 
   

