import { Locator, Page } from '@playwright/test';

export class ArticleList {
  private lookup: Record<string, string> = {
    comment_count: 'Comments',
    created_at: 'Created by',
    votes: 'Up-votes',
  };

  constructor(private page: Page) {}

  get articleTile(): Locator {
    return this.page.locator('article[role="listitem"]');
  }

  articleTileContent(sortedBy: keyof typeof this.lookup): Locator {
    const label = this.lookup[sortedBy];
    return this.page.locator(`//article //h3 [contains(., "${label}")]`);
  }
}
