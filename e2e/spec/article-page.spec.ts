import { expect, test } from '@playwright/test';
import { NavBar } from '../page-objects/navBar';
import { Article } from '../page-objects/article';
import { randomSentence } from '../utils/test-data';
import {
  createArticle,
  createComment,
  deleteArticle,
} from '../utils/api-request';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Delete a comment', async ({ page, request }) => {
  const navBar = new NavBar(page);
  const article = new Article(page);
  const commentText = randomSentence(5);

  const {
    article: { article_id, author },
  } = await createArticle(request, 'tickle122');

  await createComment(request, article_id, author, commentText);

  await navBar.selectTopic('Football');
  const filteredTopicHeading = page.getByRole('region', {
    name: 'filtered topic',
  });

  const articles = filteredTopicHeading.getByRole('listitem');
  await articles.nth(0).click();

  const comments = await article.getComments();
  await expect(comments).toHaveCount(1);
  expect(await article.commentExists(comments, commentText)).toBeTruthy();

  await article.deleteComment(comments, commentText);

  await expect(
    page.locator('p').getByText('your comment has been deleted')
  ).toBeVisible();

  const updatedComments = await article.getComments();
  expect(
    await article.commentExists(updatedComments, 'this article is foo bar')
  ).toBeFalsy();

  await deleteArticle(request, article_id);
});
