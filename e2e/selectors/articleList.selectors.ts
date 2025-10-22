import { Locator, Page } from '@playwright/test';
import { SortBy } from '../constants/filtersAndSort';

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

  articleTileContent(sortedBy: SortBy): Locator {
    const label = this.lookup[sortedBy];
    return this.page.locator(`//article //h3 [contains(., "${label}")]`);
  }
}
