import { test } from '@playwright/test';
import { articleListSelectTopicFilter } from '../tasks/articleListSelectTopicFilter';
import { headerTitleIsCorrect } from '../questions/headerTitleIsCorrect';
import { articleListTopicFilterHasBeenApplied } from '../questions/articleListTopicFilterHasBeenApplied';
import { applySortByOnArticles } from '../tasks/articlesApplySortBy';
import { articleHasBeenSortedBy } from '../questions/articleHasBeenSortedBy';
import { SORT_BY, TOPICS } from '../constants/filtersAndSort';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

TOPICS.forEach((topic) => {
  test(`Page Filter - filter by ${topic} articles`, async ({ page }) => {
    await headerTitleIsCorrect(page);
    await articleListSelectTopicFilter(page, topic);
    await articleListTopicFilterHasBeenApplied(page, topic);
  });
});

SORT_BY.forEach((sortOption) => {
  test(`Page Filter - Sort By: ${sortOption}`, async ({ page }) => {
    await applySortByOnArticles(page, sortOption);
    await articleHasBeenSortedBy(page, sortOption);
  });
});
