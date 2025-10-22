import { Locator, Page } from '@playwright/test';

export class LoadingSpinner {
  constructor(private page: Page) {}

  get isLoading(): Locator {
    return this.page.locator('[aria-label="loading animation"]');
  }
}
