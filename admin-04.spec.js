import { test, expect } from '@playwright/test';

test('Validate Category Dropdown', async ({ page }) => {
  // Log in as admin
  await page.goto('http://localhost:5173/admin');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Check category dropdown
  const options = await page.$$eval('select[name="category_id"] option', options => options.map(option => option.textContent));
  expect(options).toContain('--Category--');
  expect(options.length).toBeGreaterThan(1);
});
