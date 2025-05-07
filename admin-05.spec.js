import { test, expect } from '@playwright/test';

test('Logout Functionality', async ({ page }) => {
  // Log in as admin
  await page.goto('http://localhost:5173/admin');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Click logout
  await page.click('button:has-text("Logout")');

  // Try revisiting admin form page
  await page.goto('http://localhost:5173/admin');
  await expect(page.locator('text=Login')).toBeVisible();
});
