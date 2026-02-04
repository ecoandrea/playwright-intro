const {test, expect} = require('@playwright/test')

test.describe("Pruebas sobre Form Validatuon", () => {
    test("Login con datos válidos", async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/login")
        await expect(page.locator("#username")).toBeVisible();
        await expect(page.locator("[name='password']")).toBeVisible();
        await expect(page.getByRole("button", {name: "login"})).toBeVisible();
    })

})