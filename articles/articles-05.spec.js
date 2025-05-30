test('Hiển thị top 10 articles sidebar', async ({ page }) => {
  await page.route('**/articles?limit=10*', async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify([
        { slug: "top-1", title: "Top 1", views: 1000 },
        { slug: "top-2", title: "Top 2", views: 800 }
      ])
    });
  });

  await page.goto('http://localhost:5173/article/sample-article');
  await expect(page.locator('.top-articles ol li')).toHaveCount(2);
  await expect(page.locator('.top-articles .title').first()).toHaveText('Top 1');
});