test('API returns articles for category', async ({ request }) => {
  const response = await request.get('http://localhost:3001/api/categories/technology/articles');
  expect(response.status()).toBe(200);
  const articles = await response.json();
  expect(articles.length).toBeGreaterThan(0);
});