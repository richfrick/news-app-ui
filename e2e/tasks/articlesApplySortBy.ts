import { expect, Page } from '@playwright/test';

export async function applySortByOnArticles(page: Page, sortBy: string) {
  //await page.locator('select[id=sortBy]').click();
  //await page.locator(`#sortBy [value="${sortBy}"]`).click();

  await page.selectOption('#sortBy', { value: `${sortBy}` });
  const optionSelected = page.locator(
    `//section/h2/div[contains(., '${sortBy}')]`
  );

  await expect(optionSelected).toBeVisible();
}
