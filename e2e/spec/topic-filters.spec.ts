import { test } from '@playwright/test';
import { articleListSelectTopicFilter } from '../tasks/articleListSelectTopicFilter';
import { headerTitleIsCorrect } from '../questions/headerTitleIsCorrect';
import { articleListTopicFilterHasBeenApplied } from '../questions/articleListTopicFilterHasBeenApplied';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const topics = ['football', 'cooking', 'coding'];

topics.forEach((topic) => {
  test(`filter by ${topic} articles`, async ({ page }) => {
    await headerTitleIsCorrect(page);
    await articleListSelectTopicFilter(page, topic);
    await articleListTopicFilterHasBeenApplied(page, topic);
  });
});
