import { test, expect } from '@playwright/test';

for (let index = 0; index < 20; index++) {
  test(`check location.replace inside of promise code 2-${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.locator('#test-promise-location-replace-timeout-after').click();
    await page.waitForURL(/github/, {waitUntil: 'load'});
  });
}
