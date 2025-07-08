import { render, screen } from '../test-utils/testing-library-utils';
import ArticleByTopic from '../components/ArticleByTopic';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Article from '../components/Article';

const { findByRole, findAllByRole } = screen;

describe('Article By Topic', () => {
  const topicAriaLabel = 'filtered topic';

  test('topic: football will have 2 articles', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticles = await findByRole('region', {
      name: topicAriaLabel,
    });
    const title = await findByRole('heading', { name: /^football$/i });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticles).toBeVisible();
    expect(title).toBeVisible();
    expect(articleList).toHaveLength(2);
  });

  test('topic: cooking will have 2 articles', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=cooking',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticles = await findByRole('region', {
      name: topicAriaLabel,
    });
    const title = await findByRole('heading', { name: /^cooking$/i });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticles).toBeVisible();
    expect(title).toBeVisible();
    expect(articleList).toHaveLength(2);
  });

  test('topic: coding will have 2 articles', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=coding',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticles = await findByRole('region', {
      name: topicAriaLabel,
    });
    const title = await findByRole('heading', { name: /^coding$/i });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticles).toBeVisible();
    expect(title).toBeVisible();
    expect(articleList).toHaveLength(2);
  });

  test('Clicking on an Article list item takes you to the article', async () => {
    const user = userEvent.setup();

    render(<ArticleByTopic />, {
      route: '/articles?topic=football',
      withRoutes: true,
      routes: [
        { path: '/articles', element: <ArticleByTopic /> },
        { path: '/articles/:article_id', element: <Article /> },
      ],
    });

    const articleLinks = await findAllByRole('link');
    expect(articleLinks.length).toBe(2);

    await user.click(articleLinks[0]);

    const title = await findByRole('heading', {
      name: /Agility Training Drills For Football Players/i,
    });

    expect(title).toBeVisible();
    expect(articleLinks[0]).not.toBeInTheDocument();
  });

  test.todo('sort by comment count', async () => {});

  test.todo('sort by date posted');
  test.todo('sort by votes');
  test.todo('sort in ascending order');
  test.todo('sort in descending order');
  test.todo('error is displayed if api request returns an error');
  test.todo('error is displayed if you filter by a topic that does not exist');
});
