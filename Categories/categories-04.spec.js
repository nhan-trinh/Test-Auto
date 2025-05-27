test('API handles invalid category slug', async ({ request }) => {
  const response = await request.get('http://localhost:3001/api/categories/invalid-slug/articles');
  expect(response.status()).toBe(404);
  const data = await response.json();
  expect(data.error).toContain('Danh mục không tồn tại');
});