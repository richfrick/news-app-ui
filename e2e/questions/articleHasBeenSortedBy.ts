import { expect, Page } from '@playwright/test';
import {
  convertCommentCountstoIntArray,
  convertDateStringToTimeInMins,
} from '../utils/data-converters';
import { LoadingSpinner, ArticleList } from '../selectors';
import { SortBy } from '../constants/filtersAndSort';

export async function articleHasBeenSortedBy(page: Page, sortedBy: SortBy) {
  const loadingSpinner = new LoadingSpinner(page);
  const articleList = new ArticleList(page);
  let sortOrder;

  await loadingSpinner.isLoading.waitFor({ state: 'detached' });
  await articleList.articleTile.first().waitFor();

  const sortedElements = await articleList
    .articleTileContent(sortedBy)
    .allInnerTexts();

  if (sortedBy === 'created_at') {
    sortOrder = convertDateStringToTimeInMins(sortedElements);
  } else {
    sortOrder = convertCommentCountstoIntArray(sortedElements);
  }
  await expect(sortOrder.length).toBeGreaterThan(0);

  for (let i = 1; i < sortOrder.length; i++) {
    expect(sortOrder[i - 1]).toBeGreaterThanOrEqual(sortOrder[i]);
  }
}
