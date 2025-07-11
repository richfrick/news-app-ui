import { render, screen } from '../test-utils/testing-library-utils';
import Article from '../components/Article';
import { describe, expect } from 'vitest';

const { findByText, findByAltText, findByRole } = screen;

describe('Article', () => {
  test('Article title is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const title = await findByRole('heading', {
      name: /Article title for article 123/i,
    });

    expect(title).toBeVisible();
  });

  test('article author & datestamp are displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const author = await findByText(/posted by/i);

    expect(author).toBeVisible();
  });
  test('article image is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const image = await findByAltText('article image');

    expect(image).toBeVisible();
  });

  test('article body is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });
    const articleBody = await findByText(/article body 123/i);

    expect(articleBody).toBeVisible;
  });

  test('article comment count is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });
    const commentCount = await findByText(/comments/i);

    expect(commentCount).toBeVisible;
  });

  test('article voting section is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const votingSection = await findByRole('region', { name: /voting/i });

    expect(votingSection).toBeVisible;
  });

  test('article comments section is displayed', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const commentSection = await findByRole('form', {
      name: /add comment/i,
    });

    expect(commentSection).toBeVisible;
  });

  test('Error message is shown when api call returns an error', async () => {
    render(<Article />, {
      route: '/articles/321',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const errorMsg = await findByRole('heading', { name: /error/i });

    expect(errorMsg).toBeVisible();
  });
});
