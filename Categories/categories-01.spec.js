const { test, expect } = require('@playwright/test');

test('Category page loads correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/category/technology');
  
  // Check main article
  await expect(page.locator('.breaking-title')).toBeVisible();
  await expect(page.locator('.breaking-image')).toBeVisible();
  
  // Check secondary articles
  await expect(page.locator('.breaking-list-item').first()).toBeVisible();
  
  // Check "What's More" section
  await expect(page.locator('.whats-more h1')).toHaveText("What's more");
  await expect(page.locator('.news').first()).toBeVisible();
});