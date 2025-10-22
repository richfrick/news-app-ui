import { Locator, Page } from '@playwright/test';
import { Topic } from '../constants/filtersAndSort';

export class FilterAndSort {
  constructor(private page: Page) {}

  topicFilter(topic: Topic): Locator {
    return this.page.locator(`[href="/articles?topic=${topic}"]`);
  }

  get topicFilteredByHeading(): Locator {
    return this.page.locator('section[aria-label="filtered topic"] h1');
  }

  get sortByDropdown(): Locator {
    return this.page.locator('#sortBy');
  }

  sortedByText(sortBy: string): Locator {
    return this.page.locator(`//section/h2/div[contains(., '${sortBy}')]`);
  }
}
