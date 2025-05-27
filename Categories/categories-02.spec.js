test('Article links navigate correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/category/technology');
  
  // Click main article link
  const mainArticleLink = page.locator('.breaking-title a').first();
  await mainArticleLink.click();
  await expect(page).toHaveURL(/\/article\/.+/);
  
  // Go back and click a secondary article link
  await page.goBack();
  const secondaryArticleLink = page.locator('.breaking-list-item a').first();
  await secondaryArticleLink.click();
  await expect(page).toHaveURL(/\/article\/.+/);
});