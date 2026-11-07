import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

// Primera palabra de la lista predefinida del dominio (GATO, 4 letras)
// Segunda palabra: SOL (3 letras) — longitud distinta, fuerza el RED del escenario 2
const PRIMERA_PALABRA = 'GATO';

Given('que inicio el juego sin especificar una palabra', async ({ page }) => {
  await page.goto('/');
});

When('completo la partida adivina todas las letras de la primera palabra', async ({ page }) => {
  for (const letra of PRIMERA_PALABRA) {
    const inputLetra = page.getByLabel('Letra');
    await inputLetra.fill(letra);
    await inputLetra.press('Enter');
  }
});

Then('la palabra enmascarada debería mostrar solo guiones bajos', async ({ page }) => {
  const texto = await page.locator('#palabra-oculta').innerText();
  expect(texto).toMatch(/^[_ ]+$/);
});

Then('la palabra enmascarada debería tener {string} guiones', async ({ page }, guiones: string) => {
  await expect(page.locator('#palabra-oculta')).toHaveText(guiones);
});
