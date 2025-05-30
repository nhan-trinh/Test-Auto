test('Hiển thị lỗi khi slug không tồn tại', async ({ page }) => {
  await page.route('**/articles/invalid-slug', async (route) => {
    await route.fulfill({
      status: 404,
      contentType: 'application/json',
      body: JSON.stringify({ error: "Bài viết không tồn tại" })
    });
  });

  await page.goto('http://localhost:5173/article/invalid-slug');
  await expect(page.locator('.article-error')).toBeVisible();
  await expect(page.locator('.article-error p')).toContainText('Failed to load article');
});