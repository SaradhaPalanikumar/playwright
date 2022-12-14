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
      
    await page.click('text=Haben oder haben');

    await page.click('text=add to cart');

    //Assert if item is added to cart
    await expect(page.locator('xpath=//*[@id="app-content"]/div/div/ul/li')).toContainText("1x, Haben oder haben, Fric Eromm, $9.95");

    //Assert the total price to be a number
    await expect(page.locator('#total-price')).toBeNaN;

    //Assert that the checkbox is visible 
    await expect(page.locator('#billing-coupon')).toBeVisible();

    await page.check('#billing-coupon');

    //Assert checkbox is checked
    expect(await page.isChecked('#billing-coupon')).toBeTruthy();

    //Assert for text
    await expect(page.locator('xpath=//*[@id="app-content"]/div/div/div[2]/p')).toContainText("Invalid coupon.");

    await page.click('text=Empty Cart');

    //Assert if cart is empty
    await expect(page.locator('xpath=//*[@id="app-content"]/div/div/ul')).toBeEmpty;
    await expect(page.locator('#total-price')).toHaveId('total-price');

    await page.click('text=Checkout');

    //Assert checkout page
    await expect(page.locator('xpath=//*[@id="app-content"]/div/div/h1')).toHaveText("Checkout");


    await page.fill('#s-name', "Saradha Mohan"); 

    await page.fill('[placeholder="Surname"]', "Saradha");

    await page.fill('#s-address', "G-1,ABC Appartment,cantonment"); 

    await page.fill('#s-zipcode',"620001");

    await page.fill('#s-city',"Chennai");

    await page.fill('[placeholder="Company (optional)"]',"SSR");

    await page.check('#asap');

    await page.click('xpath=//*[@id="app-content"]/div/div/button');

    //Assert to have text
    await expect(page.locator('#order-confirmation')).toHaveText('All good, order is on the way. Thank you!!');


   

})


   
 
   


