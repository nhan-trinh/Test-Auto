test('Hiển thị skeleton khi loading', async ({ page }) => {
  await page.route('**/articles/sample-article', async (route) => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Delay 2s
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ title: "Sample Article", content: "..." })
    });
  });

  await page.goto('http://localhost:5173/article/sample-article');
  await expect(page.locator('.skeleton-title')).toBeVisible();
  await page.waitForSelector('h1'); // Chờ content load
  await expect(page.locator('.skeleton-title')).toBeHidden();
});