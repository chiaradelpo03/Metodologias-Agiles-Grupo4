import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('hago clic en el botón {string}', async ({ page }, nombre: string) => {
  const boton = page.locator('#btn-reiniciar').or(page.getByRole('button', { name: nombre }));
  await expect(boton).toBeVisible();
  await boton.click();
});

Then('la palabra enmascarada debería estar oculta o limpia', async ({ page }) => {
  const palabra = page.locator('#palabra-oculta');

  await expect.poll(async () => {
    if (!(await palabra.isVisible())) {
      return true;
    }

    return (await palabra.innerText()).trim() === '';
  }).toBe(true);
});
