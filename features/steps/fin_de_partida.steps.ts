import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd();

Then('debería ver el mensaje {string}', async ({ page }, mensaje: string) => {
  await expect(page.locator('#estado-juego')).toHaveText(mensaje);
});
