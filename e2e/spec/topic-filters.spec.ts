import { test } from '@playwright/test';
import { articleListSelectTopicFilter } from '../tasks/articleListSelectTopicFilter';
import { headerTitleIsCorrect } from '../questions/headerTitleIsCorrect';
import { articleListTopicFilterHasBeenApplied } from '../questions/articleListTopicFilterHasBeenApplied';
import { applySortByOnArticles } from '../tasks/articlesApplySortBy';
import { articleHasBeenSortedBy } from '../questions/articleHasBeenSortedBy';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const topics = ['football', 'cooking', 'coding'];
const sortBy = ['comment_count', 'created_at', 'votes'];

topics.forEach((topic) => {
  test(`Page Filter - filter by ${topic} articles`, async ({ page }) => {
    await headerTitleIsCorrect(page);
    await articleListSelectTopicFilter(page, topic);
    await articleListTopicFilterHasBeenApplied(page, topic);
  });
});

sortBy.forEach((sortOption) => {
  test(`Page Filter - Sort By: ${sortOption}`, async ({ page }) => {
    await applySortByOnArticles(page, sortOption);
    await articleHasBeenSortedBy(page, sortOption);
  });
});
