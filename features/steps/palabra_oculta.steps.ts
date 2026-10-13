import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('que inicio una nueva partida con la palabra {string}', async ({ page }, palabra: string) => {
  await page.goto(`/?palabra=${palabra}`);
});

When('observo la palabra en juego', async ({ page }) => {
  // Verificamos la presencia del elemento en pantalla
  await page.locator('#palabra-oculta').waitFor({ state: 'attached', timeout: 5000 });
});

Then('debería ver los guiones {string}', async ({ page }, guiones: string) => {
  const elemento = page.locator('#palabra-oculta');
  await expect(elemento).toHaveText(guiones);
});
