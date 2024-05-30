import { test, expect } from '@playwright/test';

for (let index = 0; index < 50; index++) {
  test(`check 302 code ${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.getByRole('link', { name: '302 Code to Twitter' }).click();
    await page.waitForURL(/twitter/);
  });
}
