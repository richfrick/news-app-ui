import { render, screen, within } from './test-utils/testing-library-utils';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import ArticlesList from '../src/components/ArticlesList';
import Article from '../src/components/Article';

const { findByRole, findAllByRole, getByRole } = screen;

describe('Article Card Componenet', () => {
  test('Article card renders title, author, created_at, votes, comment_count & topicArticle ca', async () => {
    render(<ArticlesList />);

    const articleList = await findAllByRole('listitem');

    const title = within(articleList[0]).getByRole('heading', {
      name: /article 1/i,
    });
    const authorAndCreatedAt = within(articleList[0]).getByRole('heading', {
      name: /Created by tickle122 on 26 October 2020/i,
    });
    const votes = within(articleList[0]).getByRole('heading', {
      name: /Up-votes: 5/i,
    });
    const comments = within(articleList[0]).getByRole('heading', {
      name: /Comments: 10/i,
    });
    const topic = within(articleList[0]).getByRole('heading', {
      name: /topic: topic/i,
    });

    expect(title).toBeVisible();
    expect(authorAndCreatedAt).toBeVisible();
    expect(votes).toBeVisible();
    expect(comments).toBeVisible();
    expect(topic).toBeVisible();
  });

  test('Clicking on an Article list item takes you to the article', async () => {
    const user = userEvent.setup();

    render(null, {
      route: '/articles',
      withRoutes: true,
      routes: [
        { path: '/articles', element: <ArticlesList /> },
        { path: '/articles/:article_id', element: <Article /> },
      ],
    });

    const articleLinks = await findAllByRole('link');

    await user.click(articleLinks[0]);

    const title = await findByRole('heading', {
      name: /Article title for article 21/i,
    });

    expect(title).toBeVisible();
    expect(articleLinks[0]).not.toBeInTheDocument();
  });
});
