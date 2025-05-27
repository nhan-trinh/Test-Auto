test.describe('Responsive Layout', () => {
  test('Mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5173/category/technology');
    await expect(page.locator('.main-columns')).toHaveCSS('flex-direction', 'column');
  });
  
  test('Desktop view', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('http://localhost:5173/category/technology');
    await expect(page.locator('.main-columns')).toHaveCSS('flex-direction', 'row');
  });
});