import { test, expect } from '@playwright/test';

test('Submit Article with Empty Fields', async ({ page }) => {
  // Log in as admin
  await page.goto('http://localhost:5173/admin');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Leave required fields empty and submit
  await page.click('button:has-text("Publish")');

  // Expect alert or error
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Error');
    await dialog.dismiss();
  });
});
