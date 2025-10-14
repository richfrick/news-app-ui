import { expect, Page } from '@playwright/test';

export async function topicFilterHasBeenApplied(page: Page, topic: string) {
  var regex = new RegExp(topic, 'i');

  const filteredTopicHeading = page.getByRole('region', {
    name: 'filtered topic',
  });
  const articles = filteredTopicHeading.getByRole('listitem');

  await expect(filteredTopicHeading).toBeVisible();
  await expect(filteredTopicHeading).toContainText(regex);

  for (let i = 0; i < (await articles.count()); i++) {
    const article = articles.nth(i);
    expect(article).toContainText(`Topic: ${topic}`);
  }
}
