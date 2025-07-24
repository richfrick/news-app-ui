import { expect, test } from '@playwright/test';
import { NavBar } from '../page-objects/navBar';
import { Article } from '../page-objects/article';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!);
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
  await expect(articles).toHaveCount(13);
});
