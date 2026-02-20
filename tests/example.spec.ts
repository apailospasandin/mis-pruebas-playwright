import { test, expect } from '@playwright/test';

// Prueba para validar funcionalidad básica de búsqueda en Wikipedia
test('Mi primera prueba en Wikipedia', async ({ page }) => {
  // 1. Ir a la página de Wikipedia
  // .
  await page.goto('https://es.wikipedia.org/');

  // 2. Buscar el cuadro de búsqueda y escribir "Playwright"
  const buscador = page.getByPlaceholder('Buscar en Wikipedia');
  await buscador.fill('Playwright');

  // 3. Presionar Enter
  await buscador.press('Enter');

  // 4. Verificar que la nueva página contiene el título correcto
  // Esto es lo que llamamos una "Aserción" (Assertion)
  await expect(page.getByRole('heading', { name: 'Playwright' })).toBeVisible();
});