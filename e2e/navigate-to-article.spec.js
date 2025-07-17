import { expect, test } from '@playwright/test';
import { describe } from 'node:test';

test('filter by football articles', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle('Elaborate Snickerdoodle');

  const headerButtons = page.locator('button');
  await expect(headerButtons.getByText(/football/i)).toBeVisible();

  await headerButtons.getByText(/football/i).click();

  const filteredTopic = page.getByRole('region', { name: 'filtered topic' });

  await expect(filteredTopic).toBeVisible();
  await expect(filteredTopic).toContainText(/football/i);
});
