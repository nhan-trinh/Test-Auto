test('Hiển thị related articles', async ({ page }) => {
  // Mock main article
  await page.route('**/articles/sample-article', async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify({ 
        title: "Sample Article", 
        category: "tech" 
      })
    });
  });

  // Mock related articles
  await page.route('**/categories/tech/articles*', async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify([
        { slug: "related-1", title: "Related 1", image_url: "https://example.com/1.jpg" },
        { slug: "related-2", title: "Related 2", image_url: "https://example.com/2.jpg" }
      ])
    });
  });

  await page.goto('http://localhost:5173/article/sample-article');
  await expect(page.locator('.related-grid')).toBeVisible();
  await expect(page.locator('.related-card')).toHaveCount(2);
});