import { expect, Page } from '@playwright/test';

export async function articleCommentShouldExist(
  page: Page,
  commentBody: string,
  shouldExist: boolean
) {
  const comments = page.locator('div.p-3.rounded-lg');
  let commentFound = false;

  for (let i = 0; i < (await comments.count()); i++) {
    const text = await comments.nth(i).locator('p').textContent();
    if (text?.toLowerCase().includes(commentBody.toLowerCase())) {
      commentFound = true;
    }
  }

  if (shouldExist) {
    expect(commentFound).toBeTruthy();
  } else {
    expect(commentFound).toBeFalsy();
  }
}
