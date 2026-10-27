import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('hago clic en el botón {string}', async ({ page }, nombre: string) => {
  const boton = page.locator('#btn-reiniciar').or(page.getByRole('button', { name: nombre }));
  await expect(boton).toBeVisible();
  await boton.click();
});

Then('la palabra enmascarada debería volver a mostrar {string}', async ({ page }, mascara: string) => {
  await expect(page.locator('#palabra-oculta')).toHaveText(mascara);
});
