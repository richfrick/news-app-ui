import { render, screen } from '../test-utils/testing-library-utils';
import ArticlesContainer from '../components/ArticlesContainer';
import { describe, test, expect } from 'vitest';

const { findByRole } = screen;

describe('Articles Container', () => {
  test('All articles header displays', async () => {
    render(<ArticlesContainer />);

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });

    expect(allArticlesHeader).toBeVisible();
  });

  test('Articles Container displays the article list', async () => {
    render(<ArticlesContainer />);

    const articleList = await findByRole('list', {
      name: 'list of articles',
    });

    expect(articleList).toBeVisible();
  });

  test('Sort by comment count text displays', async () => {
    render(<ArticlesContainer />, {
      route: '/articles/?sort_by=comment_count',
      path: '/articles',
      withRoutes: true,
    });

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });
    const sortByCommentCountText = await findByRole('heading', {
      level: 2,
      name: /Articles currently filtered by comment_count/i,
    });

    expect(allArticlesHeader).toBeVisible();
    expect(sortByCommentCountText).toBeVisible();
  });

  test('Sort by date posted text displays', async () => {
    render(<ArticlesContainer />, {
      route: '/articles/?sort_by=created_at',
      path: '/articles',
      withRoutes: true,
    });

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });
    const sortByCreatedAtText = await findByRole('heading', {
      level: 2,
      name: /Articles currently filtered by created_at/i,
    });

    expect(allArticlesHeader).toBeVisible();
    expect(sortByCreatedAtText).toBeVisible();
  });

  test('Sort by votes text displays', async () => {
    render(<ArticlesContainer />, {
      route: '/articles/?sort_by=votes',
      path: '/articles',
      withRoutes: true,
    });

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });
    const sortByVotesText = await findByRole('heading', {
      level: 2,
      name: /Articles currently filtered by votes/i,
    });

    expect(allArticlesHeader).toBeVisible();
    expect(sortByVotesText).toBeVisible();
  });

  test('Order in asc text displays', async () => {
    render(<ArticlesContainer />, {
      route: '/articles/?order=asc',
      path: '/articles',
      withRoutes: true,
    });

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });
    const sortOrderAscText = await findByRole('heading', {
      level: 2,
      name: /Articles currently filtered in asc order/i,
    });

    expect(allArticlesHeader).toBeVisible();
    expect(sortOrderAscText).toBeVisible();
  });

  test('Order in desc text displays', async () => {
    render(<ArticlesContainer />, {
      route: '/articles/?order=desc',
      path: '/articles',
      withRoutes: true,
    });

    const allArticlesHeader = await findByRole('heading', {
      level: 1,
      name: /all articles/i,
    });
    const sortOrderDescText = await findByRole('heading', {
      level: 2,
      name: /Articles currently filtered in desc order/i,
    });

    expect(allArticlesHeader).toBeVisible();
    expect(sortOrderDescText).toBeVisible();
  });
  test.todo(
    'Sort by and order byt test both display when selected',
    async () => {
      render(<ArticlesContainer />, {
        route: '/articles/?sort_by=votes&order=desc',
        path: '/articles',
        withRoutes: true,
      });

      const allArticlesHeader = await findByRole('heading', {
        level: 1,
        name: /all articles/i,
      });
      const sortByAndOrderByText = await findByRole('heading', {
        level: 2,
        name: /Articles currently filtered by votes in desc order/i,
      });

      expect(allArticlesHeader).toBeVisible();
      expect(sortByAndOrderByText).toBeVisible();
    }
  );
});
