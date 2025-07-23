import { expect, Page } from '@playwright/test';

export class NavBar {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectTopic(topic: string) {
    var regex = new RegExp(topic, 'i');
    var buttonToBeClicked = this.page
      .locator('fieldset')
      .getByRole('button', { name: regex });
    await expect(buttonToBeClicked).toBeVisible();
    await buttonToBeClicked.click();
  }
}
