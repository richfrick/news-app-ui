import { test } from '@playwright/test';
import { randomSentence } from '../utils/test-data';
import {
  createArticle,
  createComment,
  deleteArticle,
} from '../utils/api-request';
import { commentCountOnArticleShouldBe } from '../questions/articleCheckCommentCount';
import { articleCommentShouldExist } from '../questions/articleFindComment';
import { deleteComment } from '../tasks/articleDeleteComment';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Delete a comment', async ({ page, request }) => {
  const commentText = randomSentence(5);
  const {
    article: { article_id, author },
  } = await createArticle(request, 'tickle122');
  const { comment } = await createComment(
    request,
    article_id,
    author,
    commentText
  );

  try {
    await page.goto(`articles/${article_id}`);
    await commentCountOnArticleShouldBe(page, 1);
    await articleCommentShouldExist(page, comment.body, true);
    await deleteComment(page, comment);
    await articleCommentShouldExist(page, comment.body, false);
  } finally {
    await deleteArticle(request, article_id);
  }
});
