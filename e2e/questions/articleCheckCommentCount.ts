import { expect, Page } from '@playwright/test';
import { Comments } from '../selectors';

export async function commentCountOnArticleShouldBe(
  page: Page,
  commentCount: number
) {
  const comments = new Comments(page);
  await expect(comments.comment).toHaveCount(commentCount);
}
