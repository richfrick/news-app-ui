import { expect, Page } from '@playwright/test';

export async function commentCountOnArticleShouldBe(
  page: Page,
  commentCount: number
) {
  const comments = page.locator('div.p-3.rounded-lg');
  await expect(comments).toHaveCount(commentCount);
}
