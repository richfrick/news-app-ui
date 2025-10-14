import { expect, Page } from '@playwright/test';

export async function selectTopic(page: Page, topic: string) {
  var regex = new RegExp(topic, 'i');
  var buttonToBeClicked = page
    .locator('fieldset')
    .getByRole('button', { name: regex });
  await expect(buttonToBeClicked).toBeVisible();
  await buttonToBeClicked.click();
}
