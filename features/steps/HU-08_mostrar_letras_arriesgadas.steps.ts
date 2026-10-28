import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd();

Then('debería ver las letras arriesgadas {string}', async ({ page }, letras: string) => {
  await expect(page.locator('#letras-arriesgadas')).toHaveText(letras);
});
