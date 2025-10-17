import { Article } from '../types';
import { test as base } from '@playwright/test';
import { createArticle, deleteArticle } from '../utils/api-request';

export const test = base.extend<{ article: Article }>({
  article: async ({ request }, use) => {
    const { article } = await createArticle(request, 'tickle122');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(article);
    await deleteArticle(request, article.article_id);
  },
});
