import { expect, Page } from '@playwright/test';
import { SortOrder } from '../constants/filtersAndSort';
import { FilterAndSort, LoadingSpinner } from '../selectors';

export async function applySortOrder(page: Page, sortOrder: SortOrder) {
  const filterAndSort = new FilterAndSort(page);
  const loadingSpinner = new LoadingSpinner(page);

  await loadingSpinner.isLoading.waitFor({ state: 'detached' });
  await filterAndSort.sortByDropdown.waitFor({ state: 'attached' });

  await filterAndSort.sortOrderDropdown.selectOption({ value: sortOrder });
  await expect(filterAndSort.sortOrderText(sortOrder)).toBeVisible();
}
