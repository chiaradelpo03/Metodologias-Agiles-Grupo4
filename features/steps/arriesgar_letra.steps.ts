import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('arriesgo la letra {string}', async ({ page }, letra: string) => {
  const inputLetra = page.getByLabel('Letra');
  await inputLetra.fill(letra);
  await inputLetra.press('Enter');
});

Then('debería ver la palabra {string}', async ({ page }, palabra: string) => {
  await expect(page.locator('#palabra-oculta')).toHaveText(palabra);
});

Then('debería ver que me quedan {int} intentos', async ({ page }, intentos: number) => {
  await expect(page.locator('#intentos-restantes')).toHaveText(intentos.toString());
});

