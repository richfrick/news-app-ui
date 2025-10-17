import { test } from '../fixtures/article.fixture';
import { randomSentence } from '../utils/test-data';
import { createComment } from '../utils/api-request';
import { commentCountOnArticleShouldBe } from '../questions/articleCheckCommentCount';
import { articleCommentShouldExist } from '../questions/articleFindComment';
import { deleteComment } from '../tasks/articleDeleteComment';
import { Comment } from '../types/comment';

let comment: Comment;

test.beforeEach(async ({ page, request, article }) => {
  const commentText = randomSentence(5);

  const { comment: createdComment } = await createComment(
    request,
    article.article_id,
    article.author,
    commentText
  );
  comment = createdComment;

  await page.goto('/');
});

test('Delete a comment', async ({ page, article }) => {
  await page.goto(`articles/${article.article_id}`);
  await commentCountOnArticleShouldBe(page, 1);
  await articleCommentShouldExist(page, comment.body, true);
  await deleteComment(page, comment);
  await articleCommentShouldExist(page, comment.body, false);
});
