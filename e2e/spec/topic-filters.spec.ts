import { test } from '@playwright/test';
import { selectTopic } from '../tasks/selectTopic';
import { pageTitleIsCorrect } from '../questions/pageTitleIsCorrect';
import { topicFilterHasBeenApplied } from '../questions/topicFilterHasBeenApplied';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const topics = ['football', 'cooking', 'coding'];

topics.forEach((topic) => {
  test(`filter by ${topic} articles`, async ({ page }) => {
    await pageTitleIsCorrect(page);
    await selectTopic(page, topic);
    await topicFilterHasBeenApplied(page, topic);
  });
});
