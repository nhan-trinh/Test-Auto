import { test, expect } from '@playwright/test';

test('Access Control for Admin Form Page', async ({ page }) => {
  await page.goto('http://localhost:5173/admin');
  await expect(page.locator('text=Login')).toBeVisible();
});
