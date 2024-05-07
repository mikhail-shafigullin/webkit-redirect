import { test, expect } from '@playwright/test';

for (let index = 0; index < 10; index++) {
  test(`check 301 code ${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.getByRole('link', { name: '301 Code to Google' }).click();
    await page.waitForURL(/google/);
  });
}
