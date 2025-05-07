import { test, expect } from '@playwright/test';

test('Submit Article with Valid Data', async ({ page }) => {
  // Log in as admin
  await page.goto('http://localhost:5173/admin');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Fill out the form
  await page.fill('input[name="title"]', 'Test Article');
  await page.fill('input[name="author"]', 'Admin');
  await page.fill('input[name="image_url"]', 'http://example.com/image.jpg');
  await page.fill('input[name="image_caption"]', 'Example Image');
  await page.fill('textarea[name="subheader"]', 'Subheader Text');
  await page.fill('textarea[name="content"]', 'Content of the article.');
  await page.fill('input[name="publication_date"]', '2025-05-07');
  await page.selectOption('select[name="category_id"]', '1');

  // Submit the form
  await page.click('button:has-text("Publish")');

  // Expect alert
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Published!');
    await dialog.dismiss();
  });
});
