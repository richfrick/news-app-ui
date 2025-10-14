import { expect, Page } from '@playwright/test';

export async function pageTitleIsCorrect(page: Page) {
  await expect(page).toHaveTitle('Elaborate Snickerdoodle');
}
