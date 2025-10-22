import { Page, expect } from '@playwright/test';
import { Comment } from '../types/comment';
import { Comments } from '../selectors';

export async function deleteComment(page: Page, comment: Comment) {
  const comments = new Comments(page);

  await comments.deleteComment(comment.body).click();

  await expect(page.getByText('your comment has been deleted')).toBeVisible();
}
