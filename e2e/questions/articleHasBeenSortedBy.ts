import { expect, Page } from '@playwright/test';
import {
  convertCommentCountstoIntArray,
  convertDateStringToTimeInMins,
} from '../utils/data-converters';

export async function articleHasBeenSortedBy(page: Page, sortedBy: string) {
  const lookup = {
    comment_count: 'Comments',
    created_at: 'Created by',
    votes: 'Up-votes',
  };
  let sortOrder;

  const sortedElements = await page
    .locator(`//article //h3 [contains(., "${lookup[sortedBy]}")]`)
    .allInnerTexts();

  if (sortedBy === 'created_at') {
    sortOrder = convertDateStringToTimeInMins(sortedElements);
  } else {
    sortOrder = convertCommentCountstoIntArray(sortedElements);
  }

  expect(sortOrder.length).toBeGreaterThan(0);

  for (let i = 1; i < sortOrder.length; i++) {
    expect(sortOrder[i - 1]).toBeGreaterThanOrEqual(sortOrder[i]);
  }
}
