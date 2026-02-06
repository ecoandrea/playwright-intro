const {test, expect} = require('@playwright/test')

test.describe("Pruebas sobre Form Validation", () => {
    test("Login con datos válidos", async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/login")
        await expect(page.locator("#username")).toBeVisible();
        await expect(page.locator("[name='password']")).toBeVisible();
        await expect(page.getByRole("button", {name: "login"})).toBeVisible();
    })

    //
   

test.describe("tercera prueba",()=>{
    test("prueba valida",async({ page })=>{

    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForLoadState('networkidle');
    await page.fill("#username","tomsmith");
    await page.fill("#password","SuperSecretPassword!");
    await page.click('button[type="submit"]');
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
})
    test("prueba invalida",async({ page })=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForLoadState('networkidle');
    await page.fill("#username","tomsmith");
    await page.fill("#password","SuperSecretPassword!P");
    await page.click('button[type="submit"]');
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
})
 test("prueba valida sin visualizar el logout",async({ page })=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForLoadState('networkidle');
    await page.fill("#username","tomsmith");
    await page.fill("#password","SuperSecretPassword!d");
    await page.click('button[type="submit"]');
    await expect(page.locator('a[href="/logout"]')).not.toBeVisible();
})
})
})