import { render, screen } from '../test-utils/testing-library-utils';
import Article from '../components/Article';
import { describe, expect } from 'vitest';

const { findByText, findByAltText, findByRole } = screen;

describe('Article', () => {
  test('Article details are rendered correctly', async () => {
    render(<Article />, {
      route: '/articles/123',
      path: '/articles/:article_id',
      withRoutes: true,
    });

    const title = await findByRole('heading', { name: /the notorious msg/i });
    const author = await findByText(/posted by/i);
    const image = await findByAltText('article image');
    const articleBody = await findByText(/the 'umami' craze/i);
    const commentCount = await findByText(/comments/i);
    const votingSection = await findByRole('region', { name: /voting/i });
    const commentSection = await findByRole('form', {
      name: /add comment/i,
    });

    expect(title).toBeVisible();
    expect(author).toBeVisible();
    expect(image).toBeVisible();
    expect(articleBody).toBeVisible;
    expect(commentCount).toBeVisible;
    expect(votingSection).toBeVisible;
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
