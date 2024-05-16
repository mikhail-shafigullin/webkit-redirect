import { test, expect } from '@playwright/test';

for (let index = 0; index < 20; index++) {
  test(`check location.replace code 3-${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.locator('#test-location-replace').click();
    await page.waitForURL(/github/, {waitUntil: 'load'});
  });
}
