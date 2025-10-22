import { expect, Page } from '@playwright/test';
import { Topic } from '../constants/filtersAndSort';
import { FilterAndSort } from '../selectors';

export async function articleListSelectTopicFilter(page: Page, topic: Topic) {
  const filterAndSort = new FilterAndSort(page);

  var topicFilterButton = await filterAndSort.topicFilter(topic);
  await expect(topicFilterButton).toBeVisible();
  await topicFilterButton.click();
}
