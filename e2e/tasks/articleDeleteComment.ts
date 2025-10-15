import { Page, expect } from '@playwright/test';
import { Comment } from '../types/comment';

export async function deleteComment(page: Page, comment: Comment) {
  await page
    .locator('div.p-3.rounded-lg', { hasText: comment.body })
    .getByRole('button', { name: 'X' })
    .click();

  await expect(page.getByText('your comment has been deleted')).toBeVisible();
}
