const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// ----------------- GIVEN -----------------
Given('que el usuario está en la página de login', async function () {
    await this.page.goto('/login');
    await expect(this.page).toHaveURL(/.*\/login/);
});

// ----------------- WHEN -----------------

// Login exitoso
When('el usuario ingresa el nombre de usuario "tomsmith"', async function () {
    await this.page.locator('#username').fill('tomsmith');
});

When('el usuario ingresa la contraseña "SuperSecretPassword!"', async function () {
    await this.page.locator('#password').fill('SuperSecretPassword!');
});

When('el usuario hace clic en el botón de login', async function () {
    await this.page.getByRole('button', { name: 'Login' }).click();
});

// Login fallido con usuario inválido
When('ingresa usuario no valido y presiona el botón "Login"', async function () {
    await this.page.locator('#username').fill('tomperez');
    await this.page.getByRole('button', { name: 'Login' }).click();
});

// Login fallido con credencial vacía
When('ingresa usuario "pepito2" y clave "" y presiona el botón "Login"', async function () {
    await this.page.locator('#username').fill('pepito2');
    await this.page.locator('#password').fill('');
    await this.page.getByRole('button', { name: 'Login' }).click();
});

// ----------------- THEN -----------------
// Comunes para todos los escenarios de fallo
Then('debe permanecer en la página de login', async function () {
    await expect(this.page).toHaveURL(/.*\/login/);
});

Then('debe ver mensaje de error de credenciales inválidas', async function () {
    await expect(this.page.locator('#flash')).toContainText("Your username is invalid!");
});

// Then específico para login exitoso
Then('debería ver el mensaje "You logged into a secure area!"', async function () {
    await expect(this.page.locator('#flash')).toContainText("You logged into a secure area!");
});

//en Given , en When y Then debe ir textual lo que esta en el feature file, es decir lo que esta entre comillas, no se puede cambiar

