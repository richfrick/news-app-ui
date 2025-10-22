import { Locator, Page } from '@playwright/test';

export class Comments {
  constructor(private page: Page) {}

  get comment(): Locator {
    return this.page.locator('div.p-3.rounded-lg');
  }

  commentBody(commentBody: string) {
    return this.page.locator(`//p[contains(.,"${commentBody}")]`);
  }

  deleteComment(comment: string): Locator {
    return this.page
      .locator('div.p-3.rounded-lg', {
        hasText: comment,
      })
      .getByRole('button', { name: 'X' });
  }
}
