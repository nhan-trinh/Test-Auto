test('Skeleton loading states appear', async ({ page }) => {
  // Mock slow API response
  await page.route('**/categories/technology/articles', async (route) => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    route.continue();
  });
  
  await page.goto('http://localhost:5173/category/technology');
  
  // Check skeleton placeholders
  await expect(page.locator('.skeleton-main-1')).toBeVisible();
  await expect(page.locator('.skeleton-whats-more')).toBeVisible();
  
  // Wait for content to load
  await expect(page.locator('.breaking-title')).toBeVisible();
});