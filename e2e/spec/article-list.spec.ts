import { expect, test } from '@playwright/test';
import { NavBar } from '../page-objects/navBar';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('filter by football articles', async ({ page }) => {
  const navBar = new NavBar(page);
  await navBar.selectTopic('Football');

  const filteredTopicHeading = page.getByRole('region', {
    name: 'filtered topic',
  });
  const articles = filteredTopicHeading.getByRole('listitem');

  await expect(page).toHaveTitle('Elaborate Snickerdoodle');
  await expect(filteredTopicHeading).toBeVisible();
  await expect(filteredTopicHeading).toContainText(/football/i);

  for (let i = 0; i < (await articles.count()); i++) {
    const article = articles.nth(i);
    expect(article).toContainText('Topic: football');
  }
});
