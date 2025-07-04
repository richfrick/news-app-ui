import { render, screen } from '../test-utils/testing-library-utils';
import ArticleByTopic from '../components/ArticleByTopic';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

const { findByText, findByRole, findAllByRole } = screen;

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

  test('sort by comment count', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?sort_by=comment_count&topic=football',
      path: '/articles',
      withRoutes: true,
    });

    const sortedByText = await findByRole('heading', {
      name: /^Articles currently filtered by comment_count$/i,
    });

    expect(sortedByText).toBeVisible();
  });

  test.todo('sort by date posted');
  test.todo('sort by votes');
  test.todo('sort in ascending order');
  test.todo('sort in descending order');
  test.todo('error is displayed if api request returns an error');
  test.todo('error is displayed if you filter by a topic that does not exist');
});
