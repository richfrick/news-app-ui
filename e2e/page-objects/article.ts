import { Locator, Page } from '@playwright/test';

export class Article {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getComments(): Promise<Locator> {
    return this.page.locator('div.p-3.rounded-lg');
  }

  async commentExists(
    comments: Locator,
    commentBody: string
  ): Promise<boolean> {
    for (let i = 0; i < (await comments.count()); i++) {
      const text = await comments.nth(i).locator('p').textContent();
      if (text?.toLowerCase().includes(commentBody.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  async deleteComment(comments: Locator, commentBody: string) {
    for (let i = 0; i < (await comments.count()); i++) {
      const text = await comments.nth(i).locator('p').textContent();
      if (text?.toLowerCase().includes(commentBody.toLowerCase())) {
        await comments.nth(i).getByRole('button', { name: 'X' }).click();
        return;
      }
    }
  }
}
