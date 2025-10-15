import { expect, Page } from '@playwright/test';

export async function headerTitleIsCorrect(page: Page) {
  await expect(page).toHaveTitle('Elaborate Snickerdoodle');
}
