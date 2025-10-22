import { expect, Page } from '@playwright/test';
import { Comments } from '../selectors';

export async function articleCommentShouldExist(
  page: Page,
  commentBody: string,
  shouldExist: boolean
) {
  const comment = new Comments(page);
  const commentFound = await comment.commentBody(commentBody).isVisible();

  if (shouldExist) {
    expect(commentFound).toBeTruthy();
  } else {
    expect(commentFound).toBeFalsy();
  }
}
