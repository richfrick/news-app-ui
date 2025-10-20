import { expect, Page } from '@playwright/test';

export async function articleCommentShouldExist(
  page: Page,
  commentBody: string,
  shouldExist: boolean
) {
  const commentFound = await page
    .locator(`//p[contains(.,"${commentBody}")]`)
    .isVisible();

  if (shouldExist) {
    expect(commentFound).toBeTruthy();
  } else {
    expect(commentFound).toBeFalsy();
  }
}
