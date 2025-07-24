import { expect, test } from '@playwright/test';
import { NavBar } from '../page-objects/navBar';
import { Article } from '../page-objects/article';
import { randomSentence } from '../utils/test-data';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('Delete a comment', async ({ page, request }) => {
  const navBar = new NavBar(page);
  const article = new Article(page);
  const commentText = randomSentence(5);

  const addCommentResponse = await request.post(
    'https://news-app-ugpw.onrender.com/api/articles/19/comments',
    {
      data: {
        author: 'tickle122',
        body: commentText,
      },
    }
  );
  expect(addCommentResponse.status()).toEqual(201);

  await navBar.selectTopic('Football');
  const filteredTopicHeading = page.getByRole('region', {
    name: 'filtered topic',
  });
  const articles = filteredTopicHeading.getByRole('listitem');
  await articles.nth(1).click();

  const comments = await article.getComments();
  await expect(comments).toHaveCount(14);
  expect(await article.commentExists(comments, commentText)).toBeTruthy();

  await article.deleteComment(comments, commentText);
  await expect(
    page.locator('p').getByText('your comment has been deleted')
  ).toBeVisible();

  const updatedComments = await article.getComments();
  expect(
    await article.commentExists(updatedComments, 'this article is foo bar')
  ).toBeFalsy();
});
