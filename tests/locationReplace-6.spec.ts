import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.on('console', message => {
    console.log("console - ", message);
  });
  page.on('pageerror', error => {
    console.log("console - ", error.message);
  });
  page.on('request', request => {
    console.log(`request => ${request.method()} ${request.url()} ${request.postData()}`);
  });
  page.on('requestfailed', request => {
    const error = request.failure();
    const errorMessage = error ? error.errorText : '';
    console.log(`<= request failed ${errorMessage} ${request.url()}`);
  });
  page.on('requestfinished', request => {
    console.log(`<= request finished ${request.url()}`);
  });
  page.on('response', response => {
    console.log(`<= response ${response.url()} ${response.status()}`);
  });
});

for (let index = 0; index < 50; index++) {
  test(`check location.replace code 3-${index}`, async ({ page }) => {
    await page.goto('https://mikhail-shafigullin.github.io/');
    await page.locator('#test-promise-location-replace-timeout-before').click();
    await page.waitForURL(/github/, {waitUntil: 'load'});
  });
}
