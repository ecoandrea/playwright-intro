const {test, expect} = require('@playwright/test')

test.describe("Mi primer Test con Playwright", () => {
    test("Validar elementos de Google", async ({page}) => {
        await page.goto("https://google.com/ncr")
        await expect(page).toHaveTitle('Google')
        const btnBuscar = page.getByRole("button", { name: "Google Search" })
        await expect(btnBuscar.first()).toBeVisible()
    })

})
    

    //page da acceso a toodo lo de la pantallacls
