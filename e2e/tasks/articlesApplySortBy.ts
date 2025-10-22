import { expect, Page } from '@playwright/test';
import { FilterAndSort, LoadingSpinner } from '../selectors';

export async function applySortByOnArticles(page: Page, sortBy: string) {
  const loadingSpinner = new LoadingSpinner(page);
  const filterAndSort = new FilterAndSort(page);

  await loadingSpinner.isLoading.waitFor({ state: 'detached' });
  await filterAndSort.sortByDropdown.waitFor({ state: 'attached' });

  await filterAndSort.sortByDropdown.selectOption({ value: sortBy });

  await expect(filterAndSort.sortedByText(sortBy)).toBeVisible();
}
