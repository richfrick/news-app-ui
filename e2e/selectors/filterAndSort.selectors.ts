import { Locator, Page } from '@playwright/test';

export class FilterAndSort {
  constructor(private page: Page) {}

  get sortByDropdown(): Locator {
    return this.page.locator('#sortBy');
  }

  filteredByText(sortBy: string): Locator {
    return this.page.locator(`//section/h2/div[contains(., '${sortBy}')]`);
  }
}
