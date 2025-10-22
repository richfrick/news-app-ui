import { expect, Page } from '@playwright/test';
import { ArticleList, FilterAndSort } from '../selectors';
import { Topic } from '../constants/filtersAndSort';

export async function articleListTopicFilterHasBeenApplied(
  page: Page,
  topic: Topic
) {
  const filterAndSort = new FilterAndSort(page);
  const articleList = new ArticleList(page);

  const filteredTopicHeading = filterAndSort.topicFilteredByHeading;
  const articles = articleList.articleTile;

  await expect(filteredTopicHeading).toBeVisible();
  await expect(filteredTopicHeading).toHaveText(topic);

  for (let i = 0; i < (await articles.count()); i++) {
    const article = articles.nth(i);
    expect(article).toContainText(`Topic: ${topic}`);
  }
}
