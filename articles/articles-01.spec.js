test('Hiển thị chi tiết bài viết', async ({ page }) => {
  // Mock API response
  await page.route('**/articles/sample-article', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        title: "Sample Article",
        author: "John Doe",
        publication_date: "2023-10-01",
        image_url: "https://example.com/image.jpg",
        content: "This is a sample article content."
      })
    });
  });

  await page.goto('http://localhost:5173/article/sample-article');
  await expect(page.locator('h1')).toHaveText('Sample Article');
  await expect(page.locator('.article-meta')).toContainText('By John Doe');
  await expect(page.locator('.article-image img')).toBeVisible();
  await expect(page.locator('.article-body')).toContainText('sample article content');
});