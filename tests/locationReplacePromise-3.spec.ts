import { test, expect } from '@playwright/test';

for (let index = 0; index < 20; index++) {
  test(`check 302 code ${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.getByRole('link', { name: 'location.replace from Promise' }).click();
    await page.waitForURL(/github/, {waitUntil: 'load'});
  });
}
